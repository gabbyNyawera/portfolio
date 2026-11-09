"use client";

import { useState } from "react";
import { PhilosophyNav } from "@/components/philosophy-nav";

const slides = [
  { id: "intro", label: "Introduction", group: "intro" },
  { id: "remove-friction", label: "Remove friction", group: "philosophy" },
  { id: "make-space", label: "Make space for people", group: "philosophy" },
  { id: "details-matter", label: "Details matter", group: "philosophy" },
  { id: "research", label: "Research", group: "process" },
  { id: "iterate", label: "Iterate", group: "process" },
];

export function PhilosophyNavSpecimen() {
  const [active, setActive] = useState(0);

  return (
    <PhilosophyNav
      slides={slides}
      activeSlide={active}
      total={slides.length}
      onSlideClick={(index) =>
        setActive(Math.max(0, Math.min(slides.length - 1, index)))
      }
    />
  );
}
