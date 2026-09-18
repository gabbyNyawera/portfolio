import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Gabriella Nyawera",
  description: "Selected design and development projects by Gabriella Nyawera.",
};

export default function WorkPage() {
  const [project] = projects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Header */}
      <section className="px-8 pb-16 pt-20 sm:pt-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Project
          </p>
          <h1 className="font-serif text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl">
            Projects
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            A design and development project — with its own story.
          </p>
        </div>
      </section>

      {/* Project — large */}
      <section className="px-8 pb-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/work/${project.slug}`}
            className="group block overflow-hidden rounded-2xl bg-muted"
          >
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto md:min-h-[500px]"
                />
              </div>
              <div className="flex flex-col justify-center px-4 py-8 md:px-8">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.year} — {project.category}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-extralight tracking-tight md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent transition-colors group-hover:text-foreground">
                  Read case study <ArrowUpRight className="size-3" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
