import { cn } from "@/lib/utils";

/**
 * A slow band of repeated words. Decorative: hidden from assistive tech,
 * pauses on hover, and the global reduced-motion rule stops it.
 */
export function Marquee({
  items,
  className,
  duration = 44,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("marquee overflow-hidden", className)}
    >
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            {items.map((item, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center gap-10 whitespace-nowrap font-display text-2xl italic leading-none"
              >
                {item}
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
