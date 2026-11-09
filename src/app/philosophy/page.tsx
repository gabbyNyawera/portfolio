"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PhilosophyNav } from "@/components/philosophy-nav";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

type Asset = {
  src?: string;
  alt?: string;
  mark?: string;
};

type PhilosophyEntry = {
  id: string;
  label: string;
  group: "intro" | "philosophy";
  quote: string[];
  copy?: string;
  example?: {
    meta: string;
    headline: string;
    copy: string;
    assets: Asset[];
  };
};

const philosophyEntries: PhilosophyEntry[] = [
  {
    id: "core-belief",
    label: "Core Belief",
    group: "intro",
    quote: ["Design should", "feel alive."],
  },
  {
    id: "clarity",
    label: "Clarity",
    group: "philosophy",
    quote: ["If it needs explanation,", "it's not done."],
    copy: "Cleverness is easy. Clarity is hard. The best design is the design you don't notice — it just works. If someone has to think too much, I've failed.",
  },
  {
    id: "clarity-example",
    label: "Clarity — Example",
    group: "philosophy",
    quote: ["Push or pull?"],
    example: {
      meta: "Don Norman & The Norman Door",
      headline: "Push or pull?",
      copy: "If you need a sign to explain how to use it, the design has failed. Clarity means the interface disappears — you just act.",
      assets: [
        {
          src: "/images/philosophy/norman-teapot.jpg",
          alt: "Don Norman's Nanna teapot",
        },
        { mark: "?" },
      ],
    },
  },
  {
    id: "functionality",
    label: "Functionality",
    group: "philosophy",
    quote: ["Form follows function", "— not the other way around."],
    copy: "Every element should earn its place by solving a problem, not by looking interesting. If it doesn't serve a purpose, it doesn't stay.",
  },
  {
    id: "functionality-example",
    label: "Functionality — Example",
    group: "philosophy",
    quote: ["Form follows function."],
    example: {
      meta: "MUJI Speaker & Apple Magic Mouse",
      headline: "Form follows function.",
      copy: "Fukasawa's MUJI speaker: pull the cord, it plays. The Magic Mouse: beautiful, but you can't use it while charging. When form overrides function, the design fails.",
      assets: [
        { mark: "MUJI" },
        {
          src: "/images/philosophy/magic-mouse.jpg",
          alt: "Apple Magic Mouse charging upside down",
        },
      ],
    },
  },
  {
    id: "whitespace",
    label: "Whitespace",
    group: "philosophy",
    quote: ["What you leave out", "defines what remains."],
    copy: "Breathing room. The space between elements is just as important as the elements themselves. Restraint isn't minimalism — it's focus.",
  },
  {
    id: "whitespace-example",
    label: "Whitespace — Example",
    group: "philosophy",
    quote: ["The empty space isn't empty."],
    example: {
      meta: "JQ Face",
      headline: "The empty space isn't empty.",
      copy: "A fashion brand where whitespace lets the products breathe. Generous margins create luxury. Restraint isn't minimalism — it's focus.",
      assets: [{ mark: "JQ" }],
    },
  },
  {
    id: "intentionality",
    label: "Intentionality",
    group: "philosophy",
    quote: ["Nothing is accidental.", "Every pixel earns its place."],
    copy: "Design for human error. Every interaction, every word should be there for a reason. If you can't explain why it exists, it probably shouldn't.",
  },
  {
    id: "intentionality-example",
    label: "Intentionality — Example",
    group: "philosophy",
    quote: ["Every interaction designed with purpose."],
    example: {
      meta: "Thais House to Home",
      headline: "Every interaction designed with purpose.",
      copy: "A real estate platform streamlined to three taps. Property cards showed exactly the information needed to make a decision — nothing more, nothing less.",
      assets: [{ mark: "TH" }],
    },
  },
];

const processSteps = [
  {
    id: "process-discover",
    step: "01",
    title: "Discover",
    summary: "Understand before creating.",
  },
  {
    id: "process-define",
    step: "02",
    title: "Define",
    summary: "Clarify the problem.",
  },
  {
    id: "process-design",
    step: "03",
    title: "Design",
    summary: "Explore structure.",
  },
  {
    id: "process-deliver",
    step: "04",
    title: "Deliver",
    summary: "Refine until ready.",
  },
  {
    id: "process-iterate",
    step: "05",
    title: "Iterate",
    summary: "Remove until it breaks.",
  },
];

const slides = [
  ...philosophyEntries.map((entry) => ({
    id: entry.id,
    label: entry.label,
    group: entry.group,
  })),
  ...processSteps.map((step) => ({
    id: step.id,
    label: step.title,
    group: "process" as const,
  })),
];

function AssetPlate({ asset }: { asset: Asset }) {
  return (
    <div className="asset-frame relative aspect-square w-full">
      {asset.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset.src}
          alt={asset.alt ?? ""}
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="asset-grid opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="font-display text-5xl italic text-foreground/25">
              {asset.mark}
            </span>
          </div>
        </>
      )}
      <span className="absolute left-3 top-3 font-sans font-medium text-[8px] uppercase tracking-[0.18em] text-foreground/40">
        Plate
      </span>
    </div>
  );
}

function StatementSlide({ entry }: { entry: PhilosophyEntry }) {
  return (
    <section
      id={entry.id}
      className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-6 sm:px-8 lg:pl-56"
    >
      <div className="max-w-3xl text-center">
        {entry.group === "intro" ? (
          <h1 className="display-1">
            {entry.quote[0]}
            <br />
            <em className="italic text-accent-ink">{entry.quote[1]}</em>
          </h1>
        ) : (
          <blockquote className="display-2">
            &ldquo;{entry.quote[0]}
            <br />
            <em className="italic text-accent-ink">{entry.quote[1]}&rdquo;</em>
          </blockquote>
        )}
        {entry.copy ? (
          <p className="lede mx-auto mt-10 max-w-md">{entry.copy}</p>
        ) : null}
      </div>
    </section>
  );
}

function ExampleSlide({ entry }: { entry: PhilosophyEntry }) {
  const example = entry.example;
  if (!example) return null;

  return (
    <section
      id={entry.id}
      className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-6 sm:px-8 lg:pl-56"
    >
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        <div
          className={cn(
            "grid gap-4",
            example.assets.length > 1 ? "grid-cols-2" : "grid-cols-1"
          )}
        >
          {example.assets.map((asset, index) => (
            <AssetPlate key={asset.src ?? asset.mark ?? index} asset={asset} />
          ))}
        </div>

        <div className="max-w-xs md:pl-6">
          <p className="eyebrow">{example.meta}</p>
          <p className="display-3 mt-4 text-[1.75rem]">{example.headline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {example.copy}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSlide({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <section
      id={step.id}
      className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-6 sm:px-8 lg:pl-56"
    >
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="max-w-md md:pr-8">
          <h2 className="display-3">{step.title}</h2>
          <p className="lede mt-4">{step.summary}</p>
        </div>

        <div className="asset-frame relative aspect-[4/3] w-full">
          <div className="asset-grid opacity-25" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[9rem] leading-none text-foreground/10">
              {step.step}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="display-3 text-2xl">Placeholder headline</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Placeholder — replace with a real example of the {step.title} step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PhilosophyPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const slideWidth = scrollRef.current.clientWidth;
    setActiveSlide(Math.round(scrollLeft / slideWidth));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveSlide, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveSlide);
  }, [updateActiveSlide]);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const slideWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark-section dusk-wash min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PhilosophyNav
        slides={slides}
        activeSlide={activeSlide}
        onSlideClick={scrollToSlide}
        total={slides.length}
      />

      <div
        ref={scrollRef}
        className="flex h-screen w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {philosophyEntries.map((entry) =>
          entry.example ? (
            <ExampleSlide key={entry.id} entry={entry} />
          ) : (
            <StatementSlide key={entry.id} entry={entry} />
          )
        )}

        {processSteps.map((step) => (
          <ProcessSlide key={step.id} step={step} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollToSlide(activeSlide + 1)}
        disabled={activeSlide === slides.length - 1}
        aria-label="Next slide"
        className={cn(
          "fixed right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 text-muted-foreground transition-opacity duration-500 hover:text-foreground disabled:pointer-events-none sm:right-8",
          activeSlide === slides.length - 1 ? "opacity-0" : "opacity-100"
        )}
      >
        <span className="font-sans font-medium text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Next
        </span>
        <span className="swipe-hint-arrow">
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </span>
      </button>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-30 hidden justify-center lg:flex lg:pl-56">
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-5 py-3 font-sans font-medium text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft className="size-3" /> Previous
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide + 1)}
            disabled={activeSlide === slides.length - 1}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-5 py-3 font-sans font-medium text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
          >
            Next <ArrowRight className="size-3" />
          </button>
        </div>
      </div>

      <footer className="fixed bottom-0 right-0 z-30 hidden px-8 py-6 lg:block">
        <div className="flex items-center gap-6">
          <p className="font-sans font-medium text-[10px] text-foreground/30">
            &copy; 2026 Gabrielle Nyawera
          </p>
          <Link
            href="/"
            className="font-sans font-medium text-[10px] text-foreground/30 transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
