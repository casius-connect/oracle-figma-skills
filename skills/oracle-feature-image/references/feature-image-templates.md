# Feature-image templates, reference

> Verified against the live Figma file on 2026-06-02. The templates live on the `07 Feature Images` page of the DevRel Diagram System (base file key `s2IWnqtV4rsGj0J0L5erlP`). Work in the user's own duplicate, never the base. After duplicating, resolve frames and child nodes by NAME (node IDs differ per copy).

## The page

`07 Feature Images` holds:

- **Templates** (clone these): `Template · Feature Cover · Grey`, `Template · Feature Cover · Sky`.
- **Examples** (for reference, do not edit): `Feature Cover · Agent Memory · Grey` / `· Sky`, `Feature Cover · Agent Loop · Grey` / `· Sky`.

## Master frame

Both templates are `1600 x 900`, with a hidden `1200 x 628` crop-safe guide (`safe-guide 1200x628`, visibility off). Keep every critical element inside the safe guide.

## The two variants

| Variant | Frame name | Background |
| --- | --- | --- |
| Grey | `Template · Feature Cover · Grey` | Solid Slate 170 `#2A2F2F` |
| Sky | `Template · Feature Cover · Sky` | Solid Sky 140 `#04536F` plus a `Radial highlight` ellipse (radial gradient, bright centre anchored top-right, the same family used in the sales-play videos) |

## Slots to fill (per frame)

| Slot | How to find it | Fill |
| --- | --- | --- |
| Keyword | TEXT node, font size 120 (Oracle Sans Extra Bold, Brand 170, x=156) | 1 to 2 words, set `characters` |
| Explainer | TEXT node, font size 42 (Oracle Sans Regular, Teal 70, x=156) | 8 words or fewer; after setting, reposition `ex.y = kw.y + kw.height + 32` |
| ASCII hero | node named `hero-ascii ...` (JetBrains Mono, white with one red range) | replace `characters` with the topic ASCII (see `ascii-patterns.md`), then re-centre and re-accent (below) |
| Oracle wordmark | RECTANGLE named `Oracle logo`, bottom-right | already filled with the embedded white wordmark image; leave it |

The Oracle wordmark is an embedded image (the white Oracle wordmark). It is already present on every template and example, so cloning carries it across. The source asset is `assets/oracle-logo-white.png`; if a copy lacks it, upload that PNG and set it as the fill on the `Oracle logo` node.

## Clone-and-fill recipe

The skill renders by cloning a template and filling its slots. Load `figma-use` first, then in `use_figma` (after the duplicate-bind preflight):

1. Find the chosen template by name on the `07 Feature Images` page and `clone()` it. Position the clone in clear space and name it for the article, e.g. `Feature Cover · <Topic> · Grey`.
2. Load fonts: Oracle Sans `Extra Bold` and `Regular`, and JetBrains Mono `Bold` (fall back to `Regular` if `Bold` is unavailable).
3. Find the slots in the clone: keyword (`fontSize === 120`), explainer (`fontSize === 42`), hero (`name` starts with `hero-ascii`).
4. Set the keyword and explainer characters. Reposition the explainer under the keyword: `ex.y = kw.y + kw.height + 32`.
5. Set the hero `characters` to your designed ASCII. Re-centre it in the hero zone: `hero.x = round(1140 - hero.width/2)`, `hero.y = round(470 - hero.height/2)`. Re-apply the single red accent with `setRangeFills(start, end, [{type:"SOLID", color: ORACLE_RED}])` on the element that carries the point.
6. Screenshot the frame, run the skill self-check, then offer a PNG export.

Oracle Red is `#C74634`. Brand 170 keyword is `#F0CC72`. Teal 70 explainer is `#89B2B0`. Colours in the Plugin API are 0 to 1 range.

## Notes

- The hero is ASCII art by default (see `ascii-patterns.md`), not a vector icon. If the user explicitly wants an official Oracle icon hero instead, see `official-icon-system.md`, but the default and the templates assume ASCII.
- Keep the ASCII hero roughly the proportions of the placeholder (a compact block, not a wide thin strip) so it balances the keyword.
