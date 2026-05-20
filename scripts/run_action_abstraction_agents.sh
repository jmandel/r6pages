#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
ROOT=${ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}
ACTION_DIR=${ACTION_DIR:-"$ROOT/todo/actions"}
RESEARCH_DIR=${RESEARCH_DIR:-"$ROOT/todo/research"}
OUTPUT_DIR=${OUTPUT_DIR:-"$ROOT/todo/abstractions"}
PROMPT_TEMPLATE=${PROMPT_TEMPLATE:-"$ROOT/abstraction-prompt.md"}
RUN_DIR=${RUN_DIR:-"$OUTPUT_DIR/run"}
CONCURRENCY=${CONCURRENCY:-1}
MODEL=${MODEL:-gpt-5.5}
REASONING_EFFORT=${REASONING_EFFORT:-xhigh}
MODE=${MODE:-missing}

usage() {
  cat <<EOF
Usage: $(basename "$0") [--missing|--force|--only PAGE]

Runs Copilot abstraction agents over todo/actions/*.md, one action file per
agent. Each page writes todo/abstractions/<page>.json.

Environment:
  ROOT=$ROOT
  ACTION_DIR=$ACTION_DIR
  RESEARCH_DIR=$RESEARCH_DIR
  OUTPUT_DIR=$OUTPUT_DIR
  PROMPT_TEMPLATE=$PROMPT_TEMPLATE
  RUN_DIR=$RUN_DIR
  CONCURRENCY=$CONCURRENCY
  MODEL=$MODEL
  REASONING_EFFORT=$REASONING_EFFORT
  MODE=$MODE

Modes:
  --missing   Skip pages whose abstraction JSON already exists, is non-empty,
              and parses as JSON. This is the default.
  --force     Re-run matching pages even if abstraction JSON already exists.
  --only PAGE Run one page, using PAGE with or without ".md" or ".json".
EOF
}

ONLY_PAGE=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --missing)
      MODE=missing
      shift
      ;;
    --force)
      MODE=force
      shift
      ;;
    --only)
      ONLY_PAGE=${2:-}
      if [[ -z "$ONLY_PAGE" ]]; then
        echo "--only requires a page name" >&2
        exit 2
      fi
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
ONLY_PAGE=${ONLY_PAGE%.json}

mkdir -p \
  "$OUTPUT_DIR" \
  "$RUN_DIR/prompts" \
  "$RUN_DIR/status" \
  "$RUN_DIR/stdout" \
  "$RUN_DIR/stderr" \
  "$RUN_DIR/copilot-logs"

rm -f "$RUN_DIR"/status/*.status 2>/dev/null || true

status_file() {
  printf '%s/status/%s.status' "$RUN_DIR" "$1"
}

action_file() {
  printf '%s/%s.md' "$ACTION_DIR" "$1"
}

research_file() {
  printf '%s/%s.md' "$RESEARCH_DIR" "$1"
}

output_file() {
  printf '%s/%s.json' "$OUTPUT_DIR" "$1"
}

schema_file() {
  printf '%s/actionable-findings.schema.ts' "$OUTPUT_DIR"
}

is_done() {
  local page=$1
  local output
  output=$(output_file "$page")
  [[ -s "$output" ]] || return 1
  node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$output" >/dev/null 2>&1
}

active_job_count() {
  jobs -pr | wc -l
}

wait_for_available_slot() {
  while [[ $(active_job_count) -ge $CONCURRENCY ]]; do
    wait -n || true
  done
}

write_prompt() {
  local page=$1
  local prompt="$RUN_DIR/prompts/$page.md"
  local action
  local research
  local output
  local schema
  action=$(action_file "$page")
  research=$(research_file "$page")
  output=$(output_file "$page")
  schema=$(schema_file)

  ACTION_FILES_GLOB="$action" \
  RESEARCH_DIR="$RESEARCH_DIR" \
  OUTPUT_JSON_PATH="$output" \
  OUTPUT_SCHEMA_PATH="$schema" \
  OUTPUT_ROLLUP_PATH="none" \
  DATE_IDENTIFIED_ISO="$(date -Iseconds)" \
  perl -0pe '
    s/\{\{ACTION_FILES_GLOB\}\}/$ENV{ACTION_FILES_GLOB}/g;
    s/\{\{RESEARCH_DIR\}\}/$ENV{RESEARCH_DIR}/g;
    s/\{\{OUTPUT_JSON_PATH\}\}/$ENV{OUTPUT_JSON_PATH}/g;
    s/\{\{OUTPUT_SCHEMA_PATH\}\}/$ENV{OUTPUT_SCHEMA_PATH}/g;
    s/\{\{OUTPUT_ROLLUP_PATH\}\}/$ENV{OUTPUT_ROLLUP_PATH}/g;
    s/\{\{DATE_IDENTIFIED_ISO\}\}/$ENV{DATE_IDENTIFIED_ISO}/g;
  ' "$PROMPT_TEMPLATE" > "$prompt"

  cat >> "$prompt" <<EOF

## Single-file batch constraints

- Process exactly this action file: \`$action\`.
- Use this matching research appendix if present: \`$research\`.
- Write exactly one abstraction JSON dataset to: \`$output\`.
- Write or update the shared TypeScript schema at: \`$schema\`.
- Do not write a rollup Markdown file for this per-page run.
- The JSON file must contain an \`ActionableFindingsDataset\` with exactly one \`pageReviews\` entry for \`$page\`.
- Preserve narrative detail in \`narrative.analysis\`; do not compress away rationale, caveats, or why the issue matters.
- Before exiting, verify the JSON parses successfully with:

\`\`\`bash
node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$output"
\`\`\`
EOF

  printf '%s' "$prompt"
}

run_one() {
  local page=$1
  local output
  local status
  local stdout
  local stderr
  local log_dir
  local prompt
  output=$(output_file "$page")
  status=$(status_file "$page")
  stdout="$RUN_DIR/stdout/$page.stdout.jsonl"
  stderr="$RUN_DIR/stderr/$page.stderr.log"
  log_dir="$RUN_DIR/copilot-logs/$page"
  mkdir -p "$log_dir" "$(dirname "$output")"
  prompt=$(write_prompt "$page")

  {
    echo "page=$page"
    echo "status=running"
    echo "started_at=$(date -Is)"
    echo "pid=$BASHPID"
    echo "model=$MODEL"
    echo "reasoning_effort=$REASONING_EFFORT"
    echo "action_file=$(action_file "$page")"
    echo "research_file=$(research_file "$page")"
    echo "output=$output"
    echo "schema=$(schema_file)"
    echo "prompt=$prompt"
    echo "stdout=$stdout"
    echo "stderr=$stderr"
    echo "copilot_log_dir=$log_dir"
  } > "$status"

  local rc=0
  (
    cd "$ROOT"
    copilot \
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
      -p "$(< "$prompt")"
  ) > "$stdout" 2> "$stderr" || rc=$?

  {
    echo "finished_at=$(date -Is)"
    echo "exit_code=$rc"
  } >> "$status"

  if [[ $rc -ne 0 ]]; then
    echo "status=failed" >> "$status"
    return 0
  fi
  if is_done "$page"; then
    echo "status=complete" >> "$status"
  else
    echo "status=invalid_or_missing_output" >> "$status"
  fi
}

mapfile -t pages < <(find "$ACTION_DIR" -maxdepth 1 -type f -name '*.md' -size +0c -printf '%f\n' | sed 's/\.md$//' | sort)

launched=0
skipped=0
for page in "${pages[@]}"; do
  [[ -n "$page" ]] || continue
  if [[ -n "$ONLY_PAGE" && "$page" != "$ONLY_PAGE" ]]; then
    continue
  fi
  if [[ "$MODE" == "missing" ]] && is_done "$page"; then
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

echo "$(date -Is) abstraction run finished; launched=$launched skipped=$skipped complete=$(status_count complete) failed=$(status_count failed) invalid_or_missing_output=$(status_count invalid_or_missing_output)"
