# Wayfinder Tracker — Local Markdown

## Structure

```
issues/wayfinder/
├── 000-map.md                          ← the map (label: wayfinder:map)
├── 001-research-framer-motion.md       ← research ticket
├── 002-grilling-visual-refinements.md  ← grilling ticket
├── 003-prototype-scroll-reveals.md     ← prototype ticket
├── 004-task-install-framer-motion.md   ← task ticket
├── 005-grilling-case-study-structure.md ← grilling ticket
└── 006-prototype-case-study-visuals.md ← prototype ticket
```

## Labels

- `wayfinder:map` — the map issue
- `wayfinder:research` — AFK research ticket
- `wayfinder:grilling` — HITL conversation ticket
- `wayfinder:prototype` — HITL prototype ticket
- `wayfinder:task` — HITL or AFK task ticket

## Blocking

Blocking is tracked in each ticket's `## Blocked by` field. A ticket is **unblocked** when every ticket listed there is closed (has "✅ Resolved" in its resolution).

## Frontier

The frontier (unblocked, unclaimed tickets):
- [Research: Framer Motion](001-research-framer-motion.md)
- [Grilling: Visual Refinements](002-grilling-visual-refinements.md)

## How to Use

### To work through the map:
1. Read `000-map.md` for the low-res view
2. Pick a frontier ticket (or user names one)
3. Claim it (note it's being worked)
4. Resolve it (add resolution comment, close the ticket)
5. Update the map's Decisions-so-far

### To create new tickets:
1. Add the file to `issues/wayfinder/`
2. Update `000-map.md` Not-yet-specified section
3. Wire blocking edges in the new ticket's `## Blocked by` field
