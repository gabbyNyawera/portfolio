# Portfolio — Agent Instructions

This document governs all AI-assisted work on Gabrielle Nyawera's portfolio.

## Agent skills

### Issue tracker

GitHub Issues are used for this repo's task flow. See `docs/agents/issue-tracker.md`.

### Triage labels

The repo uses the default five canonical triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo using a root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.

---

## 1. Architecture Principles

1. The shipped site is plain HTML in `site/`. There is no framework runtime.
2. Content lives in the page that renders it. Do not add a data layer without a clear reason.
3. Prefer shared patterns over one-off styles. Where plain HTML forces duplication (site
   chrome), keep every copy in sync and note it in the change.
4. Do not introduce abstractions, build steps, or dependencies without explicit justification.
5. Do not create new design tokens when an existing token applies.
6. Preserve the existing visual language unless there is a measurable reason to change it.
7. Keep JavaScript small, progressive, and optional: the page must read without it.
8. Optimize for readability and future human editing, not cleverness.
9. `src/` is the retired Next.js app, kept for reference until it is deleted. Do not add new
   work there.

---

## 2. Tech Stack

- **Pages**: HTML5, one `index.html` per route under `site/`
- **Styling**: Tailwind CSS v4, compiled once to `site/assets/css/site.css`
- **Behaviour**: vanilla JavaScript in `site/assets/js/site.js`
- **Fonts**: self-hosted woff2 subsets in `site/assets/fonts/`
- **Build**: Node scripts only — `scripts/build-css.cjs`, `scripts/serve-static.cjs`
- **Legacy**: Next.js App Router + TypeScript + shadcn/ui in `src/` (reference only)

---

## 3. Conventions

### File Structure

```
site/
  index.html                  # Home
  work/index.html             # Project archive
  work/<slug>/index.html      # One page per case study
  philosophy/index.html       # Philosophy deck
  design-system/              # Catalogue and studies
  prototype/                  # Throwaway design prototypes
  404.html
  assets/
    css/source.css            # Tailwind source + tokens (edit this)
    css/site.css              # Compiled output (never edit)
    css/fonts.css             # Self-hosted @font-face
    js/site.js                # All client behaviour
    fonts/                    # woff2 subsets
    images/                   # Local imagery
scripts/
  build-css.cjs               # Compiles source.css
  serve-static.cjs            # Local server (port 3200)
  check-links.cjs             # Internal link/asset check
  audit-static.cjs            # Headless route + console audit
  extract-static.mjs          # One-time migration from the legacy app
  extract-fonts.mjs           # One-time font lift from the legacy build
```

### Naming

| What | Convention | Example |
|---|---|---|
| Page files | `index.html` inside a route folder | `site/work/study-app/index.html` |
| Assets and scripts | kebab-case | `site-logo`, `check-links.cjs` |
| JS variables | camelCase | `activeSlide` |
| CSS utilities | the existing Tailwind/design-system names | `container-page`, `display-2` |

### HTML

- Use semantic elements and one `<h1>` per page.
- Repeat the header and footer from an existing page when adding a route. They are not
  templated; keep the copies identical.
- Keep `loading="lazy"` on below-the-fold and remote images.
- Preserve `aria-*` labels on icon-only controls.

### JavaScript

- One file: `site/assets/js/site.js`. Add a small, guarded block; do not add a dependency.
- Every behaviour must degrade: content stays visible without JS (see the `.js` guard).
- Respect `prefers-reduced-motion` and fine-pointer checks.

### Imports and assets

- Use root-absolute paths (`/assets/...`, `/images/...`) so pages work at any route depth.
- Do not reference `/_next/` or the retired `src/` tree from `site/`.

---

## 4. Design System Rules

The full source of truth is `docs/design-system.md`.

### Tokens

- Use the CSS custom properties in `site/assets/css/source.css`.
- Colours: `background` (white `#FFFFFF`), `surface`, `surface-strong`, `foreground`
  (ink `#101010`), `muted`, `muted-foreground`, `border`, `accent` (signal yellow
  `#F9C74F`), `accent-foreground`, `accent-soft`, `accent-ink` (text accent blue
  `#2A3FC8`).
- Fonts: `--font-sans` (Inter), `--font-serif` / `--font-display` (Instrument Serif).
- Dark sections use `.dark-section` (ink dusk) and override the same tokens — never a
  separate palette.

### Utilities

- Use `.container-page`, `.section-y`, `.display-1/2/3`, `.lede`, `.eyebrow`, `.surface-card`,
  `.tag`, `.asset-frame`, `.ledger`, `.halftone`, and `.link-arrow` before inventing styles.
- Conditional classes are plain string concatenation or `classList` — there is no `cn()`.

### Responsive

- Mobile-first: `sm:`, `md:`, `lg:` breakpoints.
- Page content uses `.container-page`; reading content uses `.measure`.
- Interactive targets should be at least 44px tall on touch.

---

## 5. Git Workflow

### Commits

Format:
```
<type>: <description>
```

Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`

### Rules

- Never commit secrets or environment variables.
- One logical change per commit.
- Run `npm run build` and `npm run check:links` before committing site changes.

---

## 6. OpenCode Workflow

### Starting a Task

1. Read this AGENTS.md first.
2. Check `site/` and `docs/design-system.md` before inventing markup or styles.
3. Plan the change — list the pages and assets to modify.

### During Implementation

1. Follow the architecture principles strictly.
2. Edit `site/assets/css/source.css` for styles, then run `npm run build`.
3. Keep `site/assets/js/site.js` dependency-free and progressive.
4. When changing chrome, update every page that shows it.

### Completing a Task

1. Run `npm run build` — compile the stylesheet.
2. Run `npm run check:links` — confirm every internal link and asset resolves.
3. Run `npm run check:site` — confirm no console errors or broken images across routes.
4. Verify the page renders at desktop and mobile widths.
