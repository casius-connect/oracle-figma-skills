---
name: oracle-feature-image
description: Use when someone wants an Oracle Developers feature image (blog hero, cover, or thumbnail) for an article. Works from Codex or Claude Code. Takes the article title and full text, interviews the user to dial in the concept, then renders an on-brand cover (Grey or Sky variant, ASCII-art hero, Oracle wordmark) from the DevRel Diagram System feature-images page.
aliases: [oracle-feature-image]
---

# Oracle Feature Image

> Hub: [[Skills]]

## Overview

Create Oracle Developers feature images as clean editorial cover art, not mini architecture diagrams or synthetic UI scenes. The person gives you a blog article; you interview them briefly to dial in the concept, then render the agreed cover from the DevRel Diagram System feature-images page. Each cover has a compact left text cluster (keyword + explainer), a topic-specific ASCII-art hero on the right, and the Oracle wordmark bottom-right. There are two background variants: Grey (Slate 170) and Sky (the Sky 140 gradient used in the sales-play videos). You render into the user's own duplicate of the system file, never the shared base, and you fill a template rather than drawing freehand.

## MANDATORY dependency

You MUST load the `figma-use` skill before any `use_figma` call. Never call `use_figma` directly without loading `figma-use` first; skipping it causes common, hard-to-debug failures. When assembling the cover, ALSO load `figma-generate-design` for the incremental section-by-section assembly guidance.

If `figma-use` is not installed, STOP and tell the user to install the Figma engine skills (`figma-use` and `figma-generate-design`); see the companion installs in the repo README. Do not attempt to render a feature image without it.

When you call `use_figma`, pass `skillNames: "oracle-feature-image"`.

## Preflight (duplicate-bind), run before any render

Do all of this before you render anything. On ANY failure, name the specific missing prerequisite and STOP. Do not render into a wrong or missing file.

1. **Read the binding file.** Read `references/my-file.json`.
   - If it does not exist, ask the user for the URL or file key of THEIR duplicate of the DevRel Diagram System (the file that contains the `07 Feature Images` page). Then write `references/my-file.json` using the shape in `references/my-file.example.json`: set `fileKey`, set `fileUrl`, and set `boundAt` to the current ISO-8601 timestamp.
   - If it exists, use the `fileKey` it carries for every Figma call.
2. **Confirm the duplicate is valid.** Resolve a `Template · Feature Cover` frame on the `07 Feature Images` page in the user's file. If it cannot be resolved, the file is either not the system or not duplicated correctly.
3. **Confirm the fonts.** Confirm Oracle Sans and JetBrains Mono are available via `listAvailableFontsAsync`. The readable text needs Oracle Sans; the ASCII hero needs a monospace font (JetBrains Mono).

Failure messages, by cause, each followed by STOP:
- No `references/my-file.json` and the user gives no URL or key: "No bound file. I need the URL or file key of your duplicate of the DevRel Diagram System."
- Template frame will not resolve: "The base does not look duplicated, or the bound file is not the DevRel Diagram System. Duplicate the system into your own copy and rebind."
- Oracle Sans or JetBrains Mono not listed: "A required font is missing (Oracle Sans for text, JetBrains Mono for the ASCII hero). Install it before rendering."
- `figma-use` not installed: "The Figma engine skills are missing. Install `figma-use` and `figma-generate-design` first."

## Required Inputs

Require:
- article title
- full article text

Offer but do not require:
- GitHub repo or product context
- a preferred keyword or metaphor
- a preferred variant (Grey or Sky)

If the title or full article text is missing, stop and ask for it before doing concept work.

## Interview before you render (MANDATORY)

**Never auto-generate.** Once the person has given you the blog, you ALWAYS ask a short, focused round of questions and get explicit confirmation before rendering anything. This step is not optional, even when the article seems obvious. Propose your best answer to each so the user is approving, not writing from scratch, and let them adjust.

Ask these five, in one short round:

1. **Keyword.** Propose one or two options, each 1 to 2 words. Confirm one.
2. **Explainer.** Propose one or two options, each 8 words or fewer. Confirm one.
3. **Hero ASCII.** Name the archetype that fits the article (loop, flow, stack, nodes, shield, spark, chart, per `references/ascii-patterns.md`) and describe the ASCII you intend to draw. Confirm or adjust.
4. **Variant.** Grey (Slate 170) or Sky (the sales-play gradient)?
5. **Constraints.** Anything that must appear or must be avoided (a specific term, a product, a tone).

Only once the user has confirmed these do you move on to render. Keep it to a single round; do not interrogate when the article is already clear, but always surface and confirm the five above before drawing.

## Default System

Read `references/oracle-brand-system.md` and `references/feature-image-templates.md` before rendering. Use these defaults unless the user overrides them:
- two variants: Grey (Slate 170 flat) and Sky (Sky 140 with the sales-play radial highlight)
- `1600x900` master frame, hidden `1200x628` crop-safe guide
- compact left text cluster, one ASCII-art hero on the right
- `1-2` word keyword (Brand 170) plus an explainer of `8` words or fewer (Teal 70)
- Oracle Sans for readable text, JetBrains Mono for the ASCII hero
- topic-specific ASCII-art hero (per `references/ascii-patterns.md`), white with one restrained Oracle Red accent
- the embedded Oracle wordmark bottom-right
- no screenshots, no UI captures, no pseudo-dashboard panels

## Workflow

### 1. Read the blog and infer the thesis

Infer the article type and single core idea from the pasted text. Note the one concept the image must communicate.

### 2. Interview to dial it in

Run the MANDATORY interview above: propose keyword, explainer, ASCII archetype, and variant, plus any constraints, and get the user's confirmation. Do not skip to rendering.

### 3. Design the ASCII hero

From the confirmed archetype, design the topic-specific ASCII hero using `references/ascii-patterns.md`. Keep it a compact monospace block of roughly the proportions of the template placeholder (it should balance the keyword, not stretch into a thin strip). Use one restrained Oracle Red accent on the element that carries the point (the loop back-arrow, the output, etc.). Prefer thumbnail clarity over completeness; if it gets busy, simplify to fewer lines.

### 4. Render from the template

Only after the interview is confirmed and the preflight has passed:
- clone the chosen template frame on the `07 Feature Images` page: `Template · Feature Cover · Grey` or `Template · Feature Cover · Sky`
- work in the user's bound duplicate from `references/my-file.json`, never the shared base file
- fill the slots: set the keyword (Extra Bold), the explainer (Regular), and replace the ASCII hero text with your designed ASCII (JetBrains Mono), then re-centre the hero in the hero zone and re-apply the red accent range
- the Oracle wordmark is already on the template; leave it in place
- build one draft, not multiple variants
- screenshot the frame and run the self-check before showing it
- ask whether the user also wants a PNG export after the draft is approved

### 5. Explain the draft

Return:
- a short manager-facing rationale
- a more specific design rationale, including the ASCII choice and the variant

## Mandatory Design Rules

- Interview and confirm before rendering. Never auto-generate from the blog alone.
- Clone a `Template · Feature Cover` frame and fill its slots. Never draw the cover freehand.
- Work only in the user's bound duplicate from `references/my-file.json`. Never write to the shared base file.
- Keep the composition editorial, not diagrammatic.
- One hero only: a single topic-specific ASCII block.
- Keep the keyword to `1-2` words; keep the explainer to `8` words or fewer.
- Use Oracle Sans for readable text and JetBrains Mono for the ASCII hero.
- Keep the title and explainer as one compact text cluster.
- Align the text cluster and hero cluster to the same optical vertical centre.
- Keep Oracle Red as a single restrained accent, not the dominant colour.
- Keep the Oracle wordmark quiet in the bottom-right; do not let it compete with the keyword.
- Never invent substitute Oracle AI Database logos or generic database symbols.
- Revise weak concepts before showing them if they fail the rubric.

## Do Not Do

- render without interviewing and confirming first
- draw the cover freehand instead of cloning and filling a template
- render into the shared base file instead of the user's bound duplicate
- more than one main idea, or an ASCII hero that sprawls past the hero zone
- long headlines or paragraph-like explainer text
- invented Oracle product marks or fake database logos
- screenshots, product UI, or code snippets as the hero
- low-contrast typography, or layouts that bury the keyword or wordmark
- concepts that explain everything but read badly at thumbnail size

## Self-Check Before Showing Work

Revise before presenting if any answer is "no":
- Did I interview and get the keyword, explainer, archetype, and variant confirmed first?
- Is the keyword immediately readable at thumbnail size?
- Is there exactly one dominant visual idea (the ASCII hero)?
- Does the composition read as a feature image rather than an internal diagram?
- Is the ASCII hero aligned (monospace columns line up) and within the hero zone?
- Is the text load within the limit?
- Are the text cluster and hero cluster vertically centred together?
- Is the palette on-brand, with Oracle Red used as a single restrained accent?
- Is the Oracle wordmark present and quiet in the bottom-right?
- On the Sky variant, does the gradient show real top-right variation?
- Would a manager understand the concept in under two seconds?

## Resources

- `references/feature-image-templates.md` for the two template variants, their slot names, and the clone-and-fill steps.
- `references/ascii-patterns.md` for per-archetype ASCII hero motifs and how to keep them aligned and balanced.
- `references/oracle-brand-system.md` for palette, layout, typography, and the logo treatment.
- `references/official-icon-system.md` for approved icon families and anti-synthetic rules (used only if the user asks for an icon hero instead of ASCII).
- `references/visual-archetypes.md` for archetype selection and simplification guidance.
- `references/prompt-templates.md` for reusable interview, concept, and rationale templates.
- `assets/oracle-logo-white.png` is the white Oracle wordmark used in the templates. `assets/oracle-ring.png` is a fallback mark.
