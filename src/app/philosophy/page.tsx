"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { PhilosophyNav } from "@/components/philosophy-nav";

const slides = [
  { id: "core-belief", label: "Core Belief", number: "01" },
  { id: "clarity", label: "Clarity", number: "02" },
  { id: "functionality", label: "Functionality", number: "03" },
  { id: "whitespace", label: "Whitespace", number: "04" },
  { id: "intentionality", label: "Intentionality", number: "05" },
  { id: "process", label: "Process", number: "06" },
  { id: "case-study", label: "Case Study", number: "07" },
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
    <div className="philosophy-dark min-h-screen bg-[#111111] text-[#f0ece6]">
      {/* Nav overlay */}
      <PhilosophyNav
        slides={slides}
        activeSlide={activeSlide}
        onSlideClick={scrollToSlide}
        total={slides.length}
      />

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex h-screen w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {/* SLIDE 01 — CORE BELIEF */}
        <section
          id="core-belief"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              01 — Core Belief
            </p>
            <h1 className="font-serif text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Design is not
              <br />
              decorative,
              <br />
              <span className="font-light">it&apos;s communication.</span>
            </h1>
          </div>
        </section>

        {/* SLIDE 02 — CLARITY */}
        <section
          id="clarity"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              02 — Clarity
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;If people don&apos;t understand,
              <br />
              they forget about it.&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              If people have to think too much, the design has already failed.
              Clarity isn&apos;t about simplifying — it&apos;s about making the
              complex feel obvious.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <div className="h-24 w-24 rounded-lg bg-white/5" />
              <div className="h-24 w-24 rounded-lg bg-white/5" />
              <div className="h-24 w-24 rounded-lg bg-white/5" />
            </div>
            <p className="mt-4 text-[10px] text-white/20">
              [ Reference images ]
            </p>
          </div>
        </section>

        {/* SLIDE 03 — FUNCTIONALITY */}
        <section
          id="functionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              03 — Functionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Design must be purely
              <br />
              based on function.&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Form follows function — not the other way around. Every element
              should earn its place by solving a problem, not by looking
              interesting.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <div className="h-24 w-24 rounded-lg bg-white/5" />
              <div className="h-24 w-24 rounded-lg bg-white/5" />
            </div>
            <p className="mt-4 text-[10px] text-white/20">
              [ Reference images ]
            </p>
          </div>
        </section>

        {/* SLIDE 04 — WHITESPACE */}
        <section
          id="whitespace"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              04 — Whitespace
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Whitespace is what
              <br />
              creates focus.&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              It&apos;s breathing room. The space between elements is just as
              important as the elements themselves. What you leave out defines
              what remains.
            </p>
          </div>
        </section>

        {/* SLIDE 05 — INTENTIONALITY */}
        <section
          id="intentionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              05 — Intentionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Nothing is accidental.&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Design for human error. Every pixel, every interaction, every
              word should be there for a reason. If you can&apos;t explain why
              it exists, it probably shouldn&apos;t.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <div className="h-24 w-24 rounded-lg bg-white/5" />
              <div className="h-24 w-24 rounded-lg bg-white/5" />
              <div className="h-24 w-24 rounded-lg bg-white/5" />
            </div>
            <p className="mt-4 text-[10px] text-white/20">
              [ Reference images ]
            </p>
          </div>
        </section>

        {/* SLIDE 06 — DESIGN PROCESS */}
        <section
          id="process"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              06 — Design Process
            </p>
            <h2 className="text-4xl font-extralight leading-[1.1] tracking-tight md:text-6xl">
              How I work
            </h2>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {["Discover", "Define", "Design", "Deliver", "Iterate"].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-6 md:gap-10">
                    <div className="text-center">
                      <p className="text-2xl font-extralight md:text-3xl">
                        {step}
                      </p>
                      <p className="mt-2 text-[10px] text-white/30">
                        {step === "Discover" && "Understand before creating"}
                        {step === "Define" && "Clarify the problem"}
                        {step === "Design" && "Explore structure"}
                        {step === "Deliver" && "Refine until ready"}
                        {step === "Iterate" && "Remove until it breaks"}
                      </p>
                    </div>
                    {i < 4 && (
                      <span className="text-lg font-extralight text-white/15">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* SLIDE 07 — CASE STUDY */}
        <section
          id="case-study"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              07 — Case Study
            </p>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Kavara Kavara
            </p>
            <h2 className="text-4xl font-extralight leading-[1.1] tracking-tight md:text-6xl">
              Outdoor Food Culture
            </h2>
            <p className="mt-8 mx-auto max-w-md text-base leading-relaxed text-white/50">
              A storytelling-driven e-commerce experience built around fire,
              food, and outdoor living. The philosophy in practice.
            </p>
            <div className="mt-10">
              <a
                href="/projects/kavara-kavara"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                View case study <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 right-0 z-30 hidden px-8 py-6 lg:block">
        <div className="flex items-center gap-6">
          <p className="text-[10px] text-white/20">&copy; 2026 Gabriella Nyawera</p>
          <a
            href="/"
            className="text-[10px] text-white/20 transition-colors hover:text-white/60"
          >
            Back to home
          </a>
        </div>
      </footer>
    </div>
  );
}
