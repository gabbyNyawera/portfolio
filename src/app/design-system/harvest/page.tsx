import { Instrument_Serif, Geist_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const palette = {
  paper: "#FFFCF5",
  ink: "#0A0A0A",
  oxblood: "#5C121B",
  gold: "#F0A93B",
  goldInk: "#8A5A00",
} as const;

const tokens = {
  "--background": palette.paper,
  "--surface": palette.paper,
  "--surface-strong": "color-mix(in srgb, #0A0A0A 6%, #FFFCF5)",
  "--foreground": palette.ink,
  "--muted": "color-mix(in srgb, #0A0A0A 5%, #FFFCF5)",
  "--muted-foreground": "color-mix(in srgb, #0A0A0A 62%, #FFFCF5)",
  "--border": "color-mix(in srgb, #0A0A0A 14%, #FFFCF5)",
  "--accent": palette.goldInk,
  "--accent-foreground": palette.paper,
  "--accent-soft": "color-mix(in srgb, #F0A93B 26%, #FFFCF5)",
  "--pop": palette.gold,
  "--pop-foreground": palette.ink,
  "--deep": palette.oxblood,
  "--dusk-background": palette.oxblood,
  "--dusk-surface": "color-mix(in srgb, #5C121B 88%, #FFFCF5)",
  "--dusk-surface-strong": "color-mix(in srgb, #5C121B 78%, #FFFCF5)",
  "--dusk-foreground": palette.paper,
  "--dusk-muted": "color-mix(in srgb, #5C121B 88%, #FFFCF5)",
  "--dusk-muted-foreground": "color-mix(in srgb, #FFFCF5 64%, #5C121B)",
  "--dusk-border": "color-mix(in srgb, #FFFCF5 22%, #5C121B)",
  "--dusk-accent": palette.gold,
  "--dusk-accent-foreground": palette.ink,
  "--dusk-accent-soft": "color-mix(in srgb, #F0A93B 24%, #5C121B)",
  "--dusk-gold": palette.gold,
  "--font-display": "var(--font-instrument), Georgia, serif",
  "--font-serif": "var(--font-instrument), Georgia, serif",
  "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
} as React.CSSProperties;

const roles = [
  {
    name: "Cream",
    hex: palette.paper,
    role: "Paper",
    note: "The page itself. Never a fill for a card — cards are the same cream with a hairline.",
    contrast: "—",
    text: palette.ink,
  },
  {
    name: "Black",
    hex: palette.ink,
    role: "Ink",
    note: "Every headline, paragraph, rule and icon. Unambiguous at any size.",
    contrast: "19.3:1 on cream",
    text: palette.paper,
  },
  {
    name: "Oxblood",
    hex: palette.oxblood,
    role: "Deep",
    note: "Dark sections and full-bleed blocks only. Never small type on cream.",
    contrast: "13.2:1 on cream",
    text: palette.paper,
  },
  {
    name: "Gold",
    hex: palette.gold,
    role: "Pop",
    note: "Fills, buttons, highlights, and the accent on dark. As text on cream it must drop to #8A5A00.",
    contrast: "1.96:1 as text",
    text: palette.ink,
  },
];

const proportions = [
  { color: palette.paper, share: 62, label: "Cream 62%" },
  { color: palette.ink, share: 20, label: "Black 20%" },
  { color: palette.oxblood, share: 12, label: "Oxblood 12%" },
  { color: palette.gold, share: 6, label: "Gold 6%" },
];

const projects = getFeaturedProjects();

export default function HarvestPage() {
  return (
    <main
      className={`${instrument.variable} ${geistMono.variable} bg-background text-foreground`}
      style={tokens}
    >
      {/* ── Masthead + roles ─────────────────────────────────────────── */}
      <section className="container-page pt-16 pb-14">
        <p className="eyebrow">Harvest · four colours</p>
        <h1 className="display-1 mt-4">
          Cream, black,
          <br />
          oxblood, <em className="italic text-accent">gold.</em>
        </h1>
        <p className="lede measure mt-5">
          Three colours do the work — cream paper, a black ink, an oxblood deep.
          Gold is the fourth, and it is the only one allowed to shout.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((entry) => (
            <div key={entry.name} className="bg-background p-5">
              <div
                className="flex h-24 items-end rounded-md border border-border p-3"
                style={{ background: entry.hex, color: entry.text }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {entry.hex}
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <p className="font-display text-xl leading-none">{entry.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {entry.role}
                </p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {entry.note}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {entry.contrast}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex h-3 gap-px overflow-hidden rounded-full border border-border bg-border">
          {proportions.map((band) => (
            <div key={band.label} style={{ background: band.color, width: `${band.share}%` }} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          {proportions.map((band) => (
            <span
              key={band.label}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {band.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Hero on cream ────────────────────────────────────────────── */}
      <section className="border-y border-border bg-background">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Product designer · Nairobi</p>
            <h2 className="display-1 mt-4">
              Design that
              <br />
              <em className="italic text-accent">feels alive.</em>
            </h2>
            <p className="lede mt-6 max-w-md">
              Calm, considered digital experiences with a focus on clarity,
              usability, and the details that make complex things feel{" "}
              <em className="font-display italic text-foreground">obvious</em>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium"
                style={{ background: "var(--pop)", color: "var(--pop-foreground)" }}
              >
                Start a conversation
                <ArrowUpRight className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground"
              >
                View selected work
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="tag">Design systems</span>
              <span className="tag">Product design</span>
              <span className="tag">Research</span>
            </div>
          </div>

          <div className="surface-card self-start p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-surface-strong">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2 pt-5">
              <p className="eyebrow">
                {projects[0].year} — {projects[0].category}
              </p>
              <h3 className="title mt-2">{projects[0].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {projects[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gold block ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--pop)", color: "var(--pop-foreground)" }}>
        <div className="container-page grid gap-8 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
            The pop · #F0A93B
          </p>
          <p className="font-display text-3xl leading-tight sm:text-4xl">
            Gold is the only colour allowed to take up a whole screen. It appears
            once per page, so it still means something.
          </p>
        </div>
      </section>

      {/* ── Oxblood section ──────────────────────────────────────────── */}
      <section className="dark-section bg-background">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-accent">On the deep · #5C121B</p>
            <h2 className="display-2 mt-4">
              Oxblood holds
              <br />
              the <em className="italic text-accent">weight.</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Black stays on the page. Oxblood takes the sections that need to
              feel heavier — the philosophy, the closing statement. Gold is the
              only accent that survives down here, and it gets brighter for it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                Read the résumé
                <ArrowUpRight className="size-4" />
              </button>
              <span className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm">
                Get in touch
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(1, 3).map((project) => (
              <div key={project.title} className="rounded-lg border border-border p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
                <p className="eyebrow mt-4 text-accent">{project.category}</p>
                <h3 className="title mt-2">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cards on cream ───────────────────────────────────────────── */}
      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-3 mt-3">Three ways in</h2>
          </div>
          <span className="link-arrow text-sm">
            All projects <ArrowUpRight className="size-4" />
          </span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.title} className="surface-card p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-surface-strong">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-4">
                {project.year} — {project.category}
              </p>
              <h3 className="title mt-2">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Rules ────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-background">
        <div className="container-page py-14">
          <p className="eyebrow">Rules</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="title">Gold never sets text on cream</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                At 1.96:1 it fails. Use{" "}
                <span className="font-mono text-xs">#8A5A00</span> — the same hue,
                darkened to 5.78:1 — and keep true gold for fills.
              </p>
            </div>
            <div>
              <h3 className="title">Black and oxblood never meet</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                They sit 1.47:1 apart. Black owns type on cream; oxblood owns whole
                sections. No oxblood captions under black headlines.
              </p>
            </div>
            <div>
              <h3 className="title">One gold moment per page</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A single full-bleed block, or the one primary button. Two gold
                blocks and the colour stops being a signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ─────────────────────────────────────────────── */}
      <footer className="grid grid-cols-4">
        {[palette.paper, palette.ink, palette.oxblood, palette.gold].map((color) => (
          <div key={color} className="h-20" style={{ background: color }} />
        ))}
      </footer>
    </main>
  );
}
