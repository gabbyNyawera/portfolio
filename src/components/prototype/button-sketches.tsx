"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "./glow-button";

/**
 * PROTOTYPE — throwaway.
 * Five button characters in the paper / forest / lime system:
 * a soft baseline, an editorial serif pill, a wipe, an expanding disc,
 * and an animated shimmer. The winner gets folded into the real Button.
 */

export type SketchKey = "A" | "B" | "C" | "D" | "E";

const FOREST =
  "bg-foreground text-background dusk:bg-[var(--dusk-foreground)] dusk:text-[var(--dusk-background)]";

const BLOOM =
  "shadow-[0_1px_2px_rgba(15,31,23,0.2),0_18px_48px_-18px_rgba(76,122,0,0.6)] hover:shadow-[0_2px_4px_rgba(15,31,23,0.18),0_26px_66px_-18px_rgba(76,122,0,0.85)] dusk:shadow-[0_18px_52px_-18px_rgba(184,240,74,0.4)] dusk:hover:shadow-[0_26px_72px_-18px_rgba(184,240,74,0.62)]";

const SHELL =
  "group relative inline-flex h-14 items-center overflow-hidden rounded-full font-sans text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none";

type SketchProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/** B — the label itself is the character: Instrument Serif, italic. */
export function SerifPill({ className, children, ...props }: SketchProps) {
  return (
    <button
      type="button"
      className={cn(SHELL, FOREST, BLOOM, "gap-4 pl-8 pr-7", className)}
      {...props}
    >
      <span className="font-serif text-[1.375rem] italic leading-none tracking-tight">
        {children ?? "Start a conversation"}
      </span>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  );
}

/** C — the fill moves, not the shape. */
export function WipePill({ className, children, ...props }: SketchProps) {
  return (
    <button
      type="button"
      className={cn(
        SHELL,
        FOREST,
        BLOOM,
        "gap-3 px-7 hover:text-foreground dusk:hover:text-[var(--dusk-background)]",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-accent-soft transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 dusk:bg-[var(--dusk-accent)]"
      />
      <span className="relative z-10 inline-flex items-center gap-3">
        {children ?? "Start a conversation"}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

/** D — an arrow disc that swallows the pill on hover. */
export function DiscPill({ className, children, ...props }: SketchProps) {
  return (
    <button
      type="button"
      className={cn(
        SHELL,
        FOREST,
        BLOOM,
        "gap-5 pl-7 pr-1.5",
        className
      )}
      {...props}
    >
      <span className="relative z-20 transition-colors duration-300 group-hover:text-[var(--dusk-background)]">
        {children ?? "Start a conversation"}
      </span>
      <span
        aria-hidden="true"
        className="absolute right-1.5 top-1/2 size-11 -translate-y-1/2 rounded-full bg-accent-soft transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[14] dusk:bg-[var(--dusk-accent)]"
      />
      <span className="relative z-20 flex size-11 items-center justify-center">
        <ArrowUpRight className="size-4 text-[var(--dusk-background)] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

/** E — the reference's loop: a band of light crossing the pill, forever. */
export function ShimmerPill({ className, children, ...props }: SketchProps) {
  return (
    <button
      type="button"
      className={cn(SHELL, FOREST, BLOOM, "gap-3 px-7", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="sk-sheen pointer-events-none absolute -inset-y-8 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent-soft/50 to-transparent blur-md dusk:via-[rgba(184,240,74,0.45)]"
      />
      <span className="relative z-10 inline-flex items-center gap-3">
        {children ?? "Start a conversation"}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

/** A switch so the page can render any character from one place. */
export function Sketch({
  variant,
  className,
  children,
}: {
  variant: SketchKey;
  className?: string;
  children?: React.ReactNode;
}) {
  const label = children ?? "Start a conversation";
  switch (variant) {
    case "A":
      return (
        <GlowButton glow="base" className={className}>
          {label}
        </GlowButton>
      );
    case "B":
      return <SerifPill className={className}>{label}</SerifPill>;
    case "C":
      return <WipePill className={className}>{label}</WipePill>;
    case "D":
      return <DiscPill className={className}>{label}</DiscPill>;
    case "E":
      return <ShimmerPill className={className}>{label}</ShimmerPill>;
  }
}
