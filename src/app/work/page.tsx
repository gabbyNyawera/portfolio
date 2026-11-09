import type { Metadata } from "next";
import { getArchiveProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects — Gabrielle Nyawera",
  description: "Selected design and development projects by Gabrielle Nyawera.",
};

export default function WorkPage() {
  const [lead, ...rest] = getArchiveProjects();
  const selected = rest.filter((project) => project.featured);
  const others = rest.filter((project) => !project.featured);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="hero-wash pb-16 pt-[calc(var(--header-height)+4rem)] sm:pb-20 sm:pt-[calc(var(--header-height)+5.5rem)]">
          <div className="container-page">
            <h1 className="display-1">Projects</h1>
            <p className="lede mt-7 max-w-lg">
              Selected design and development work, plus a few other things
              I&apos;ve built along the way.
            </p>
          </div>
        </section>

        <section className="section-y border-t border-border/70">
          <div className="container-page">
            <ProjectCard project={lead} index={0} layout="lead" />

            {selected.length > 0 ? (
              <div className="mt-14 grid gap-10 border-t border-border/70 pt-12 sm:mt-20 sm:grid-cols-2 sm:gap-8">
                {selected.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index + 1}
                  />
                ))}
              </div>
            ) : null}

            {others.length > 0 ? (
              <div className="mt-16 sm:mt-24">
                <h2 className="display-2">Other projects</h2>
                <p className="lede mt-5 max-w-md">
                  Smaller builds and experiments that are still worth a look.
                </p>

                <div className="mt-10 border-t border-border/70">
                  {others.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index + 1 + selected.length}
                      layout="horizontal"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
