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
    <nav className="px-8 py-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3" />
          Back to Work
        </Link>

        <div className="flex items-center gap-6">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3" />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {next.title}
              <ArrowRight className="size-3" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </nav>
  );
}
