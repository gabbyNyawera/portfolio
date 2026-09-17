"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function HorizontalProjects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const maxScroll = containerHeight - viewportHeight;

      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalProjects = projects.length;
  const translateX = scrollProgress * (totalProjects - 1) * -100;

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full transition-none"
          style={{ transform: `translateX(${translateX}vw)` }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="flex w-[100vw] flex-shrink-0 items-center px-5 sm:px-8 lg:px-16"
            >
              <Link
                href={`/work/${project.slug}`}
                className="group mx-auto block w-full max-w-6xl"
              >
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-accent/10 md:min-h-[500px]">
                      <span className="text-sm text-muted-foreground">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {project.year} — {project.category}
                    </p>
                    <h3 className="mt-4 font-serif text-4xl font-light tracking-tight md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-md text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors group-hover:text-foreground">
                      Open case study <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
