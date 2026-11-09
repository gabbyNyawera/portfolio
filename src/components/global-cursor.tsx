"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const HOVER_SELECTOR = "a, button, [role='button'], input[type='submit'], label";

/**
 * Simple site cursor. A quick accent dot marks the spot and a slower ring
 * trails behind; the ring grows over interactive elements. The native cursor
 * is never hidden. Fine pointers only.
 */
export function GlobalCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pointer = { x: 0, y: 0 };
    const dot = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      setIsHovering(Boolean(target.closest(HOVER_SELECTOR)));
    };

    const loop = () => {
      dot.x += (pointer.x - dot.x) * 0.4;
      dot.y += (pointer.y - dot.y) * 0.4;
      ring.x += (pointer.x - ring.x) * 0.13;
      ring.y += (pointer.y - ring.y) * 0.13;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] hidden [@media(pointer:fine)]:block",
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-200"
        )}
        style={{ willChange: "transform" }}
      >
        <span className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>

      <div
        ref={ringRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] hidden [@media(pointer:fine)]:block",
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity duration-200"
        )}
        style={{ willChange: "transform" }}
      >
        <div
          className={cn(
            "absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-transparent transition-[width,height] duration-300 ease-[var(--ease-out-expo)]",
            isHovering ? "size-9 border-accent/50" : "size-6 border-accent/30"
          )}
        />
      </div>
    </>
  );
}
