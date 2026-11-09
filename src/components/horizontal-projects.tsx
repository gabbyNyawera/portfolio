"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArtwork } from "@/components/project-artwork";

export function HorizontalProjects({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalProjects = projects.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const sectionTop = el.offsetTop;
    const sectionHeight = el.offsetHeight - window.innerHeight;
    const projectHeight = sectionHeight / Math.max(1, totalProjects - 1);
    const clamped = Math.max(0, Math.min(totalProjects - 1, index));
    window.scrollTo({ top: sectionTop + clamped * projectHeight, behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <div className="container-page">
        <h2 className="display-2">
          What I&apos;ve
          <br />
          <em className="italic text-accent-ink">built</em>
        </h2>
        <p className="lede mt-6 max-w-sm">
          Projects where design did the quiet work — making complex things feel
          obvious.
        </p>

        <div className="mt-12 space-y-12">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/work/${project.slug}`} className="group block">
              <ProjectArtwork
                project={project}
                index={index}
                className="aspect-[4/3] w-full"
              />
              <div className="mt-5">
                <p className="eyebrow">
                  {project.year} — {project.category}
                </p>
                <h3 className="display-3 mt-2">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="link-arrow mt-5">
                  View project
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[360vh]">
      <div className="sticky top-0 flex h-screen overflow-hidden pt-[var(--header-height)]">
        <div className="flex w-[32%] flex-col justify-between border-r border-border/70 py-14 pl-[var(--gutter)] pr-10">
          <div>
            <h2 className="display-2">
              What I&apos;ve
              <br />
              <em className="italic text-accent-ink">built</em>
            </h2>
            <p className="lede mt-6 max-w-xs">
              {totalProjects === 1
                ? "A project where design did the quiet work — making complex things feel obvious."
                : "Projects where design did the quiet work — making complex things feel obvious."}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans font-medium text-[10px] tabular-nums tracking-[0.16em] text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalProjects).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-border/70">
              <div
                className="h-full bg-accent transition-[width] duration-150 ease-out"
                style={{
                  width: `${totalProjects > 1 ? (activeIndex / (totalProjects - 1)) * 100 : 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-[68%] flex-col overflow-hidden">
          <div
            className="flex flex-1 transition-none"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex h-full w-full flex-shrink-0 items-center px-10 py-14"
              >
                <Link href={`/work/${project.slug}`} className="group block w-full">
                  <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    <ProjectArtwork
                      project={project}
                      index={index}
                      className="aspect-[4/3] w-full"
                    />

                    <div>
                      <p className="eyebrow">
                        0{index + 1} — {project.category}
                      </p>
                      <h3 className="display-3 mt-3">{project.title}</h3>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.category.split(" / ").map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="link-arrow mt-8 group-hover:text-foreground">
                        View case study
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {totalProjects > 1 && (
            <div className="flex items-center justify-center gap-3 pb-8">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="flex size-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === totalProjects - 1}
                aria-label="Next project"
                className="flex size-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
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
