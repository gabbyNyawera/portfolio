import {
  Instrument_Serif,
  Newsreader,
  Fraunces,
  Source_Serif_4,
} from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";

const instrument = Instrument_Serif({
  variable: "--t-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--t-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  variable: "--t-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--t-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const faces = [
  {
    id: "instrument",
    name: "Instrument Serif",
    varName: "var(--t-instrument), Georgia, serif",
    weight: "400",
    tracking: "-0.015em",
    note: "High contrast, sharp thin serifs, and a true italic with a real swash. The most editorial of the four — it makes the page look art-directed.",
    risk: "Only one weight. Small sizes lose their thin strokes, so it stays in display sizes.",
  },
  {
    id: "newsreader",
    name: "Newsreader",
    varName: "var(--t-newsreader), Georgia, serif",
    weight: "400",
    tracking: "-0.02em",
    note: "Literary and low-contrast. The italic is generous and calm rather than dramatic. Reads like a well-set magazine.",
    risk: "Quietest personality. It will not carry the page on its own — the colour has to.",
  },
  {
    id: "fraunces",
    name: "Fraunces",
    varName: "var(--t-fraunces), Georgia, serif",
    weight: "300",
    tracking: "-0.03em",
    note: "What you have now. Soft, slightly wonky, variable, with a warm italic. The friendliest of the four.",
    risk: "Very widely used in 2024–26 portfolios. It reads as a trend rather than a choice.",
  },
  {
    id: "source-serif",
    name: "Source Serif 4",
    varName: "var(--t-source-serif), Georgia, serif",
    weight: "400",
    tracking: "-0.02em",
    note: "A sturdy workhorse. Neutral, highly legible, with a clean italic. Gets out of the way.",
    risk: "Least personality. Safe to the point of being forgettable at display size.",
  },
] as const;

const project = getFeaturedProjects()[0];

export default function TypePage() {
  return (
    <main
      className={`${instrument.variable} ${newsreader.variable} ${fraunces.variable} ${sourceSerif.variable} bg-background text-foreground`}
    >
      <style>{`
        [data-face] .display-1,
        [data-face] .display-2,
        [data-face] .display-3 {
          font-weight: var(--face-weight);
          letter-spacing: var(--face-tracking);
        }
      `}</style>

      <div className="container-page pt-16 pb-12">
        <p className="eyebrow">Type · display face</p>
        <h1 className="display-2 mt-4">
          Four voices,
          <br />
          <em className="italic text-accent-ink">one page.</em>
        </h1>
        <p className="lede measure mt-5">
          The palette is locked, so only the display face changes. Body stays
          Inter and labels stay Geist Mono — those two are working. What is being
          decided here is the voice of the headlines and the italic accent.
        </p>
      </div>

      {faces.map((face) => (
        <section
          key={face.id}
          data-face={face.id}
          style={
            {
              "--font-display": face.varName,
              "--font-serif": face.varName,
              "--face-weight": face.weight,
              "--face-tracking": face.tracking,
            } as React.CSSProperties
          }
          className="border-t border-border"
        >
          <div className="container-page py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Face {face.id.toUpperCase()}</p>
                <h2 className="display-3 mt-2">{face.name}</h2>
              </div>
              <p className="font-mono text-micro uppercase tracking-[0.14em] text-muted-foreground">
                {face.weight} · {face.tracking}
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h3 className="display-1">
                  Gabe
                  <br />
                  Product
                  <br />
                  <em className="italic text-accent-ink">Designer.</em>
                </h3>
                <p className="lede mt-6 max-w-md">
                  I design experiences that{" "}
                  <em className="font-display italic text-foreground">feel alive</em>{" "}
                  — calm, considered digital experiences built around how people
                  actually behave.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
                  >
                    Start a conversation
                    <ArrowUpRight className="size-4" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm"
                  >
                    View selected work
                  </button>
                </div>
              </div>

              <div className="surface-card self-start p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-md bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2 pt-5">
                  <p className="eyebrow">
                    {project.year} — {project.category}
                  </p>
                  <h4 className="title mt-2">{project.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="tag mt-4">Design systems</span>
                </div>
              </div>
            </div>

            <div className="dark-section mt-10 rounded-xl bg-background px-6 py-10 sm:px-10">
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="eyebrow text-accent-ink">On oxblood</p>
                  <h3 className="display-2 mt-3">
                    Experiences that{" "}
                    <em className="italic text-accent-ink">feel alive.</em>
                  </h3>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {face.note}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-mono text-micro uppercase tracking-[0.14em] text-foreground">
                  Risk —{" "}
                </span>
                {face.risk}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
