"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Gives a still object weight: a slight perspective tilt toward the pointer
 * plus a shallow scroll parallax. Fine pointers only, motion-safe.
 */
export function Tilt({
  children,
  className,
  max = 4,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let rotateX = 0;
    let rotateY = 0;
    let targetX = 0;
    let targetY = 0;
    let parallax = 0;
    let targetParallax = 0;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetY = nx * max;
      targetX = -ny * max;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      targetParallax = Math.max(
        -16,
        Math.min(16, (window.innerHeight / 2 - center) * 0.035)
      );
    };

    const loop = () => {
      rotateX += (targetX - rotateX) * 0.07;
      rotateY += (targetY - rotateY) * 0.07;
      parallax += (targetParallax - parallax) * 0.07;

      el.style.transform = `translate3d(0, ${parallax.toFixed(
        2
      )}px, 0) perspective(1000px) rotateX(${rotateX.toFixed(
        3
      )}deg) rotateY(${rotateY.toFixed(3)}deg)`;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [max]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
