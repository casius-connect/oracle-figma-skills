---
name: oracle-feature-image
description: Use when Codex needs to create or revise Oracle Developers cover art from a pasted article title and full text, especially for requests mentioning feature image, cover image, blog hero, hero art, or thumbnail and when official Oracle iconography and Oracle Sans matter.
aliases: [oracle-feature-image]
---

# Oracle Feature Image

> Hub: [[Skills]]

## Overview

Create Oracle Developers feature images as clean editorial cover art, not mini architecture diagrams or synthetic UI scenes. Start from the article's single idea, propose three concise directions, then draft the chosen concept in Figma with a written rationale.

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

Read `references/oracle-brand-system.md` before concepting or drafting. Use these defaults unless the user overrides them:
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

### 3. Map to a visual archetype and asset family

Read `references/visual-archetypes.md` and `references/official-icon-system.md`. Choose one archetype and one hero asset family that compress the article into a single visual:
- loop
- flow
- stack
- nodes
- shield
- spark
- chart

If the concept starts getting busy, simplify it to one readable symbol. Prefer thumbnail clarity over completeness, and prefer approved Oracle iconography over custom illustration when it fits the story.

### 4. Present concept directions

Use `references/prompt-templates.md` for the output format. Present:
- a short concept summary
- the proposed keyword
- the proposed explainer
- three concise directions that keep the same layout system and vary mainly by metaphor or approved asset family
- one recommendation

Optimize the recommendation for thumbnail clarity first, then conceptual fit, then ease of approval.

### 5. Draft the chosen direction in Figma

Only after the user chooses a direction:
- confirm the approved keyword and explainer
- ask whether to use the shared template file or create a fresh file
- verify Oracle Sans is available in Figma; if not, stop and ask the user to fix it
- confirm whether an approved Oracle icon or logo pack is available for the chosen concept
- if the story depends on Oracle AI Database or another official Oracle product mark and the approved asset is missing, stop and ask instead of inventing a substitute
- use the `figma` skill and follow its MCP workflow
- build one draft, not multiple variants
- ask whether the user also wants a PNG export after the draft is complete

### 6. Explain the draft

Return:
- a short manager-facing rationale
- a more specific design rationale for the team, including the asset choice

## Mandatory Design Rules

- Keep the composition editorial, not diagrammatic.
- Use official Oracle product or developer icons whenever the article depends on them.
- Never invent substitute Oracle AI Database logos or generic database symbols when an approved asset exists.
- Use one hero visual only.
- Keep the keyword to `1-2` words.
- Keep the explainer to `8` words or fewer.
- Use Oracle Sans for all readable text.
- Keep the title and explainer as one compact text cluster.
- Align the text cluster and hero cluster to the same optical vertical center.
- Keep Oracle Red as a restrained accent, not the dominant color.
- Use article-derived ASCII or token texture subtly in the background; it should be partly readable, not loud.
- Prefer official icon cards or faithful vector simplifications over custom dashboard-like drawings.
- Use the official Oracle developer logo tile in the bottom-right. If only the bundled ring is available, place it inside a quiet red tile rather than using it as a bare outline.
- Revise weak concepts before showing them if they fail the rubric.

## Do Not Do

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
- Are the text cluster and hero cluster vertically centered together?
- Is the palette on-brand and restrained?
- Is the Oracle logo present, quiet, and using the official tile treatment?
- Is the background texture subtle?
- Does the image feel Oracle editorial rather than AI-generated?
- Would a manager understand the concept in under two seconds?

## Resources

- `references/oracle-brand-system.md` for palette, layout, logo, typography, and Figma template rules
- `references/official-icon-system.md` for approved icon families, asset sourcing, and anti-synthetic rules
- `references/visual-archetypes.md` for archetype selection and simplification guidance
- `references/prompt-templates.md` for reusable interview, concept, rationale, and Figma prompt templates
- `assets/oracle-ring.png` as a fallback logo asset when the official tile is not bundled
