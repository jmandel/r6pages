#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
ROOT=${ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}
PROMPT_DIR=${PROMPT_DIR:-"$ROOT/torun"}
OUTPUT_DIR=${OUTPUT_DIR:-"$ROOT/todo"}
RUN_DIR=${RUN_DIR:-"$ROOT/torun/run"}

last_status() {
  awk -F= '$1 == "status" { s=$2 } END { print s }' "$1"
}

field() {
  local key=$1
  local file=$2
  awk -F= -v key="$key" '$1 == key { v=$2 } END { print v }' "$file"
}

is_placeholder_output() {
  local file=$1
  [[ -s "$file" ]] || return 1
  head -80 "$file" | grep -Eiq \
    'provisional|pending evidence review|pending full-page review|pending investigation|not yet (finalized|determined|established)|^[[:space:]]*pending[[:space:].]*$'
}

is_complete_pair() {
  local page=$1
  local research_file="$OUTPUT_DIR/research/$page"
  local action_file="$OUTPUT_DIR/actions/$page"
  [[ -s "$research_file" && -s "$action_file" ]] || return 1
  ! is_placeholder_output "$action_file"
}

total_prompts=$(find "$PROMPT_DIR" -maxdepth 1 -type f -name '*.md' 2>/dev/null | wc -l)
research_outputs=$(find "$OUTPUT_DIR/research" -maxdepth 1 -type f -name '*.md' -size +0c 2>/dev/null | wc -l)
action_outputs=$(find "$OUTPUT_DIR/actions" -maxdepth 1 -type f -name '*.md' -size +0c 2>/dev/null | wc -l)
complete_pairs=0
if [[ -d "$OUTPUT_DIR/research" && -d "$OUTPUT_DIR/actions" ]]; then
  while IFS= read -r research_file; do
    page=$(basename "$research_file")
    if is_complete_pair "$page"; then
      complete_pairs=$((complete_pairs + 1))
    fi
  done < <(find "$OUTPUT_DIR/research" -maxdepth 1 -type f -name '*.md' -size +0c 2>/dev/null)
fi

echo "prompts=$total_prompts"
echo "nonempty_research_outputs=$research_outputs"
echo "nonempty_action_outputs=$action_outputs"
echo "complete_output_pairs=$complete_pairs"
echo "placeholder_or_incomplete_pairs=$((total_prompts - complete_pairs))"

declare -A counts=()
shopt -s nullglob
for file in "$RUN_DIR"/status/*.status; do
  status=$(last_status "$file")
  [[ -n "$status" ]] || status=unknown
  counts[$status]=$(( ${counts[$status]:-0} + 1 ))
done
shopt -u nullglob

if [[ ${#counts[@]} -eq 0 ]]; then
  echo "status_files=0"
else
  echo "status_counts:"
  for status in "${!counts[@]}"; do
    printf '  %s=%s\n' "$status" "${counts[$status]}"
  done | sort
fi

echo
echo "running:"
shopt -s nullglob
running_found=0
for file in "$RUN_DIR"/status/*.status; do
  if [[ $(last_status "$file") == "running" ]]; then
    running_found=1
    printf '  %s started=%s pid=%s research=%s actions=%s\n' \
      "$(field page "$file")" \
      "$(field started_at "$file")" \
      "$(field pid "$file")" \
      "$(field research_output "$file")" \
      "$(field action_output "$file")"
  fi
done
shopt -u nullglob
if [[ $running_found -eq 0 ]]; then
  echo "  none"
fi

echo
echo "recent non-complete:"
shopt -s nullglob
recent_found=0
for file in "$RUN_DIR"/status/*.status; do
  status=$(last_status "$file")
  if [[ "$status" != "complete" ]]; then
    recent_found=1
    printf '%s\t%s\t%s\t%s\n' \
      "$(field finished_at "$file")" \
      "$status" \
      "$(field page "$file")" \
      "$(field stderr "$file")"
  fi
done | sort | tail -20 | awk -F '\t' '{ printf "  %s status=%s page=%s stderr=%s\n", $1, $2, $3, $4 }'
shopt -u nullglob
if [[ $recent_found -eq 0 ]]; then
  echo "  none"
fi
