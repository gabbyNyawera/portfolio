/**
 * PROTOTYPE — throwaway.
 *
 * Question: "What character should the button have?" — a UI/look question.
 * Direction P (forest pill) is the baseline. The other four keep the same
 * paper / forest / lime material but give it a different kind of life:
 * type, wipe, disc, shimmer. The winner gets folded into the real Button.
 */

import { ArrowUpRight } from "lucide-react";
import { Sketch, type SketchKey } from "./button-sketches";
import { PrototypeSwitcher } from "./prototype-switcher";

const OPTIONS: { key: SketchKey; name: string }[] = [
  { key: "A", name: "Soft pill" },
  { key: "B", name: "Serif pill" },
  { key: "C", name: "Wipe" },
  { key: "D", name: "Disc" },
  { key: "E", name: "Shimmer" },
];

const NOTES: Record<
  SketchKey,
  {
    title: string;
    note: string;
    rest: string;
    hover: string;
    dusk: string;
  }
> = {
  A: {
    title: "Soft pill",
    note: "The baseline from direction P: flat forest pill, paper label, a soft bloom and a light that follows the pointer. The control for the other four.",
    rest: "Forest fill, soft contact bloom.",
    hover: "Bloom deepens and tracks the pointer.",
    dusk: "Flips to paper fill with a lime bloom.",
  },
  B: {
    title: "Serif pill",
    note: "The label is the character. Instrument Serif italic at 22px inside the same pill — closer to a pull-quote than a control, and the most on-brand option for an editorial portfolio.",
    rest: "Forest fill, italic serif label.",
    hover: "Bloom deepens; arrow steps out.",
    dusk: "Paper fill, forest italic, lime bloom.",
  },
  C: {
    title: "Wipe",
    note: "A lime flood rises from the bottom edge and the label flips to forest. The shape never moves — only the surface does. The most legible 'something happened' state of the five.",
    rest: "Forest fill, paper label.",
    hover: "Lime wipes up in 500ms; label inverts.",
    dusk: "Paper fill; lime wipe; forest label.",
  },
  D: {
    title: "Disc",
    note: "An arrow disc sits in the right cap. On hover it expands to swallow the whole pill, so the arrow becomes the surface. The most mechanical and playful option.",
    rest: "Forest fill, lime arrow disc.",
    hover: "Disc scales to fill; label inverts.",
    dusk: "Paper fill, lime disc, forest label.",
  },
  E: {
    title: "Shimmer",
    note: "A band of light crosses the pill every 4.5 seconds, like the reference loop. It is the only option that keeps moving when nobody is touching it.",
    rest: "Forest fill, light sweeping on a loop.",
    hover: "Arrow steps out; sweep continues.",
    dusk: "Paper fill with a lime sweep.",
  },
};

function VariantHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note: string;
}) {
  return (
    <div className="grid gap-3 border-t border-border pt-5 md:grid-cols-[3rem_1fr_1.1fr] md:items-baseline md:gap-8">
      <span className="eyebrow">{index}</span>
      <h2 className="title">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}

function QuietAction({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="group inline-flex min-h-11 items-center gap-2 border-b-2 border-foreground pb-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 hover:border-accent"
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  );
}

function Specimen({ variant }: { variant: SketchKey }) {
  const meta = NOTES[variant];

  return (
    <section className="container-page mt-16 scroll-mt-32">
      <VariantHeading index="Character" title={meta.title} note={meta.note} />

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
        <div className="surface-card relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-accent-soft/60 blur-3xl"
          />
          <p className="eyebrow relative">Available for select work</p>
          <p className="relative mt-4 max-w-md font-display text-3xl leading-[1.08] tracking-tight sm:text-[2.6rem]">
            Good work starts with a good conversation.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Sketch variant={variant} />
            <QuietAction>View selected work</QuietAction>
          </div>

          <dl className="relative mt-10 grid gap-3 border-t border-border/70 pt-6 text-sm sm:grid-cols-3 sm:gap-5">
            {[
              ["At rest", meta.rest],
              ["On hover", meta.hover],
              ["On dusk", meta.dusk],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="eyebrow">{term}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="dark-section dusk-wash flex flex-col justify-between rounded-[var(--radius-card)] border border-border/70 p-8 text-foreground">
          <div>
            <p className="eyebrow">On dusk</p>
            <p className="mt-4 font-display text-2xl leading-tight">
              The same pill, lit from within.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5">
            <Sketch variant={variant} />
            <button
              type="button"
              className="group inline-flex min-h-11 items-center gap-2 border-b-2 border-foreground pb-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 hover:border-accent"
            >
              View selected work
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <span className="eyebrow">Header · 44px</span>
            <span className="font-display text-lg italic">
              Hover it, then leave it.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compare({ current }: { current: SketchKey }) {
  return (
    <section className="container-page mt-24 scroll-mt-32">
      <VariantHeading
        index="Compare"
        title="Five characters, one material"
        note="All five at rest, on paper and on dusk. Hover each to feel the difference."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {OPTIONS.map(({ key, name }) => (
          <div
            key={key}
            className={cnCard(key === current)}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">
                {key} · {name}
              </p>
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground">
                {NOTES[key].title}
              </span>
            </div>

            <div className="surface-card mt-4 flex min-h-36 items-center justify-center p-6">
              <Sketch variant={key} />
            </div>

            <div className="dark-section dusk-wash mt-3 flex min-h-28 items-center justify-center rounded-[var(--radius-card)] border border-border/70 p-6">
              <Sketch variant={key} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function cnCard(active: boolean) {
  return active
    ? "rounded-[var(--radius-card)] border border-accent/40 p-3"
    : "rounded-[var(--radius-card)] border border-transparent p-3";
}

export function ButtonsPrototype({ variant: raw }: { variant?: string }) {
  const key = raw?.toUpperCase();
  const option = OPTIONS.some((o) => o.key === key)
    ? (key as SketchKey)
    : "C";

  return (
    <main className="pb-40 pt-32">
      <div className="container-page">
        <p className="eyebrow">Prototype — Buttons</p>
        <h1 className="display-2 mt-4">
          The pill has
          <br />
          <em className="italic text-accent-ink">a pulse.</em>
        </h1>
        <p className="lede measure mt-6">
          Direction P is the baseline. These four keep the same paper, forest
          and lime — but give the button a behaviour you can feel: type, a wipe,
          a disc, a shimmer. Nothing here is a new palette; it is the same
          material, moving.
        </p>
      </div>

      <Specimen variant={option} />
      <Compare current={option} />

      <PrototypeSwitcher variants={OPTIONS} current={option} param="buttons" />
    </main>
  );
}
