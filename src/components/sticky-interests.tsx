"use client";

import { useEffect, useRef, useState } from "react";
import { interests, type Book } from "@/content/interests";
import { cn } from "@/lib/utils";

function BookCover({ book, className }: { book: Book; className?: string }) {
  const [failed, setFailed] = useState(!book.cover);
  return (
    <div
      className={cn(
        "relative aspect-[2/3] overflow-hidden rounded-sm bg-muted",
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
        <div className="flex h-full w-full flex-col justify-between bg-muted p-3">
          <span className="font-serif text-sm leading-tight">{book.title}</span>
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
            {book.author}
          </span>
        </div>
      )}
    </div>
  );
}

const skills = interests.find((interest) => interest.id === "skills");
const hobbies = interests.find((interest) => interest.id === "hobbies");
const books = interests.find((interest) => interest.id === "books");

export function StickyInterests() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) =>
              prev.has(index) ? prev : new Set([...prev, index])
            );
          }
        });
      },
      // Reveal once each block is ~25% up the viewport, so it animates while
      // scrolling rather than snapping in at the very bottom edge.
      { threshold: 0, rootMargin: "0px 0px -25% 0px" }
    );

    el.querySelectorAll("[data-index]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const reveal = (index: number) =>
    cn(
      "transition-all duration-500 ease-out",
      visible.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    );

  const revealDelay = (index: number, delay: number) =>
    visible.has(index) ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          {/* Left - heading + intro */}
          <div>
            <h2
              data-index={0}
              className={cn(
                "font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-5xl",
                reveal(0)
              )}
            >
              What I&apos;m
              <br />
              into
            </h2>
            <p
              data-index={1}
              className={cn("mt-6 max-w-xs text-muted-foreground", reveal(1))}
            >
              Design is a big part of who I am, but so are other things that
              inspire me, challenge me, and keep life interesting.
            </p>
          </div>

          {/* Right - list */}
          <div className="border-t border-border/50 pt-10 md:border-t-0 md:pt-0">
            {skills?.items && (
              <div data-index={2} className={reveal(2)}>
                <p className="font-serif text-2xl font-light tracking-tight">
                  Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {hobbies?.items && (
              <div
                data-index={3}
                style={revealDelay(3, 120)}
                className={cn("mt-10", reveal(3))}
              >
                <p className="font-serif text-2xl font-light tracking-tight">
                  Hobbies
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hobbies.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {books?.books && (
              <div
                data-index={4}
                style={revealDelay(4, 240)}
                className={cn("mt-10", reveal(4))}
              >
                <p className="font-serif text-2xl font-light tracking-tight">
                  Books
                </p>
                <div className="mt-5 flex flex-wrap gap-5">
                  {books.books.map((book) => (
                    <div
                      key={book.title}
                      className="w-24 transition-transform duration-300 hover:-translate-y-1 sm:w-28"
                    >
                      <BookCover book={book} className="rounded-md" />
                      <p className="mt-3 text-xs font-medium leading-snug">
                        {book.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {book.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
