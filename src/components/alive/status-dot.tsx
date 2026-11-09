import { cn } from "@/lib/utils";

/** A live dot: solid core, a ring that breathes outward, forever. */
export function StatusDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("status-dot inline-flex size-1.5 shrink-0 rounded-full bg-accent text-accent", className)}
    />
  );
}
