# Framer Motion Scroll-Triggered Reveals in Next.js

Research findings for the Elite Portfolio Redesign project.

## 1. Recommended Pattern

**Simple reveals:** Use `whileInView` + `viewport={{ once: true }}` — 12 lines, no hooks needed.

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

**Complex orchestration:** Use `useInView` hook for imperative boolean control when coordinating multiple elements.

```tsx
"use client"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function StaggerChildren({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <div ref={ref}>
      {React.Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
```

## 2. SSR Handling

- **Every file importing framer-motion needs `"use client"`**
- Keep page components as Server Components
- Extract animations into small client wrapper components
- Use `next/dynamic` with `ssr: false` for below-the-fold animated components

```tsx
// page.tsx (Server Component)
import dynamic from "next/dynamic"

const AnimatedHero = dynamic(() => import("./animated-hero"), { ssr: false })

export default function Page() {
  return <AnimatedHero>...</AnimatedHero>
}
```

## 3. Performance

- **Bundle size:** ~34kb for full `motion`, ~4.6kb with `LazyMotion` + `m`
- **Scroll triggers:** Use pooled `IntersectionObserver` — near-zero overhead
- **Animation targets:** Always animate `transform` and `opacity` for GPU compositing
- **Lazy loading:** Use `LazyMotion` + `m` to reduce bundle:

```tsx
"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
```

## 4. Next.js Gotchas

- **No Tailwind transforms on same element as Motion** — they conflict. Use Motion's `style` prop instead.
- **`AnimatePresence` goes in `template.tsx`**, not `layout.tsx` — layout.tsx remounts on route change, breaking exits.
- **`ssr: false` only works in Client Components** — can't use in Server Components.
- **Dynamic imports from Server Components don't auto-code-split** — they bundle the child.

## 5. Recommended Approach for This Portfolio

1. Install `framer-motion`
2. Create `src/components/reveal.tsx` with reusable `FadeIn`, `SlideIn`, `ScaleIn` variants
3. Create `src/lib/animations.ts` with shared animation variants
4. Use `LazyMotion` in root layout to reduce bundle
5. Apply reveals to: hero text, section headings, project cards, case study sections

## Sources

- Framer Motion docs: https://www.framer.com/docs/
- Next.js App Router: https://nextjs.org/docs/app
