# ASCII hero patterns

The feature-image hero is a compact block of monospace ASCII art that depicts the article's single idea. It is drawn in JetBrains Mono, white, with one restrained Oracle Red accent. This file gives a motif per archetype and the rules that keep it readable.

## Rules for every hero

- **Font:** JetBrains Mono (Bold preferred, Regular fallback). Its arrow ligatures render `-->` and `<--` as clean arrows, which is fine and looks good.
- **Build it in code, not by hand.** Construct each line programmatically and pad to a fixed width (`padEnd`) so columns and borders line up. Hand-typed ASCII drifts out of alignment.
- **Proportions:** aim for a compact, roughly square-ish block (similar to the template placeholder), not a wide thin strip. A wide one-line cycle does not balance the keyword; a boxed or stacked motif does.
- **One red accent only.** Colour a single element (the loop back-arrow, the output label, the top of a stack) Oracle Red with `setRangeFills`. Everything else is white (Neutral 10 at about 0.92).
- **Thumbnail first.** Remove labels before removing clarity. Prefer one strong shape over many small parts.
- **Centre it** in the hero zone (frame-local centre about `x=1140, y=470`).

## Motifs by archetype

Pick the archetype the way the diagram system does (see `visual-archetypes.md`), then draw its ASCII. These are starting points; adapt the labels to the article.

### loop (cycles, reasoning loops, the agent loop)

A boxed cycle with a red `loop` tail. (This is the Agent Loop example.)

```
+----------------------+
| perceive --> reason  |
| ^             |      |
| |             v      |
| observe <--- act     |
+----------------------+
           |
         loop
```

### stack / store (memory, layers, platform tiers, storage)

A bordered module with fill bars and a red output tail. (This is the Agent Memory example.)

```
+------------------+
| short    [####]  |
| long     [######]|
| vector   [###]   |
| episodic [#]     |
+--------+---------+
         |
      recall
```

### flow (pipelines, sequences, handoffs)

Three or four boxes with a directional cue; accent the final stage or the output.

```
+-------+   +--------+   +--------+
| input | > | reason | > | output |
+-------+   +--------+   +--------+
```

### nodes (multi-agent, graphs, networks)

One dominant centre with spokes; accent the centre.

```
   worker   worker
       \     /
        \   /
       [ lead ]
        /   \
       /     \
   worker   worker
```

### shield (safety, governance, guardrails)

A boundary mark with a small internal symbol; accent the check.

```
   .----------.
  /            \
 |   policy     |
 |    [ ok ]    |
  \            /
   '----------'
```

### spark (launches, capability leaps)

A burst glyph paired with strong text; accent the spark.

```
       \ | /
     --- * ---
       / | \
      launch
```

### chart (only when the story is genuinely benchmark-led)

One stripped-down bar motif; accent the winning bar. Avoid dashboard collage.

```
 A | ####
 B | ########
 C | ##############
     0    5    10
```

## Accent guidance

Choose the accent to carry the point:
- loop: the `loop` tail or the back-arrow.
- stack/store: the output (`recall`) or the top tier.
- flow: the final `output` box.
- nodes: the `lead` centre.
- shield: the `[ ok ]` check.
- spark: the `*`.
- chart: the longest bar.

Keep it to one accent. If two things feel like they need red, the hero is doing too much; simplify.
