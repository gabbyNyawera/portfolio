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
          className="flex h-screen w-screen flex-shrink-0 snap-start items-center justify-center px-8"
        >
          <div className="max-w-3xl text-center">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              Clarity
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
          <div className="max-w-5xl w-full grid gap-12 md:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />
              <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                Study App
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-white/80 mb-4">
                The Norman Door — push or pull?
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                If you have to think about how to use it, the design has failed.
                Clarity means the interface disappears — you just act.
              </p>
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
              Functionality
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
          <div className="max-w-5xl w-full grid gap-12 md:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />
              <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                Portfolio
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-white/80 mb-4">
                Nothing decorative — everything serves the reader.
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                Every element has a job. Serif headings for hierarchy, warm
                palette for humanity, generous spacing for breathing room.
                Form follows function.
              </p>
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
              Whitespace
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
          <div className="max-w-5xl w-full grid gap-12 md:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />
              <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                JQ Face
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-white/80 mb-4">
                The empty space isn&apos;t empty.
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                JQ Face is a fashion brand — the whitespace lets the products
                breathe. Generous margins and padding create a sense of luxury.
                Restraint isn&apos;t minimalism — it&apos;s focus.
              </p>
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
              Intentionality
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
          <div className="max-w-5xl w-full grid gap-12 md:grid-cols-[1fr_auto] items-center">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />
              <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                Thais House to Home
              </p>
              <p className="font-serif text-2xl font-extralight leading-snug tracking-tight text-white/80 mb-4">
                Every interaction designed with purpose.
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                A real estate platform streamlined to three taps. Property cards
                showed exactly the information needed to make a decision —
                nothing more, nothing less.
              </p>
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
              Design Process
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
