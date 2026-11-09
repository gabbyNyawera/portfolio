import { Button } from "@/components/ui/button";

/**
 * Palette options read off the portfolio mood board (carnival + editorial print).
 * Scratch route: /design-system/palettes/moodboard
 */

type Option = {
  id: string;
  index: string;
  name: string;
  line: string;
  whenToPick: string;
  vars: {
    paper: string;
    surface: string;
    strong: string;
    ink: string;
    mutedFg: string;
    border: string;
    accent: string;
    accentFg: string;
    accentSoft: string;
    secondary: string;
    dusk: string;
    duskAccent: string;
  };
  ratios: { label: string; value: string }[];
};

const options: Option[] = [
  {
    id: "vermilion",
    index: "01",
    name: "Vermilion",
    line: "Cream stock, olive-black ink, festival red.",
    whenToPick:
      "The board's loudest colour held down by its darkest ink. Red is the carnival; olive keeps it grown-up. Closest to the pinned olive/cream/burgundy/orange card.",
    vars: {
      paper: "#FAF4E8",
      surface: "#FFFCF5",
      strong: "#F1E6D2",
      ink: "#1F2419",
      mutedFg: "#6A6A5C",
      border: "#E2D5BE",
      accent: "#B02A1D",
      accentFg: "#FFFAF0",
      accentSoft: "#F7DFC4",
      secondary: "#5C1622",
      dusk: "#1F2419",
      duskAccent: "#F2A649",
    },
    ratios: [
      { label: "ink / paper", value: "14.5" },
      { label: "muted / paper", value: "5.0" },
      { label: "accent / paper", value: "6.0" },
      { label: "accent / dusk", value: "7.8" },
    ],
  },
  {
    id: "carnation",
    index: "02",
    name: "Carnation",
    line: "Bone paper, oxblood ink, hot pink.",
    whenToPick:
      "The board's most repeated pop — Bruno Mars, LATINO, Carnival Santa Cruz. Teal dusk supplies the night-market contrast the red options can't.",
    vars: {
      paper: "#F7EFE6",
      surface: "#FFFBF6",
      strong: "#EFE0D2",
      ink: "#23131A",
      mutedFg: "#6E5B60",
      border: "#E0CFC2",
      accent: "#B0134B",
      accentFg: "#FFF7F2",
      accentSoft: "#F9D8D2",
      secondary: "#5C1622",
      dusk: "#17211F",
      duskAccent: "#F5B942",
    },
    ratios: [
      { label: "ink / paper", value: "15.6" },
      { label: "muted / paper", value: "5.5" },
      { label: "accent / paper", value: "6.1" },
      { label: "accent / dusk", value: "9.3" },
    ],
  },
  {
    id: "terracotta",
    index: "03",
    name: "Terracotta",
    line: "Sand paper, espresso ink, burnt orange.",
    whenToPick:
      "The quiet one. Accent and paper share a temperature, so the colour whispers instead of announcing. The most 'Old Money' / Klar portfolio read of the set.",
    vars: {
      paper: "#F6EEE3",
      surface: "#FFFDF9",
      strong: "#EDE0CE",
      ink: "#2B2119",
      mutedFg: "#6F6255",
      border: "#E0D2BE",
      accent: "#A8451F",
      accentFg: "#FFF8F1",
      accentSoft: "#F6DCC7",
      secondary: "#5C1622",
      dusk: "#2B2119",
      duskAccent: "#EFC98F",
    },
    ratios: [
      { label: "ink / paper", value: "13.7" },
      { label: "muted / paper", value: "5.1" },
      { label: "accent / paper", value: "5.2" },
      { label: "accent / dusk", value: "10.1" },
    ],
  },
  {
    id: "matcha",
    index: "04",
    name: "Matcha",
    line: "Warm cream, pine ink, the green you already have.",
    whenToPick:
      "The control. Only the paper warms; accent and dusk stay as live. Pick this if the board is about warmth and print, not about leaving green behind.",
    vars: {
      paper: "#FAF6EC",
      surface: "#FFFDF7",
      strong: "#F0EADA",
      ink: "#16211A",
      mutedFg: "#5F6355",
      border: "#DDD7C4",
      accent: "#4C7A00",
      accentFg: "#FFFFFF",
      accentSoft: "#E7F7C4",
      secondary: "#5C1622",
      dusk: "#16211A",
      duskAccent: "#B8F04A",
    },
    ratios: [
      { label: "ink / paper", value: "15.4" },
      { label: "muted / paper", value: "5.7" },
      { label: "accent / paper", value: "4.8" },
      { label: "accent / dusk", value: "12.3" },
    ],
  },
];

function paletteStyle(option: Option) {
  const v = option.vars;
  return {
    "--background": v.paper,
    "--surface": v.surface,
    "--surface-strong": v.strong,
    "--foreground": v.ink,
    "--muted": v.strong,
    "--muted-foreground": v.mutedFg,
    "--border": v.border,
    "--accent": v.accent,
    "--accent-foreground": v.accentFg,
    "--accent-soft": v.accentSoft,
    "--accent-ink": v.accent,
    "--burgundy": v.secondary,
    "--dusk-background": v.dusk,
    "--dusk-surface": `color-mix(in srgb, ${v.dusk} 90%, ${v.paper})`,
    "--dusk-surface-strong": `color-mix(in srgb, ${v.dusk} 80%, ${v.paper})`,
    "--dusk-foreground": v.paper,
    "--dusk-muted": `color-mix(in srgb, ${v.dusk} 90%, ${v.paper})`,
    "--dusk-muted-foreground": `color-mix(in srgb, ${v.paper} 64%, ${v.dusk})`,
    "--dusk-border": `color-mix(in srgb, ${v.paper} 22%, ${v.dusk})`,
    "--dusk-accent": v.duskAccent,
    "--dusk-accent-foreground": v.dusk,
    "--dusk-accent-soft": `color-mix(in srgb, ${v.duskAccent} 24%, ${v.dusk})`,
  } as React.CSSProperties;
}

function Swatch({
  color,
  label,
  hex,
  inkOn,
  tall,
}: {
  color: string;
  label: string;
  hex: string;
  inkOn?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-md border border-border/60 p-2.5 ${
        tall ? "h-24" : "h-16"
      }`}
      style={{ background: color, color: inkOn ?? "inherit" }}
    >
      <span className="text-[9px] font-medium uppercase tracking-[0.16em] opacity-70">
        {label}
      </span>
      <span className="text-[10px] tabular-nums tracking-[0.04em] opacity-90">
        {hex}
      </span>
    </div>
  );
}

export default function MoodboardPalettesPage() {
  return (
    <main className="bg-background pb-20">
      <header className="border-b border-border/70">
        <div className="container-page py-10">
          <p className="eyebrow">Palette options · read from the mood board</p>
          <h1 className="display-2 mt-3 max-w-3xl">
            Same structure. Four <em className="italic text-accent-ink">temperatures.</em>
          </h1>
          <p className="lede measure mt-4">
            Paper, ink, one pop, and a dusk inversion — unchanged. What moves is the
            family, and how warm the paper gets underneath it. Contrast figures are
            sampled against paper and against dusk.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 border-border/70 md:grid-cols-2 xl:grid-cols-4">
        {options.map((option) => {
          const v = option.vars;
          return (
            <article
              key={option.id}
              id={option.id}
              style={paletteStyle(option)}
              className="flex flex-col border-b border-border/70 bg-background text-foreground md:border-r"
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-border/70 px-5 py-4">
                <div>
                  <p className="eyebrow">{option.index} · option</p>
                  <h2 className="title mt-1">{option.name}</h2>
                </div>
                <span
                  className="size-3 shrink-0 rounded-full"
                  style={{ background: v.accent }}
                />
              </div>

              <div className="px-5 py-6">
                <h3 className="display-3">
                  Carnival,
                  <br />
                  <em className="italic text-accent-ink">in print.</em>
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                  {option.line}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Button size="sm">Say hello</Button>
                  <Button variant="rule" size="sm">
                    Work
                  </Button>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="tag">Design systems</span>
                  <span className="tag">Product</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 px-5 pb-6">
                <Swatch color={v.paper} label="paper" hex={v.paper} inkOn={v.ink} tall />
                <Swatch color={v.ink} label="ink" hex={v.ink} inkOn={v.paper} tall />
                <Swatch color={v.accent} label="pop" hex={v.accent} inkOn={v.accentFg} />
                <Swatch color={v.accentSoft} label="pop soft" hex={v.accentSoft} inkOn={v.ink} />
                <Swatch color={v.secondary} label="secondary" hex={v.secondary} inkOn={v.paper} />
                <Swatch color={v.strong} label="band" hex={v.strong} inkOn={v.ink} />
              </div>

              <div className="dark-section mt-auto bg-background px-5 py-6">
                <p className="eyebrow text-accent-ink">At dusk</p>
                <p className="mt-2 font-display text-2xl leading-tight tracking-[-0.01em]">
                  The same system,
                  <br />
                  <em className="italic text-accent-ink">after dark.</em>
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Open to work
                  </span>
                  <span
                    className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ background: v.duskAccent, color: v.dusk }}
                  >
                    {v.duskAccent}
                  </span>
                </div>
              </div>

              <div className="border-t border-border/70 px-5 py-5">
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {option.ratios.map((ratio) => (
                    <p
                      key={ratio.label}
                      className="flex items-baseline justify-between gap-2 text-[10px] text-muted-foreground"
                    >
                      <span>{ratio.label}</span>
                      <span className="tabular-nums text-foreground">{ratio.value}</span>
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground">
                  {option.whenToPick}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="container-page pt-10">
        <div className="measure">
          <p className="eyebrow">The real decision</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The board is two-accent — red with teal or green. This system is
            one-accent. Every option here keeps that rule and lets the second colour
            live only inside artwork. Breaking it is a separate decision, not a
            palette swap.
          </p>
        </div>
      </footer>
    </main>
  );
}
