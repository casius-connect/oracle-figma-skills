# DevRel Diagram System, library reference

> Verified against the live Figma file on 2026-06-01 via the Figma MCP (Plugin API read). Re-verify after any structural change to the file.

## The base file (duplicate from, never write to)

- Name: DevRel Diagram System v1
- File key: `s2IWnqtV4rsGj0J0L5erlP`
- URL: `https://www.figma.com/design/s2IWnqtV4rsGj0J0L5erlP`
- Owner: casius.lee@oracle.com (Oracle org)

This skill never writes to the base. Duplicate it, then bind to your own copy via `references/my-file.json` (see the SKILL.md preflight). After duplicating, resolve components by NAME in your copy; the node IDs below are base-file references and will differ in your duplicate.

## Pages (live, 6)

| Page | id | Holds |
| --- | --- | --- |
| 01 Cover & How to use | 0:1 | Orientation, a 3-step how-to, a sample row |
| 02 Tokens | 2:2 | Colour and Spacing variables (see Modes below) |
| 03 Primitives | 2:3 | The 10 components (see Primitives below) |
| 04 Templates | 2:4 | 5 ready-made diagrams, each with a Dark clone |
| 05 Documentation | 2:5 | DOs, DON'Ts, contributing |
| 06 Sales Play Video | 74:12 | Sales-play scene artefacts (see the scene patterns in templates.md) |

There is no feature-images page in this file as of 2026-06-01. The `oracle-feature-image` skill expects one. See that skill's `references/feature-image-templates.md`.

## Variable collections and modes (live)

- **Colour**: modes `Light` and `Dark`, 15 variables. Mode is a Figma Variable Mode, not a component variant. Switch a frame to dark with `setExplicitVariableModeForCollection` on that frame; every variable-bound colour inside then resolves to its Dark value.
- **Spacing**: mode `Default`, 8 variables.

## Primitives (page 03 Primitives)

Address components by their full hierarchical name.

| Component | base node id | Variants |
| --- | --- | --- |
| 01 Chrome/Title slate | 18:18 | size = hero \| section \| micro |
| 01 Chrome/Group | 18:33 | stroke = solid \| dashed ; label = on \| off |
| 02 Entity/Agent | 10:5 | (no variants) |
| 02 Entity/LLM | 10:9 | (no variants) |
| 02 Entity/Tool | 13:18 | kind = generic \| function \| api \| search |
| 02 Entity/User | 13:30 | form = individual \| group |
| 03 Data/Memory | 12:22 | kind = short-term \| long-term \| episodic \| semantic \| vector |
| 03 Data/Storage | 12:39 | kind = generic \| oracle-db \| vector \| cache |
| 04 Line/Connector | 16:28 | direction = forward \| backward \| bidirectional ; style = solid \| dashed |
| 05 Note/Annotation | 15:11 | form = tethered \| free |

The Storage `kind=oracle-db` variant renders the label exactly "Oracle AI Database", with no prefix and no version suffix.

## Templates (page 04 Templates)

Each template is 1020 x 560 with the Title slate at frame coordinates (60, 50). Each has a Dark clone sitting at x=1160, same dimensions, with the Colour collection set to Dark.

| Template | light node id | dark node id |
| --- | --- | --- |
| Template · Agent Loop | 33:47 | 34:67 |
| Template · Agent Memory | 40:62 | 40:143 |
| Template · Memory Retrieval Loop | 42:62 | 42:105 |
| Template · Workbench and Archive | 43:84 | 43:113 |
| Template · Memory vs Context vs RAG | 45:120 | 45:155 |

See `templates.md` for the "use when" guidance per template and the Sales Play scene patterns on page 06.

## How to re-verify this file

Run a read-only `use_figma` script that returns `figma.root.children` (pages) and `await figma.variables.getLocalVariableCollectionsAsync()` (collections and modes), then `get_metadata` on page 03 for component names and on page 04 for template names. Update this file if anything has changed since 2026-06-01.
