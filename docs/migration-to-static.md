# Migration: Next.js to plain HTML

## Why

The site is a small portfolio: five public pages, four case studies, plus design-system and
prototype pages. It does not need a React runtime, a client router, or hydration. The Next.js
build shipped ~160 KB of JavaScript to render static text and images.

The goal was to keep the design exactly as it was while removing the framework from the
shipped site.

## Approach

1. Built and ran the existing Next app (`next build && next start`).
2. Captured the server-rendered HTML for every route.
3. Stripped framework artifacts: scripts, preloads, `/_next/image` URLs, hydration markers.
4. Compiled one Tailwind stylesheet from the new HTML (`site/assets/css/source.css`).
5. Lifted the self-hosted woff2 font subsets out of the Next build.
6. Reimplemented the interactive parts in one dependency-free file (`site/assets/js/site.js`).
7. Verified every route in a headless browser: no console errors, no broken assets, and
   pixel-identical desktop and mobile screenshots against the Next build.

The capture scripts (`scripts/extract-static.mjs`, `scripts/extract-fonts.mjs`) are one-time
migration tools. They are kept for reference but are not part of the normal build.

## What ships

`site/` is the whole website:

- 19 HTML pages (home, archive, 4 case studies, philosophy, 9 design-system pages, 2 prototypes)
- one compiled stylesheet (19 KB gzipped)
- one JavaScript file (~4 KB gzipped)
- self-hosted fonts (browser downloads only the subsets it needs)
- images, including the hero portrait as WebP

No runtime dependencies.

## Measured result

Fresh browser context, 1440 px viewport, gzip enabled, local server:

| Page | Before (Next) | After (static) |
|---|---|---|
| Home — total transfer | 663 KB | 366 KB |
| Home — JavaScript | 159 KB | 4 KB |
| Home — requests | 29 | 8 |
| Case study — total transfer | 397 KB | 160 KB |

The hero portrait alone went from 1.27 MB PNG to a 172 KB WebP (900 px wide, quality 82).
The Next build also had to ship React just to render the same markup.

## Behaviour parity

Reimplemented in vanilla JS:

- scroll reveals (IntersectionObserver)
- custom cursor dot + trailing ring
- pointer-reactive ambient light
- reading-progress hairline
- hero tilt + scroll parallax
- magnetic buttons
- local Harare clock
- philosophy deck: scroll snap, rail, counters, progress bar, prev/next
- prototype glow-button pointer tracking
- book-cover fallback when a remote cover fails

CSS handles the marquee, aura drift, status ping, shimmer, and reduced-motion fallbacks.
All content remains visible without JavaScript (`.js` guard on the reveal styles).

## Trade-offs

- **No component system.** The header and footer markup is repeated per page. Changes to site
  chrome must be applied to every page. This is the main cost of dropping the framework.
- **Content is in the HTML.** There is no typed content layer or generated case-study routes.
  Adding a case study means adding a folder and a page.
- **Tailwind remains a build dependency.** It compiles once; it does not ship to the browser.
  This was chosen over rewriting ~7,000 lines of utility classes by hand, which would have
  introduced visual drift.
- **Build-time extraction.** The pages are now source files. The capture scripts exist only
  to document how the initial HTML was produced.

## Follow-ups

1. Set the real deployed origin for Open Graph image URLs with
   `npm run set-site-url -- https://your-domain` (they still use `http://localhost:3000`
   from the Next metadata).
2. Decide whether to delete the retired Next app (`src/`, `public/`, Next config, Storybook).
   It is currently kept so the uncommitted design work is not lost.
3. If the site grows, consider a tiny build-time include for the header/footer instead of
   copying it.
4. Replace remote Unsplash project images with real project artwork when available.
5. Add a `sitemap.xml` and `robots.txt` if the site is deployed publicly.

## Adding a page

1. Create `site/<route>/index.html`.
2. Copy the `<head>`, header and footer from a sibling page; update the title and description.
3. Keep the footer CTA unless the page is a case study (`SiteFooter showCta={false}` maps to
   the compact footer markup).
4. Run `npm run build` and `npm run check:links`.
