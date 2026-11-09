import {
  Archivo,
  Bricolage_Grotesque,
  Geist_Mono,
  Instrument_Serif,
  Inter_Tight,
  Newsreader,
  Space_Grotesk,
} from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"] });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const boards = [
  {
    id: "swiss-signal",
    name: "Swiss signal",
    white: "#FFFFFF",
    dark: "#111111",
    pop: "#FF3B1F",
    popInk: "#C42A10",
    popText: "#111111",
    display: "Inter Tight",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-inter-tight)",
    displayWeight: 700,
    width: 700,
  },
  {
    id: "forest-flame",
    name: "Forest flame",
    white: "#FFFFFF",
    dark: "#0E241C",
    pop: "#FF6B00",
    popInk: "#B34700",
    popText: "#0E241C",
    display: "Archivo",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-archivo)",
    displayWeight: 700,
    width: 600,
  },
  {
    id: "navy-acid",
    name: "Navy acid",
    white: "#FFFFFF",
    dark: "#0B1626",
    pop: "#C6FF3D",
    popInk: "#4F7A00",
    popText: "#0B1626",
    display: "Space Grotesk",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-space-grotesk)",
    displayWeight: 600,
    width: 600,
  },
  {
    id: "aubergine-pink",
    name: "Aubergine pink",
    white: "#FFFFFF",
    dark: "#211426",
    pop: "#FF4FA3",
    popInk: "#C2185B",
    popText: "#211426",
    display: "Instrument Serif",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-instrument)",
    displayWeight: 400,
    width: 400,
  },
  {
    id: "espresso-cobalt",
    name: "Espresso cobalt",
    white: "#FFFFFF",
    dark: "#1A1410",
    pop: "#2F5BFF",
    popInk: "#2446D8",
    popText: "#FFFFFF",
    display: "Newsreader",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-newsreader)",
    displayWeight: 300,
    width: 300,
  },
  {
    id: "black-acid",
    name: "Black acid",
    white: "#FFFFFF",
    dark: "#0A0A0A",
    pop: "#E8FF00",
    popInk: "#6E6400",
    popText: "#0A0A0A",
    display: "Bricolage Grotesque",
    body: "Inter",
    mono: "Geist Mono",
    displayVar: "var(--font-bricolage)",
    displayWeight: 700,
    width: 700,
  },
] as const;

function boardStyle(board: (typeof boards)[number]) {
  return {
    "--background": board.white,
    "--surface": board.white,
    "--surface-strong": `color-mix(in srgb, ${board.dark} 8%, ${board.white})`,
    "--foreground": board.dark,
    "--muted-foreground": `color-mix(in srgb, ${board.dark} 62%, ${board.white})`,
    "--border": `color-mix(in srgb, ${board.dark} 16%, ${board.white})`,
    "--accent": board.popInk,
    "--accent-foreground": board.popText,
    "--accent-soft": `color-mix(in srgb, ${board.pop} 24%, ${board.white})`,
    "--dusk-background": board.dark,
    "--dusk-surface": `color-mix(in srgb, ${board.dark} 92%, white)`,
    "--dusk-surface-strong": `color-mix(in srgb, ${board.dark} 84%, white)`,
    "--dusk-foreground": "#FFFFFF",
    "--dusk-muted-foreground": `color-mix(in srgb, #FFFFFF 68%, ${board.dark})`,
    "--dusk-border": `color-mix(in srgb, #FFFFFF 24%, ${board.dark})`,
    "--dusk-accent": board.pop,
    "--dusk-accent-foreground": board.popText,
    "--dusk-accent-soft": `color-mix(in srgb, ${board.pop} 24%, ${board.dark})`,
    "--font-display": `${board.displayVar}, system-ui, sans-serif`,
    "--font-serif": `${board.displayVar}, Georgia, serif`,
    "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
    "--board-weight": String(board.displayWeight),
  } as React.CSSProperties;
}

const fonts = [
  interTight.variable,
  archivo.variable,
  spaceGrotesk.variable,
  instrument.variable,
  newsreader.variable,
  bricolage.variable,
  geistMono.variable,
].join(" ");

export default function BoardsPage() {
  return (
    <main
      className={`${fonts} bg-background pb-20 text-foreground`}
      style={
        {
          "--background": "#FFFFFF",
          "--foreground": "#111111",
          "--muted-foreground": "#666666",
          "--border": "#E4E4E4",
        } as React.CSSProperties
      }
    >
      <div className="container-page pt-16">
        <p className="eyebrow">Colour &amp; type</p>
        <h1 className="display-2 mt-4">Six ways to hold the dark</h1>
        <p className="lede measure mt-4">
          White canvas, one dark colour, one pop that balances it. Same layout
          every time, so the only variable is the trio and the typeface.
        </p>
      </div>

      <div className="container-page mt-12 grid gap-8 lg:grid-cols-2">
        {boards.map((board) => (
          <section
            key={board.id}
            data-board={board.id}
            style={boardStyle(board)}
            className="overflow-hidden rounded-2xl border border-border/70 bg-background text-foreground"
          >
            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-2">
                {[board.white, board.dark, board.pop].map((color) => (
                  <span
                    key={color}
                    className="size-7 rounded-full border border-border/60"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{board.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {board.display} · {board.body} · {board.mono}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5">
              <p
                className="display-2"
                style={{ fontWeight: "var(--board-weight)" }}
              >
                Make it
                <br />
                <span className="text-accent">obvious.</span>
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Calm, considered digital experiences — the kind of detail that
                makes complex things feel{" "}
                <em className="font-display italic text-foreground">alive</em>.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="size-4" />
                </button>
                <span className="inline-flex h-10 items-center rounded-full border border-border px-4 text-xs text-muted-foreground">
                  View work
                </span>
                <span className="eyebrow">01 — Philosophy</span>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-accent p-5 text-accent-foreground">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-80">
                  Pop block
                </p>
                <p className="mt-3 font-display text-2xl leading-tight">
                  A colour this loud should take up space.
                </p>
              </div>
              <div className="dark-section bg-background p-5">
                <p className="eyebrow text-accent">On the dark</p>
                <p className="mt-3 font-display text-2xl leading-tight">
                  And the same colour{" "}
                  <em className="italic text-accent">balances</em> the dark.
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
