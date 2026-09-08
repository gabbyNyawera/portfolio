import { ArrowUpRight, Mail } from "lucide-react";

const projects = [
  {
    number: "1",
    title: "Kavara Kavara",
    year: "2024",
    category: "E-commerce • Brand",
    description: "Built a storytelling-driven e-commerce experience around fire, food, and outdoor living.",
    image: "https://my-web-story-18.lovable.app/assets/kavara-kavara-DwzplsD8.jpg",
    link: "/projects/kavara-kavara",
  },
  {
    number: "2",
    title: "Princess Beauty Experts",
    year: "2024",
    category: "Service Booking • UX",
    description: "Designed a clear, frictionless experience for browsing and booking beauty services.",
    image: "https://my-web-story-18.lovable.app/assets/princess-beauty-CJRIyEW5.jpg",
    link: "/projects/house2home",
  },
  {
    number: "3",
    title: "Jack Reverse",
    year: "2023",
    category: "Concept • Identity",
    description: "A conceptual project focused on bold identity, layout, and expressive visuals.",
    image: "https://my-web-story-18.lovable.app/assets/jack-reverse-D5ivnisp.jpg",
    link: "/projects/jack-reverse",
  },
];

const education = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "Completed April 2026",
    status: "completed",
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    date: "May 7, 2026",
    status: "completed",
  },
  {
    name: "Google Prompting Essentials Specialization",
    issuer: "Google",
    date: "Certificate pending",
    status: "pending",
  },
  {
    name: "AI for Data Analysis",
    issuer: "Google",
    date: "May 7, 2026",
    status: "completed",
  },
  {
    name: "AI for Content Creation",
    issuer: "Google",
    date: "May 7, 2026",
    status: "completed",
  },
];

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    status: "read",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    status: "read",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    status: "reading",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    status: "read",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    status: "to read",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-medium">
            Home
          </a>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
            <a href="#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#philosophy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Philosophy
            </a>
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm text-muted-foreground">About Me</p>
          <h1 className="text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Gabe — Product<br />Designer.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m Gabe — a product designer crafting calm, considered digital experiences.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            With a focus on clarity, usability, and the kind of details that make complex things feel obvious.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="mailto:nyaweragabby@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get in touch <Mail className="size-4" />
            </a>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:nyaweragabby@gmail.com" className="hover:text-foreground">Email</a>
              <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">01 — Philosophy</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                How I<br />think.
              </h2>
              <p className="mt-6 text-muted-foreground">
                A note on the principles that guide every decision.
              </p>
            </div>
            <div>
              <blockquote className="text-lg leading-relaxed text-muted-foreground">
                &ldquo;Good design is invisible. It removes friction without announcing itself, makes complex things feel obvious, and respects the time of the person on the other side of the screen.&rdquo;
              </blockquote>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                I design with restraint — letting clarity, intention, and white space carry the weight. Every detail earns its place, or it doesn&apos;t stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">02 — Selected Work</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                What I&apos;ve<br />built.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Three projects where design did the quiet work — making complex things feel obvious.
              </p>
            </div>
            <div className="space-y-12">
              {projects.map((project) => (
                <a
                  key={project.number}
                  href={project.link}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {project.year} — {project.category}
                      </p>
                      <h3 className="mt-1 text-xl font-light">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">03 — Education</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Always<br />learning.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Certifications and specializations I&apos;ve completed — and a few I&apos;m currently working through.
              </p>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">04 — Books</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                What I&apos;m<br />reading.
              </h2>
              <p className="mt-6 text-muted-foreground">
                A few books that shape how I think about design, behavior, and building products people actually want to use.
              </p>
            </div>
            <div className="space-y-4">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="flex items-center justify-between border-b border-border py-4"
                >
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {book.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="about" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">05 — Contact</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight md:text-5xl">
                Let&apos;s<br />talk.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Always open to new conversations and creative collaborations.
              </p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                Tell me about your next creative project.
              </p>
              <p className="mt-3 text-muted-foreground">
                If you&apos;re building something and want it to actually make sense to users — let&apos;s talk.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="mailto:nyaweragabby@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Contact me <Mail className="size-4" />
                </a>
                <a
                  href="#work"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  See projects
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <a href="mailto:nyaweragabby@gmail.com" className="hover:text-foreground">Email</a>
                <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Gabrielle Nyawera
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with intention.
          </p>
        </div>
      </footer>
    </div>
  );
}
