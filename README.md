# Portfolio — Gabrielle Nyawera

Personal portfolio for Gabrielle Nyawera, a product designer. Built with Next.js (App Router) and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/            # Routes: home, /work, /work/[slug], /philosophy
  components/     # Site chrome and section components
    ui/           # shadcn/ui primitives
  content/        # Structured content (projects, education, interests)
public/
  images/         # Hero and philosophy imagery
  resume.pdf      # Résumé served at /resume.pdf
```

Content lives in `src/content/`. Pages stay thin and compose components from `src/components/`.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Run Storybook on port 6006 |
| `npm run build-storybook` | Build the static Storybook |

## Notes

- Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so Open Graph image URLs resolve correctly.
- Place the résumé PDF at `public/resume.pdf` so the header and footer links work.
