import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { HorizontalProjects } from "@/components/horizontal-projects";
import { StickyInterests } from "@/components/sticky-interests";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PhilosophyReveal } from "@/components/philosophy-reveal";
import { education } from "@/content/education";

export default function PortfolioPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <Hero />

      {/* Philosophy through Skills — continuous line */}
      <div className="column-line">
      <section id="philosophy">
        <PhilosophyReveal />
      </section>

      {/* Selected Work */}
      <section id="projects" className="pt-[52px] pb-[52px] sm:pt-[52px] sm:pb-[52px]">
        <HorizontalProjects projects={featuredProjects} />
      </section>

      {/* Education */}
      <section className="px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                Always
                <br />
                learning
              </h2>
              <p className="mt-8 text-muted-foreground">
                Certifications and specializations I&apos;ve completed — and a few I&apos;m currently working through.
              </p>
            </div>
            <div>
              {education.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex gap-8 py-6 ${
                    index < education.length - 1 ? "border-b border-border/40" : ""
                  }`}
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {item.year}
                  </span>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Books & Interests */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16">
        <StickyInterests />
      </section>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
