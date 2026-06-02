# Diagram audit checklist

A reusable audit for any on-brand Oracle DevRel diagram, generalised from the
mandatory per-scene self-check in the v3 Sales Play plan
(`2026-05-26-sales-play-video-v3-design.md`, "Per-scene self-check"). Run it after
building a diagram and before exporting. Where a check can be expressed in code, run it
in code (walk the frame's children, read `absoluteBoundingBox`, parse vector paths);
where it cannot, check it by screenshot at native size.

If anything fails, stop, fix it in place, and re-run the whole check. Do not move on
with known defects. Unfixed-later defects compound.

**Two contexts.** These checks were generalised from the Sales Play *video* system,
where some rules are strict because the diagram is a continuous moving backdrop. When
you build a general DevRel diagram from the page-04 templates (for a blog, talk, or
slide), two of those rules relax, and they are marked "video only" below:

- a `FIG. NN` figure caption is allowed on a general diagram; it is only banned on a
  video backdrop;
- the single focal block may be filled in the light-mode focal colour (the Oracle Red
  / coral family the page-04 light templates use) rather than gold. The universal rule
  is "exactly one filled focal block", not a specific hue.

Treat every other check as universal.

## 1. Connector integrity

- Terminates within 8px of an anchor at both ends. In code: for every connector vector
  (built via `drawConnector` / `drawConnectorStrict`, or any free vector with a coloured
  stroke), parse the path's start and end points (after applying the node's x/y
  offset), build the candidate-anchor set from the frame's instances, frames, groups,
  persona tiles and explanation tiles, and confirm each endpoint sits within 8px of the
  nearest anchor's bounding-box edge. An endpoint with no anchor within range is a
  dangling line, a hard fail. An endpoint that lands near the wrong anchor by accident
  is also a defect: the nearest anchor must be the intended source or target from the
  spec.
- Has a mid-line label unless explicitly none. In code: every connector must have a
  TEXT node positioned at its midpoint, with characters matching the spec's label for
  that connector (case-sensitive). Flag unlabelled connectors and wrong labels.
- Arrowhead within 2px of the endpoint and rotation within 1 degree. In code: for each
  arrowhead POLYGON (3 points, small), compute its centre (`x + width/2`,
  `y + height/2`) and confirm it is within 2px of the line's end point, and that its
  rotation matches the line angle (`atan2(dy, dx) * 180 / PI - 90`) within 1 degree.
  `drawConnectorStrict` enforces this at draw time; the audit re-confirms in case a
  connector was drawn with a different helper.
- Dashed connectors have no arrowheads. In code: walk the children for any POLYGON
  whose parent is a dashed line (`dashPattern: [4, 4]`). There should be none; dashed
  lines are pure strokes.

## 2. Visual story coherence

- By screenshot: take a `get_screenshot` of the completed frame at native size (the
  frame's own dimensions, e.g. 1020x560 for a page-04 template, 1920x1080 for a Sales
  Play scene). Read the line this diagram sits behind: the voiceover line on a video, or
  the surrounding paragraph in a blog or talk.
- Ask: does the diagram show the structure that copy can only gesture at (relationships,
  simultaneity, scale, scope, layout), or does it merely restate the copy? If it
  restates, it is wrong.
- Ask: would someone seeing this for the first time understand the structural
  relationship being claimed without the surrounding copy interpreting the geometry? If
  they would need the copy to decode it, the diagram is wrong.

## 3. Label and copy integrity

- No em dashes. In code: search every TEXT node for the em dash (U+2014) and en dash
  (U+2013) characters. Any match fails. Also scan for banned strings: the deprecated
  database version suffix (`ai` preceded by `23`), `soccer`, `leverage`, `synergize`,
  `paradigm`, `holistic`, `best-in-class`.
- Storage label is exactly "Oracle AI Database". In code: every `03 Data/Storage`
  instance with `kind=oracle-db` must have its label TEXT equal to "Oracle AI Database"
  verbatim. Anything with a version suffix or an abbreviation fails. Render the label
  with no "Storage" prefix: the 2026-05-17 context pack shows a prefixed form, but the
  system spec and this skill use the unprefixed label. If in doubt, confirm against the
  live Figma file.
- `FIG. NN` caption (video only). On a Sales Play video backdrop, captions read as
  noise: search every TEXT node for `FIG.` and flag any match. On a general diagram
  (blog, talk, slide) built from the page-04 templates, a figure caption is allowed and
  is not a failure.

## 4. Density check

- By count: walk the frame's children and count visual units (primitive instances plus
  helper-output groups), excluding the title block, eyebrow, and ON-PREM chip.
  Composite units (a scale ramp of dots, a timeline, a logo cluster) count as one unit
  each. Compare the count against the tier budget: LIGHT 5 to 8, SUPPORTING 8 to 12,
  HERO 12 to 18. Log the count. A single-element overrun on a HERO slide is acceptable
  with an explicit note; anything more should be trimmed or justified.

## 5. Element-list match

- By cross-reference: for each named element in the brief or spec (for example "Maya
  icon at (440, 360)", "endpoint tile at (880, 360)"), walk the frame's children and
  confirm that element is present at roughly the stated position. Missing any: log and
  fix before exporting. Conversely, any visible element not accounted for in the spec
  is likely a leftover and should be cleaned up.

## 6. Oracle AI Database anchor (when the source names it)

- If the script, blog, or brief names Oracle AI Database (or "26ai"), the diagram
  should include the `03 Data/Storage` `kind=oracle-db` primitive labelled exactly
  "Oracle AI Database", as the persistent data substrate. The page-04 templates that
  predate this rule (for example the Memory Retrieval Loop, whose long-term store is
  generic Vector / JSON / Relational / Task state boxes) may not have it: add the anchor
  when the source calls for it. If the source does not mention Oracle AI Database, do
  not force the anchor in.
