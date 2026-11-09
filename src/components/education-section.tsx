import { education } from "@/content/education";
import { Reveal } from "@/components/reveal";

export function EducationSection() {
  return (
    <div className="container-page">
      <div className="split-editorial">
        <div>
          <h2 className="display-2">Always learning</h2>
          <p className="lede mt-6 max-w-xs">
            Certifications and specializations I&apos;ve completed — and a few
            I&apos;m currently working through.
          </p>
        </div>

        <div className="ledger border-t border-border/70">
          {education.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <div className="ledger-row grid grid-cols-[3.5rem_1fr] items-center gap-5 sm:gap-8">
                <span className="text-xs text-muted-foreground">{item.year}</span>
                <div>
                  <h3 className="text-lg font-medium leading-snug tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
