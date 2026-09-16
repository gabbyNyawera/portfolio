import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickySplitProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  stickyTop?: string;
}

export function StickySplit({
  left,
  right,
  className,
  stickyTop = "8rem",
}: StickySplitProps) {
  return (
    <div className={cn("grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20", className)}>
      <div
        className="md:border-r-2 md:border-border/40 md:pr-12 md:sticky md:self-start"
        style={{ top: stickyTop }}
      >
        {left}
      </div>
      <div>{right}</div>
    </div>
  );
}
