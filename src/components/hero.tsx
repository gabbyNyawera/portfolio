"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const illustrationPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      illustrationPos.current.x += (mousePos.current.x - illustrationPos.current.x) * 0.03;
      illustrationPos.current.y += (mousePos.current.y - illustrationPos.current.y) * 0.03;

      if (illustrationRef.current) {
        const offsetX = (illustrationPos.current.x - window.innerWidth / 2) * 0.02;
        const offsetY = (illustrationPos.current.y - window.innerHeight / 2) * 0.02;
        illustrationRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]">
        {/* Left - Text */}
        <div className="relative z-10">
          <h1 className="font-serif text-6xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Gabe
            <br />
            Product Designer.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
            I design experiences that{" "}
            <span className="font-serif italic text-accent">feel alive</span> —
            calm, considered digital experiences with a focus on clarity,
            usability, and the kind of details that make complex things feel
            obvious.
          </p>

          <div className="mt-10">
            <Link
              href="mailto:nyaweragabby@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Let&apos;s make something together <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Right - Illustration */}
        <div
          ref={illustrationRef}
          className="relative flex items-center justify-center"
          style={{ willChange: "transform" }}
        >
          {/* Decorative text */}
          <div className="absolute -left-8 top-8 font-serif text-xs tracking-wider text-muted-foreground/60 sm:text-sm md:-left-12 md:top-4">
            GOOD
            <br />
            IDEAS
            <br />
            BETTER
            <br />
            EXPERIENCES.
          </div>

          <div className="absolute -right-4 bottom-16 font-serif text-xs tracking-wider text-muted-foreground/60 sm:text-sm md:-right-8 md:bottom-20">
            DESIGN
            <br />
            PEOPLE
            <br />
            THINGS
            <br />
            A KINDER
            <br />
            INTERNET.
          </div>

          {/* Orange circle accent */}
          <div className="absolute -right-4 -top-4 size-24 rounded-full bg-accent/20 sm:size-32 md:right-0 md:top-0" />

          {/* Main illustration */}
          <img
            src="/images/hero/gabe-illustration.png"
            alt="Gabe - Product Designer"
            className="relative z-10 w-full max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="size-5 rounded-full border border-border/40 p-1">
            <div className="size-full animate-bounce rounded-full bg-border/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
