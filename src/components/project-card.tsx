import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  layout = "vertical",
}: {
  project: Project;
  layout?: "vertical" | "horizontal";
}) {
  if (layout === "horizontal") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group flex gap-6 py-6 transition-colors hover:bg-muted/30"
      >
        <div className="w-48 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.year} — {project.category}
          </p>
          <h3 className="mt-1 text-lg font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-foreground transition-colors group-hover:text-accent">
            View case study <ArrowUpRight className="size-3" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {project.year} — {project.category}
        </p>
        <h3 className="mt-1 text-xl font-medium tracking-tight font-serif">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-accent transition-colors group-hover:text-foreground">
          View case study <ArrowUpRight className="size-3" />
        </span>
      </div>
    </Link>
  );
}
