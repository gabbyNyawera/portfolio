# Gabrielle Nyawera — Design System

The working reference for every visual decision on the portfolio. If a value is
not defined here, it should not be introduced in a component.

---

## 1. Audit: why the old site felt disconnected

**Palette.** The site used cold near-black, cool grey and off-white (`#17171A`,
`#F8F8F8`, `#EEEEF0`) with a single burnt-amber accent. A warm accent on a cold
neutral base reads like a highlight rather than a material, so the colour never
felt like part of the page. The philosophy page then switched to a pure-black
theme, which made it read as a different product.

**Typography.** Four families (Inter, Newsreader, Fraunces, Geist Mono) competed
without clear roles. Headings used `font-extralight` at display sizes while body
copy used default sans weights, and labels were hand-written at `text-[10px]` in
several different tracking values. The result was inconsistency, not hierarchy.

**Spacing and layout.** Section padding, page gutters and max widths were all
bespoke (`pt-[52px]`, `px-5/6/8/16`, `max-w-2xl/4xl/5xl/6xl`). Two-column
layouts used three different ratios. Sections did not share a rhythm.

**Depth and assets.** Most surfaces were flat fills. Project imagery was either
an unrelated stock photograph or a bare gradient box, and the empty states had
no art direction. The site read as unfinished because placeholders did not look
intentional.

**Cohesion.** Home was light; philosophy was black; the footer was a third dark
theme. Motion was applied ad hoc (bouncing scroll dot, infinite swipe hint,
custom cursor, reveals) with no shared timing or easing.

---

## 2. Direction: paper, ink, one signal

The portfolio should feel like a contemporary print publication that happens to be
interactive: **alive, precise, expressive, welcoming, and deliberately minimal.**
White paper, black ink and one yellow signal carry the personality, with blue kept
for language. Photography, illustration and typography provide richness; decoration
does not.

Three principles:

1. **One material.** Every page is built from the same paper, ink and signal.
   Dark sections are the same material at dusk, not a different theme.
2. **Type does the expressive work.** Scale, contrast and generous space create
   drama. Ornament is reserved for a few recurring marks (arch, grain, rule).
3. **Nothing floats.** Every element sits on a surface, in a grid, or on a
   deliberate line. Empty space is composed, not leftover.

---

## 3. Colour

Four values, three jobs. Paper and ink build the page; one signal fill and one text
accent carry the personality. Nothing else is a colour.

| Colour | Value | Role |
|---|---|---|
| Paper | `#FFFFFF` | The page — 60% of any screen |
| Ink | `#101010` | Type, rules, chrome, dusk — 30% |
| Signal | `#F9C74F` | Fills, marks, bands — 10% |
| Text accent | `#2A3FC8` | Links, focus rings, accent words |

Signal and text accent are different tools, not two shades of one colour. Yellow is
always a field; blue is always language. Neither swaps roles.

### Light — paper

| Token | Value | Use |
|---|---|---|
| `--background` | `#FFFFFF` | Page paper |
| `--surface` | `#FFFFFF` | Cards: separated by a hairline, not a fill |
| `--surface-strong` | `#F7F2E2` | Media mats, bands |
| `--foreground` | `#101010` | Ink (19.0:1) |
| `--muted` | `#F2EFE6` | Subtle fills |
| `--muted-foreground` | `#6B6A63` | Secondary copy (5.4:1) |
| `--border` | `#E4E0D6` | Rules, card edges |
| `--accent` | `#F9C74F` | Signal fills: bands, marks, badges (1.6:1 on paper) |
| `--accent-foreground` | `#101010` | Text on signal (12.1:1) |
| `--accent-soft` | `#FBE9C0` | Atmospheric fill |
| `--accent-ink` | `#2A3FC8` | Text accent on paper (7.9:1) |

### Dark — ink

| Token | Value | Use |
|---|---|---|
| `--dusk-background` | `#101010` | Ink ground |
| `--dusk-surface` | `color-mix(in srgb, #101010 90%, #FFFFFF)` | Ink panel |
| `--dusk-surface-strong` | `color-mix(in srgb, #101010 80%, #FFFFFF)` | Ink band |
| `--dusk-foreground` | `#FFFFFF` | Paper ink (19.0:1) |
| `--dusk-muted` | `color-mix(in srgb, #101010 90%, #FFFFFF)` | Ink fill |
| `--dusk-muted-foreground` | `color-mix(in srgb, #FFFFFF 64%, #101010)` | Secondary copy (8.4:1) |
| `--dusk-border` | `color-mix(in srgb, #FFFFFF 22%, #101010)` | Ink rules |
| `--dusk-accent` | `#F9C74F` | Signal on ink (12.1:1) |
| `--dusk-accent-foreground` | `#101010` | Text on signal |
| `--dusk-accent-soft` | `color-mix(in srgb, #F9C74F 24%, #101010)` | Atmospheric fill |

Dusk values are also exposed as `--dusk-*` tokens in `:root`; `.dark-section`
maps the semantic names onto them, so a dusk colour can be reused outside a dark
section without duplicating hex values.

Rules:

- **Yellow never sets text on paper.** At 1.6:1 it disappears. It carries black
  type at 12.1:1, so it is only ever a ground for something else.
- **Blue is the only text accent.** `--accent-ink` is `#2A3FC8` on paper (7.9:1) and
  yellow inside a dark section. Prefer it over `text-accent` so the text role
  survives a palette change.
- **Ink is both type and dusk.** On paper it sets type and the header; in a dark
  section it is the whole surface. It is never a decorative fill on paper.
- **60 / 30 / 10.** Paper holds roughly 60% of a page, ink 30% (header, one band,
  footer) and the signal 10% (a band, a card, the marks). When a page drifts to
  all-white it stops reading as print; when ink passes a third it stops reading as
  paper.
- **One signal moment per screen.** One full-bleed band, one filled card, or the
  badge. Two and the colour stops being a signal.
- **Cards are white on white.** Separation comes from the 1px border and the
  letterpress shading, not from a second fill.
- **Ink is `#101010`, never `#000`.** Pure black kills the grain and the warm
  paper tints.
- Dark sections use `.dark-section`; they inherit the same component classes.

---

## 4. Identity: the G

The mark is the site's own Instrument Serif italic **G**, reversed on a square
plate, with a butter-yellow full stop. It is a monogram, an app icon and a favicon at
once, so there is one object to maintain rather than three.

### Anatomy

| Part | Rule | At 32px |
|---|---|---|
| Plate | Square, radius 25% of the side | 32px square, 8px radius |
| Letter | Instrument Serif italic 400, 72% of the side, optically centred | 23px |
| Stop | Butter yellow, 9% of the side, inset 19% from the corner | 3px at 6px inset |

The stop is the wordmark's full stop, moved inside the plate. It is never a second
letter, a bullet, or a status dot.

### Colour

| Ground | Plate | G | Stop |
|---|---|---|---|
| Paper | `foreground` (ink) | `background` (paper) | `accent-soft` (butter) |
| Dusk | `accent` (yellow) | `accent-foreground` (ink) | `accent-foreground` |

In code: `bg-foreground text-background dusk:bg-accent` on the plate, with the
stop on `bg-accent-soft dusk:bg-accent-foreground`. Because `.dark-section` remaps
the tokens, the mark flips inside a dusk section without a second component.

### Lockup

`LogoMark` sits 10px (`gap-2.5`) to the left of the wordmark `Gabe.`, vertically
centred. The wordmark is Instrument Serif at `text-2xl`, tracking tight, with its
full stop in `text-accent-ink`. Header and footer use the same lockup.

The letter is set in the same face as the wordmark on purpose: there is no second
typeface to clash with, and the mark can never drift away from the brand.

### Clear space and minimum size

- Clear space on all sides is half the plate width — 16px at the 32px size.
- The plate is never set below **20px** in the interface. At 16px use the icon
  files, which are rendered from the same geometry.
- The letter never exceeds 76% of the plate. The margins are the mark.

### Don'ts

- Do not use the roman G inside the plate. The italic is the mark.
- Do not outline, rotate, stretch or re-radius the plate.
- Do not change or remove the stop. It is the only link to the wordmark.
- Do not place the paper plate on a photograph, a tint band or a colour fill.
- Do not pair it with another symbol. It is the only mark on the page.

### Files

| Concern | File |
|---|---|
| Mark and lockup | Inline in every page header — search for `aria-label="Gabrielle Nyawera — home"` |
| Favicon (512px) | `site/icon.png` |
| Touch icon (180px) | `site/apple-icon.png` |

The plate is `aria-hidden`; the link carries the accessible name
(“Gabrielle Nyawera — home”). Both PNGs are raster renders of the same type and
ratios — regenerate them at 25% radius, 72% letter and 9% stop rather than
redrawing the letter by hand.

---

## 5. Typography

Two families, each with one job:

| Family | Token | Role |
|---|---|---|
| Instrument Serif | `--font-display` / `--font-serif` | Headlines, pull quotes, editorial accents |
| Inter | `--font-sans` | Body copy, UI, navigation, metadata, labels |

There is no mono family. Counters, dates and tags are Inter 500 at
`0.6875rem` with wide tracking — the tracking carries the "label" quality that a
mono face used to.

### Scale

| Class | Size | Use |
|---|---|---|
| `.display-1` | `clamp(3.5rem, 7vw, 6.5rem)` | Hero, footer statement |
| `.display-2` | `clamp(2.75rem, 5vw, 4.5rem)` | Section titles |
| `.display-3` | `clamp(2rem, 3.2vw, 3rem)` | Project titles, quotes |
| `.title` | `1.625rem` | Card and subsection titles |
| `.lede` | `1.125rem / 1.7` | Section introductions |
| `.eyebrow` | `0.6875rem`, Inter 500, `0.18em` | Metadata: dates, categories, counts |

### Steps

Raw sizes live as tokens so prose, UI and labels never invent their own:

| Token | Value | Use |
|---|---|---|
| `--text-micro` | `0.6875rem` | Labels, eyebrows, counters |
| `--text-small` | `0.8125rem` | Captions, metadata, secondary rows |
| `--text-body` | `1rem` | Default body copy |
| `--text-title` | `1.625rem` | Card and subsection titles |

Rules:

- Display type is Instrument Serif 400, line-height `0.98–1.1`, tracking `-0.015em`.
- Card titles are Instrument Serif at `1.625rem` with `-0.005em`. The size is
  deliberate: at `1.5rem` the 400-weight hairlines go spindly in uppercase brand
  names like `KAVARA KAVARA`. Do not shrink `.title` back without checking one.
- Body copy is Inter 400 at `1rem/1.7`; never below `0.8125rem`.
- Labels are Inter 500, uppercase, with at least `0.16em` tracking. The tracking
  does the work a mono face used to do.
- Sections have no eyebrow and no index number. A section is a heading and, at
  most, one line of lede. `01 — Philosophy` above `How I think` is exactly the
  redundancy this system avoids.
- `.eyebrow` survives only for metadata — years, categories, counts, attribution.
  It is not a section label. If a label sits above a heading, delete it.
- Instrument Serif roman is the heading voice. Italic is reserved for quotations
  and pull quotes; never use it as an accent word inside a heading.
- Do not use more than two type sizes in one block.

---

## 6. Spacing and layout

### Tokens

| Token | Value |
|---|---|
| `--page-max` | `76rem` |
| `--reading-max` | `42rem` |
| `--gutter` | `clamp(1.25rem, 4vw, 4rem)` |
| `--section-y` | `clamp(4.5rem, 9vw, 8rem)` |
| `--header-height` | `76px` |

### Radius and depth

| Token | Value | Use |
|---|---|---|
| `--radius-media` | `0.5rem` | Media mats, artwork frames |
| `--radius-card` | `1.25rem` | Cards and surfaces |
| `--radius-panel` | `1.5rem` | Bands, large panels |
| `--radius-pill` | `999px` | Tags, buttons, pills |
| `--z-rail` | `40` | Philosophy rail |
| `--z-header` | `50` | Site header |
| `--z-grain` / `--z-cursor` | `9999` | Global overlays |

### Primitives

- `.container-page` — centred, `--page-max`, responsive gutters.
- `.section-y` — vertical section rhythm.
- `.measure` — readable text width (`--reading-max`).
- `.split-editorial` — `1fr / 2fr` at `md`, stacked below.
- `.grid-12` — 12-column grid with a `1.5rem` gap.

Rules:

- Section order and rhythm are fixed: Hero → Philosophy → Projects → Education →
  What I'm Into → Footer.
- Alternate paper and tint bands to separate major movements. Never place two
  tint bands next to each other.
- Mobile is the source of truth; every layout stacks and keeps `1.25rem` gutters.
- Nested cards never add more than one level of padding.

---

## 7. Surfaces and components

- **Rules:** 1px `--border`, often at 60% opacity. Long rules separate sections.
- **Cards:** `.surface-card` — `--surface`, 1px border, `1.25rem` radius, no
  heavy shadow. Depth is letterpress, not drop shadow: a 1px highlight, a 1px
  inner shade, and a 2px ambient line. Inside `.dark-section` the highlight
  becomes paper at 12% and the shade goes black at 30%.
- **Tags:** `.tag` - pill, small sans, bordered, transparent fill.
- **Buttons:** one press, three rules. `primary` is the only filled action — an
  ink pill on paper (white label, 19:1) that lifts and deepens on hover. Inside
  `.dark-section` it turns to glass so it still floats above the ground. `rule` is
  the secondary action (uppercase on a 2px ink rule), `quiet` is tertiary/nav, and
  `inline` sits inside running text. Only one press per section. Minimum 44px
  target (`sm` 44px, `default` 48px, `icon` 48px); inline text actions are the
  exception.
- **Navigation:** fixed ink bar, white tracked Inter links, one yellow contact
  pill. Active/hover moves to white, never a new colour.
- **Footer:** nightfall. A dark section with one horizon glow rising from its base
  and one engraved corner of concentric rules. It is the only patterned surface;
  gradients do not travel between sections.
- **Focus:** visible 2px `--accent-ink` ring with offset. Never remove outlines.
- **Images:** always inside a mat or frame. Use `.asset-frame` for intentional
  placeholder/specimen frames; never a bare gradient div.

### Button hierarchy

| Variant | Role | Treatment |
|---|---|---|
| `primary` | The one action a section is asking for | Ink pill on paper; glass inside a dark section |
| `rule` | Secondary action | Uppercase label on a 2px ink rule, arrow |
| `quiet` | Tertiary / navigation | Muted label on a hairline rule |
| `inline` | Action inside a sentence | Underlined sentence-case text with a small arrow |

- One `primary` per section. If two actions feel equally important, one of them
  is a `rule`.
- The arrow is part of the button: no capsule, it sits in the label flow and
  steps up and right on hover. The wipe moves the surface, never the shape.
- `asChild` keeps links on the same classes; the arrow and wipe are injected for
  you, so a link is never a different-looking control.

---

## 8. Visual assets: art direction

- **Photography:** warm, natural light, documentary framing, shallow depth.
  Avoid cool blue-grey stock imagery.
- **Project mockups:** shown in a mat with a thin rule and a small tracked caption
  (project + year). Placeholder artwork uses a tonal ink/yellow wash, the
  `.halftone` screen, and a large Instrument Serif initial so it reads as
  intentional. Real photography is never screened — a mockup keeps its detail, and
  only the placeholder takes the dots.
- **Illustration:** hand-drawn line work, limited to the hero and
  philosophy examples. The hero illustration sits inside an arch with a soft
  yellow glow.
- **Marks:** the G plate (§4) is the only logo; the arch, the long rule, the
  oversized index number and the grain overlay are the recurring visual
  vocabulary.

---

## 9. Background treatments

- **Paper grain:** one global, very low opacity noise overlay on `body`.
- **Hero wash:** warm yellow radial glow from the top-right plus a soft yellow
  arch behind the illustration.
- **Tint bands:** `--surface-strong` at full or partial opacity for banded
  sections such as the work index. `.sand-wash` adds a 6rem seam at the top and
  bottom so the band rises out of the paper instead of starting on a hard line.
- **Dusk:** footer uses `.dark-section` with a yellow
  radial wash. This is the same system at night, not a separate theme.
- No section uses more than one treatment at once.

### Print kit

Four utilities carry the printed feel. They are named classes in
`site/assets/css/source.css` — never paint these effects per section.

| Utility | Reads as | Belongs |
|---|---|---|
| `.halftone` | Two dot grids, two angles, one plate | Placeholder artwork inside `.asset-frame` |
| `.surface-card` | Letterpress: one highlight, one inner shade | Cards, panels, menus |
| `.ledger` | Ruled paper with an accent margin rule | Vertical lists — Education |
| `.sand-wash` | A band with 6rem soft seams | Sections that change ground |

- One treatment per section: a ledger never sits on a halftone, and a sand band
  never carries a second wash.
- `.halftone` needs `isolate` on its frame and never covers body copy or a
  photograph.
- `.ledger` rows are exactly `--ledger-step` (`7rem`) tall, because the rules are
  the row separators. Long labels wrap inside the row; they never push a rule.
- Dusk sections and the footer keep hard edges. That is a page turn, not a seam.
- All four are static. Nothing loops, so reduced motion and 200% zoom behave.

---

## 10. Motion and interaction

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out-expo`).
- **Durations:** `180ms` for hover/focus, `500ms` for the primary wipe, `600ms`
  for reveals, `800ms` for large image scale. Ambient loops belong to the alive
  layer only; content never animates on a loop.
- **Reveals:** opacity + 12px rise + 5px blur, triggered once by
  IntersectionObserver, staggered by 80ms. Never animate more than one axis.
  The hero runs the same move on load, sequenced name → intro → actions →
  portrait.
- **Hover:** links move to ink and underline; cards lift 2px and warm their edge;
  images scale `1.03` inside a fixed mat; rules warm to signal and their arrows
  lift. The primary ink pill lifts a touch and deepens.
- **Alive layer:** a soft yellow light drifts behind the page and leans toward the
  pointer; a yellow hairline tracks reading progress; the availability dot
  breathes; the footer carries the live Harare clock. Primary CTAs are magnetic
  and the hero portrait tilts toward the pointer with a shallow scroll parallax.
  All of it is atmosphere — it never gates content or intercepts input.
- **Cursor:** a quick accent dot at rest. Over links and controls it gives way to
  a filled ink disc carrying a cream up-right arrow. It never replaces the native
  cursor and is hidden on touch and coarse pointers.
- **Reduced motion:** all transforms and durations collapse to near-zero; the
  pointer light, magnetism, tilt, marquee, status pulse and aura are switched
  off, and reveals appear immediately.

---

## 11. Implementation map

| Concern | File |
|---|---|
| Tokens, scale, utilities | `site/assets/css/source.css` |
| Fonts | `site/assets/css/fonts.css` |
| Page shell and sections | `site/index.html` |
| Project artwork / placeholders | Inline in `site/index.html` and `site/work/*/index.html` |
| Scroll reveal | `.reveal` markup + `site/assets/js/site.js` |
| Buttons | `.glass-pill` and button classes in `source.css` |
| Logo mark, wordmark lockup | Inline in every page header |
| Favicon, touch icon | `site/icon.png`, `site/apple-icon.png` |
| Header, footer | Inline in every page |
| Cursor and alive layer | `site/assets/js/site.js` (`data-cursor-*`, `data-alive-pointer`) |
| Design system reference | `site/design-system/index.html` |
| Home sections | `site/index.html` |
| Philosophy | `site/philosophy/index.html` |
| Work archive | `site/work/index.html` |
| Case study | `site/work/<slug>/index.html` |
