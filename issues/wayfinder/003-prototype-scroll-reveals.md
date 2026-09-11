# Prototype: Scroll-Triggered Reveal Animations

**Labels:** `wayfinder:prototype`
**Parent:** [Elite Portfolio Redesign](000-map.md)
**Blocked by:** [Research: Framer Motion Scroll-Triggered Reveals](001-research-framer-motion.md), [Grilling: Visual Refinements](002-grilling-visual-refinements.md)
**Status:** ✅ Resolved — Motion Rejected

## Question

What should scroll-triggered reveals look like on this portfolio? Specifically:

1. Which elements should animate? (headings, paragraphs, images, cards, sections?)
2. What animation style? (fade up, slide in from left/right, scale up, stagger?)
3. What timing and easing? (fast and snappy vs. slow and smooth?)
4. Should reveals happen once (on first scroll) or every time?
5. How do we avoid motion sickness / respect `prefers-reduced-motion`?

Build a rough prototype to react to — even a single section with 2-3 reveal styles.

## Resolution

**Motion rejected.** The editorial layout is calm and considered — motion feels forced, not functional. The portfolio should feel still and intentional, not animated.

### What Was Built (then reverted)
- `src/lib/animations.ts` — shared animation variants (still exists, can be removed later)
- `src/components/reveal.tsx` — reusable Reveal components (still exists, can be removed later)
- `src/components/hero-reveal.tsx` — hero section with staggered reveals (still exists, can be removed later)
- Homepage had reveals on hero and philosophy sections (reverted)

### Key Insight
The layout already has visual hierarchy through typography, spacing, and color. Motion is decorative, not functional. The portfolio's calm, editorial personality is better served by stillness than animation.

### Next Steps
- Remove animation files when convenient (low priority)
- Focus on visual polish: spacing, typography, color consistency
- Focus on case study content: process documentation, visual showcase, metrics
