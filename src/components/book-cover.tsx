"use client";

import { useState } from "react";
import type { Book } from "@/content/interests";
import { cn } from "@/lib/utils";

export function BookCover({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  const [failed, setFailed] = useState(!book.cover);

  return (
    <div
      className={cn(
        "relative aspect-[2/3] overflow-hidden rounded-media border border-border/60 bg-muted shadow-[0_14px_30px_-18px_rgba(36,30,24,0.5)]",
        className
      )}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={book.cover}
          alt={book.title}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-surface-strong p-3">
          <span className="font-display text-sm leading-tight">{book.title}</span>
          <span className="font-sans font-medium text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
            {book.author}
          </span>
        </div>
      )}
    </div>
  );
}
