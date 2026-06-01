# Templates and scene patterns

Reusable starting points for on-brand Oracle DevRel diagrams. The five library
templates are the canonical layouts shipped in the Figma file (page `04 Templates`,
sourced from the DevRel Diagram System Context Pack). The Sales Play scene patterns are
recurring compositions worked out across the Sales Play plans, named here so an agent
can reuse the structure rather than re-deriving it.

Component names below match the library exactly: `01 Chrome/Title slate`,
`01 Chrome/Group`, `02 Entity/Agent`, `02 Entity/LLM`, `02 Entity/Tool`,
`02 Entity/User`, `03 Data/Memory`, `03 Data/Storage`, `04 Line/Connector`,
`05 Note/Annotation`.

Copy rules apply throughout: British English, no em dashes, and the `03 Data/Storage`
`kind=oracle-db` label is always exactly "Oracle AI Database" with no version suffix.

## Library templates (page 04)

Default dimensions are 1020 x 560 unless noted larger. Each template has a Dark clone
sitting to its right at x=1160, same dimensions, with the dark canvas and the Dark
variable mode set. Build the light version first, then clone for dark.

### Agent Loop
- Use when: explaining the canonical "what is an agent" cognitive loop.
- Shape: 5-stage loop (Perceive, Reason, Plan, Act, Observe) with a "Task Done?"
  decision and a "No" loop-back. U-shape.
- Components: `01 Chrome/Title slate`, `02 Entity/User`, `02 Entity/Agent`,
  `02 Entity/LLM`, `02 Entity/Tool`, `04 Line/Connector`.

### Agent Memory hierarchy
- Use when: laying out the memory taxonomy for a memory explainer (the current OE
  agent memory video lands here).
- Shape: 4-column mind-map, Agent Memory to Short Term / Long Term / Coordination to 6
  types to 9 implementations. CoALA taxonomy.
- Components: `01 Chrome/Title slate`, `02 Entity/Agent`, `03 Data/Memory` (multiple
  `kind` variants), `04 Line/Connector`.

### Memory Retrieval Loop
- Use when: showing how an agent retrieves from and writes back to long-term memory
  (the layout the agent memory video script narrates verbatim).
- Shape: Task to Retriever, Retriever bidirectional with Long-term Memory (Vector /
  JSON / Relational / Task state), to Model, with a write-back curve.
- Components: `01 Chrome/Title slate`, `02 Entity/Agent`, `02 Entity/LLM`,
  `03 Data/Memory`, `03 Data/Storage`, `04 Line/Connector`, `05 Note/Annotation`.

### Workbench and Archive
- Use when: contrasting the small live context window against the large memory store
  (the workbench-and-archive metaphor from the video script).
- Shape: small Workbench (Context Window) on the left, large Archive (Agent Memory) on
  the right with sample memories, a retrieval arrow between them.
- Components: `01 Chrome/Title slate`, `02 Entity/Agent`, `03 Data/Memory`,
  `03 Data/Storage`, `04 Line/Connector`, `05 Note/Annotation`.

### Memory vs Context vs RAG
- Use when: a three-way comparison of memory against the context window against RAG.
- Shape: 3-column comparison with a bottom callout: "Memory is the layer that decides
  what to keep, what to retrieve, and what to forget."
- Components: `01 Chrome/Title slate`, `01 Chrome/Group`, `03 Data/Memory`,
  `03 Data/Storage`, `05 Note/Annotation`.

## Sales Play scene patterns

Named layouts that recur across the Sales Play decks. Each frame is built on the dark
backdrop at sales-play scale (a custom title block, not the library Title slate), but
the body composition is the reusable part. Use these as starting points.

### Persona-card row
- Source: v3 plan, Scene 01 (`2026-05-26-sales-play-video-v3-design.md`, Task B1).
- A row of evenly spaced outlined cards, each holding a persona icon, an eyebrow chip,
  and a one-line explanation. Sets the cast with no connectors.
- Components: `05 Note/Annotation` (or plain text) inside white-outline cards, plus
  persona icons from the `addPersonaIcon` helper (not a library primitive).

### Business-problem card row
- Source: v3 plan, Scene 02 (Task B2).
- Same card geometry as the persona row, but each card carries a symbolic problem glyph
  plus a problem name and one-line description. No personas.
- Components: white-outline explanation tiles (`addExplanationTile` helper) with
  manually drawn placeholder glyphs; no library primitive is mandatory.

### Factory container with agent fleet
- Source: v3 plan, Scene 05 (Task B4).
- A solid-stroke Group container labelled the factory, holding one filled Agent and
  several outline-only Agents in a row, with a lower scale-ramp of agent dots (1, 10,
  100+).
- Components: `01 Chrome/Group` (`stroke=solid, label=on`), `02 Entity/Agent` (one
  filled, the rest outline), `04 Line/Connector`, plus a persona icon marker.

### Governed-tools group
- Source: v3 plan, Scene 06 (Task B5).
- A filled Agent on the left, a solid-stroke Group container ("Approved Catalogue") of
  white-outline tool tiles, a single labelled connector, and the Oracle anchor in the
  corner. Carries the ON-PREM chip.
- Components: `02 Entity/Agent`, `01 Chrome/Group` (`stroke=solid, label=on`),
  `03 Data/Storage` (`kind=oracle-db`, the anchor), `04 Line/Connector`, plus
  white-outline explanation tiles for the tools.

### Endpoint-contract two-role split
- Source: v3 plan, Scene 09 (Task B7).
- A persona on each side (Maya, Alex), a large white-outline endpoint tile in the
  middle with a vertical dotted seam, and two labelled connectors (`publishes`,
  `consumes`).
- Components: `02 Entity/Tool` (`kind=api`, the endpoint) or a white-outline tile,
  `04 Line/Connector`, plus two persona icons.

### Agent-harness group with capability labels
- Source: v3 plan, Scene 10 (Task B8, HERO).
- A dashed-stroke Group container (the abstraction layer) holding the endpoint tile and
  six diamond-prefixed capability labels (runtime, observability, security, approvals,
  APIs, evals), a persona on each side, an ecosystem sub-label, and the Oracle anchor
  centred below. Carries the ON-PREM chip.
- Components: `01 Chrome/Group` (`stroke=dashed, label=on`), `02 Entity/Tool`
  (`kind=api`, the endpoint), `03 Data/Storage` (`kind=oracle-db`, the anchor),
  `04 Line/Connector`, plus two persona icons.

### Three-layer platform close
- Source: v2 plan, Scene 15 (`2026-05-22-sales-play-video-diagrams-v2-plan.md`, Task
  G11, HERO).
- A three-layer cake: top layer holds two small Groups (Private Agent Factory with a
  User, Agent Harness with an Agent); the middle layer is a wide endpoint bar; the
  bottom layer is a full-width converged-database tile with surface tags across it.
- Components: `01 Chrome/Group` (one `stroke=solid`, one `stroke=dashed`, both
  `label=on`), `02 Entity/User`, `02 Entity/Agent`, `02 Entity/Tool` (`kind=api`, the
  endpoint bar), `03 Data/Storage` (`kind=oracle-db`, full-width), `04 Line/Connector`,
  `05 Note/Annotation` (the surface markers).
