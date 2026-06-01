/*
 * DevRel Diagram System · Figma helper library
 *
 * HOW TO USE
 * ----------
 * This is a copy-paste toolkit, not a module. When you build a diagram with the
 * `use_figma` MCP tool, paste the helper functions you need into the top of the
 * JavaScript you run inside the Figma file. Pull in their dependencies too:
 * `recolourForDark` needs `nearHex`, `remap`, and `walk`; `drawConnectorStrict`
 * needs `drawConnector`; `cleanupOrphans` needs `walk`. The palette tokens at the
 * top are needed by almost everything.
 *
 * COLOURS ARE 0-1
 * ---------------
 * Every colour here is expressed as {r, g, b} (and sometimes a) in the 0 to 1
 * range, because that is what the Figma plugin API expects. The hex value is in
 * the comment beside each token for reference.
 *
 * ORACLE SANS WEIGHTS
 * -------------------
 * Oracle Sans (as installed on Casius's machine and in the Figma file) has NO
 * Medium weight. Wherever a spec says "Medium", use "Semi Bold" instead. The font
 * loader below loads the styles the original plans named; if a load fails on
 * "Medium", substitute "Semi Bold".
 */

// === Brand palette (v1 plan) ===
const SKY_140    = { r: 0x04/255, g: 0x53/255, b: 0x6F/255 };
const SLATE_170  = { r: 0x2A/255, g: 0x2F/255, b: 0x2F/255 };
const NEUTRAL_10 = { r: 0xFB/255, g: 0xF9/255, b: 0xF8/255 };
const BRAND_170  = { r: 0xF0/255, g: 0xCC/255, b: 0x71/255 };
const PINE_70    = { r: 0x86/255, g: 0xB5/255, b: 0x96/255 };
const TEAL_70    = { r: 0x89/255, g: 0xB2/255, b: 0xB0/255 };
const HIGHLIGHT  = { r: 0x46/255, g: 0x70/255, b: 0x72/255 };

// === Persona accent tokens (v3 plan Task A2) ===
const PERSONA_MAYA  = { r: 0x5D/255, g: 0xA9/255, b: 0xC9/255 };  // #5DA9C9 brighter sky for Maya
const PERSONA_PRIYA = { r: 0x86/255, g: 0xB5/255, b: 0x96/255 };  // #86B596 Pine 70
const PERSONA_ALEX  = { r: 0x89/255, g: 0xB2/255, b: 0xB0/255 };  // #89B2B0 Teal 70
const PERSONA_NEUTRAL_60 = { r: 0xFB/255, g: 0xF9/255, b: 0xF8/255, a: 0.6 };  // Neutral 10 @ 60%

// === Font loader (call once at top of each task) (v1 plan, Phase A4) ===
// Note: Oracle Sans has no Medium weight. Use Semi Bold wherever a spec says Medium.
async function loadFonts() {
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Medium" });
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Bold" });
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Regular" });
}

// === Title block (custom, sales-play scale) (v1 plan, Phase A4) ===
async function addTitleBlock(parent, opts) {
  const { x = 80, y = 80, eyebrow, title, caption, maxWidth = 1760 } = opts;
  const group = figma.createFrame();
  group.name = "Title block";
  group.x = x; group.y = y;
  group.resize(maxWidth, 200);
  group.fills = [];
  parent.appendChild(group);

  const eb = figma.createText();
  eb.fontName = { family: "Oracle Sans", style: "Bold" };
  eb.fontSize = 14;
  eb.letterSpacing = { unit: "PERCENT", value: 14 };
  eb.characters = eyebrow;
  eb.fills = [{ type: "SOLID", color: BRAND_170 }];
  eb.x = 0; eb.y = 0;
  group.appendChild(eb);

  const tt = figma.createText();
  tt.fontName = { family: "Oracle Sans", style: "Medium" };
  tt.fontSize = 56;
  tt.letterSpacing = { unit: "PERCENT", value: -1 };
  tt.lineHeight = { unit: "PIXELS", value: 64 };
  tt.characters = title;
  tt.fills = [{ type: "SOLID", color: NEUTRAL_10 }];
  tt.x = 0; tt.y = 32;
  tt.resize(maxWidth, tt.height);
  group.appendChild(tt);

  // rule (1.5pt line, Neutral 10 @ 25%, width = max of 480 or 60% of maxWidth)
  const rule = figma.createRectangle();
  rule.name = "Rule";
  rule.resize(Math.min(maxWidth, 540), 1.5);
  rule.fills = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.25 }];
  rule.strokes = [];
  rule.x = 0;
  rule.y = 32 + tt.height + 18;
  group.appendChild(rule);

  const cap = figma.createText();
  cap.fontName = { family: "Oracle Sans", style: "Regular" };
  cap.fontSize = 14;
  cap.letterSpacing = { unit: "PERCENT", value: 6 };
  cap.characters = caption;
  cap.fills = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.6 }];
  cap.x = 0;
  cap.y = rule.y + 14;
  group.appendChild(cap);

  return group;
}

// === walk: depth-first node visitor (v1 plan, Phase A4) ===
// Dependency for recolourForDark and cleanupOrphans.
function walk(n, fn) {
  fn(n);
  if ("children" in n) for (const c of n.children) walk(c, fn);
}

// === Manual connector (gold line + triangle head) (v1 plan, Phase A4) ===
function drawConnector(parent, x1, y1, x2, y2, label) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx*dx + dy*dy);
  if (len < 1) return;
  const ux = dx/len, uy = dy/len;
  const headLen = 8;
  const endX = x2 - ux*headLen, endY = y2 - uy*headLen;

  const v = figma.createVector();
  v.strokes = [{ type: "SOLID", color: BRAND_170 }];
  v.strokeWeight = 1.2;
  v.fills = [];
  v.vectorPaths = [{ windingRule: "NONE", data: `M ${x1} ${y1} L ${endX} ${endY}` }];
  v.x = 0; v.y = 0;
  parent.appendChild(v);

  const head = figma.createPolygon();
  head.pointCount = 3;
  head.resize(7, 9);
  head.fills = [{ type: "SOLID", color: BRAND_170 }];
  head.strokes = [];
  head.x = x2 - head.width/2;
  head.y = y2 - head.height/2;
  head.rotation = (Math.atan2(dy, dx) * 180 / Math.PI) - 90;
  parent.appendChild(head);

  if (label) {
    const t = figma.createText();
    t.fontName = { family: "Oracle Sans", style: "Regular" };
    t.fontSize = 11;
    t.letterSpacing = { unit: "PERCENT", value: 0 };
    t.characters = label;
    t.fills = [{ type: "SOLID", color: BRAND_170 }];
    t.x = (x1 + x2)/2 - t.width/2;
    t.y = (y1 + y2)/2 - 16;
    parent.appendChild(t);
  }
}

// === Strict connector (validates arrow-tip alignment) (v2 plan, Task F1) ===
function drawConnectorStrict(parent, x1, y1, x2, y2, label) {
  const result = drawConnector(parent, x1, y1, x2, y2, label);
  // Find the polygon just created (last child of type POLYGON)
  const head = parent.children.filter(c => c.type === "POLYGON").pop();
  if (!head) throw new Error("Arrow head missing for connector");

  const expectedAngle = (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI) - 90;
  const angleDiff = Math.abs(((head.rotation - expectedAngle + 540) % 360) - 180) - 180;
  if (Math.abs(angleDiff) > 1) {
    throw new Error(`Connector rotation drift: expected ${expectedAngle.toFixed(2)}, got ${head.rotation.toFixed(2)}`);
  }

  const tipCx = head.x + head.width / 2;
  const tipCy = head.y + head.height / 2;
  const dist = Math.sqrt((tipCx - x2) ** 2 + (tipCy - y2) ** 2);
  if (dist > 2) {
    throw new Error(`Connector tip drift: ${dist.toFixed(2)} px from endpoint`);
  }

  return result;
}

// === Dark-mode recolour pass (v1 plan, Phase A4) ===
// nearHex and remap are dependencies of recolourForDark.
function nearHex(c, hex) {
  const r = (hex >> 16) & 0xff, g = (hex >> 8) & 0xff, b = hex & 0xff;
  return Math.abs(c.r*255 - r) < 5 && Math.abs(c.g*255 - g) < 5 && Math.abs(c.b*255 - b) < 5;
}
function remap(colour) {
  if (nearHex(colour, 0x2A2F2F)) return NEUTRAL_10;
  if (nearHex(colour, 0x6C3F49)) return PINE_70;
  if (nearHex(colour, 0x04536F)) return TEAL_70;
  if (nearHex(colour, 0xC74634)) return BRAND_170;
  return colour;
}
async function recolourForDark(instance) {
  walk(instance, n => {
    if ("fills" in n && Array.isArray(n.fills)) {
      n.fills = n.fills.map(f => f.type === "SOLID" ? { ...f, color: remap(f.color) } : f);
    }
    if ("strokes" in n && Array.isArray(n.strokes)) {
      n.strokes = n.strokes.map(f => f.type === "SOLID" ? { ...f, color: remap(f.color) } : f);
    }
  });
}

// === ON-PREM chip (v2 plan, Task F1) ===
async function addOnPremChip(parent, opts) {
  const { y = 92, anchorRight = 1860 } = opts || {};
  const chip = figma.createFrame();
  chip.name = "On-prem chip";
  chip.resize(96, 24);
  chip.x = anchorRight - 96;
  chip.y = y;
  chip.cornerRadius = 3;
  chip.fills = [{ type: "SOLID", color: SKY_140, opacity: 0.3 }];
  chip.strokes = [{ type: "SOLID", color: BRAND_170 }];
  chip.strokeWeight = 1.2;
  parent.appendChild(chip);

  const t = figma.createText();
  t.fontName = { family: "Oracle Sans", style: "Bold" };
  t.fontSize = 11;
  t.letterSpacing = { unit: "PERCENT", value: 14 };
  t.characters = "ON-PREM";
  t.fills = [{ type: "SOLID", color: BRAND_170 }];
  t.x = chip.x + (chip.width - t.width) / 2;
  t.y = chip.y + (chip.height - t.height) / 2;
  parent.appendChild(t);
}

// === Cleanup pass helper (v2 plan, Task F2) ===
function cleanupOrphans(frame) {
  const orphans = [];
  walk(frame, n => {
    if (/^(Temp|Old|Replaced|__draft)/i.test(n.name)) orphans.push(n);
  });
  for (const o of orphans) {
    console.log("Removing orphan:", o.name);
    o.remove();
  }
}

// === Persona icon (v3 plan, Task A3) ===
async function addPersonaIcon(parent, opts) {
  const {
    x, y,
    ringColour,          // {r,g,b} or {r,g,b,a}
    symbol,              // string like "✎" or "</>"
    symbolColour,        // usually same as ringColour
    name,                // e.g., "Maya"
    role,                // e.g., "Business Analyst"
    tileSize = 80
  } = opts;

  const grp = figma.createFrame();
  grp.name = `Persona · ${name}`;
  grp.x = x;
  grp.y = y;
  grp.resize(tileSize, tileSize + 80);  // tile + space for name + role
  grp.fills = [];
  parent.appendChild(grp);

  // Tile
  const tile = figma.createRectangle();
  tile.name = "Persona tile";
  tile.resize(tileSize, tileSize);
  tile.x = 0;
  tile.y = 0;
  tile.cornerRadius = 12;
  tile.fills = [{ type: "SOLID", color: NEUTRAL_10 }];
  const ringFill = { type: "SOLID", color: { r: ringColour.r, g: ringColour.g, b: ringColour.b } };
  if (ringColour.a != null) ringFill.opacity = ringColour.a;
  tile.strokes = [ringFill];
  tile.strokeWeight = 1.5;
  grp.appendChild(tile);

  // Symbol
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Bold" });
  const sym = figma.createText();
  sym.fontName = { family: "Oracle Sans", style: "Bold" };
  sym.fontSize = 32;
  sym.characters = symbol;
  const symFill = { type: "SOLID", color: { r: ringColour.r, g: ringColour.g, b: ringColour.b } };
  if (ringColour.a != null) symFill.opacity = ringColour.a;
  sym.fills = [symFill];
  sym.x = (tileSize - sym.width) / 2;
  sym.y = (tileSize - sym.height) / 2;
  grp.appendChild(sym);

  // Name
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Medium" });
  const nm = figma.createText();
  nm.fontName = { family: "Oracle Sans", style: "Medium" };
  nm.fontSize = 20;
  nm.characters = name;
  nm.fills = [{ type: "SOLID", color: NEUTRAL_10 }];
  nm.x = (tileSize - nm.width) / 2;
  nm.y = tileSize + 8;
  grp.appendChild(nm);

  // Role
  await figma.loadFontAsync({ family: "Oracle Sans", style: "Regular" });
  const rl = figma.createText();
  rl.fontName = { family: "Oracle Sans", style: "Regular" };
  rl.fontSize = 14;
  rl.characters = role;
  rl.fills = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.75 }];
  rl.x = (tileSize - rl.width) / 2;
  rl.y = tileSize + 36;
  grp.appendChild(rl);

  return grp;
}

// === Explanation tile (white outline, no fill) (v3 plan, Task A3) ===
async function addExplanationTile(parent, opts) {
  const {
    x, y,
    width = 240,
    height = 80,
    label,               // top label / title
    labelSize = 16,
    sublabel,            // optional sub-line
    sublabelSize = 14,
    outlineOpacity = 0.25
  } = opts;

  const tile = figma.createRectangle();
  tile.name = `Explanation tile · ${label}`;
  tile.x = x;
  tile.y = y;
  tile.resize(width, height);
  tile.cornerRadius = 6;
  tile.fills = [];
  tile.strokes = [{ type: "SOLID", color: NEUTRAL_10, opacity: outlineOpacity }];
  tile.strokeWeight = 1;
  parent.appendChild(tile);

  await figma.loadFontAsync({ family: "Oracle Sans", style: "Medium" });
  const t = figma.createText();
  t.fontName = { family: "Oracle Sans", style: "Medium" };
  t.fontSize = labelSize;
  t.characters = label;
  t.fills = [{ type: "SOLID", color: NEUTRAL_10 }];
  const textY = sublabel ? (height - (labelSize + 4 + sublabelSize)) / 2 : (height - labelSize) / 2;
  t.x = x + (width - t.width) / 2;
  t.y = y + textY;
  parent.appendChild(t);

  if (sublabel) {
    await figma.loadFontAsync({ family: "Oracle Sans", style: "Regular" });
    const s = figma.createText();
    s.fontName = { family: "Oracle Sans", style: "Regular" };
    s.fontSize = sublabelSize;
    s.characters = sublabel;
    s.fills = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.75 }];
    s.x = x + (width - s.width) / 2;
    s.y = t.y + t.height + 4;
    parent.appendChild(s);
  }

  return tile;
}

// === Logo placeholder slot (v3 plan, Task A3) ===
async function addLogoPlaceholder(parent, opts) {
  const { x, y, name, size = 40 } = opts;

  const slot = figma.createRectangle();
  slot.name = `Logo · ${name}`;
  slot.x = x;
  slot.y = y;
  slot.resize(size, size);
  slot.cornerRadius = 4;
  slot.fills = [];
  slot.strokes = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.4 }];
  slot.strokeWeight = 1;
  parent.appendChild(slot);

  await figma.loadFontAsync({ family: "Oracle Sans", style: "Regular" });
  const lbl = figma.createText();
  lbl.fontName = { family: "Oracle Sans", style: "Regular" };
  lbl.fontSize = 10;
  lbl.characters = `[ICON: ${name}]`;
  lbl.fills = [{ type: "SOLID", color: NEUTRAL_10, opacity: 0.75 }];
  lbl.x = x + (size - lbl.width) / 2;
  lbl.y = y + size + 4;
  parent.appendChild(lbl);

  return slot;
}
