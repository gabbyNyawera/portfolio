# What needs fixing on the site

Open the site today and the homepage is grey. Not muted, not monochrome by
design: every image is desaturated, every project card is a single letter in a
box, and the small print under each one reads "image placeholder." The page a
hiring manager lands on is the layout sketch, shipped.

The sketch is a **prototype** — a throwaway version built to compare five
different homepage layouts side by side. It was never meant to be the site. But
the code that chooses what the homepage renders still points at it, and the
prototype wears a **skeleton theme**: a set of grey overrides that strips the
colour out of everything it touches, including photographs. In **production** —
the version visitors actually get — the little floating switcher that moved
between the five layouts is hidden on purpose, so a visitor can't even tell a
choice was being offered. They just get variant A, in grey, with no way out.
