"use client";

import { useEffect, useRef } from "react";

/**
 * A soft pool of light that drifts on its own and leans toward the pointer.
 * Sits above the page in soft-light so it tints paper and dusk alike.
 * Purely atmospheric: no pointer capture, no layout, no content.
 */
export function AlivePointer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "1";

    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.35;
    let tx = x;
    let ty = y;
    let idle = true;
    let raf = 0;
    const started = performance.now();

    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      idle = false;
    };

    const loop = (now: number) => {
      if (idle) {
        const t = (now - started) * 0.00008;
        tx = window.innerWidth * (0.5 + 0.3 * Math.cos(t));
        ty = window.innerHeight * (0.45 + 0.2 * Math.sin(t * 1.27));
      }

      x += (tx - x) * 0.045;
      y += (ty - y) * 0.045;
      el.style.transform = `translate3d(${x - 480}px, ${y - 480}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="alive-pointer pointer-events-none fixed inset-0 overflow-hidden mix-blend-soft-light"
    >
      <div
        ref={ref}
        className="alive-pointer-light absolute left-0 top-0 size-[60rem] rounded-full"
      />
    </div>
  );
}
