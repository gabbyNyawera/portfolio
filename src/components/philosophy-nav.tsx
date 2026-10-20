"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

function RailItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 py-2 pl-6 pr-6 text-left text-xs transition-all duration-300",
        active ? "text-white" : "text-white/40 hover:text-white/70"
      )}
    >
      <span
        className={cn(
          "h-2 rounded-full transition-all duration-300",
          active ? "w-6 bg-white" : "w-2 bg-white/20 group-hover:bg-white/40"
        )}
      />
      <span
        className={cn(
          "transition-opacity duration-300",
          active
            ? "opacity-100"
            : "opacity-[0.32] group-hover:opacity-60"
        )}
      >
        {label}
      </span>
    </button>
  );
}

export function PhilosophyNav({
  slides,
  activeSlide,
  onSlideClick,
  total,
}: PhilosophyNavProps) {
  const activeId = slides[activeSlide]?.id.replace("-example", "");

  const introSlides = slides.filter((s) => s.group === "intro");
  const philosophySlides = slides.filter(
    (s) => s.group === "philosophy" && !s.id.includes("-example")
  );
  const processSlides = slides.filter((s) => s.group === "process");

  return (
    <>
      {/* Desktop: left sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 z-40 hidden w-56 flex-col justify-between border-r border-border bg-background/95 px-0 py-10 backdrop-blur-md lg:flex">
        <div>
          <Link
            href="/"
            className="mb-10 inline-block px-6 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground/80"
          >
            ← Back
          </Link>

          <div className="space-y-0.5">
            {/* Intro slides — top level */}
            {introSlides.map((slide) => (
              <RailItem
                key={slide.id}
                label={slide.label}
                active={activeId === slide.id}
                onClick={() => onSlideClick(slides.indexOf(slide))}
              />
            ))}

            {/* Design Philosophy — section header */}
            <div className="pt-4 pb-1 px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/20">
                Design Philosophy
              </p>
            </div>

            {/* Philosophy slides — principles only */}
            {philosophySlides.map((slide) => (
              <RailItem
                key={slide.id}
                label={slide.label}
                active={activeId === slide.id}
                onClick={() => onSlideClick(slides.indexOf(slide))}
              />
            ))}

            {/* Design Process — section header */}
            <div className="pt-4 pb-1 px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/20">
                Design Process
              </p>
            </div>

            {/* Design Process — steps */}
            {processSlides.map((slide) => (
              <RailItem
                key={slide.id}
                label={slide.label}
                active={activeId === slide.id}
                onClick={() => onSlideClick(slides.indexOf(slide))}
              />
            ))}
          </div>
        </div>

        {/* Slide counter + pager */}
        <div className="space-y-3 px-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
              className="flex size-8 items-center justify-center rounded-full border border-border text-foreground/40 transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <span className="text-[10px] tabular-nums text-foreground/30">
              {activeSlide + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide + 1)}
              disabled={activeSlide === total - 1}
              aria-label="Next slide"
              className="flex size-8 items-center justify-center rounded-full border border-border text-foreground/40 transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>
          <div className="h-px w-full bg-foreground/10">
            <div
              className="h-full bg-foreground/30 transition-all duration-150"
              style={{ width: `${((activeSlide + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile: bottom slide indicator */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-border bg-background/90 px-5 py-3 backdrop-blur-md lg:hidden">
        <Link
          href="/"
          className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40"
        >
          ← Back
        </Link>
        <div className="flex items-center gap-3">
          <span className="max-w-[8rem] truncate text-[10px] text-foreground/40">
            {slides[activeSlide]?.label}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
              className="flex size-7 items-center justify-center rounded-full border border-border text-foreground/40 transition-colors disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <span className="text-[10px] tabular-nums text-foreground/30">
              {activeSlide + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide + 1)}
              disabled={activeSlide === total - 1}
              aria-label="Next slide"
              className="flex size-7 items-center justify-center rounded-full border border-border text-foreground/40 transition-colors disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
