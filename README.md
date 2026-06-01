# Oracle DevRel Figma Skills

On-brand feature images and AI architecture diagrams for Oracle Developer Relations,
as installable skills for Codex and Claude Code.

## Install (non-technical, recommended)

Open Codex or Claude Code in any folder and say:

> Install the skills from https://github.com/casius-connect/oracle-figma-skills

The agent reads `INSTALL.md` and does the rest, including the required engine skills.

## What you also need (companion installs)

- **Figma engine skills** (required): `figma-use`, `figma-generate-design`.
  From the Figma community skills: https://www.figma.com/community/skills (they also
  ship with the Figma plugin/MCP). The diagram skill cannot run without `figma-use`.
- **Superpowers** (recommended): brainstorming and dev-workflow skills.
  https://github.com/obra/superpowers

## Before first use

See `docs/prerequisites.md`. In short: get access to the DevRel Diagram System
Figma file, duplicate it into your own copy, and install Oracle Sans.

## The skills

- **devrel-diagram** : build an on-brand diagram against your own copy of the system.
- **oracle-feature-image** : Oracle Developers cover art, concept-first, rendered from
  the system's feature-images page.

## For technical users

`./install.ps1` (Windows) or `./install.sh` (macOS/Linux) installs the two skills
into your agent's skills directory.
