import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export function SelectedWork({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  const lead = projects.find((project) => project.lead) ?? projects[0];
  const rest = projects.filter((project) => project !== lead);

  return (
    <div className="container-page">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="display-2">Selected work</h2>
          <p className="lede mt-5 max-w-md">
            A closer look at the brief, the decisions, and what shipped.
          </p>
        </div>
        <Link href="/work" className="link-arrow">
          All projects
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="mt-12 sm:mt-16">
        <ProjectCard project={lead} index={0} layout="lead" />
      </div>

      {rest.length > 0 ? (
        <div className="mt-14 grid gap-10 border-t border-border/70 pt-12 sm:mt-20 sm:grid-cols-2 sm:gap-8">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
