"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Africa/Harare",
});

/** Local time where she is. Ticks quietly; renders a dash until mounted. */
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      Harare {time ?? "—"}
    </span>
  );
}
