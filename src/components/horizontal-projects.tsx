"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function HorizontalProjects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const accumulatedRef = useRef(0);

  const totalProjects = projects.length;

  // Handle wheel events only when hovering on right panel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isHoveringRight) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only capture when section is in view
      if (rect.top > 10 || rect.bottom < viewportHeight - 10) return;

      const containerHeight = container.offsetHeight;
      const maxScroll = containerHeight - viewportHeight;
      if (maxScroll <= 0) return;

      e.preventDefault();

      accumulatedRef.current = Math.max(
        0,
        Math.min(maxScroll, accumulatedRef.current + e.deltaY)
      );

      const progress = accumulatedRef.current / maxScroll;
      setActiveIndex(Math.round(progress * (totalProjects - 1)));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isHoveringRight, totalProjects]);

  // Sync with scroll when not hovering right
  useEffect(() => {
    if (isHoveringRight) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = containerHeight - viewportHeight;

      if (maxScroll <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / maxScroll);
      accumulatedRef.current = progress * maxScroll;
      setActiveIndex(Math.round(progress * (totalProjects - 1)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHoveringRight, totalProjects]);

  const containerHeight = containerRef.current?.offsetHeight || 0;
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const maxScroll = containerHeight - viewportHeight;
  const translateX = maxScroll > 0
    ? (accumulatedRef.current / maxScroll) * (totalProjects - 1) * -100
    : 0;

  const scrollToProject = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const sectionTop = el.offsetTop;
    const sectionHeight = el.offsetHeight - window.innerHeight;
    const target = (index / (totalProjects - 1)) * sectionHeight;
    window.scrollTo({ top: sectionTop + target, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen">
        {/* Left panel - scrolls with page */}
        <div className="hidden w-[35%] flex-col justify-between py-16 pl-5 pr-8 sm:flex sm:pl-8 lg:pl-16 lg:pr-12">
          <div>
            <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
              What I&apos;ve
              <br />
              built
            </h2>
            <p className="mt-8 max-w-xs text-muted-foreground">
              Three projects where design did the quiet work — making complex things feel obvious.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-4">
            <span className="font-serif text-3xl font-light text-accent">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-sm text-muted-foreground">
              {String(totalProjects).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right panel - captures scroll for horizontal movement */}
        <div
          className="flex w-full flex-col overflow-hidden sm:w-[65%]"
          onMouseEnter={() => setIsHoveringRight(true)}
          onMouseLeave={() => setIsHoveringRight(false)}
        >
          <div
            className="flex h-full flex-1 transition-none"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="flex h-full w-full flex-shrink-0 items-center px-5 sm:px-8 lg:px-12"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block w-full"
                >
                  <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
                    <div className="overflow-hidden rounded-2xl bg-muted">
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-accent/10 md:min-h-[450px]">
                        <span className="text-sm text-muted-foreground">
                          {project.title}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-4 font-serif text-lg text-accent sm:hidden">
                        {String(i + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
                      </p>
                      <h3 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-6 max-w-md text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.category.split(" / ").map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/60 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors group-hover:text-foreground">
                        View project <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="hidden items-center justify-center gap-6 py-6 sm:flex">
            <button
              onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="flex size-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => scrollToProject(Math.min(totalProjects - 1, activeIndex + 1))}
              disabled={activeIndex === totalProjects - 1}
              className="flex size-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
