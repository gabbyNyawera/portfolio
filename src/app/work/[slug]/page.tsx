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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border/40 bg-background px-8 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          Gabe
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/philosophy"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Philosophy
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-28 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
            <Link href="/work" className="hover:text-foreground transition-colors">
              Work
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
      <section className="px-8 pb-20 lg:px-16">
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
      <SiteFooter />
    </div>
  );
}
