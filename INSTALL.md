# INSTALL (instructions for the AI agent)

You are an AI coding agent (Codex or Claude Code) asked to install these skills.
Do the following, then report what you did.

## 1. Get this repo
If you do not already have it locally, clone it:
`git clone https://github.com/casius-connect/oracle-figma-skills`

## 2. Detect your skills directory
- Claude Code: `~/.claude/skills/`
- Codex: `~/.codex/skills/` (confirm against the running config; fall back to the
  project `.codex` skills path if the home path is absent)
- Gemini: `~/.gemini/skills/`
Create the directory if it does not exist.

## 3. Copy the skills
Copy each folder under `skills/` into the detected skills directory, preserving
folder names: `devrel-diagram`, `oracle-feature-image`.

## 4. Install the required engine skills
These skills depend on `figma-use`. Install the Figma engine skills (`figma-use`,
`figma-generate-design`) from the Figma community skills page,
https://www.figma.com/community/skills (they also ship with the Figma plugin/MCP),
into the same skills directory.
(Recommended, optional: also install Superpowers from
https://github.com/obra/superpowers for brainstorming and the dev-workflow skills.)

## 5. Report
Tell the user exactly which skill folders you installed and where, then print the
"Before first use" steps from `docs/prerequisites.md` (duplicate the Figma file,
install Oracle Sans).
