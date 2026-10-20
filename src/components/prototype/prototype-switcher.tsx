"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Variant = { key: string; name: string };

/**
 * PROTOTYPE — throwaway floating variant switcher.
 * Drives a `param` search param (default `?variant=`) so a variant is shareable and reload-stable.
 * Hidden in production so it can never ship.
 */
export function PrototypeSwitcher({
  variants,
  current,
  param = "variant",
}: {
  variants: Variant[];
  current: string;
  param?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const index = Math.max(
    0,
    variants.findIndex((v) => v.key === current)
  );

  const go = useCallback(
    (dir: number) => {
      const next = variants[(index + dir + variants.length) % variants.length];
      router.replace(`${pathname}?${param}=${next.key}`);
    },
    [index, variants, router, pathname, param]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/10 bg-foreground px-2 py-1.5 text-background shadow-xl">
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous variant"
        className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-background/20"
      >
        <ArrowLeft className="size-3.5" />
      </button>
      <span className="min-w-[9rem] text-center text-xs font-medium tabular-nums">
        {variants[index]?.key} — {variants[index]?.name}
      </span>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next variant"
        className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-background/20"
      >
        <ArrowRight className="size-3.5" />
      </button>
    </div>
  );
}
