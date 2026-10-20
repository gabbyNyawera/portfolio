"use client";

/**
 * PROTOTYPE — throwaway.
 *
 * Question: "How should the Books block look?" — a UI/look question.
 * Four structurally different treatments, muted (no orange), each showing
 * cover + title + author. Switchable via `?books=` so it doesn't collide with
 * the interests prototype's `?variant=` or the logo prototype's `?logo=`.
 * Not production code — the winner gets folded into the real section.
 */

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PrototypeSwitcher } from "./prototype-switcher";

type Book = { title: string; author: string; cover: string; note: string };

const BOOKS: Book[] = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",
    note: "Why good design disappears",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    cover: "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg",
    note: "Type as a system",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    cover: "",
    note: "Practical rules for interfaces",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
    note: "Usability, again and again",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://covers.openlibrary.org/b/isbn/9781591847786-L.jpg",
    note: "Habits by design",
  },
];

const OPTIONS = [
  { key: "A", name: "Cover grid" },
  { key: "B", name: "Reading list" },
  { key: "C", name: "Featured + shelf" },
  { key: "D", name: "Shelf panel" },
];

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

/** A — Cover grid: five covers, captions beneath. */
function OptionA() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
      {BOOKS.map((book) => (
        <div key={book.title}>
          <BookCover book={book} className="rounded-md" />
          <p className="mt-3 text-sm font-medium leading-snug">{book.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{book.author}</p>
        </div>
      ))}
    </div>
  );
}

/** B — Reading list: text-forward rows with a small cover and a one-line note. */
function OptionB() {
  return (
    <ul className="border-y border-border/60">
      {BOOKS.map((book) => (
        <li
          key={book.title}
          className="flex items-center gap-6 border-b border-border/60 py-5 last:border-b-0"
        >
          <BookCover book={book} className="w-11 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="font-serif text-lg leading-snug">{book.title}</p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
              {book.author}
            </p>
          </div>
          <p className="hidden max-w-[14rem] text-right text-xs text-muted-foreground sm:block">
            {book.note}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** C — Featured + shelf (compact): one larger "currently reading" beside a single row of the rest. ~1.5 rows tall. */
function OptionC() {
  const [featured, ...rest] = BOOKS;
  return (
    <div className="flex flex-wrap items-end gap-8 sm:flex-nowrap sm:gap-12">
      <div className="flex shrink-0 items-end gap-5">
        <BookCover
          book={featured}
          className="w-24 rounded-md shadow-md sm:w-28"
        />
        <div className="pb-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Currently reading
          </p>
          <p className="mt-2 max-w-[11rem] font-serif text-lg leading-snug">
            {featured.title}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {featured.author}
          </p>
        </div>
      </div>

      <div className="flex items-end gap-3 overflow-x-auto pb-1 sm:gap-5">
        {rest.map((book) => (
          <div key={book.title} className="w-16 shrink-0 sm:w-20">
            <BookCover book={book} className="rounded-md" />
            <p className="mt-2 text-[10px] font-medium leading-snug">
              {book.title}
            </p>
            <p className="text-[10px] text-muted-foreground">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** D — Shelf panel: covers standing on a shelf inside a muted card, captions listed below. */
function OptionD() {
  return (
    <div className="rounded-3xl bg-muted p-8 sm:p-12">
      <div className="flex items-end justify-center gap-4 overflow-x-auto pb-5 sm:gap-7">
        {BOOKS.map((book) => (
          <div key={book.title} className="w-20 shrink-0 sm:w-28">
            <BookCover book={book} className="rounded-sm shadow-md" />
          </div>
        ))}
      </div>
      <div className="h-px bg-border/70" />
      <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-xs sm:grid-cols-5">
        {BOOKS.map((book) => (
          <li key={book.title}>
            <p className="font-medium leading-snug">{book.title}</p>
            <p className="text-muted-foreground">{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BooksPrototype({ variant: raw }: { variant?: string }) {
  const key = raw?.toUpperCase();
  const option = OPTIONS.some((o) => o.key === key) ? (key as string) : "A";

  return (
    <main className="mx-auto max-w-6xl px-6 pb-36 pt-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Prototype — Books
      </p>
      <h1 className="mt-3 font-serif text-4xl font-light tracking-tight">
        Books
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Four treatments for the books block. Flip with the bar below (or the
        ← / → keys). All muted — no orange.
      </p>

      <section className="mt-12">
        {option === "A" && <OptionA />}
        {option === "B" && <OptionB />}
        {option === "C" && <OptionC />}
        {option === "D" && <OptionD />}
      </section>

      <PrototypeSwitcher variants={OPTIONS} current={option} param="books" />
    </main>
  );
}
