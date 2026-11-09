import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const TONES = [
  { from: "#0F1F17", to: "#4C7A00" },
  { from: "#4C7A00", to: "#B8F04A" },
  { from: "#243B2B", to: "#9DB07F" },
];

export function ProjectArtwork({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  const tone = TONES[index % TONES.length];
  const initial = project.title.charAt(0);

  return (
    <div
      className={cn(
        "asset-frame relative isolate h-full w-full overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${tone.from} 0%, ${tone.to} 100%)`,
      }}
    >
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : null}

      {/* Printed placeholder vs. real photography: dots for art, grid for photos. */}
      <div
        className={project.image ? "asset-grid opacity-25" : "halftone"}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0F1F17]/75 via-[#0F1F17]/10 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="font-sans font-medium text-[10px] uppercase tracking-[0.18em] text-[#FCFDF8]/80">
          {String(index + 1).padStart(2, "0")} — Case study
        </span>
        <span className="font-sans font-medium text-[10px] uppercase tracking-[0.18em] text-[#FCFDF8]/80">
          {project.year}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <div>
          <p className="font-display text-4xl leading-none text-[#FCFDF8]">
            {initial}
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-snug text-[#FCFDF8]/85">
            {project.title}
          </p>
        </div>
        <span className="hidden whitespace-nowrap rounded-full border border-[#FCFDF8]/25 px-3 py-1 font-sans font-medium text-[9px] uppercase tracking-[0.16em] text-[#FCFDF8]/70 sm:inline-flex">
          {project.category}
        </span>
      </div>
    </div>
  );
}
