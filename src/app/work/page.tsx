import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Gabriella Nyawera",
  description: "Selected design and development projects by Gabriella Nyawera.",
};

export default function WorkPage() {
  const [featured, ...rest] = projects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="/"
            className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            G
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-sm text-accent transition-colors hover:text-foreground">Home</Link>
            <Link href="/work" className="text-sm text-accent transition-colors hover:text-foreground">Projects</Link>
            <Link href="/philosophy" className="hidden text-sm text-accent transition-colors hover:text-foreground sm:inline">Philosophy</Link>
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 md:px-5"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="px-8 pb-16 pt-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            All Projects
          </p>
          <h1 className="font-serif text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl">
            Projects
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            A collection of design and development projects — each one its own
            story.
          </p>
        </div>
      </section>

      {/* Featured project — large */}
      <section className="px-8 pb-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/work/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl bg-muted"
          >
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
              <div className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-auto md:min-h-[500px]"
                />
              </div>
              <div className="flex flex-col justify-center px-4 py-8 md:px-8">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {featured.year} — {featured.category}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-extralight tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {featured.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent transition-colors group-hover:text-foreground">
                  Read case study <ArrowUpRight className="size-3" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Remaining projects — grid */}
      <section className="px-8 pb-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
