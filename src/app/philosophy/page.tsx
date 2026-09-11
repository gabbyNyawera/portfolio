"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { PhilosophyNav } from "@/components/philosophy-nav";

const slides = [
  { id: "core-belief", label: "Core Belief", number: "01" },
  { id: "clarity", label: "Clarity", number: "02" },
  { id: "clarity-example", label: "Clarity in Practice", number: "03" },
  { id: "functionality", label: "Functionality", number: "04" },
  { id: "functionality-example", label: "Functionality in Practice", number: "05" },
  { id: "whitespace", label: "Whitespace", number: "06" },
  { id: "whitespace-example", label: "Whitespace in Practice", number: "07" },
  { id: "intentionality", label: "Intentionality", number: "08" },
  { id: "intentionality-example", label: "Intentionality in Practice", number: "09" },
  { id: "process", label: "Design Process", number: "10" },
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
              Design should
              <br />
              <span className="font-light">feel alive.</span>
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
              &ldquo;If it needs explanation,
              <br />
              <span className="font-light">it&apos;s not done.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Cleverness is easy. Clarity is hard. The best design is the
              design you don&apos;t notice — it just works. If someone has to
              think too much, I&apos;ve failed.
            </p>
          </div>
        </section>

        {/* SLIDE 03 — CLARITY EXAMPLE */}
        <section
          id="clarity-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl w-full">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              03 — Clarity in Practice
            </p>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                  Study App
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  The Study App needed to serve Zimbabwean learners across 7
                  subjects. I stripped every screen down to its essential
                  function — no decorative elements, no unnecessary chrome.
                  The result: learners find what they need in two taps.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-56 h-[480px] rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-6 w-full bg-white/5" />
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-20 bg-white/10 rounded" />
                    <div className="h-24 w-full bg-white/5 rounded" />
                    <div className="h-24 w-full bg-white/5 rounded" />
                    <div className="h-24 w-full bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 04 — FUNCTIONALITY */}
        <section
          id="functionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              04 — Functionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Form follows function
              <br />
              <span className="font-light">— not the other way around.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Every element should earn its place by solving a problem, not by
              looking interesting. If it doesn&apos;t serve a purpose, it
              doesn&apos;t stay.
            </p>
          </div>
        </section>

        {/* SLIDE 05 — FUNCTIONALITY EXAMPLE */}
        <section
          id="functionality-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl w-full">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              05 — Functionality in Practice
            </p>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                  Portfolio
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  This portfolio itself. Every element has a job: the serif
                  headings create hierarchy, the warm palette feels human, the
                  generous spacing lets content breathe. Nothing is decorative —
                  everything serves the reader.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-[520px] rounded-[1rem] border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-8 w-full bg-white/5 flex items-center px-3 gap-1.5">
                    <span className="size-2 rounded-full bg-white/10" />
                    <span className="size-2 rounded-full bg-white/10" />
                    <span className="size-2 rounded-full bg-white/10" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-8 w-32 bg-white/10 rounded" />
                    <div className="h-3 w-48 bg-white/5 rounded" />
                    <div className="h-3 w-40 bg-white/5 rounded" />
                    <div className="h-32 w-full bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 06 — WHITESPACE */}
        <section
          id="whitespace"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              06 — Whitespace
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;What you leave out
              <br />
              <span className="font-light">defines what remains.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Breathing room. The space between elements is just as important
              as the elements themselves. Restraint isn&apos;t minimalism — it&apos;s
              focus.
            </p>
          </div>
        </section>

        {/* SLIDE 07 — WHITESPACE EXAMPLE */}
        <section
          id="whitespace-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl w-full">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              07 — Whitespace in Practice
            </p>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                  JQ Face
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  JQ Face is a fashion brand — the whitespace lets the products
                  breathe. I used generous margins and padding to create a sense
                  of luxury. The empty space isn&apos;t empty — it&apos;s intentional.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-56 h-[480px] rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-40 w-full bg-white/10" />
                  <div className="p-6 space-y-2">
                    <div className="h-3 w-24 bg-white/10 rounded" />
                    <div className="h-2 w-16 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 08 — INTENTIONALITY */}
        <section
          id="intentionality"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              08 — Intentionality
            </p>
            <blockquote className="font-serif text-4xl font-extralight leading-snug tracking-tight md:text-6xl">
              &ldquo;Nothing is accidental.
              <br />
              <span className="font-light">Every pixel earns its place.</span>&rdquo;
            </blockquote>
            <p className="mt-10 mx-auto max-w-md text-base leading-relaxed text-white/50">
              Design for human error. Every interaction, every word should be
              there for a reason. If you can&apos;t explain why it exists, it
              probably shouldn&apos;t.
            </p>
          </div>
        </section>

        {/* SLIDE 09 — INTENTIONALITY EXAMPLE */}
        <section
          id="intentionality-example"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl w-full">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              09 — Intentionality in Practice
            </p>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                  Thais House to Home
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  A real estate platform where every interaction was designed
                  with purpose. The search flow was streamlined to three taps.
                  Property cards showed exactly the information needed to make a
                  decision — nothing more.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-56 h-[480px] rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden">
                  <div className="h-32 w-full bg-white/10" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 w-28 bg-white/10 rounded" />
                    <div className="h-2 w-20 bg-white/5 rounded" />
                    <div className="h-2 w-24 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 10 — DESIGN PROCESS */}
        <section
          id="process"
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-4xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              10 — Design Process
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
            <div className="mt-16">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
                See it in action
              </p>
              <h3 className="font-serif text-3xl font-extralight tracking-tight md:text-4xl">
                KAVARA KAVARA
              </h3>
              <p className="mt-4 mx-auto max-w-md text-sm leading-relaxed text-white/50">
                A storytelling-driven e-commerce experience built around fire,
                food, and outdoor living.
              </p>
              <div className="mt-6">
                <a
                  href="/work/kavara-kavara"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  View case study <ArrowUpRight className="size-3" />
                </a>
              </div>
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
