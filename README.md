# Portfolio — Gabrielle Nyawera

Personal portfolio for Gabrielle Nyawera, a product designer.

The site ships as **plain HTML, CSS and a small amount of vanilla JavaScript**. There is no
framework runtime: no React, no hydration, no client-side router. Tailwind is used only at
build time to compile the stylesheet.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3200](http://localhost:3200).

The deployed site is the `site/` directory. Any static host can serve it — point the host at
`site/` and make sure `/` resolves to `site/index.html` and missing routes fall back to
`site/404.html`.

## Structure

```
site/                       # the deployable website
  index.html                # home
  work/index.html           # project archive
  work/<slug>/index.html    # case studies (kavarara, jack-reverse, study-app, portfolio)
  philosophy/index.html     # philosophy deck
  design-system/            # design system catalogue and studies
  prototype/                # books + buttons prototypes
  404.html
  assets/
    css/source.css          # Tailwind source + design tokens (edit this)
    css/site.css            # compiled stylesheet (generated, do not edit)
    css/fonts.css           # self-hosted @font-face declarations
    js/site.js              # all client behaviour
    fonts/                  # woff2 subsets
    images/                 # local imagery (hero, philosophy)
scripts/
  build-css.cjs             # Tailwind -> site/assets/css/site.css
  serve-static.cjs          # local static server
  check-links.cjs           # verify every internal href/src resolves
  audit-static.cjs          # headless route/console/asset audit
  screenshot.cjs            # desktop screenshots
  screenshot-mobile.cjs     # mobile screenshots
  extract-static.mjs        # one-time capture from the retired Next app
  extract-fonts.mjs         # one-time font lift from the retired Next build
src/                        # RETIRED Next.js app (reference only, not shipped)
public/                     # RETIRED Next public folder (source for site/ images)
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Serve `site/` at http://localhost:3200 |
| `npm run build` | Compile Tailwind to `site/assets/css/site.css` |
| `npm start` | Serve the built site |
| `npm run check:links` | Verify internal links and assets |
| `npm run check:site` | Audit every route in a headless browser (run `npm run dev` first) |
| `npm run set-site-url -- https://example.com` | Point social-preview URLs at the deployed origin |
| `npm run compare:weight` | Compare transfer weight against the running legacy app |
| `npm run shots` | Desktop screenshots into `shots-static/` |
| `npm run dev:next` | Legacy Next app (reference only) |
| `npm run build:next` | Legacy Next build (reference only) |
| `npm run storybook` | Legacy Storybook (reference only) |

## Editing content

Content lives directly in the HTML. Case studies are real pages under
`site/work/<slug>/index.html`; there is no data layer to regenerate.

The header and footer markup is repeated in each page. When you change site chrome, update
every page (or re-run the migration script against the legacy app if you are still comparing).

## Notes

- `site/assets/css/site.css` is generated. Edit `source.css` and run `npm run build`.
- The hero portrait is served as WebP (`site/images/hero/gabe-illustration.webp`); the
  original PNG is kept for social preview images.
- Open Graph image URLs still point at `http://localhost:3000`. Run
  `npm run set-site-url -- https://your-domain` before launch.
- The legacy Next app is kept in `src/` so the uncommitted design work is not lost. It can
  be removed once the static site has been reviewed.
