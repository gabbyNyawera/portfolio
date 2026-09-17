"use client";

import { useState } from "react";

type Interest = {
  id: string;
  number: string;
  title: string;
  description: string;
  items?: string[];
};

const interests: Interest[] = [
  {
    id: "skills",
    number: "01",
    title: "Skills",
    description: "Design tools and techniques I'm constantly sharpening.",
    items: ["UX Design", "UI Design", "Branding", "Product Design", "Prototyping", "User Research", "Design Systems", "Wireframing"],
  },
  {
    id: "books",
    number: "02",
    title: "Books",
    description: "Reading shapes how I think about design, people, and the world.",
    items: ["The Design of Everyday Things", "Thinking with Type", "Refactoring UI", "Don't Make Me Think", "Hooked"],
  },
  {
    id: "hobbies",
    number: "03",
    title: "Hobbies",
    description: "Life outside design keeps me curious and inspired.",
    items: ["Cooking", "Reading", "Crocheting", "Flower Arrangement", "Baking", "Tennis", "Music"],
  },
];

export function StickyInterests() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Left panel - fixed on desktop */}
      <div className="sticky top-0 flex h-auto flex-col justify-center border-r border-border/40 py-16 pl-5 pr-8 sm:h-screen sm:w-[35%] sm:py-16 sm:pl-8 lg:pl-16 lg:pr-12">
        <h2 className="font-serif text-[2.5rem] font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          What I&apos;m
          <br />
          into
        </h2>
        <p className="mt-8 max-w-xs text-muted-foreground">
          Design is a big part of who I am, but so are other things that inspire me, challenge me, and keep life interesting.
        </p>
      </div>

      {/* Right panel - scrollable */}
      <div className="w-full sm:w-[65%]">
        {interests.map((interest) => (
          <div
            key={interest.id}
            className="border-b border-border/40"
          >
            <button
              onClick={() => setActiveId(activeId === interest.id ? null : interest.id)}
              className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-accent sm:py-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-lg text-accent">{interest.number}</span>
                <h3 className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                  {interest.title}
                </h3>
              </div>
              <span className="text-2xl text-muted-foreground transition-transform duration-300" style={{ transform: activeId === interest.id ? "rotate(45deg)" : "rotate(0deg)" }}>
                +
              </span>
            </button>

            {/* Expandable content */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: activeId === interest.id ? "400px" : "0px",
                opacity: activeId === interest.id ? 1 : 0,
              }}
            >
              <div className="pb-8 sm:pb-12">
                <p className="mb-6 max-w-md text-muted-foreground">
                  {interest.description}
                </p>
                {interest.items && (
                  <div className="flex flex-wrap gap-2">
                    {interest.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
