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
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span
        className={cn(
          "h-1.5 rounded-full transition-all duration-300",
          active ? "w-6 bg-accent" : "w-1.5 bg-border group-hover:bg-muted-foreground"
        )}
      />
      <span
        className={cn(
          "transition-opacity duration-300",
          active ? "opacity-100" : "opacity-60 group-hover:opacity-100"
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
      <nav className="fixed bottom-0 left-0 top-[var(--header-height)] z-40 hidden w-56 flex-col justify-between border-r border-border/70 bg-background/95 py-10 backdrop-blur-md lg:flex">
        <div>
          <Link
            href="/"
            className="mb-10 inline-block px-6 font-sans font-medium text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back
          </Link>

          <div className="space-y-0.5">
            {introSlides.map((slide) => (
              <RailItem
                key={slide.id}
                label={slide.label}
                active={activeId === slide.id}
                onClick={() => onSlideClick(slides.indexOf(slide))}
              />
            ))}

            <div className="px-6 pb-1 pt-4">
              <p className="eyebrow">Design Philosophy</p>
            </div>

            {philosophySlides.map((slide) => (
              <RailItem
                key={slide.id}
                label={slide.label}
                active={activeId === slide.id}
                onClick={() => onSlideClick(slides.indexOf(slide))}
              />
            ))}

            <div className="px-6 pb-1 pt-4">
              <p className="eyebrow">Design Process</p>
            </div>

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

        <div className="space-y-3 px-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
              className="flex size-8 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <span className="font-sans font-medium text-[10px] tabular-nums text-muted-foreground">
              {activeSlide + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide + 1)}
              disabled={activeSlide === total - 1}
              aria-label="Next slide"
              className="flex size-8 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>
          <div className="h-px w-full bg-border/70">
            <div
              className="h-full bg-accent transition-all duration-150"
              style={{ width: `${((activeSlide + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-border/70 bg-background/90 px-5 py-3 backdrop-blur-md lg:hidden">
        <Link
          href="/"
          className="font-sans font-medium text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          ← Back
        </Link>
        <div className="flex items-center gap-3">
          <span className="max-w-[8rem] truncate font-sans font-medium text-[10px] text-muted-foreground">
            {slides[activeSlide]?.label}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
              className="flex size-7 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <span className="font-sans font-medium text-[10px] tabular-nums text-muted-foreground">
              {activeSlide + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => onSlideClick(activeSlide + 1)}
              disabled={activeSlide === total - 1}
              aria-label="Next slide"
              className="flex size-7 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
