import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";

const project = getFeaturedProjects()[0];
const second = getFeaturedProjects()[1];

const options = [
  {
    id: "serif-15",
    name: "Serif 1.5rem",
    note: "What you have now. Editorial, but uppercase brand names go spindly.",
    font: "var(--font-display)",
    size: "1.5rem",
    weight: "400",
    tracking: "-0.01em",
    line: "1.2",
  },
  {
    id: "serif-17",
    name: "Serif 1.625rem",
    note: "Same voice, a little more mass. Thin strokes survive uppercase.",
    font: "var(--font-display)",
    size: "1.625rem",
    weight: "400",
    tracking: "-0.005em",
    line: "1.18",
  },
  {
    id: "inter-15",
    name: "Inter 500 · 1.5rem",
    note: "Card titles leave the serif. The display face stays purely display.",
    font: "var(--font-sans)",
    size: "1.5rem",
    weight: "500",
    tracking: "-0.02em",
    line: "1.25",
  },
  {
    id: "inter-13",
    name: "Inter 500 · 1.25rem",
    note: "Quieter and more like a caption. Lets the image and the eyebrow lead.",
    font: "var(--font-sans)",
    size: "1.25rem",
    weight: "500",
    tracking: "-0.015em",
    line: "1.3",
  },
] as const;

export default function TitlePage() {
  return (
    <main className="bg-background text-foreground">
      <style>{`
        [data-title] .title {
          font-family: var(--t-font);
          font-size: var(--t-size);
          font-weight: var(--t-weight);
          letter-spacing: var(--t-tracking);
          line-height: var(--t-line);
        }
      `}</style>

      <div className="container-page pt-16 pb-10">
        <p className="eyebrow">Type · card titles</p>
        <h1 className="display-2 mt-4">
          The <em className="italic text-accent-ink">.title</em> token
        </h1>
        <p className="lede measure mt-5">
          One token covers two different jobs: uppercase project names and
          sentence-case section headings. Same three cards under each setting, so
          the only variable is the title treatment.
        </p>
      </div>

      {options.map((option) => (
        <section
          key={option.id}
          data-title={option.id}
          style={
            {
              "--t-font": option.font,
              "--t-size": option.size,
              "--t-weight": option.weight,
              "--t-tracking": option.tracking,
              "--t-line": option.line,
            } as React.CSSProperties
          }
          className="border-t border-border"
        >
          <div className="container-page py-12">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-micro uppercase tracking-[0.16em] text-accent-ink">
                  {option.id.slice(0, 5)}
                </span>
                <h2 className="display-3">{option.name}</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                {option.note}
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {/* uppercase project title */}
              <article className="surface-card p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-md bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-4">
                  {project.year} — {project.category}
                </p>
                <h3 className="title mt-2">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="link-arrow mt-4">
                  View case study <ArrowUpRight className="size-3.5" />
                </span>
              </article>

              {/* sentence-case title on oxblood */}
              <article className="dark-section flex flex-col justify-between rounded-xl bg-background p-5">
                <div>
                  <p className="eyebrow text-accent-ink">Principle 02</p>
                  <h3 className="title mt-3">Remove friction</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Good design should make the difficult feel obvious, so the
                    interface disappears and the work stays.
                  </p>
                </div>
                <span className="link-arrow mt-6">
                  Read more <ArrowUpRight className="size-3.5" />
                </span>
              </article>

              {/* short heading + list */}
              <article className="surface-card p-5">
                <h3 className="title">Books</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>The Design of Everyday Things</li>
                  <li>Thinking with Type</li>
                  <li>Refactoring UI</li>
                </ul>
              </article>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <article className="surface-card p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-md bg-surface-strong">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={second.image}
                    alt={second.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-4">
                  {second.year} — {second.category}
                </p>
                <h3 className="title mt-2">{second.title}</h3>
              </article>
              <div className="md:col-span-2 flex items-center rounded-xl border border-border bg-surface-strong p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-micro uppercase tracking-[0.14em] text-foreground">
                    Check —{" "}
                  </span>
                  compare {project.title} above against {second.title}. The first
                  is uppercase and the second is not, which is where a single
                  setting has to work for both.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
