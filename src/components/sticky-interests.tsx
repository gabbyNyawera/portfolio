"use client";

import { useRef, useEffect, useState } from "react";
import { interests } from "@/content/interests";

export function StickyInterests() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const featured = interests.find((interest) => interest.featured);
  const accordionItems = interests.filter((interest) => !interest.featured);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mq = window.matchMedia("(max-width: 639px)");
    const updateIsMobile = () => setIsMobile(mq.matches);
    updateIsMobile();
    mq.addEventListener("change", updateIsMobile);

    const handleScroll = () => {
      if (window.innerWidth < 640) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const maxScroll = containerHeight - viewportHeight;

      const accordionCount = interests.filter((interest) => !interest.featured).length;

      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
        setActiveIndex(Math.round(progress * (accordionCount - 1)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative sm:h-[300vh]">
        <div className="relative flex pt-[52px] sm:sticky sm:top-0 sm:h-screen sm:overflow-hidden">
          {/* Left panel - fixed */}
          <div className="hidden flex-col justify-start py-16 pl-5 pr-8 sm:flex sm:w-[35%] sm:pl-8 lg:pl-16 lg:pr-12">
            <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
              What I&apos;m
              <br />
              into
            </h2>
            <p className="mt-8 max-w-xs text-muted-foreground">
              Design is a big part of who I am, but so are other things that inspire me, challenge me, and keep life interesting.
            </p>
          </div>

          {/* Right panel - accordion items driven by scroll */}
          <div className="w-full sm:w-[65%]">
            <div className="flex flex-col px-5 pt-16 sm:pt-16 sm:px-8 lg:px-16">
              {/* Mobile heading */}
              <div className="mb-8 sm:hidden">
                <h2 className="font-serif text-[2.5rem] font-light leading-[1.05] tracking-tight">
                  What I&apos;m
                  <br />
                  into
                </h2>
                <p className="mt-6 max-w-xs text-muted-foreground">
                  Design is a big part of who I am, but so are other things that inspire me, challenge me, and keep life interesting.
                </p>
              </div>

              {accordionItems.map((interest, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={interest.id}
                    className={index < accordionItems.length - 1 ? "border-b border-border/40" : ""}
                  >
                    <div
                      className="cursor-pointer py-6 sm:cursor-default sm:py-8"
                      onClick={() => setActiveIndex(isActive && isMobile ? -1 : index)}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-lg text-accent">{interest.number}</span>
                        <h3
                          className="font-serif text-3xl font-light tracking-tight transition-colors duration-300 sm:text-4xl md:text-5xl"
                          style={{ color: isActive ? "var(--accent)" : "" }}
                        >
                          {interest.title}
                        </h3>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: isActive ? "600px" : "0px",
                        opacity: isActive ? 1 : 0,
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
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured standalone block - breaks from the accordion layout */}
      {featured && (
        <section className="px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl bg-accent px-6 py-12 text-background sm:px-12 sm:py-16 lg:px-20">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
                <div className="max-w-md">
                  <span className="font-serif text-lg text-background/80">
                    {featured.number}
                  </span>
                  <h3 className="mt-2 font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                    {featured.title}
                  </h3>
                  <p className="mt-6 text-background/80">
                    {featured.description}
                  </p>
                </div>

                {featured.items && (
                  <ul className="flex w-full max-w-md flex-col">
                    {featured.items.map((item, index) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-4 border-b border-background/25 py-3 text-sm first:border-t first:border-background/25"
                      >
                        <span className="font-serif text-background/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
