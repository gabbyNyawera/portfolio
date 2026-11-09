import Link from "next/link";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/content/projects";
import { CaseStudyNav } from "@/components/case-study-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProjectArtwork } from "@/components/project-artwork";
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
    title: `${project.title} — Gabrielle Nyawera`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const index = projects.findIndex((item) => item.slug === slug);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="hero-wash pb-12 pt-[calc(var(--header-height)+3.5rem)] sm:pb-16 sm:pt-[calc(var(--header-height)+5rem)]">
          <div className="container-page">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 font-sans font-medium text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
            >
              <Link href="/work" className="transition-colors hover:text-foreground">
                Projects
              </Link>
              <span className="text-border">/</span>
              <span>{project.title}</span>
            </nav>

            <h1 className="sr-only">{project.title}</h1>
            <p className="lede mt-7 max-w-xl">{project.caseStudy.heroDescription}</p>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border/70 pt-6 sm:grid-cols-4">
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Category", value: project.category },
                { label: "Status", value: "Complete" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container-page pb-16 sm:pb-20">
          <ProjectArtwork
            project={project}
            index={index}
            className="aspect-[16/9] w-full"
          />
        </section>

        <div className="container-page">
          {project.caseStudy.sections.map((section) => (
            <section
              key={section.id}
              className="grid gap-8 border-t border-border/70 py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-16"
            >
              <div>
                <h2 className="display-3 max-w-sm">{section.title}</h2>
              </div>

              <div className="prose-editorial max-w-xl">
                {section.content ? <p>{section.content}</p> : null}

                {section.quote ? (
                  <blockquote className="mt-8 border-l-2 border-accent pl-6">
                    <p className="font-display text-2xl italic leading-snug tracking-tight text-foreground">
                      &ldquo;{section.quote}&rdquo;
                    </p>
                  </blockquote>
                ) : null}

                {section.columns ? (
                  <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    {section.columns.map((column) => (
                      <div key={column.label}>
                        <p className="eyebrow">{column.label}</p>
                        <ul className="mt-3 space-y-2">
                          {column.items.map((item) => (
                            <li
                              key={item}
                              className="border-t border-border/70 pt-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <CaseStudyNav prev={prev} next={next} />
      </main>

      <SiteFooter showCta={false} />
    </div>
  );
}
