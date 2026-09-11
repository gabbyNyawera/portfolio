# Research: Framer Motion Scroll-Triggered Reveals in Next.js

**Labels:** `wayfinder:research`
**Parent:** [Elite Portfolio Redesign](000-map.md)
**Blocked by:** (none — frontier)
**Status:** ✅ Resolved

## Question

How do scroll-triggered reveal animations work with Framer Motion in Next.js App Router? Specifically:

1. What's the recommended pattern for `useInView` + animation variants?
2. How do we handle SSR (Framer Motion doesn't support SSR by default)?
3. What's the performance impact of scroll-triggered animations?
4. Are there any Next.js-specific gotchas (dynamic imports, lazy loading)?
5. What's the minimal setup needed — can we get a working reveal in <20 lines?

## Resolution

Full research saved to `docs/framer-motion-scroll-reveals.md`.

### Key Findings

1. **Pattern:** Use `whileInView` + `viewport={{ once: true }}` for simple reveals (12 lines). Use `useInView` hook for imperative boolean control when orchestrating multiple elements.

2. **SSR:** Every file importing framer-motion needs `"use client"`. Keep page as Server Component, extract animations into small client wrappers. Use `next/dynamic` with `ssr: false` for below-the-fold animated components.

3. **Performance:** ~34kb for `motion`, ~4.6kb with `LazyMotion` + `m`. Scroll triggers use pooled `IntersectionObserver` (near-zero overhead). Always animate `transform`/`opacity` for GPU compositing.

4. **Next.js gotchas:**
   - No Tailwind transforms on same element as Motion (conflict)
   - `AnimatePresence` goes in `template.tsx`, not `layout.tsx`
   - `ssr: false` only works in Client Components
   - Dynamic imports from Server Components don't auto-code-split

5. **Minimal setup (12 lines):**
```tsx
"use client"
import { motion } from "framer-motion"

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
```

## Source

- Framer Motion docs: https://www.framer.com/docs/
- Next.js App Router: https://nextjs.org/docs/app
