"use client";

import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  label: string;
  group: string;
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
  const activeId = slides[activeSlide]?.id;

  return (
    <>
      {/* Desktop: left sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 z-40 hidden w-56 flex-col justify-between border-r border-white/10 bg-[#111111]/95 px-0 py-10 backdrop-blur-md lg:flex">
        <div>
          <a
            href="/"
            className="mb-10 inline-block px-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/80"
          >
            ← Back
          </a>

          <div className="space-y-0.5">
            {/* Core Belief — top level */}
            {slides.filter((s) => s.group === "intro").map((slide, i) => {
              const slideIndex = slides.indexOf(slide);
              return (
                <button
                  key={slide.id}
                  onClick={() => onSlideClick(slideIndex)}
                  className={cn(
                    "group flex w-full items-center gap-3 px-6 py-2 text-left text-xs transition-all duration-300",
                    activeId === slide.id
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-300",
                      activeId === slide.id ? "w-4 bg-white" : "w-2 bg-white/20"
                    )}
                  />
                  <span>{slide.label}</span>
                </button>
              );
            })}

            {/* Design Philosophy — section header + indented children */}
            <div className="pt-4 pb-1 px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
                Design Philosophy
              </p>
            </div>
            {slides.filter((s) => s.group === "philosophy").map((slide) => {
              const slideIndex = slides.indexOf(slide);
              return (
                <button
                  key={slide.id}
                  onClick={() => onSlideClick(slideIndex)}
                  className={cn(
                    "group flex w-full items-center gap-3 pl-10 pr-6 py-2 text-left text-xs transition-all duration-300",
                    activeId === slide.id
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-300",
                      activeId === slide.id ? "w-4 bg-white" : "w-2 bg-white/20"
                    )}
                  />
                  <span>{slide.label}</span>
                </button>
              );
            })}

            {/* Design Process — top level */}
            {slides.filter((s) => s.group === "process").map((slide) => {
              const slideIndex = slides.indexOf(slide);
              return (
                <button
                  key={slide.id}
                  onClick={() => onSlideClick(slideIndex)}
                  className={cn(
                    "group flex w-full items-center gap-3 px-6 py-2 text-left text-xs transition-all duration-300",
                    activeId === slide.id
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-300",
                      activeId === slide.id ? "w-4 bg-white" : "w-2 bg-white/20"
                    )}
                  />
                  <span>{slide.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Slide counter */}
        <div className="space-y-3 px-6">
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
