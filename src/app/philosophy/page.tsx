"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PhilosophyNav } from "@/components/philosophy-nav";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

type ProcessStep = {
  id: string;
  step: string;
  title: string;
  summary: string;
  example: {
    label: string;
    headline: string;
    copy: string;
    image: string;
  };
};

/**
 * Design process — one step per slide, each with an inline example.
 * PLACEHOLDER CONTENT: swap `example.image` (path in /public) and the
 * `headline`/`copy` for each step when the real case-study material is ready.
 */
const processSteps: ProcessStep[] = [
  {
    id: "process-discover",
    step: "01",
    title: "Discover",
    summary: "Understand before creating.",
    example: {
      label: "Example",
      headline: "Placeholder headline",
      copy: "Placeholder — replace with a real example of the Discover step.",
      image: "",
    },
  },
  {
    id: "process-define",
    step: "02",
    title: "Define",
    summary: "Clarify the problem.",
    example: {
      label: "Example",
      headline: "Placeholder headline",
      copy: "Placeholder — replace with a real example of the Define step.",
      image: "",
    },
  },
  {
    id: "process-design",
    step: "03",
    title: "Design",
    summary: "Explore structure.",
    example: {
      label: "Example",
      headline: "Placeholder headline",
      copy: "Placeholder — replace with a real example of the Design step.",
      image: "",
    },
  },
  {
    id: "process-deliver",
    step: "04",
    title: "Deliver",
    summary: "Refine until ready.",
    example: {
      label: "Example",
      headline: "Placeholder headline",
      copy: "Placeholder — replace with a real example of the Deliver step.",
      image: "",
    },
  },
  {
    id: "process-iterate",
    step: "05",
    title: "Iterate",
    summary: "Remove until it breaks.",
    example: {
      label: "Example",
      headline: "Placeholder headline",
      copy: "Placeholder — replace with a real example of the Iterate step.",
      image: "",
    },
  },
];

const slides = [
  { id: "core-belief", label: "Core Belief", group: "intro" },
  { id: "clarity", label: "Clarity", group: "philosophy" },
  { id: "clarity-example", label: "Clarity — Example", group: "philosophy" },
  { id: "functionality", label: "Functionality", group: "philosophy" },
  { id: "functionality-example", label: "Functionality — Example", group: "philosophy" },
  { id: "whitespace", label: "Whitespace", group: "philosophy" },
  { id: "whitespace-example", label: "Whitespace — Example", group: "philosophy" },
  { id: "intentionality", label: "Intentionality", group: "philosophy" },
  { id: "intentionality-example", label: "Intentionality — Example", group: "philosophy" },
  ...processSteps.map((step) => ({
    id: step.id,
    label: step.title,
    group: "process",
  })),
];

export default function PhilosophyPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const slideWidth = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveSlide(index);
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
    <div className="dark-section min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Nav overlay */}
      <PhilosophyNav
        slides={slides}
        activeSlide={activeSlide}
        onSlideClick={scrollToSlide}
        total={slides.length}
      />

      {/* Horizontal scroll container — slides offset right to clear the fixed sidebar */}
      <div
        ref={scrollRef}
        className="flex h-screen w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {/* SLIDE 01 — CORE BELIEF */}
        <section
          id="core-belief"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
              Core Belief
            </p>
            <h1 className="font-serif text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Design should
              <br />
              <span className="font-light">feel alive.</span>
            </h1>
          </div>
        </section>

        {/* SLIDE 02 — CLARITY */}
        <section
          id="clarity"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
              Clarity
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;If it needs explanation,
              <br />
              <span className="font-light">it&apos;s not done.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-foreground/50">
              Cleverness is easy. Clarity is hard. The best design is the
              design you don&apos;t notice — it just works. If someone has to
              think too much, I&apos;ve failed.
            </p>
          </div>
        </section>

        {/* SLIDE 03 — CLARITY EXAMPLE */}
        <section
          id="clarity-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-5xl w-full grid gap-0 md:grid-cols-2 items-center divide-foreground/10 md:divide-x">
            <div className="flex gap-4 p-8">
              <div className="relative flex-1">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                <div className="w-full aspect-square bg-foreground/5 overflow-hidden">
                  <img src="/images/philosophy/norman-teapot.jpg" alt="Don Norman's Nanna teapot" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                <div className="w-full aspect-square bg-foreground/5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5" />
                </div>
              </div>
            </div>
            <div className="max-w-xs p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
                Don Norman &amp; The Norman Door
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-foreground/80 mb-4">
                Push or pull?
              </p>
              <p className="text-sm leading-relaxed text-foreground/40">
                If you need a sign to explain how to use it, the design has failed.
                Clarity means the interface disappears — you just act.
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 04 — FUNCTIONALITY */}
        <section
          id="functionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
              Functionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Form follows function
              <br />
              <span className="font-light">— not the other way around.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-foreground/50">
              Every element should earn its place by solving a problem, not by
              looking interesting. If it doesn&apos;t serve a purpose, it
              doesn&apos;t stay.
            </p>
          </div>
        </section>

        {/* SLIDE 05 — FUNCTIONALITY EXAMPLE */}
        <section
          id="functionality-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-5xl w-full grid gap-0 md:grid-cols-2 items-center divide-foreground/10 md:divide-x">
            <div className="flex gap-4 p-8">
              <div className="relative flex-1">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                <div className="w-full aspect-square bg-foreground/5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5" />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                <div className="w-full aspect-square bg-foreground/5 overflow-hidden">
                  <img src="/images/philosophy/magic-mouse.jpg" alt="Apple Magic Mouse charging upside down" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="max-w-xs p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
                MUJI Speaker &amp; Apple Magic Mouse
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-foreground/80 mb-4">
                Form follows function.
              </p>
              <p className="text-sm leading-relaxed text-foreground/40">
                Fukasawa&apos;s MUJI speaker: pull the cord, it plays. The Magic Mouse:
                beautiful, but you can&apos;t use it while charging. When form overrides
                function, the design fails.
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 06 — WHITESPACE */}
        <section
          id="whitespace"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
              Whitespace
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;What you leave out
              <br />
              <span className="font-light">defines what remains.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-foreground/50">
              Breathing room. The space between elements is just as important
              as the elements themselves. Restraint isn&apos;t minimalism — it&apos;s
              focus.
            </p>
          </div>
        </section>

        {/* SLIDE 07 — WHITESPACE EXAMPLE */}
        <section
          id="whitespace-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-5xl w-full grid gap-0 md:grid-cols-2 items-center divide-foreground/10 md:divide-x">
            <div className="p-8">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                <div className="w-full aspect-[4/3] bg-foreground/5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5" />
                </div>
              </div>
            </div>
            <div className="max-w-xs p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
                JQ Face
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-foreground/80 mb-4">
                The empty space isn&apos;t empty.
              </p>
              <p className="text-sm leading-relaxed text-foreground/40">
                A fashion brand where whitespace lets the products breathe.
                Generous margins create luxury. Restraint isn&apos;t minimalism —
                it&apos;s focus.
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 08 — INTENTIONALITY */}
        <section
          id="intentionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
              Intentionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Nothing is accidental.
              <br />
              <span className="font-light">Every pixel earns its place.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-foreground/50">
              Design for human error. Every interaction, every word should be
              there for a reason. If you can&apos;t explain why it exists, it
              probably shouldn&apos;t.
            </p>
          </div>
        </section>

        {/* SLIDE 09 — INTENTIONALITY EXAMPLE */}
        <section
          id="intentionality-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
        >
          <div className="max-w-5xl w-full grid gap-12 md:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
              <div className="w-full aspect-[4/3] bg-foreground/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5" />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
                Thais House to Home
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-foreground/80 mb-4">
                Every interaction designed with purpose.
              </p>
              <p className="text-sm leading-relaxed text-foreground/40">
                A real estate platform streamlined to three taps. Property cards
                showed exactly the information needed to make a decision —
                nothing more, nothing less.
              </p>
            </div>
          </div>
        </section>

        {/* DESIGN PROCESS — one step per slide, each with an inline example */}
        {processSteps.map((process) => (
          <section
            key={process.id}
            id={process.id}
            className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8 lg:pl-56"
          >
            <div className="grid w-full max-w-5xl items-center gap-0 md:grid-cols-2 md:divide-x md:divide-foreground/10">
              <div className="max-w-md p-8">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
                  {process.step} — Design Process
                </p>
                <h2 className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-5xl">
                  {process.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/50">
                  {process.summary}
                </p>
              </div>

              {/* Example — image is optional; only steps with a real picture set it */}
              <div className="p-8">
                {process.example.image && (
                  <div className="relative mb-6">
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-foreground/20" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-foreground/20" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-foreground/20" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-foreground/20" />
                    <div className="w-full aspect-[4/3] bg-foreground/5 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={process.example.image}
                        alt={process.example.headline}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  {process.example.label}
                </p>
                <p className="mb-4 font-serif text-2xl font-extralight leading-snug tracking-tight text-foreground/80">
                  {process.example.headline}
                </p>
                <p className="text-sm leading-relaxed text-foreground/40">
                  {process.example.copy}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Next — clickable arrow hint for the next slide */}
      <button
        type="button"
        onClick={() => scrollToSlide(activeSlide + 1)}
        disabled={activeSlide === slides.length - 1}
        aria-label="Next slide"
        className={cn(
          "fixed right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 text-foreground/40 transition-opacity duration-500 hover:text-foreground disabled:pointer-events-none sm:right-8",
          activeSlide === slides.length - 1 ? "opacity-0" : "opacity-100"
        )}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Next
        </span>
        <span className="swipe-hint-arrow">
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </span>
      </button>

      {/* Page navigation */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-30 hidden justify-center lg:flex lg:pl-56">
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft className="size-3" /> Previous
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide + 1)}
            disabled={activeSlide === slides.length - 1}
            className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
          >
            Next <ArrowRight className="size-3" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 right-0 z-30 hidden px-8 py-6 lg:block">
        <div className="flex items-center gap-6">
          <p className="text-[10px] text-foreground/20">&copy; 2026 Gabrielle Nyawera</p>
          <Link
            href="/"
            className="text-[10px] text-foreground/20 transition-colors hover:text-foreground/60"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
