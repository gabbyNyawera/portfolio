import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/content/projects";
import { CaseStudyNav } from "@/components/case-study-nav";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Gabriella Nyawera`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

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

      {/* Hero */}
      <section className="px-8 pt-28 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
            <Link href="/work" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span>{project.title}</span>
          </div>

          <h1 className="mt-8 font-serif text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {project.caseStudy.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                Role
              </p>
              <p className="mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                Year
              </p>
              <p className="mt-1">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                Category
              </p>
              <p className="mt-1">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-8 pb-16 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Prototype Embed */}
      {project.prototypeUrl && (
        <section className="px-8 pb-20 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
                  Interactive Preview
                </p>
                <h3 className="font-serif text-2xl font-light tracking-tight">
                  Test the Live Prototype
                </h3>
              </div>
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-accent/90"
              >
                Open in new tab <ArrowUpRight className="size-3" />
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-yellow-400/80" />
                <span className="size-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  {project.prototypeUrl}
                </span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-background">
                <iframe
                  src={project.prototypeUrl}
                  title={`${project.title} Prototype`}
                  className="absolute inset-0 h-full w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case study sections */}
      {project.caseStudy.sections.map((section) => (
        <section key={section.id} className="px-8 py-16 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/50">
              {section.label}
            </p>
            <h2 className="font-serif text-3xl font-extralight leading-snug tracking-tight md:text-4xl">
              {section.title}
            </h2>
            {section.content && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            )}
            {section.quote && (
              <blockquote className="mt-8 border-l-2 border-accent pl-6 text-2xl font-extralight leading-snug text-foreground/80">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
            )}
            {/* Placeholder for images */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-lg bg-muted" />
              <div className="aspect-[4/3] rounded-lg bg-muted" />
            </div>
            <p className="mt-3 text-[10px] text-muted-foreground/50">
              [ {section.label} images ]
            </p>
          </div>
        </section>
      ))}

      {/* Prev / Next navigation */}
      <CaseStudyNav prev={prev} next={next} />

      {/* Footer */}
      <SiteFooter showCta={false} />
    </div>
  );
}
