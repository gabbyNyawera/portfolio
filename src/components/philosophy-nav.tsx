"use client";

import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  label: string;
  number: string;
};

type PhilosophyNavProps = {
  slides: Slide[];
  activeSlide: number;
  onSlideClick: (index: number) => void;
  total: number;
};

export function PhilosophyNav({
  slides,
  activeSlide,
  onSlideClick,
  total,
}: PhilosophyNavProps) {
  return (
    <>
      {/* Desktop: left sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 z-40 hidden w-52 flex-col justify-between border-r border-white/10 bg-[#111111]/90 px-5 py-10 backdrop-blur-md lg:flex">
        <div>
          <a
            href="/"
            className="mb-10 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/80"
          >
            ← Back
          </a>

          <div className="space-y-0.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => onSlideClick(i)}
                className={cn(
                  "group flex w-full items-center gap-3 py-1.5 text-left text-xs transition-all duration-300",
                  activeSlide === i
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                )}
              >
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    activeSlide === i ? "w-4 bg-white" : "w-2 bg-white/20"
                  )}
                />
                <span>{slide.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slide counter */}
        <div className="space-y-3">
          <div className="text-[10px] tabular-nums text-white/30">
            {activeSlide + 1} / {total}
          </div>
          <div className="h-px w-full bg-white/10">
            <div
              className="h-full bg-white/30 transition-all duration-150"
              style={{ width: `${((activeSlide + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile: bottom slide indicator */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-white/10 bg-[#111111]/90 px-5 py-3 backdrop-blur-md lg:hidden">
        <a
          href="/"
          className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40"
        >
          ← Back
        </a>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-white/40">
            {slides[activeSlide]?.label}
          </span>
          <span className="text-[10px] tabular-nums text-white/30">
            {activeSlide + 1}/{total}
          </span>
        </div>
      </nav>
    </>
  );
}
