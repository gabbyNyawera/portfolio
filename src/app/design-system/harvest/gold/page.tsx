import { Instrument_Serif, Geist_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const PAPER = "#FFFCF5";
const INK = "#0A0A0A";
const OXBLOOD = "#5C121B";

const options = [
  {
    id: "maize",
    name: "Maize",
    hex: "#F0A93B",
    ink: "#845D20",
    note: "What you have now. Brightest, most yellow — reads lemon next to cream.",
  },
  {
    id: "amber",
    name: "Amber",
    hex: "#E3A02C",
    ink: "#865E1A",
    note: "One step deeper and warmer. Still clearly gold, loses the lemon edge.",
  },
  {
    id: "honey",
    name: "Honey",
    hex: "#D99A2B",
    ink: "#845E1A",
    note: "Deeper again, browner. Quietest gold; sits closer to oxblood in temperature.",
  },
  {
    id: "persimmon",
    name: "Persimmon",
    hex: "#EA7A2B",
    ink: "#9D521D",
    note: "Halfway to orange. Warmest, most autumnal, most distinct from cream.",
  },
  {
    id: "burnt",
    name: "Burnt orange",
    hex: "#E4571D",
    ink: "#B04316",
    note: "The Ember orange. Loudest and least gold — the biggest departure.",
  },
] as const;

export default function GoldPage() {
  return (
    <main
      className={`${instrument.variable} ${geistMono.variable} min-h-screen`}
      style={
        {
          background: PAPER,
          color: INK,
          "--font-display": "var(--font-instrument), Georgia, serif",
          "--font-serif": "var(--font-instrument), Georgia, serif",
          "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
          "--border": "color-mix(in srgb, #0A0A0A 14%, #FFFCF5)",
          "--muted-foreground": "color-mix(in srgb, #0A0A0A 62%, #FFFCF5)",
          "--accent": "#845D20",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-20">
        <p className="eyebrow">Harvest · the pop</p>
        <h1 className="display-2 mt-4">
          Five golds,
          <br />
          <em className="italic text-accent">one job.</em>
        </h1>
        <p className="lede measure mt-4">
          Cream, black and oxblood are fixed. Only the fourth colour changes.
          Each block below is the same specimen: fill with black type, a primary
          button, accent text on cream, and the same gold on oxblood.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {options.map((option) => (
            <section
              key={option.id}
              data-gold={option.id}
              className="overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span
                    className="size-9 rounded-full"
                    style={{ background: option.hex, boxShadow: `0 0 0 1px ${INK}22` }}
                  />
                  <div>
                    <p className="font-display text-xl leading-none">{option.name}</p>
                    <p
                      className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {option.hex}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 opacity-40" />
              </div>

              {/* accent text on cream */}
              <div className="px-5">
                <p className="display-3">
                  Design that{" "}
                  <em className="italic" style={{ color: option.ink }}>
                    feels alive.
                  </em>
                </p>
                <p
                  className="mt-3 min-h-[2.9rem] text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {option.note}
                </p>
                <div className="mt-4 flex items-center gap-3 pb-5">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium"
                    style={{ background: option.hex, color: INK }}
                  >
                    Let&apos;s talk
                    <ArrowUpRight className="size-4" />
                  </button>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                    ink on fill
                  </span>
                </div>
              </div>

              {/* full-bleed block + oxblood strip */}
              <div className="grid grid-cols-[1.15fr_0.85fr]">
                <div className="p-5" style={{ background: option.hex, color: INK }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                    Pop block
                  </p>
                  <p className="mt-3 font-display text-xl leading-tight">
                    A colour this rich should take up space.
                  </p>
                </div>
                <div className="p-5" style={{ background: OXBLOOD, color: PAPER }}>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{ color: option.hex }}
                  >
                    On oxblood
                  </p>
                  <p className="mt-3 font-display text-xl leading-tight">
                    And{" "}
                    <em className="italic" style={{ color: option.hex }}>
                      balances
                    </em>{" "}
                    the dark.
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
