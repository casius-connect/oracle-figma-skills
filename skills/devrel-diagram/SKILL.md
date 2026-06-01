---
name: devrel-diagram
description: "Use when building an on-brand AI architecture diagram for Oracle DevRel content (video, blog, talk, slide) against the DevRel Diagram System. Triggers: 'make a diagram', 'agent loop diagram', 'memory architecture diagram', 'sales play slide', 'diagram for the video'. Renders into the user's own duplicate of the system, never the base file."
disable-model-invocation: false
aliases: [devrel-diagram]
---

> Hub: [[Skills]]

Build an on-brand Oracle DevRel AI architecture diagram in Figma. This skill turns a
content need (a video beat, a blog figure, a talk slide, a sales play scene) into a
diagram that inherits the DevRel Diagram System: its components, colour roles, persona
system, density tiers, and shape language. You render into the user's own duplicate of
the system file, follow the visual contract exactly, audit the result, and export. You
never touch the shared base file, and you never invent colours, shapes, or components.

## MANDATORY dependency

You MUST load the `figma-use` skill before any `use_figma` call. Never call `use_figma`
directly without loading `figma-use` first; skipping it causes common, hard-to-debug
failures. When assembling a multi-section layout (a hero scene, a multi-column map, a
three-layer close), ALSO load `figma-generate-design` for the incremental
section-by-section assembly guidance.

If `figma-use` is not installed, STOP and tell the user to install the Figma engine
skills (`figma-use` and `figma-generate-design`); see the companion installs in the
repo README. Do not attempt to build a diagram without it.

When you call `use_figma`, pass `skillNames: "devrel-diagram"`.

## Preflight (duplicate-bind), run before any build

Do all of this before you draw anything. On ANY failure, name the specific missing
prerequisite and STOP. Do not render into a wrong or missing file.

1. **Read the binding file.** Read `references/my-file.json`.
   - If it does not exist, ask the user for the URL or file key of THEIR duplicate of
     the DevRel Diagram System. Then write `references/my-file.json` using the shape in
     `references/my-file.example.json`: set `fileKey`, set `fileUrl`, and set `boundAt`
     to the current ISO-8601 timestamp.
   - If it exists, use the `fileKey` it carries for every Figma call.
2. **Confirm the duplicate is valid.** Resolve one known component in the user's file
   (for example `02 Entity/Agent`) to confirm the duplicate is reachable and is a real
   copy of the system. If the component cannot be resolved, the file is either not the
   system or not duplicated correctly.
3. **Confirm the font.** Confirm Oracle Sans is available via
   `listAvailableFontsAsync`. The whole visual contract depends on it.

Failure messages, by cause, each followed by STOP:
- No `references/my-file.json` and the user gives no URL or key: "No bound file. I need
  the URL or file key of your duplicate of the DevRel Diagram System."
- Known component will not resolve: "The base does not look duplicated, or the bound
  file is not the DevRel Diagram System. Duplicate the system into your own copy and
  rebind."
- Oracle Sans not listed: "Oracle Sans is missing. Install it before building."
- `figma-use` not installed: "The Figma engine skills are missing. Install `figma-use`
  and `figma-generate-design` first."

## Workflow

1. **Gather intent.** What must the diagram show (the one structural idea), the target
   surface (video, blog, talk, slide), and light or dark.
2. **Choose a starting point.** Pick the closest template or Sales Play scene pattern
   from `references/templates.md`. Reuse the structure rather than re-deriving it.
3. **Build with the helpers.** Paste the functions you need from `references/helpers.js`
   into the JavaScript you run inside the file (it is a copy-paste toolkit, not a
   module; pull each function's dependencies too).
4. **Enforce every rule in `references/visual-system.md`.** Colour roles (colour means
   something), the One Agent Rule (zero or one filled Agent per diagram), the density
   tier for the surface, and the shape language (radii, stroke weights, connector
   style).
5. **Build incrementally and validate after each section** (per the `figma-use`
   guidance). Do not assemble the whole frame blind, then hope.
6. **Run the full `references/audit.md` self-check.** Connector integrity, visual story
   coherence, label and copy integrity, density, and element-list match. If anything
   fails, fix it in place and re-run the whole check.
7. **Screenshot-verify** the completed frame at native size.
8. **Export PNG at 1x and 2x.**

## Hard rules

- Never write to the base file. Render only into the user's bound copy from
  `references/my-file.json`.
- Never invent colours, shapes, or components. Always use the library primitives and the
  `references/helpers.js` functions.
- Render the database label exactly as `Oracle AI Database`, with no "Storage" prefix
  and no version suffix.
- British English (optimise, colour, favour, organise).
- No em dashes. Use commas, colons, parentheses, or "and".

## References

| File | Load it when |
| --- | --- |
| `references/diagram-system.md` | You need the live component names, the file key, the page list, and the variant props and modes for the system. The source of truth for what exists in the file. |
| `references/visual-system.md` | Always. The visual contract: colour roles, the One Agent Rule, the persona system, density tiers, typography, shape language. |
| `references/helpers.js` | You are building. Paste in only the functions you need (with their dependencies). |
| `references/templates.md` | You are choosing a starting layout: the five library templates and the Sales Play scene patterns. |
| `references/audit.md` | The mandatory final check, before export. |
