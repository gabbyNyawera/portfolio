import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
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
            href="mailto:nyaweragabby@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Get in touch <ArrowUpRight className="size-3.5" />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="mailto:nyaweragabby@gmail.com" className="text-accent transition-colors hover:text-foreground">
              <Mail className="size-4" />
            </a>
            <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-foreground">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-foreground">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
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
