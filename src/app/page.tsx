import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { StickySplit } from "@/components/sticky-split";
import { SiteFooter } from "@/components/site-footer";

const education = [
  { name: "Google AI Professional Certificate", issuer: "Coursera" },
  { name: "Google Prompting Essentials Specialization", issuer: "Coursera" },
  { name: "Google UX Design Professional Certificate", issuer: "Coursera" },
  { name: "Introduction to User Experience Design", issuer: "Coursera" },
];

const books = [
  { title: "The Design of Everyday Things", author: "Don Norman", status: "read" },
  { title: "Thinking with Type", author: "Ellen Lupton", status: "read" },
  { title: "Refactoring UI", author: "Adam Wathan & Steve Schoger", status: "reading" },
  { title: "Don't Make Me Think", author: "Steve Krug", status: "read" },
  { title: "Hooked", author: "Nir Eyal", status: "to read" },
];

export default function PortfolioPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="mailto:nyaweragabby@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Get in touch <ArrowUpRight className="size-3.5" />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="mailto:nyaweragabby@gmail.com" className="text-accent transition-colors hover:text-foreground">
              <Mail className="size-4" />
            </a>
            <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-foreground">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-foreground">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
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
      <section className="px-8 pt-40 pb-40">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-6xl font-light leading-[1.1] tracking-tight md:text-8xl">
            Gabe — Product<br />Designer.
          </h1>
          <p className="mt-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
            I&apos;m Gabe — a product designer crafting calm, considered digital experiences.
          </p>
          <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted-foreground">
            With a focus on clarity, usability, and the kind of details that make complex things feel obvious.
          </p>
          <div className="mt-12 flex items-center gap-8">
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/90"
            >
              Get in touch <Mail className="size-4" />
            </a>
            <div className="flex items-center gap-5 text-sm text-accent">
              <a href="mailto:nyaweragabby@gmail.com" className="transition-colors hover:text-foreground">Email</a>
              <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-muted px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                How I<br />think
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
      <section id="projects" className="px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <StickySplit
            left={
              <>
                <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                  What I&apos;ve<br />built
                </h2>
                <p className="mt-8 text-muted-foreground">
                  Three projects where design did the quiet work — making complex things feel obvious.
                </p>
                <Link href="/work" className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent transition-colors hover:text-foreground">
                  View all projects <ArrowUpRight className="size-3.5" />
                </Link>
              </>
            }
            right={
              <div className="space-y-20">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-2xl bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6 flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {project.year} — {project.category}
                        </p>
                        <h3 className="mt-2 text-2xl font-light">{project.title}</h3>
                        <p className="mt-2 max-w-md text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                      <span className="mt-2 text-sm font-medium text-accent transition-colors group-hover:text-foreground">
                        View case study
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <StickySplit
            left={
              <>
                <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                  Always<br />learning
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

      {/* Books */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                What I&apos;m<br />reading
              </h2>
              <p className="mt-8 text-muted-foreground">
                A few books that shape how I think about design, behavior, and building products people actually want to use.
              </p>
            </div>
            <div className="space-y-0">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="flex items-center justify-between py-5"
                >
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
                  </div>
                  <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
                    {book.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
