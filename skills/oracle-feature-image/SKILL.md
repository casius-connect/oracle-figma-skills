---
name: oracle-feature-image
description: Use when Codex needs to create or revise Oracle Developers cover art from a pasted article title and full text, especially for requests mentioning feature image, cover image, blog hero, hero art, or thumbnail and when official Oracle iconography and Oracle Sans matter.
aliases: [oracle-feature-image]
---

# Oracle Feature Image

> Hub: [[Skills]]

## Overview

Create Oracle Developers feature images as clean editorial cover art, not mini architecture diagrams or synthetic UI scenes. Start from the article's single idea, propose three concise directions, then render the chosen concept from the DevRel Diagram System's feature-images page in Figma with a written rationale. You render into the user's own duplicate of the system file, never the shared base, and you fill the page's templates rather than drawing freehand.

## MANDATORY dependency

You MUST load the `figma-use` skill before any `use_figma` call. Never call `use_figma` directly without loading `figma-use` first; skipping it causes common, hard-to-debug failures. When assembling the feature-images template from the page, ALSO load `figma-generate-design` for the incremental section-by-section assembly guidance.

If `figma-use` is not installed, STOP and tell the user to install the Figma engine skills (`figma-use` and `figma-generate-design`); see the companion installs in the repo README. Do not attempt to render a feature image without it.

When you call `use_figma`, pass `skillNames: "oracle-feature-image"`.

## Preflight (duplicate-bind), run before any render

Do all of this before you render anything. On ANY failure, name the specific missing prerequisite and STOP. Do not render into a wrong or missing file.

1. **Read the binding file.** Read `references/my-file.json`.
   - If it does not exist, ask the user for the URL or file key of THEIR duplicate of the DevRel Diagram System (the file that contains the feature-images page). Then write `references/my-file.json` using the shape in `references/my-file.example.json`: set `fileKey`, set `fileUrl`, and set `boundAt` to the current ISO-8601 timestamp.
   - If it exists, use the `fileKey` it carries for every Figma call.
2. **Confirm the duplicate is valid.** Resolve the feature-images page (or a known component on it) in the user's file to confirm the duplicate is reachable and is a real copy of the system. If the page or component cannot be resolved, the file is either not the system or not duplicated correctly.
3. **Confirm the font.** Confirm Oracle Sans is available via `listAvailableFontsAsync`. The readable text depends on it.

Failure messages, by cause, each followed by STOP:
- No `references/my-file.json` and the user gives no URL or key: "No bound file. I need the URL or file key of your duplicate of the DevRel Diagram System."
- Feature-images page or known component will not resolve: "The base does not look duplicated, or the bound file is not the DevRel Diagram System. Duplicate the system into your own copy and rebind."
- Oracle Sans not listed: "Oracle Sans is missing. Install it before rendering."
- `figma-use` not installed: "The Figma engine skills are missing. Install `figma-use` and `figma-generate-design` first."

## Required Inputs

Require:
- article title
- full article text

Offer but do not require:
- GitHub repo or product context
- one or two reference images
- a preferred keyword or metaphor

If the title or full article text is missing, stop and ask for it before doing concept work.

## Default System

Read `references/oracle-brand-system.md` before concepting or rendering. Use these defaults unless the user overrides them:
- dark-only v1
- `1600x900` master frame
- hidden `1200x628` crop-safe guide
- compact left text cluster with one hero visual on the right
- `1-2` word keyword plus an explainer of `8` words or fewer
- Oracle Sans for readable text
- official Oracle developer logo tile in the bottom-right
- official Oracle icon asset or a faithful simplification before any custom drawing
- subtle article-derived ASCII or token texture in the background
- no screenshots, no UI captures, no pseudo-dashboard panels

## Workflow

### 1. Build the concept

Infer the article type and initial thesis from the pasted text. Start the interview with the core idea, then ask only the minimum follow-ups needed to clarify:
- what the article is really about
- what single concept the image must communicate
- whether the article depends on a specific Oracle product or developer icon that should come from an approved asset pack
- which references, if any, should calibrate the style
- what still feels ambiguous

Do not run a fixed questionnaire when the article is already clear.

### 2. Derive the copy

Generate, then ask the user to approve:
- a keyword of `1-2` words
- a one-line explainer of `8` words or fewer

Do not ask the user to write these from scratch unless they volunteer a strong preference.

### 3. Map to a feature-images template and asset family

Read `references/visual-archetypes.md`, `references/official-icon-system.md`, and `references/feature-image-templates.md`. Choose one visual direction and one hero asset family that compress the article into a single visual, then match that direction to a template on the feature-images page:
- loop
- flow
- stack
- nodes
- shield
- spark
- chart

Use the archetype as the conceptual lens, but the output must be a feature-images page template, not a freehand drawing. If the concept starts getting busy, simplify it to one readable symbol. Prefer thumbnail clarity over completeness, and prefer approved Oracle iconography over custom illustration when it fits the story.

### 4. Present concept directions

Use `references/prompt-templates.md` for the output format. Present:
- a short concept summary
- the proposed keyword
- the proposed explainer
- three concise directions that keep the same layout system and vary mainly by metaphor or approved asset family
- one recommendation

Optimise the recommendation for thumbnail clarity first, then conceptual fit, then ease of approval.

### 5. Render the chosen direction from the feature-images page

Only after the user chooses a direction, and only after the preflight duplicate-bind has passed:
- confirm the approved keyword and explainer
- load `figma-use` first, and use `figma-generate-design` for assembling the template from the page
- work in the user's bound duplicate from `references/my-file.json`, never the shared base file
- pick the feature-images template that matches the chosen direction, per `references/feature-image-templates.md`
- fill its slots: title, keyword, explainer, and the hero icon using approved Oracle iconography
- never draw freehand; if no template fits, simplify the direction until one does rather than inventing shapes
- confirm whether an approved Oracle icon or logo pack is available for the chosen concept
- if the story depends on Oracle AI Database or another official Oracle product mark and the approved asset is missing, stop and ask instead of inventing a substitute
- build one draft, not multiple variants
- ask whether the user also wants a PNG export after the draft is complete

### 6. Explain the draft

Return:
- a short manager-facing rationale
- a more specific design rationale for the team, including the asset choice

## Mandatory Design Rules

- Render from a feature-images page template and fill its slots. Never draw the cover freehand.
- Work only in the user's bound duplicate from `references/my-file.json`. Never write to the shared base file.
- Keep the composition editorial, not diagrammatic.
- Use official Oracle product or developer icons whenever the article depends on them.
- Never invent substitute Oracle AI Database logos or generic database symbols when an approved asset exists.
- Use one hero visual only.
- Keep the keyword to `1-2` words.
- Keep the explainer to `8` words or fewer.
- Use Oracle Sans for all readable text.
- Keep the title and explainer as one compact text cluster.
- Align the text cluster and hero cluster to the same optical vertical centre.
- Keep Oracle Red as a restrained accent, not the dominant colour.
- Use article-derived ASCII or token texture subtly in the background; it should be partly readable, not loud.
- Prefer official icon cards or faithful vector simplifications over custom dashboard-like drawings.
- Use the official Oracle developer logo tile in the bottom-right. If only the bundled ring is available, place it inside a quiet red tile rather than using it as a bare outline.
- Revise weak concepts before showing them if they fail the rubric.

## Do Not Do

- draw the cover freehand instead of filling a feature-images page template
- render into the shared base file instead of the user's bound duplicate
- overcrowded architecture diagrams
- more than one main idea
- long headlines or paragraph-like explainer text
- stock-art or generic AI imagery
- invented Oracle product marks or fake database logos
- pseudo-dashboard cards, stacked UI panels, or oversized glows
- screenshots, product UI, or code snippets as hero elements
- low-contrast typography
- layouts that bury the keyword or logo
- concepts that explain everything but read badly at thumbnail size

## Self-Check Before Showing Work

Revise before presenting if any answer is "no":
- Is the keyword immediately readable at thumbnail size?
- Is there exactly one dominant visual metaphor?
- Does the composition read as a feature image rather than an internal diagram?
- Does the hero use official Oracle iconography or a justified abstract fallback?
- Does it avoid invented product symbols where official ones exist?
- Is the text load within the limit?
- Is the title/explainer spacing compact and intentional?
- Are the text cluster and hero cluster vertically centred together?
- Is the palette on-brand and restrained?
- Is the Oracle logo present, quiet, and using the official tile treatment?
- Is the background texture subtle?
- Does the image feel Oracle editorial rather than AI-generated?
- Would a manager understand the concept in under two seconds?

## Resources

- `references/feature-image-templates.md` for the feature-images page templates, their slots, and which direction each one serves. (Forthcoming: produced from a live read of the feature-images page. Until it lands, confirm slots against the live page and `references/visual-archetypes.md`.)
- `references/oracle-brand-system.md` for palette, layout, logo, typography, and Figma template rules
- `references/official-icon-system.md` for approved icon families, asset sourcing, and anti-synthetic rules
- `references/visual-archetypes.md` for archetype selection and simplification guidance
- `references/prompt-templates.md` for reusable interview, concept, rationale, and Figma prompt templates
- `assets/oracle-ring.png` as a fallback logo asset when the official tile is not bundled
