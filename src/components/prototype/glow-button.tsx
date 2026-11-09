"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * PROTOTYPE — throwaway.
 * A flat pill with a soft bloom and a pointer-reactive sheen, adapted from the
 * "glowing button" reference. No hard edge, no offset shadow, no arrow capsule.
 */

type GlowTone = "forest" | "accent" | "slab" | "rim";
type GlowLevel = "base" | "tight" | "deep";

const toneClasses: Record<GlowTone, string> = {
  forest:
    "rounded-full bg-foreground text-background [--glow-sheen:rgba(231,247,196,0.42)] dusk:bg-[var(--dusk-foreground)] dusk:text-[var(--dusk-background)] dusk:[--glow-sheen:rgba(184,240,74,0.38)]",
  accent:
    "rounded-full bg-accent text-accent-foreground [--glow-sheen:rgba(255,255,255,0.35)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_36px_-16px_rgba(76,122,0,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_20px_54px_-16px_rgba(76,122,0,0.78)] dusk:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_40px_-16px_rgba(184,240,74,0.55)] dusk:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_58px_-16px_rgba(184,240,74,0.75)]",
  slab: "rounded-[6px] bg-foreground text-background [--glow-sheen:rgba(231,247,196,0.42)]",
  rim: "rounded-full border border-foreground/25 text-foreground [--glow-sheen:rgba(76,122,0,0.18)] hover:border-foreground/45 hover:bg-foreground/[0.04] dusk:border-background/30 dusk:hover:border-background/55 dusk:hover:bg-background/[0.06] dusk:[--glow-sheen:rgba(184,240,74,0.28)]",
};

const forestGlow: Record<GlowLevel, string> = {
  base: "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(15,31,23,0.18),0_14px_36px_-16px_rgba(76,122,0,0.55)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_2px_4px_rgba(15,31,23,0.16),0_20px_54px_-16px_rgba(76,122,0,0.72)] dusk:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_40px_-16px_rgba(184,240,74,0.5)] dusk:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_58px_-16px_rgba(184,240,74,0.68)]",
  tight:
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_2px_rgba(15,31,23,0.2),0_6px_18px_-14px_rgba(76,122,0,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_2px_3px_rgba(15,31,23,0.18),0_10px_26px_-14px_rgba(76,122,0,0.5)] dusk:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_20px_-14px_rgba(184,240,74,0.35)] dusk:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_30px_-14px_rgba(184,240,74,0.5)]",
  deep: "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_2px_4px_rgba(15,31,23,0.16),0_22px_60px_-18px_rgba(76,122,0,0.72)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_5px_rgba(15,31,23,0.14),0_30px_82px_-18px_rgba(76,122,0,0.9)] dusk:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_22px_64px_-18px_rgba(184,240,74,0.68)] dusk:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_30px_86px_-18px_rgba(184,240,74,0.88)]",
};

const rimGlow: Record<GlowLevel, string> = {
  base: "shadow-[0_10px_34px_-18px_rgba(76,122,0,0.5)] hover:shadow-[0_16px_48px_-18px_rgba(76,122,0,0.65)] dusk:hover:shadow-[0_16px_48px_-18px_rgba(184,240,74,0.55)]",
  tight:
    "shadow-[0_5px_18px_-16px_rgba(76,122,0,0.35)] hover:shadow-[0_10px_28px_-16px_rgba(76,122,0,0.5)] dusk:hover:shadow-[0_10px_28px_-16px_rgba(184,240,74,0.4)]",
  deep: "shadow-[0_16px_50px_-18px_rgba(76,122,0,0.65)] hover:shadow-[0_24px_70px_-18px_rgba(76,122,0,0.85)] dusk:hover:shadow-[0_24px_70px_-18px_rgba(184,240,74,0.75)]",
};

export function GlowButton({
  children,
  tone = "forest",
  glow = "base",
  size = "default",
  arrow = true,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: GlowTone;
  glow?: GlowLevel;
  size?: "default" | "sm" | "lg" | "icon";
  arrow?: boolean;
}) {
  function track(event: React.PointerEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--glow-x",
      `${((event.clientX - rect.left) / rect.width) * 100}%`
    );
    event.currentTarget.style.setProperty(
      "--glow-y",
      `${((event.clientY - rect.top) / rect.height) * 100}%`
    );
  }

  const glowClass =
    tone === "forest" || tone === "slab"
      ? forestGlow[glow]
      : tone === "rim"
        ? rimGlow[glow]
        : "";

  return (
    <button
      type="button"
      onPointerMove={track}
      className={cn(
        "group relative isolate inline-flex items-center justify-center overflow-hidden font-sans font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none",
        toneClasses[tone],
        glowClass,
        size === "lg" && "h-14 gap-3 px-7 text-[0.9375rem]",
        size === "default" && "h-12 gap-3 px-6 text-sm",
        size === "sm" && "h-11 gap-2.5 px-4 text-xs",
        size === "icon" && "size-12",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(110px circle at var(--glow-x, 50%) var(--glow-y, 50%), var(--glow-sheen, rgba(231,247,196,0.42)), transparent 68%)",
        }}
      />
      {size === "icon" ? (
        <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : (
        <span className="relative z-10 inline-flex items-center gap-3">
          {children}
          {arrow ? (
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          ) : null}
        </span>
      )}
    </button>
  );
}
