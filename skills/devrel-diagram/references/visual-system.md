# DevRel Diagram Visual System

The visual contract every on-brand Oracle DevRel diagram inherits. Sourced from the
v3 Sales Play design (`2026-05-26-sales-play-video-v3-design.md`, "Visual system
rules") and the system spec (`2026-05-16-devrel-diagram-system-design.md`). The
helper functions named here live in `helpers.js`.

Hard copy rules that are themselves part of the system: British English, no em
dashes (use commas, colons, parentheses or "and"), and Oracle's AI database is
always written exactly "Oracle AI Database" with no version suffix.

**Two contexts.** Much of this contract was written for the Sales Play *video*
backdrop (dark Sky 140 plate, gold Agent, Oracle Red reserved for the ON-PREM chip).
The page-04 diagram templates that the `devrel-diagram` skill clones for blogs, talks,
and slides follow a lighter convention: a light canvas, a single focal block filled in
the Oracle Red / coral family, and `FIG. NN` figure captions are allowed. Where a rule
below is specific to the video backdrop, it is marked. The parts that are universal:
the One Agent Rule (exactly one filled focal block), the persona system, the Oracle AI
Database label, the shape language, and the storytelling discipline.

## Colour roles

Colour means something. A reader who learns one diagram can decode the next.

| Role | Treatment | Used for |
| --- | --- | --- |
| Agent / focal block | Exactly one filled block per diagram. Brand 170 `#F0CC71` (gold) on the dark Sales Play backdrop; the Oracle Red / coral family in the light page-04 templates | The agent or model, the single hierarchy anchor |
| Persona (main cast) | White `#FBF9F8` fill + coloured ring (1.5px) + coloured symbol | Maya, Priya, Alex |
| Persona (supporting) | White fill + Neutral 10 ring at 60% opacity + neutral symbol | Business Manager, Store User |
| Explanation tile | Outline only (hair stroke), no fill | Data sources, problem cards, tool tiles, output tiles, capability chips |
| Group container (concrete) | Solid stroke, label on | Private Agent Factory, Approved Catalogue |
| Group container (abstraction layer) | Dashed stroke, label on | Agent Harness |
| Oracle AI Database anchor | `Storage·oracle-db` primitive, label exactly "Oracle AI Database" | The persistent data substrate. Position varies (corner, centred below, or enlarged hub) |
| Oracle Red `#C74634` | On the Sales Play video backdrop, reserved for the ON-PREM chip only. In the light page-04 templates it is also the focal-block fill and the connector colour, which is expected, not a defect | as noted |
| Background | Video: Sky 140 `#04536F` plate with a radial highlight overlay. Page-04 templates: a light canvas (or a Dark clone via the Colour mode) | All diagrams |

The three semantic colour roles underneath the system are Agent (primary accent),
Memory (Rose 140 light / Pine 70 dark), and Storage (Sky 140 light / Teal 70 dark).
Personas and explanation tiles sit on top of that base as the v3 additions. Light and
dark are Figma Variable Modes on the Colour collection (see `diagram-system.md`), not
component variants; switch a frame with `setExplicitVariableModeForCollection`.

## The One Agent Rule

Zero or one filled focal block (the Agent or model) per diagram. It is the hierarchy
anchor and the only filled block; everything else (LLM, Tool, User, Memory, Storage,
personas, explanation tiles) is outlined or white-filled. Its fill hue follows the
context (gold on the dark video backdrop, the focal colour in the light templates), but
there is never more than one filled focal block. Two filled blocks is a validation
warning, acceptable only when the diagram deliberately depicts multiple pipeline stages
and a code comment says so.

## The persona system

Three main personas track across the deck. Each has a recurring icon: a white-fill
rounded tile with a coloured ring and a coloured symbol. The same icon is used
everywhere the persona appears, so the audience re-recognises the colour-and-symbol
combination without needing a name label. Build them with `addPersonaIcon`.

| Persona | Role | Ring + symbol colour | Symbol | Hex |
| --- | --- | --- | --- | --- |
| Maya | Business Analyst (builds the agent) | Sky Bright (`PERSONA_MAYA`, new token) | `✎` pencil | `#5DA9C9` |
| Priya | Demand Planner (uses the agent) | Pine 70 (`PERSONA_PRIYA`) | `☰` list / chart | `#86B596` |
| Alex | Application Developer (wraps the endpoint) | Teal 70 (`PERSONA_ALEX`) | `</>` code brackets | `#89B2B0` |

`#5DA9C9` is a new token (`PERSONA_MAYA`). It is brighter than the Sky 140 canvas so
it reads cleanly against the dark backdrop without competing with the gold Agent fill.
`</>` is a three-character string; it is accepted as-is.

Two supporting personas appear only on the security setup scene. They use a neutral
ring (`PERSONA_NEUTRAL_60`, Neutral 10 at 60% opacity) to signal "supporting
character", preserving the main-cast colour vocabulary for Maya, Priya, and Alex:

| Persona | Role | Ring | Symbol |
| --- | --- | --- | --- |
| Business Manager | National view | Neutral 10 at 60% opacity | `▦` dashboard / grid |
| Store User (Michael, Manchester) | Store-level view | Neutral 10 at 60% opacity | `◉` pin |

### Persona icon geometry

Each persona icon is a single composition:

- Tile: 80x80px rounded rectangle, corner radius 12, white (`#FBF9F8`) fill, coloured
  stroke 1.5px in the persona's accent colour.
- Symbol: 32pt glyph centred inside the tile, in the persona's accent colour. Oracle
  Sans Bold, or a system-font glyph if Oracle Sans lacks the character. Encode the
  symbol literally (`✎`, `☰`, `</>`, `▦`, `◉`).
- Name label below the tile: 20pt Oracle Sans Medium (Semi Bold in practice), Neutral
  10, centred.
- Role line under the name: 14pt Oracle Sans Regular, Neutral 10 at 75% opacity.

## Density tiers

One structural idea per slide. Hero slides carry more elements because they carry more
structure, not more text. Element count excludes the title block, eyebrow, ON-PREM
chip, and any closing strip.

| Tier | Element budget |
| --- | --- |
| LIGHT | 5 to 8 elements |
| SUPPORTING | 8 to 12 elements |
| HERO | 12 to 18 elements |

A single-element overrun is acceptable on HERO slides with an explicit note. Composite
units (a scale ramp of dots, a timeline, a logo cluster) count as one visual unit, not
one per dot.

## Typography

- Title: 56pt Oracle Sans Medium, max width set per scene. Build with `addTitleBlock`.
- Eyebrow: 14pt Oracle Sans Bold, Brand 170, 14% tracking. A short phrase. On Sales
  Play scenes this is a single noun (`TODAY`, `SCALE`, `BRIDGE`); the page-04 templates
  use `ORACLE DEVELOPER EXPLAINED`. Never the `ORACLE SALES PLAY · X` form from earlier
  versions.
- Captions (`FIG. NN · ...`): dropped on the Sales Play video backdrop (they read as
  noise on a moving image), where the audit flags any `FIG.` text. On the page-04
  diagram templates a figure caption is part of the design and is allowed.
- Pull quotes: most slides have none. Add one only when the slide genuinely needs a
  stated line. If used: 32pt Oracle Sans Medium at 85% opacity, max width 720px.
- Sub-line annotations: 14pt Oracle Sans Regular at 70 to 80% opacity.
- Italic for editorial lines (for example `reconciled in their head, every week`).

Oracle Sans has no Medium weight on the target machine, so use Semi Bold wherever a
spec says Medium.

## Shape language

- Corner radius: 7px on rectangles, 13px on the Tool pill.
- Stroke weight: 0.9px (hair) on outlined blocks, 1.6px on top-edge accents where used.
- Connectors: 1.2px with a simple triangular arrowhead. Build with `drawConnector`, or
  `drawConnectorStrict` to assert the arrowhead sits within 2px of the endpoint and the
  rotation matches the line angle within 1 degree.
- Dashed connectors carry no arrowheads (they mean "compatible with" or "manual, not
  contracted", not directional flow). Use `dashPattern: [4, 4]`.
- Single label per block. No subtitles inside blocks.
- No coloured gradient washes beyond the canvas and the focal-block fill. No glows, no
  glass blur. Shadow only on the filled focal block.

## The storytelling discipline

The surrounding copy carries the narrative: the voiceover on a video, the paragraph in
a blog or talk. The diagram shows the structural reality that copy can only gesture at:
relationships, simultaneity, scale, scope, layout. If the diagram repeats what the copy
says, it is wrong. If it shows what the copy can only point at, it is right.

In practice:

- Diagram labels are short and structural, not narrative. Avoid full sentences where a
  label and a layout would do.
- The copy may say "approved tools, policy at query time"; the diagram says
  `APPROVED CATALOGUE · POLICY AT QUERY TIME ◆` on a container, the same idea given
  geometric form rather than written out.
- Intentional exceptions exist where a line adds a structural claim the copy does not
  make explicit, or where a closing strip deliberately mirrors the copy's final words.
  These are the exception, not the rule.
