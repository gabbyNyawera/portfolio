import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/alive/magnetic";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", hideOnMobile: true },
  { href: "/work", label: "Projects" },
  { href: "/philosophy", label: "Philosophy", hideOnMobile: true },
  { href: "/resume.pdf", label: "Résumé", external: true },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-6">
        <SiteLogo />

        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6 md:gap-7">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative inline-flex h-11 items-center font-sans font-medium text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors after:absolute after:bottom-2.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:text-foreground hover:after:scale-x-100",
                  link.hideOnMobile && "hidden sm:inline-flex"
                )}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative inline-flex h-11 items-center font-sans font-medium text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors after:absolute after:bottom-2.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:text-foreground hover:after:scale-x-100",
                  link.hideOnMobile && "hidden sm:inline-flex"
                )}
              >
                {link.label}
              </Link>
            )
          )}

          <Magnetic strength={6}>
            <Button asChild size="sm">
              <a href="mailto:nyaweragabby@gmail.com">Contact</a>
            </Button>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}
