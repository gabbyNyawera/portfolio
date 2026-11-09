import { cn } from "@/lib/utils";

type SectionTone = "paper" | "sand" | "dusk";

export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-y",
        tone === "sand" && "sand-wash",
        tone === "dusk" && "dark-section dusk-wash",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionIntro({
  title,
  description,
  action,
  className,
}: {
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("measure", className)}>
      <h2 className="display-2">{title}</h2>
      {description ? <p className="lede mt-6 max-w-md">{description}</p> : null}
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}

