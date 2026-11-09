import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Remove friction",
    description: "Good design should make the difficult feel obvious.",
  },
  {
    title: "Make space for people",
    description: "Interfaces should support people rather than compete with them.",
  },
  {
    title: "Details matter",
    description: "Small decisions can shape the entire experience.",
  },
  {
    title: "Don't decorate",
    description: "Every element should earn its place, or it doesn't stay.",
  },
];

export function PhilosophyReveal() {
  return (
    <div className="container-page">
      <div className="split-editorial">
        <div>
          <h2 className="display-2">How I think</h2>
          <p className="lede mt-6 max-w-xs">
            A note on the principles that guide every decision.
          </p>
          <Link href="/philosophy" className="link-arrow mt-8">
            Read the full philosophy
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="border-t border-border/70">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <div className="border-b border-border/70 py-7 sm:py-8">
                <div>
                  <h3 className="title">{principle.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
