import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { StickySplit } from "@/components/sticky-split";
import { HorizontalProjects } from "@/components/horizontal-projects";
import { StickyInterests } from "@/components/sticky-interests";
import { SiteFooter } from "@/components/site-footer";

const education = [
  { name: "Google AI Professional Certificate", issuer: "Coursera" },
  { name: "Google Prompting Essentials Specialization", issuer: "Coursera" },
  { name: "Google UX Design Professional Certificate", issuer: "Coursera" },
  { name: "Introduction to User Experience Design", issuer: "Coursera" },
];

const skills = [
  { name: "Figma", group: "tools" },
  { name: "User Research", group: "methods" },
  { name: "Wireframing", group: "methods" },
  { name: "Prototyping", group: "methods" },
  { name: "Design Systems", group: "methods" },
  { name: "Vibe Coding", group: "code" },
  { name: "Next.js", group: "code" },
  { name: "Tailwind CSS", group: "code" },
  { name: "TypeScript", group: "code" },
  { name: "Design Thinking", group: "methods" },
  { name: "Problem Solving", group: "soft" },
  { name: "Collaboration", group: "soft" },
  { name: "Communication", group: "soft" },
  { name: "Empathy", group: "soft" },
  { name: "Curiosity", group: "soft" },
];

const hobbies = [
  "Cooking",
  "Reading",
  "Crocheting",
  "Flower Arrangement",
  "Baking",
  "Tennis",
  "Music",
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
      <section className="px-5 pt-28 pb-16 sm:px-8 sm:pt-40 sm:pb-40">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-6xl font-light leading-[1.1] tracking-tight md:text-8xl">
            Gabe<br />Product Designer.
          </h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
            Hey, I&apos;m Gabe a product designer crafting calm, considered digital experiences with a focus on clarity, usability, and the kind of details that make complex things feel obvious.
          </p>
          <div className="mt-12">
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/90"
            >
              Let&apos;s make something beautiful <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy through Skills — continuous line */}
      <div className="column-line">
      <section id="philosophy" className="px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 md:grid-cols-[1fr_2fr]">
            <div className="md:pr-12">
              <h2 className="font-serif text-[2.5rem] font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                How I think
              </h2>
              <p className="mt-8 text-muted-foreground">
                A note on the principles that guide every decision.
              </p>
              <Link href="/philosophy" className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-foreground">
                Read the full philosophy <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div>
              <blockquote className="text-2xl leading-relaxed text-foreground/80">
                &ldquo;Good design is invisible. It removes friction without announcing itself, makes complex things feel obvious, and respects the time of the person on the other side of the screen.&rdquo;
              </blockquote>
              <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
                I design with restraint — letting clarity, intention, and white space carry the weight. Every detail earns its place, or it doesn&apos;t stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="projects" className="pt-[52px] pb-[52px] sm:pt-[52px] sm:pb-[52px]">
        <HorizontalProjects projects={featuredProjects} />
      </section>

      {/* Education */}
      <section className="px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <StickySplit
            left={
              <>
                <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                  Always learning
                </h2>
                <p className="mt-8 text-muted-foreground">
                  Certifications and specializations I&apos;ve completed — and a few I&apos;m currently working through.
                </p>
              </>
            }
            right={
              <div className="space-y-0">
                {education.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-5"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* Skills, Books & Interests */}
      <section className="px-5 pt-12 pb-6 sm:pt-16 sm:py-0">
        <StickyInterests />
      </section>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
