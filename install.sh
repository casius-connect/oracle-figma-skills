#!/usr/bin/env bash
set -euo pipefail
src="$(cd "$(dirname "$0")" && pwd)/skills"
for t in "$HOME/.claude/skills" "$HOME/.codex/skills" "$HOME/.gemini/skills"; do
  mkdir -p "$t"
  for skill in devrel-diagram oracle-feature-image; do
    [ -n "$skill" ] || { echo "empty skill name" >&2; exit 1; }
    [ -d "$src/$skill" ] || { echo "missing source skill: $src/$skill" >&2; exit 1; }
    rm -rf "${t:?}/$skill"
    cp -R "$src/$skill" "$t/$skill"
    echo "Installed $skill -> $t"
  done
done
echo "Done. Engine skills (figma-use) install separately, see README."
