# Prompt Templates

> Parent skill: [[Reference/Skills/oracle-feature-image/SKILL|oracle-feature-image]]


Use these as working structure. Adapt them, but keep the output compact.

## Adaptive Interview Opener

Start with your inferred read of the article, then ask only the questions needed to remove ambiguity.

Template:
1. `My read: [one-sentence core idea]. The image should communicate [single concept]. Is that the right center of gravity?`
2. `If this depends on a specific Oracle product or Oracle AI Database visual, do you already have an approved icon or logo pack to use?`
3. `Do you have one or two reference images or past Oracle or Google posts you want this to feel close to?`
4. Optional only if still unclear: `The clearest metaphor I see is [archetype]. Is there a better metaphor you want to push?`

Stop asking once the core idea and the visual communication goal are clear.

## Concept Package Template

```markdown
Concept summary: [2-3 sentences]

Proposed keyword: [1-2 words]
Proposed explainer: [8 words or fewer]
Recommended official asset family: [chip/orbit, document-loop, gauge, shield, database variant, box variant, or abstract fallback]

Direction 1 — [name]
- Archetype: [loop/flow/stack/nodes/shield/spark/chart]
- Official asset family: [approved family or justified abstract fallback]
- Visual: [one sentence]
- Why it works: [one sentence]

Direction 2 — [name]
- Archetype: ...
- Official asset family: ...
- Visual: ...
- Why it works: ...

Direction 3 — [name]
- Archetype: ...
- Official asset family: ...
- Visual: ...
- Why it works: ...

Recommendation: [one short paragraph focused on thumbnail clarity first]
Approval needed: confirm the keyword, confirm the explainer, choose one direction, and confirm any required official asset pack.
```

## Figma Draft Template

Before drafting:
- ask whether to use the shared template file or create a fresh file
- confirm Oracle Sans is available
- confirm the approved direction, keyword, and explainer
- confirm whether the approved Oracle icon or logo asset is available
- if the story depends on an official Oracle AI Database or product icon and the asset is missing, stop and ask instead of inventing one

Draft checklist:
1. create or duplicate a `1600x900` frame
2. add a hidden centered `1200x628` crop-safe guide
3. fill the background with `#2A2F2F`
4. add a subtle article-derived ASCII or token texture behind the content
5. place the keyword on the left in Oracle Sans with tight leading and no airy tracking
6. keep the gap between the keyword block and the explainer tight, starting around `28-36 px`
7. place the explainer beneath it in Teal 70
8. align the text cluster and hero cluster to the same optical vertical center
9. place one approved official icon or faithful simplification on the right
10. add Oracle Red only as a restrained accent
11. place the quiet Oracle logo tile in the bottom-right
12. self-check and revise before showing

## Manager-Facing Rationale Template

```markdown
Manager rationale: The image reduces the article to one clear idea, keeps the text load minimal, and uses one approved visual motif that still reads at thumbnail size and feels official rather than synthetic.
```

## Team Rationale Template

```markdown
Design rationale:
- Core idea: [one sentence]
- Visual archetype: [one sentence]
- Asset choice: [official icon family, source, or justified fallback]
- Why this is readable at thumbnail size: [one sentence]
- Brand choices: [one sentence]
- What was intentionally removed to avoid overcrowding: [one sentence]
```

## Mandatory QA Rubric

```markdown
Quality check:
- Keyword readable at thumbnail size: yes/no
- One dominant metaphor only: yes/no
- Reads as feature image, not internal diagram: yes/no
- Uses official Oracle iconography or a justified fallback: yes/no
- Avoids invented product marks where official ones exist: yes/no
- Text load within limit: yes/no
- Title/explainer spacing feels compact: yes/no
- Text and hero clusters are vertically centered: yes/no
- Symmetry and visual balance feel intentional: yes/no
- Palette restrained and on-brand: yes/no
- Logo quiet, present, and using the tile treatment: yes/no
- Background texture subtle: yes/no
- Large glow or pseudo-dashboard styling avoided: yes/no
- Reads as Oracle editorial rather than AI-generated: yes/no
```
