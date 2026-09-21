"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function HorizontalProjects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalProjects = projects.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
        setScrollProgress(progress);
        setActiveIndex(Math.round(progress * (totalProjects - 1)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalProjects, isMobile]);

  const translateX = scrollProgress * (totalProjects - 1) * -100;

  // Mobile: simple vertical stack
  if (isMobile) {
    return (
      <div className="px-5">
        <div className="mb-8">
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight">
            What I&apos;ve
            <br />
            built
          </h2>
          <p className="mt-6 text-sm text-muted-foreground">
            Projects where design did the quiet work.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl bg-muted">
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-accent/10">
                  <span className="text-sm text-muted-foreground">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.year} — {project.category}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight font-serif">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                  View project <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: horizontal scroll
  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen pt-[52px]">
        {/* Left panel - fixed */}
        <div className="hidden w-[35%] flex-col justify-between py-16 pl-5 pr-8 sm:flex sm:pl-8 lg:pl-16 lg:pr-12">
          <div>
            <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
              What I&apos;ve
              <br />
              built
            </h2>
            <p className="mt-8 max-w-xs text-muted-foreground">
              {totalProjects === 1
                ? "A project where design did the quiet work — making complex things feel obvious."
                : "Projects where design did the quiet work — making complex things feel obvious."}
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border/40" />
          </div>
        </div>

        {/* Right panel - horizontal scroll */}
        <div className="flex w-full flex-col overflow-hidden sm:w-[65%]">
          <div
            ref={scrollRef}
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
                    {/* Visual */}
                    <div className="overflow-hidden rounded-2xl bg-muted">
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-accent/10 md:min-h-[450px]">
                        <span className="text-sm text-muted-foreground">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-md text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Tags */}
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

          {/* Navigation cues - only show when multiple projects */}
          {totalProjects > 1 && (
            <div className="hidden items-center justify-center gap-6 py-6 sm:flex">
              <button
                onClick={() => {
                  const el = containerRef.current;
                  if (!el) return;
                  const sectionTop = el.offsetTop;
                  const sectionHeight = el.offsetHeight - window.innerHeight;
                  const projectHeight = sectionHeight / (totalProjects - 1);
                  const target = Math.max(0, activeIndex - 1) * projectHeight;
                  window.scrollTo({ top: sectionTop + target, behavior: "smooth" });
                }}
                disabled={activeIndex === 0}
                className="flex size-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={() => {
                  const el = containerRef.current;
                  if (!el) return;
                  const sectionTop = el.offsetTop;
                  const sectionHeight = el.offsetHeight - window.innerHeight;
                  const projectHeight = sectionHeight / (totalProjects - 1);
                  const target = Math.min(totalProjects - 1, activeIndex + 1) * projectHeight;
                  window.scrollTo({ top: sectionTop + target, behavior: "smooth" });
                }}
                disabled={activeIndex === totalProjects - 1}
                className="flex size-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
