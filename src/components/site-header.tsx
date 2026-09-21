import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-background transition-colors hover:bg-accent/90"
        >
          G
        </Link>
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
  );
}
