#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
ROOT=${ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}
PROMPT_DIR=${PROMPT_DIR:-"$ROOT/torun"}
OUTPUT_DIR=${OUTPUT_DIR:-"$ROOT/todo"}
RUN_DIR=${RUN_DIR:-"$ROOT/torun/run"}
CONCURRENCY=${CONCURRENCY:-10}
JOB_TIMEOUT=${JOB_TIMEOUT:-}
MODEL=${MODEL:-gpt-5.5}
REASONING_EFFORT=${REASONING_EFFORT:-xhigh}
MAX_AUTOPILOT_CONTINUES=${MAX_AUTOPILOT_CONTINUES:-}
MODE=${MODE:-missing}

usage() {
  cat <<EOF
Usage: $(basename "$0") [--missing|--all|--only PAGE]

Runs Copilot CLI agents over populated page-review prompts in torun/*.md.

Environment:
  ROOT=$ROOT
  PROMPT_DIR=$PROMPT_DIR
  OUTPUT_DIR=$OUTPUT_DIR
  RUN_DIR=$RUN_DIR
  CONCURRENCY=$CONCURRENCY
  JOB_TIMEOUT=${JOB_TIMEOUT:-none}
  MODEL=$MODEL
  REASONING_EFFORT=$REASONING_EFFORT
  MAX_AUTOPILOT_CONTINUES=${MAX_AUTOPILOT_CONTINUES:-none}
  MODE=$MODE

Modes:
  --missing   Skip pages whose todo/research/<page>.md and
              todo/actions/<page>.md already exist and are non-empty.
              This is the default and avoids overwriting prior human/agent work.
  --all       Run every prompt and allow agents to replace split output files.
  --only PAGE Run one page prompt, using PAGE with or without ".md".
EOF
}

ONLY_PAGE=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --missing)
      MODE=missing
      shift
      ;;
    --all)
      MODE=all
      shift
      ;;
    --only)
      ONLY_PAGE=${2:-}
      if [[ -z "$ONLY_PAGE" ]]; then
        echo "--only requires a page name" >&2
        exit 2
      fi
      MODE=only
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

ONLY_PAGE=${ONLY_PAGE%.md}

mkdir -p \
  "$OUTPUT_DIR" \
  "$OUTPUT_DIR/research" \
  "$OUTPUT_DIR/actions" \
  "$RUN_DIR/stdout" \
  "$RUN_DIR/stderr" \
  "$RUN_DIR/copilot-logs" \
  "$RUN_DIR/status"

rm -f "$RUN_DIR"/status/*.status 2>/dev/null || true

status_file() {
  printf '%s/status/%s.status' "$RUN_DIR" "$1"
}

research_output_file() {
  printf '%s/research/%s.md' "$OUTPUT_DIR" "$1"
}

action_output_file() {
  printf '%s/actions/%s.md' "$OUTPUT_DIR" "$1"
}

is_placeholder_output() {
  local file=$1
  [[ -s "$file" ]] || return 1
  head -80 "$file" | grep -Eiq \
    'provisional|pending evidence review|pending full-page review|pending investigation|not yet (finalized|determined|established)|^[[:space:]]*pending[[:space:].]*$'
}

is_complete_output() {
  local page=$1
  local research_output
  local action_output
  research_output=$(research_output_file "$page")
  action_output=$(action_output_file "$page")
  [[ -s "$research_output" && -s "$action_output" ]] || return 1
  ! is_placeholder_output "$action_output"
}

active_job_count() {
  jobs -pr | wc -l
}

wait_for_available_slot() {
  while [[ $(active_job_count) -ge $CONCURRENCY ]]; do
    wait -n || true
  done
}

run_one() {
  local page=$1
  local prompt="$PROMPT_DIR/$page.md"
  local research_output
  local action_output
  research_output=$(research_output_file "$page")
  action_output=$(action_output_file "$page")
  local stdout="$RUN_DIR/stdout/$page.stdout.jsonl"
  local stderr="$RUN_DIR/stderr/$page.stderr.log"
  local log_dir="$RUN_DIR/copilot-logs/$page"
  local status
  status=$(status_file "$page")
  mkdir -p "$log_dir" "$(dirname "$research_output")" "$(dirname "$action_output")"

  {
    echo "page=$page"
    echo "status=running"
    echo "started_at=$(date -Is)"
    echo "pid=$BASHPID"
    echo "model=$MODEL"
    echo "reasoning_effort=$REASONING_EFFORT"
    echo "max_autopilot_continues=${MAX_AUTOPILOT_CONTINUES:-none}"
    echo "job_timeout=${JOB_TIMEOUT:-none}"
    echo "prompt=$prompt"
    echo "stdout=$stdout"
    echo "stderr=$stderr"
    echo "copilot_log_dir=$log_dir"
    echo "research_output=$research_output"
    echo "action_output=$action_output"
  } > "$status"

  local rc=0
  (
    cd "$ROOT"
    copilot_cmd=(copilot \
      --model "$MODEL" \
      --reasoning-effort "$REASONING_EFFORT" \
      --enable-reasoning-summaries \
      --output-format json \
      --stream on \
      --log-dir "$log_dir" \
      --log-level all \
      --allow-all-tools \
      --allow-all-paths \
      --allow-all-urls \
      --no-ask-user \
      --silent \
      -p "$(< "$prompt")")
    if [[ -n "$MAX_AUTOPILOT_CONTINUES" ]]; then
      copilot_cmd+=(--max-autopilot-continues "$MAX_AUTOPILOT_CONTINUES")
    fi
    if [[ -n "$JOB_TIMEOUT" && "$JOB_TIMEOUT" != "0" && "$JOB_TIMEOUT" != "none" && "$JOB_TIMEOUT" != "unlimited" ]]; then
      timeout "$JOB_TIMEOUT" "${copilot_cmd[@]}"
    else
      "${copilot_cmd[@]}"
    fi
  ) > "$stdout" 2> "$stderr" || rc=$?

  {
    echo "finished_at=$(date -Is)"
    echo "exit_code=$rc"
  } >> "$status"

  if [[ $rc -eq 124 ]]; then
    echo "status=timeout" >> "$status"
    return 0
  fi
  if [[ $rc -ne 0 ]]; then
    echo "status=failed" >> "$status"
    return 0
  fi
  if is_complete_output "$page"; then
    echo "status=complete" >> "$status"
  else
    echo "status=invalid_or_missing_output" >> "$status"
  fi
}

mapfile -t prompts < <(find "$PROMPT_DIR" -maxdepth 1 -type f -name '*.md' -printf '%f\n' | sed 's/\.md$//' | sort)

launched=0
skipped=0
for page in "${prompts[@]}"; do
  [[ -n "$page" ]] || continue
  if [[ "$MODE" == "only" && "$page" != "$ONLY_PAGE" ]]; then
    continue
  fi
  if [[ "$MODE" == "missing" ]] && is_complete_output "$page"; then
    skipped=$((skipped + 1))
    continue
  fi
  wait_for_available_slot
  run_one "$page" &
  launched=$((launched + 1))
  echo "$(date -Is) launched $page ($launched launched, $(active_job_count) active, $skipped skipped)"
done

while [[ $(active_job_count) -gt 0 ]]; do
  wait -n || true
done

status_count() {
  local wanted=$1
  local count=0
  local file last
  shopt -s nullglob
  for file in "$RUN_DIR"/status/*.status; do
    last=$(awk -F= '$1 == "status" { s=$2 } END { print s }' "$file")
    if [[ "$last" == "$wanted" ]]; then
      count=$((count + 1))
    fi
  done
  shopt -u nullglob
  printf '%s' "$count"
}

echo "$(date -Is) batch run finished; launched=$launched skipped=$skipped complete=$(status_count complete) failed=$(status_count failed) timeout=$(status_count timeout) invalid_or_missing_output=$(status_count invalid_or_missing_output)"
