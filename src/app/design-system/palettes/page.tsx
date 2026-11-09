import { Instrument_Serif, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/content/projects";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Palette = {
  id: string;
  name: string;
  note: string;
  recipe: string[];
  vars: {
    background: string;
    surface: string;
    strong: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    accent: string;
    accentForeground: string;
    accentSoft: string;
    accentBright: string;
    accentInk: string;
  };
};

const palettes: Palette[] = [
  {
    id: "signal",
    name: "Signal",
    note: "Warm white, true black, vermilion. The most direct reading of the brief.",
    recipe: ["#FFFCF9", "#141110", "#F0441E"],
    vars: {
      background: "#FFFCF9",
      surface: "#FFFFFF",
      strong: "#F3EEE8",
      foreground: "#141110",
      muted: "#F0EAE3",
      mutedForeground: "#6B635C",
      border: "#E4DCD4",
      accent: "#C2340F",
      accentForeground: "#FFFFFF",
      accentSoft: "#FFDCCE",
      accentBright: "#FF6A3D",
      accentInk: "#C2340F",
    },
  },
  {
    id: "cobalt",
    name: "Cobalt",
    note: "Cool white, ink navy, cobalt. Product-company clarity; the pop doubles as the link colour.",
    recipe: ["#FBFBFD", "#0E1626", "#2F5BFF"],
    vars: {
      background: "#FBFBFD",
      surface: "#FFFFFF",
      strong: "#EEF0F7",
      foreground: "#0E1626",
      muted: "#EDEFF5",
      mutedForeground: "#5E6577",
      border: "#DDE0EA",
      accent: "#2446D8",
      accentForeground: "#FFFFFF",
      accentSoft: "#DCE3FF",
      accentBright: "#7D9CFF",
      accentInk: "#2446D8",
    },
  },
  {
    id: "grove",
    name: "Grove",
    note: "Clean white, deep forest, acid lime. The lime only lives on dark or as fills — it can never be text on paper.",
    recipe: ["#FCFDF8", "#0F1F17", "#B8F04A"],
    vars: {
      background: "#FCFDF8",
      surface: "#FFFFFF",
      strong: "#EBF0E4",
      foreground: "#0F1F17",
      muted: "#EDF1E8",
      mutedForeground: "#5B6459",
      border: "#DBE1D5",
      accent: "#4C7A00",
      accentForeground: "#FFFFFF",
      accentSoft: "#E7F7C4",
      accentBright: "#B8F04A",
      accentInk: "#4C7A00",
    },
  },
  {
    id: "nocturne",
    name: "Nocturne",
    note: "Bone white, aubergine, tangerine. The most unexpected pairing; warmer than it sounds.",
    recipe: ["#FFFAF7", "#1B1120", "#FF7A1A"],
    vars: {
      background: "#FFFAF7",
      surface: "#FFFFFF",
      strong: "#F5EDF0",
      foreground: "#1B1120",
      muted: "#F5EEF1",
      mutedForeground: "#6B5E66",
      border: "#E7DCE1",
      accent: "#C25000",
      accentForeground: "#FFFFFF",
      accentSoft: "#FFE0C7",
      accentBright: "#FF9A55",
      accentInk: "#C25000",
    },
  },
];

const swatches: { label: string; token: string; on?: string }[] = [
  { label: "Paper", token: "background" },
  { label: "Surface", token: "surface" },
  { label: "Ink", token: "foreground" },
  { label: "Pop fill", token: "accent" },
  { label: "Pop as text", token: "accent-ink" },
  { label: "Pop on ink", token: "accent-bright", on: "foreground" },
  { label: "Pop soft", token: "accent-soft" },
];

const project = getFeaturedProjects()[0];

function paletteStyle(palette: Palette) {
  const { vars } = palette;
  return {
    "--background": vars.background,
    "--surface": vars.surface,
    "--surface-strong": vars.strong,
    "--foreground": vars.foreground,
    "--muted": vars.muted,
    "--muted-foreground": vars.mutedForeground,
    "--border": vars.border,
    "--accent": vars.accent,
    "--accent-foreground": vars.accentForeground,
    "--accent-soft": vars.accentSoft,
    "--accent-ink": vars.accentInk,
    "--dusk-background": vars.foreground,
    "--dusk-surface": `color-mix(in srgb, ${vars.foreground} 88%, white)`,
    "--dusk-surface-strong": `color-mix(in srgb, ${vars.foreground} 78%, white)`,
    "--dusk-foreground": "#FBFAF8",
    "--dusk-muted": `color-mix(in srgb, ${vars.foreground} 88%, white)`,
    "--dusk-muted-foreground": `color-mix(in srgb, #FBFAF8 62%, ${vars.foreground})`,
    "--dusk-border": `color-mix(in srgb, ${vars.foreground} 70%, white)`,
    "--dusk-accent": vars.accentBright,
    "--dusk-accent-foreground": vars.foreground,
    "--dusk-accent-soft": `color-mix(in srgb, ${vars.accentBright} 22%, ${vars.foreground})`,
    "--font-display": "var(--font-instrument), Georgia, serif",
    "--font-serif": "var(--font-instrument), Georgia, serif",
    "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
  } as React.CSSProperties;
}

export default function PalettesPage() {
  return (
    <main className={`${instrument.variable} ${geistMono.variable} pb-24`}>
      {palettes.map((palette) => (
        <section
          key={palette.id}
          data-palette={palette.id}
          style={paletteStyle(palette)}
          className="border-b border-border/70 bg-background text-foreground"
        >
          <div className="container-page py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Palette · white / dark / pop</p>
                <h2 className="display-2 mt-3">{palette.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                {palette.recipe.map((color) => (
                  <span
                    key={color}
                    className="flex items-center gap-2 rounded-full border border-border/70 py-1 pl-1 pr-3"
                  >
                    <span
                      className="size-5 rounded-full border border-border/60"
                      style={{ background: color }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {color}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <p className="lede measure mt-4">{palette.note}</p>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-7">
              {swatches.map((swatch) => (
                <div key={swatch.label}>
                  <div
                    className="relative h-16 rounded-md border border-border/70"
                    style={{
                      background: swatch.on
                        ? `var(--${swatch.on})`
                        : `var(--${swatch.token})`,
                    }}
                  >
                    {swatch.on ? (
                      <span
                        className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ background: `var(--${swatch.token})` }}
                      />
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {swatch.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="display-1">
                    Make it
                    <br />
                    <em className="italic text-accent-ink">obvious.</em>
                  </h3>
                  <p className="lede mt-6 max-w-md">
                    Calm, considered digital experiences with a focus on clarity,
                    usability, and the details that make complex things feel{" "}
                    <em className="font-display italic text-foreground">alive</em>.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    <Button>Start a conversation</Button>
                    <Button variant="rule">View selected work</Button>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="tag">Design systems</span>
                    <span className="tag">Product design</span>
                    <span className="eyebrow">01 — Philosophy</span>
                  </div>
                </div>
              </div>

              <div className="dark-section bg-background rounded-2xl border border-border/70 p-8 sm:p-10">
                <p className="eyebrow text-accent">On the dark</p>
                <h3 className="display-3 mt-4">
                  The pop
                  <br />
                  <em className="italic text-accent-ink">balances</em>{" "}the ink.
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  The same accent switches to its bright variant on dark surfaces,
                  so it never loses contrast against the dark colour.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <Button>Start a conversation</Button>
                  <Button variant="rule">View résumé</Button>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <span className="size-2.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Open to work · 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="surface-card p-4">
                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2 pt-4">
                  <p className="eyebrow">
                    {project.year} — {project.category}
                  </p>
                  <h4 className="title mt-2">{project.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="dark-section bg-background rounded-2xl border border-border/70 p-6">
                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getFeaturedProjects()[1].image}
                    alt={getFeaturedProjects()[1].title}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
                <div className="p-1 pt-4">
                  <p className="eyebrow text-accent">
                    {getFeaturedProjects()[1].year} —{" "}
                    {getFeaturedProjects()[1].category}
                  </p>
                  <h4 className="title mt-2">{getFeaturedProjects()[1].title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {getFeaturedProjects()[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
