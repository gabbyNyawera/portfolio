import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { HorizontalProjects } from "@/components/horizontal-projects";
import { StickyInterests } from "@/components/sticky-interests";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { PhilosophyReveal } from "@/components/philosophy-reveal";

const education = [
  { name: "Google AI Professional Certificate", issuer: "Coursera", year: "2025" },
  { name: "Google Prompting Essentials Specialization", issuer: "Coursera", year: "2025" },
  { name: "Google UX Design Professional Certificate", issuer: "Coursera", year: "2024" },
  { name: "Introduction to User Experience Design", issuer: "Coursera", year: "2024" },
];

export default function PortfolioPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="/"
            className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            G
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-sm text-accent transition-colors hover:text-foreground">Home</Link>
            <Link href="/work" className="text-sm text-accent transition-colors hover:text-foreground">Projects</Link>
            <Link href="/philosophy" className="hidden text-sm text-accent transition-colors hover:text-foreground sm:inline">Philosophy</Link>
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 md:px-5"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

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
