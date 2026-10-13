import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="bg-background">
      {/* CTA section */}
      {showCta && (
        <div className="px-5 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-7xl">
              I design experiences
              <br />
              that <span className="italic text-accent">feel alive.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Thoughtful interfaces, clear systems, and experiences built around
              how people actually behave.
            </p>
            <Link
              href="mailto:nyaweragabby@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Let&apos;s make something worth using. <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Footer info */}
      <div className="dark-section bg-background px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="text-lg font-medium tracking-tight">Gabe</p>
              <p className="mt-1 text-sm text-muted-foreground">
                UX/UI Designer · Digital Product Designer
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-16">
              <div className="space-y-2">
                <Link href="/work" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Projects
                </Link>
                <Link href="/philosophy" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Philosophy
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Résumé
                </a>
                <a href="mailto:nyaweragabby@gmail.com" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <a href="mailto:nyaweragabby@gmail.com" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                nyaweragabby@gmail.com <ArrowUpRight className="size-3" />
              </a>
              <a href="https://dribbble.com/gabrielle_n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                Dribbble <ArrowUpRight className="size-3" />
              </a>
              <a href="https://www.behance.net/gabrielnyawerah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                Behance <ArrowUpRight className="size-3" />
              </a>
              <a href="https://github.com/gabbyNyawera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                GitHub <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-6">
            <p className="text-sm text-muted-foreground">&copy; 2026 Gabe</p>
            <p className="text-sm text-muted-foreground">
              Designed &amp; built with intention.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
