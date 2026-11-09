import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArtwork } from "@/components/project-artwork";

type ProjectCardLayout = "vertical" | "horizontal" | "lead";

export function ProjectCard({
  project,
  index = 0,
  layout = "vertical",
}: {
  project: Project;
  index?: number;
  layout?: ProjectCardLayout;
}) {
  if (layout === "lead") {
    return (
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className="group grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12"
      >
        <ProjectArtwork
          project={project}
          index={index}
          className="aspect-[16/9] w-full"
        />
        <div className="md:px-4">
          <p className="text-xs text-muted-foreground">
            {project.year} — {project.category}
          </p>
          <h2 className="display-3 mt-3">{project.title}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tag">{project.role}</span>
            <span className="tag">{project.year}</span>
          </div>
          <span className="link-arrow mt-8 group-hover:text-foreground">
            Read case study
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  if (layout === "horizontal") {
    return (
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View"
        className="group flex gap-6 border-b border-border/70 py-6 transition-colors hover:border-foreground/30"
      >
        <div className="w-48 flex-shrink-0">
          <ProjectArtwork
            project={project}
            index={index}
            className="aspect-[4/3] w-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-xs text-muted-foreground">
            {project.year} — {project.category}
          </p>
          <h3 className="title mt-1">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.description}
          </p>
          <span className="link-arrow mt-3">
            View case study <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/work/${project.slug}`} data-cursor="View" className="group flex h-full flex-col">
      <ProjectArtwork
        project={project}
        index={index}
        className="aspect-[16/10] w-full"
      />
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs text-muted-foreground">
          {project.year} — {project.category}
        </p>
        <h3 className="title mt-1">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <span className="link-arrow mt-auto pt-5 group-hover:text-foreground">
          Read case study
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
