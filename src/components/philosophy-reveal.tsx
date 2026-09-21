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

function PrinciplesList({
  ref,
  visibleItems,
  size,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  visibleItems: Set<number>;
  size: "sm" | "lg";
}) {
  return (
    <div ref={ref} className="space-y-0">
      {principles.map((principle, index) => (
        <div
          key={principle.title}
          data-index={index}
          className={`border-b border-border/40 ${
            size === "sm" ? "py-6" : "py-8"
          } transition-all duration-500 ease-out ${
            visibleItems.has(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h3
            className={
              size === "sm"
                ? "text-xl font-light tracking-tight"
                : "font-serif text-3xl font-light tracking-tight sm:text-4xl"
            }
          >
            {principle.title}
          </h3>
          <p
            className={`mt-2 text-muted-foreground ${
              size === "sm" ? "text-sm" : "mt-3 max-w-md"
            }`}
          >
            {principle.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PhilosophyReveal() {
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );

    const observe = (el: HTMLDivElement | null) => {
      if (!el) return;
      el.querySelectorAll("[data-index]").forEach((item) => observer.observe(item));
    };

    observe(mobileRef.current);
    observe(desktopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-5 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Mobile */}
        <div className="md:hidden">
          <div className="mb-8">
            <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight">
              How I
              <br />
              think
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              The principles that guide every decision.
            </p>
            <Link
              href="/philosophy"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-foreground"
            >
              Read the full philosophy <ArrowUpRight className="size-3" />
            </Link>
          </div>
          <PrinciplesList ref={mobileRef} visibleItems={visibleItems} size="sm" />
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
              How I
              <br />
              think
            </h2>
            <p className="mt-8 text-muted-foreground">
              A note on the principles that guide every decision.
            </p>
            <Link
              href="/philosophy"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-foreground"
            >
              Read the full philosophy <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <PrinciplesList ref={desktopRef} visibleItems={visibleItems} size="lg" />
        </div>
      </div>
    </div>
  );
}
