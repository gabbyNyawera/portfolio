"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a control so it leans toward the pointer and settles back on leave.
 * Pointer-only and motion-safe; keyboard and touch behaviour is untouched.
 */
export function Magnetic({
  children,
  strength = 9,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const outer = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  function move(event: React.PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const box = outer.current;
    const target = inner.current;
    if (!box || !target) return;

    const rect = box.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    target.style.transform = `translate3d(${(dx * strength).toFixed(2)}px, ${(
      dy *
      strength *
      0.6
    ).toFixed(2)}px, 0)`;
  }

  function settle() {
    if (inner.current) inner.current.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <span
      ref={outer}
      onPointerMove={move}
      onPointerLeave={settle}
      onBlur={settle}
      className={cn("inline-flex", className)}
    >
      <span
        ref={inner}
        className="inline-flex transition-transform duration-500 ease-[var(--ease-out-expo)] will-change-transform"
      >
        {children}
      </span>
    </span>
  );
}
