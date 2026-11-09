import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function CaseStudyNav({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <nav className="mt-8 border-t border-border/70">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-10">
        <Link href="/work" className="link-arrow text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-3.5" />
          All projects
        </Link>

        <div className="flex items-center gap-6">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="link-arrow">
              <ArrowLeft className="size-3.5" />
              {prev.title}
            </Link>
          ) : null}
          {next ? (
            <Link href={`/work/${next.slug}`} className="link-arrow">
              {next.title}
              <ArrowRight className="size-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
