import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="Gabrielle Nyawera — home"
      className="mr-6 inline-flex shrink-0 items-center font-display text-2xl font-medium leading-none text-foreground transition-opacity hover:opacity-80"
    >
      Gabe
    </Link>
  );
}
