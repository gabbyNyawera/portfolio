"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    title: "Remove friction",
    description: "Good design should make the difficult feel obvious.",
  },
  {
    title: "Make space for people",
    description: "Interfaces should support people rather than compete with them.",
  },
  {
    title: "Details matter",
    description: "Small decisions can shape the entire experience.",
  },
  {
    title: "Don't decorate",
    description: "Every element should earn its place, or it doesn't stay.",
  },
];

export function PhilosophyReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const maxScroll = containerHeight - viewportHeight;

      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
        // First 20% = intro, then each principle gets 20%
        const totalItems = principles.length + 1; // +1 for intro
        const index = Math.floor(progress * totalItems) - 1;
        setActiveIndex(Math.min(index, principles.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen pt-[52px]">
        {/* Left panel - fixed */}
        <div className="hidden flex-col justify-start py-16 pl-5 pr-8 sm:flex sm:w-[35%] sm:pl-8 lg:pl-16 lg:pr-12">
          <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
            How I
            <br />
            think
          </h2>
          <p className="mt-8 max-w-xs text-muted-foreground">
            A note on the principles that guide every decision.
          </p>
          <Link
            href="/philosophy"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-foreground"
          >
            Read the full philosophy <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Right panel - scroll-driven reveals */}
        <div className="w-full sm:w-[65%]">
          <div className="flex flex-col justify-center px-5 py-16 sm:h-full sm:px-8 sm:py-16 lg:px-16">
            {/* Intro statement */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: activeIndex >= 0 ? 0.3 : 1,
                transform: activeIndex >= 0 ? "translateY(-20px)" : "translateY(0)",
              }}
            >
              <p className="font-serif text-3xl font-light leading-snug tracking-tight sm:text-4xl md:text-5xl">
                Good design is invisible.
              </p>
              <p className="mt-4 font-serif text-3xl font-light leading-snug tracking-tight text-accent sm:text-4xl md:text-5xl">
                But you should feel it.
              </p>
            </div>

            {/* Principles - revealed one by one */}
            <div className="mt-16 space-y-12">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="transition-all duration-700"
                  style={{
                    opacity: activeIndex >= index ? 1 : 0,
                    transform: activeIndex >= index ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  <div className="border-l-2 border-accent pl-6">
                    <h3 className="font-serif text-2xl font-light tracking-tight sm:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-4 max-w-md text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
