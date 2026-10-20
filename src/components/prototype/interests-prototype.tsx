"use client";

/**
 * PROTOTYPE — throwaway.
 *
 * Question: "The Books block looks ugly and doesn't fit the page; how should
 * the redesigned 'What I'm into' section look (books as muted cover cards with
 * title + author, no numbering) and how should a left-side, whole-page section
 * nav work?"
 *
 * Three structurally different variants on the existing `/` route, switchable
 * via `?variant=`. Assumption: this is a UI/look question, not a logic one.
 * Not production code — the winner gets folded into the real components.
 */

import { useEffect, useState } from "react";
import { interests } from "@/content/interests";
import { cn } from "@/lib/utils";
import { StickyInterests } from "@/components/sticky-interests";
import { PrototypeSwitcher } from "./prototype-switcher";

type Book = { title: string; author: string; cover: string };

const BOOKS: Book[] = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    cover: "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    cover: "",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://covers.openlibrary.org/b/isbn/9781591847786-L.jpg",
  },
];

const SKILLS = interests.find((i) => i.id === "skills")?.items ?? [];
const HOBBIES = interests.find((i) => i.id === "hobbies")?.items ?? [];
const INTRO =
  "Design is a big part of who I am, but so are other things that inspire me, challenge me, and keep life interesting.";

const SECTIONS = [
  { id: "philosophy", label: "Philosophy" },
  { id: "projects", label: "Work" },
  { id: "learning", label: "Learning" },
  { id: "into", label: "Into" },
];

const TABS = ["skills", "books", "hobbies"] as const;

const VARIANTS = [
  { key: "A", name: "Bento grid" },
  { key: "B", name: "Horizontal shelves" },
  { key: "C", name: "Tabbed panels" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);
  return active;
}

/** Nudge all page content right so the fixed left rail doesn't cover it. */
function useLeftOffset() {
  useEffect(() => {
    const apply = () => {
      document.body.style.paddingLeft = window.innerWidth >= 1024 ? "12rem" : "";
    };
    apply();
    window.addEventListener("resize", apply);
    return () => {
      document.body.style.paddingLeft = "";
      window.removeEventListener("resize", apply);
    };
  }, []);
}

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

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------- Variant A ------------------------------ */
/** Bento grid: category tiles of different sizes; books as a cover strip. */
function VariantA() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  useLeftOffset();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-[72px] z-40 hidden w-48 flex-col justify-center gap-1 border-r border-border/60 bg-background/80 px-6 backdrop-blur-sm lg:flex">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              "flex items-center gap-3 py-1.5 text-xs transition-colors",
              active === s.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "h-px transition-all duration-300",
                active === s.id ? "w-5 bg-foreground" : "w-2.5 bg-border"
              )}
            />
            {s.label}
          </a>
        ))}
      </nav>

      <div className="px-5 pb-24 pt-16 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="rounded-2xl bg-muted p-8 md:col-span-2 md:p-10">
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              What I&apos;m
              <br />
              into
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">{INTRO}</p>
          </div>

          <div className="rounded-2xl border border-border/60 p-8 md:col-span-4 md:p-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </h3>
            <div className="mt-5">
              <Pills items={SKILLS} />
            </div>
          </div>

          <div className="rounded-2xl bg-muted p-8 md:col-span-4 md:p-10">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Books
              </h3>
              <span className="hidden text-[11px] text-muted-foreground sm:inline">
                Reading shapes how I think
              </span>
            </div>
            <div className="mt-6 flex gap-5 overflow-x-auto pb-2">
              {BOOKS.map((book) => (
                <div key={book.title} className="w-24 shrink-0 sm:w-28">
                  <BookCover book={book} />
                  <p className="mt-3 text-xs font-medium leading-snug">
                    {book.title}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 p-8 md:col-span-2 md:p-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Hobbies
            </h3>
            <div className="mt-5">
              <Pills items={HOBBIES} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------- Variant B ------------------------------ */
/** Horizontal shelves: each category is a full-bleed scrollable row; books sit on a shelf. */
function VariantB() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  useLeftOffset();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-[72px] z-40 hidden w-48 flex-col justify-center gap-2 border-r border-border/60 bg-background px-6 lg:flex">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              "font-serif text-lg leading-tight transition-colors",
              active === s.id
                ? "text-foreground"
                : "text-muted-foreground/50 hover:text-muted-foreground"
            )}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="pb-24 pt-16">
        <div className="px-5 sm:px-8 lg:px-16">
          <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
            What I&apos;m into
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">{INTRO}</p>
        </div>

        <div className="mt-12 space-y-14">
          <div>
            <div className="px-5 sm:px-8 lg:px-16">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Skills
              </h3>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-16">
              {SKILLS.map((item) => (
                <span
                  key={item}
                  className="shrink-0 whitespace-nowrap rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="px-5 sm:px-8 lg:px-16">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Books
              </h3>
            </div>
            <div className="mt-6 flex gap-6 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-16">
              {BOOKS.map((book) => (
                <div key={book.title} className="w-32 shrink-0">
                  <BookCover book={book} className="shadow-md" />
                  <p className="mt-3 text-sm font-medium leading-snug">
                    {book.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-5 h-px bg-border/70 sm:mx-8 lg:mx-16" />
          </div>

          <div>
            <div className="px-5 sm:px-8 lg:px-16">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Hobbies
              </h3>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-16">
              {HOBBIES.map((item) => (
                <span
                  key={item}
                  className="shrink-0 whitespace-nowrap rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------- Variant C ------------------------------ */
/** Tabbed panels: segmented control swaps one category panel in place. */
function VariantC() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  useLeftOffset();
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("books");

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-[72px] z-40 hidden w-48 flex-col justify-center gap-5 px-8 lg:flex">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3">
            <span
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === s.id
                  ? "w-6 bg-foreground"
                  : "w-2 bg-border group-hover:bg-muted-foreground"
              )}
            />
            <span
              className={cn(
                "text-xs transition-opacity duration-300",
                active === s.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-60"
              )}
            >
              {s.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="px-5 pb-24 pt-16 sm:px-8 lg:px-16">
        <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
          What I&apos;m into
        </h2>
        <p className="mt-6 max-w-md text-muted-foreground">{INTRO}</p>

        <div className="mt-10 flex gap-1 border-b border-border/60">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "-mb-px border-b-2 px-5 py-3 text-sm capitalize transition-colors",
                activeTab === tab
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {activeTab === "skills" && <Pills items={SKILLS} />}
          {activeTab === "hobbies" && <Pills items={HOBBIES} />}
          {activeTab === "books" && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-5">
              {BOOKS.map((book) => (
                <div key={book.title}>
                  <BookCover book={book} />
                  <p className="mt-3 text-sm font-medium leading-snug">
                    {book.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* -------------------------------- Switcher ------------------------------ */
export function InterestsPrototype({ variant: raw }: { variant?: string }) {
  const key = raw?.toUpperCase();
  const variant = key && VARIANTS.some((v) => v.key === key) ? key : null;

  if (process.env.NODE_ENV === "production" || !variant) {
    return <StickyInterests />;
  }

  return (
    <>
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      <PrototypeSwitcher variants={VARIANTS} current={variant} />
    </>
  );
}
