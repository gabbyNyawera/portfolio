# Grilling: Visual Refinements — Spacing, Typography, Color

**Labels:** `wayfinder:grilling`
**Parent:** [Elite Portfolio Redesign](000-map.md)
**Blocked by:** (none — frontier)
**Status:** ✅ Resolved

## Question

What specific visual refinements will make this portfolio feel "elite"? The current palette is warm cream + terracotta + Playfair Display — the foundation is right, but the execution needs tightening.

Key areas to decide:
1. **Spacing scale** — What's the consistent spacing system? (4px, 8px, 16px, 32px, 64px, 128px?)
2. **Typography scale** — Are the current sizes (text-5xl, text-7xl, text-8xl) right, or should we tighten?
3. **Color application** — When do we use terracotta vs. muted-foreground vs. foreground?
4. **Section rhythm** — How much space between sections? (py-36 feels right?)
5. **Card design** — Should project cards have borders, shadows, or neither?
6. **White space** — Is there enough breathing room, or too much?

## Resolution

All decisions locked:

1. **Spacing scale:** 8px base — 8, 16, 24, 32, 48, 64, 96, 128
2. **Typography scale:** Keep it big — editorial size is part of the personality. Focus on consistent `leading` and `tracking`.
3. **Color application:** Keep current usage — terracotta for CTAs, muted for secondary, foreground for body. Focus on consistency.
4. **Section rhythm:** Make it consistent — pick `py-32` (128px) and use it everywhere.
5. **Card design:** Keep flat — no borders, no shadows. Add hover states (slight scale, image zoom, color shift) for life.
6. **White space:** Just right — the breathing room is intentional. Focus on consistency across sections.

### Implementation Notes

- Update all section padding to `py-32` (currently varies: `py-36`, `py-40`, `py-24`)
- Ensure consistent text hierarchy: `foreground` for body, `muted-foreground` for secondary, `accent` for CTAs
- Add hover states to project cards: `hover:scale-[1.02]` + image zoom + color shift
- Keep Playfair Display at current sizes, ensure consistent `leading-[1.05]` and `tracking-tight`
