# Portfolio — Agent Instructions

This document governs all AI-assisted work on Gabrielle Nyawera's portfolio.

---

## 1. Architecture Principles

1. Content must remain separate from presentation.
2. Prefer reusable components over duplicated markup.
3. Keep pages thin and compositional.
4. Do not introduce abstractions without a clear reason.
5. Do not create new design tokens when an existing token applies.
6. Do not hardcode project-specific content into reusable components.
7. Components should have a single clear responsibility.
8. Preserve existing architecture unless there is a measurable reason to change it.
9. Do not add dependencies without explicit justification.
10. Optimize for readability and future human editing, not cleverness.

---

## 2. Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (base-nova style)
- **Language**: TypeScript
- **Icons**: lucide-react

---

## 3. Component Conventions

### File Structure

```
src/
  app/
    page.tsx              # Portfolio home (thin, compositional)
    layout.tsx            # Root layout
  components/
    ui/                   # shadcn/ui primitives
content/
  projects.ts            # Projects data
```

### Naming

| What | Convention | Example |
|---|---|---|
| Files | kebab-case | `project-card.tsx` |
| Components | PascalCase | `ProjectCard` |
| Variables | camelCase | `projectCount` |
| Types | PascalCase | `Project` |

### Props

- Define inline as object literal types.
- Use `React.ReactNode` for children.
- Use `?` for optional props.

### Imports

- Always use `@/` alias.
- External libraries first, then `@/` path imports.

---

## 4. Design System Rules

### Tokens

- Use existing CSS custom properties from `src/app/globals.css`.
- Colors: `background`, `foreground`, `primary`, `muted`, `border`.
- Fonts: `--font-sans` (Geist), `--font-mono` (Geist Mono).

### Utilities

- Always use `cn()` from `@/lib/utils` for conditional classnames.

### shadcn/ui Components

- Import from `@/components/ui/[component]`.
- Use variant props, not manual class overrides.

### Responsive

- Mobile-first: `sm:`, `md:`, `lg:` breakpoints.
- Max width constraint: `max-w-2xl` for content pages.

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
- Run lint and build before committing.

---

## 6. OpenCode Workflow

### Starting a Task

1. Read this AGENTS.md first.
2. Check existing components before creating new ones.
3. Plan the change — list files to create/modify.

### During Implementation

1. Follow architecture principles strictly.
2. Keep pages thin — extract logic to components.
3. Use existing shadcn/ui components and design tokens.

### Completing a Task

1. Run `npm run lint` — fix all errors.
2. Run `npm run build` — confirm no build failures.
3. Verify the page renders correctly.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
