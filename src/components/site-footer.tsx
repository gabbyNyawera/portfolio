import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site-logo";
import { Magnetic } from "@/components/alive/magnetic";
import { Marquee } from "@/components/alive/marquee";
import { StatusDot } from "@/components/alive/status-dot";
import { LocalTime } from "@/components/alive/local-time";

export function SiteFooter({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="dark-section bg-background text-foreground">
      <div className="dusk-wash">
        {showCta && (
          <div className="relative isolate overflow-hidden">
            <div
              className="dusk-horizon pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div
              className="dusk-engraving pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div className="container-page section-y relative pb-16 sm:pb-20">
              <h2 className="display-1 max-w-4xl">
                I design experiences
                <br />
                that <span className="text-accent-ink">feel alive.</span>
              </h2>
              <p className="lede mt-7 max-w-md">
                Thoughtful interfaces, clear systems, and experiences built
                around how people actually behave.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Magnetic strength={8}>
                  <Button asChild>
                    <a
                      href="mailto:nyaweragabby@gmail.com"
                      data-cursor="Say hello"
                    >
                      Start a conversation
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild variant="rule">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View résumé
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="border-y border-border/70 py-5">
          <Marquee
            items={[
              "Open to work",
              "Let's make something",
              "Product design",
              "Design systems",
              "Feel alive",
            ]}
            duration={54}
          />
        </div>

        <div className="container-page pb-10">
          <div className="grid gap-10 border-t border-border/70 pt-10 md:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <LogoMark />
                <p className="font-display text-2xl font-medium tracking-tight">
                  Gabe<span className="text-accent-ink">.</span>
                </p>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                UX/UI Designer · Digital Product Designer. Making complex things
                feel obvious, one considered detail at a time.
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-col gap-2">
              <Link
                href="/work"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/philosophy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Philosophy
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Résumé
              </a>
              <a
                href="mailto:nyaweragabby@gmail.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </nav>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:nyaweragabby@gmail.com"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                nyaweragabby@gmail.com
                <ArrowUpRight className="size-3" />
              </a>
              <a
                href="https://dribbble.com/gabrielle_n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Dribbble
                <ArrowUpRight className="size-3" />
              </a>
              <a
                href="https://www.behance.net/gabrielnyawerah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Behance
                <ArrowUpRight className="size-3" />
              </a>
              <a
                href="https://github.com/gabbyNyawera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5">
            <p className="font-sans font-medium text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
              &copy; 2026 Gabrielle Nyawera
            </p>
            <p className="flex items-center gap-2 font-sans font-medium text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
              <StatusDot />
              <LocalTime />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
