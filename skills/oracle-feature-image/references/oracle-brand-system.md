# Oracle Brand System

> Parent skill: [[Reference/Skills/oracle-feature-image/SKILL|oracle-feature-image]]


## Positioning

Build clean editorial cover art for Oracle Developers. The image should read in under two seconds and feel like a polished feature image, not a slide, benchmark dashboard, or architecture handout.

## Recorded Brand Colors

Dark-background set:
- Slate 170 `#2A2F2F`
- Brand 170 `#F0CC72`
- Teal 70 `#89B2B0`
- Pine 70 `#86B596`

Light-background set:
- Neutral 10 `#FBF9F8`
- Sky 140 `#04536F`
- Rose 140 `#6C3F49`
- Oracle Red `#C74634`

## V1 Working Palette

Use this by default in v1:
- background: Slate 170 `#2A2F2F`
- keyword: Brand 170 `#F0CC72`
- explainer: Teal 70 `#89B2B0`
- hero visual primary: Sky 140 `#04536F`
- accent only: Oracle Red `#C74634`
- spare secondary accent when needed: Pine 70 `#86B596`

Keep Oracle Red restrained. It is a cue, not the dominant field color.

## Official Asset Hierarchy

- Use official Oracle product or developer iconography first.
- If an approved asset exists, use it or a faithful simplification of it.
- If no approved asset exists, use an abstract archetype from `visual-archetypes.md`.
- Never invent substitute Oracle AI Database marks, database logos, or Oracle product symbols.

## Typography

- Use Oracle Sans for every readable text element.
- Keyword: start around `110-132 px`, bold.
- Keyword tracking: `0` to `-1%`.
- Multi-line keyword line height: `0.88-0.94`.
- Explainer: start around `38-46 px`, medium or regular.
- Explainer line height: `1.05-1.15`.
- Gap from the keyword block to the explainer: start around `28-36 px`.
- Keep the keyword to `1-2` words.
- Keep the explainer to `8` words or fewer.
- Avoid airy tracking, loose vertical gaps, or line spacing that makes the type feel machine-laid-out.
- If Oracle Sans is unavailable in Figma, stop and ask the user to fix the font setup.

The background developer texture may use low-contrast token glyphs or a monospace treatment because it functions as texture, not as readable body copy.

## Layout Template

Master frame:
- `1600x900`
- dark-only v1
- hidden centered crop-safe guide: `1200x628`

Recommended placement:
- compact text cluster inside the left side of the safe guide
- one right-side hero visual inside a single clear bounding box
- small Oracle logo tile in the bottom-right
- subtle article-derived ASCII or token texture behind the main content
- align the text cluster and hero cluster to a shared optical vertical center around the middle of the frame

Suggested starting geometry:
- outer padding: `96`
- safe guide origin: `x=200`, `y=136`
- text cluster: start around `x=156`, max width `520-560`, optical center around `y=430-470`
- hero zone: start around `x=920`, box around `420x420` to `460x460`, optical center around `y=450`
- gap between text cluster and hero zone: start around `120-160`
- logo tile: width around `56-68`, placed `32-40` from the right and bottom edges

Treat these as strong defaults, not rigid laws. Keep every critical element inside the safe guide first.

## Hero Visual Construction

- Prefer one official Oracle icon card or one faithful extraction of an official icon.
- Use generous breathing room around the hero. The visual should feel centered, not crowded.
- Keep linework white or soft gray with restrained Oracle Red or coral accents.
- Avoid multi-panel UI, stacked cards, fake data lines, or heavy glow unless an approved official asset already uses them.
- If adapting an official icon, preserve its silhouette and accent placement instead of remixing it into a new product symbol.

## Logo

Preferred logo treatment: a small Oracle Red tile with the Oracle mark centered inside it.

- Keep it small and quiet in the bottom-right.
- Do not let it compete with the keyword.
- If only `assets/oracle-ring.png` is available, place it inside a red rounded tile. Do not use the ring alone as a naked outline.

## Developer Accent

The developer feel lives in the background, not in the layout.

- Use article-derived terms, tokens, or short phrases.
- Keep them partly legible and low contrast.
- Prefer `3-6%` opacity and wide spacing.
- Let them reinforce the idea, not explain it.
- Do not use screenshots, code blocks, or product UI captures.
- Do not let the texture become a second focal point.

## Symmetry and Balance

- Make the composition feel optically centered, not slightly drifting.
- The title and explainer should move as one cluster.
- The hero should balance the type in visual weight, not overpower it.
- If the layout feels almost right, adjust spacing and centering before adding more decoration.

## Export Guidance

Draft inside the `1600x900` master frame.

After the Figma draft is approved, ask the user whether they also want a PNG export. If exporting, keep the default master export and remember that tighter preview crops may center-cut the frame, so every critical element must stay inside the hidden safe guide.
