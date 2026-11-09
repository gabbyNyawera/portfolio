import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The G plate: the site's Instrument Serif italic G, reversed on a forest
 * square with a pale-lime full stop. It flips to a lime plate at dusk.
 *
 * Radii, type and stop are all ratios of `size` so the mark can be set at any
 * scale without redrawing: radius 25%, letter 72%, stop 9% inset 19%.
 */
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex shrink-0 items-center justify-center bg-foreground transition-colors duration-200 ease-out dusk:bg-accent",
        className
      )}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
      }}
    >
      <span
        className="font-display italic leading-none text-background dusk:text-accent-foreground"
        style={{
          fontSize: size * 0.72,
          transform: `translateY(${size * 0.02}px)`,
        }}
      >
        G
      </span>
      <span
        className="absolute rounded-full bg-accent-soft dusk:bg-accent-foreground"
        style={{
          width: size * 0.09,
          height: size * 0.09,
          right: size * 0.19,
          bottom: size * 0.19,
        }}
      />
    </span>
  );
}

export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="Gabrielle Nyawera — home"
      className="group inline-flex shrink-0 items-center text-foreground"
    >
      <LogoMark
        size={36}
        className="transition-[color,background-color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6 group-hover:scale-105"
      />
    </Link>
  );
}
