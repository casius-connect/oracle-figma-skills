#!/usr/bin/env bash
set -euo pipefail
src="$(cd "$(dirname "$0")" && pwd)/skills"
for t in "$HOME/.claude/skills" "$HOME/.gemini/skills"; do
  mkdir -p "$t"
  for skill in devrel-diagram oracle-feature-image; do
    rm -rf "${t:?}/$skill"
    cp -R "$src/$skill" "$t/$skill"
    echo "Installed $skill -> $t"
  done
done
echo "Done. Engine skills (figma-use) install separately, see README."
