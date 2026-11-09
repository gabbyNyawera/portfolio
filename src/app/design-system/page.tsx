import { getFeaturedProjects } from "@/content/projects";
import { Hero } from "@/components/hero";
import { PhilosophyReveal } from "@/components/philosophy-reveal";
import { EducationSection } from "@/components/education-section";
import { InterestsSection } from "@/components/interests-section";
import { ReadingSection } from "@/components/reading-section";
import { SelectedWork } from "@/components/selected-work";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LogoMark, SiteLogo } from "@/components/site-logo";
import { ProjectArtwork } from "@/components/project-artwork";
import { ProjectCard } from "@/components/project-card";
import { CaseStudyNav } from "@/components/case-study-nav";
import { Reveal } from "@/components/reveal";
import { Section, SectionIntro } from "@/components/section";
import { PhilosophyNavSpecimen } from "@/components/design-system/philosophy-nav-specimen";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const lightSwatches = [
  ["background", "Page paper"],
  ["surface", "Cards"],
  ["surface-strong", "Section bands"],
  ["foreground", "Ink"],
  ["muted", "Subtle fills"],
  ["muted-foreground", "Secondary copy"],
  ["border", "Rules, edges"],
  ["accent", "Accent fill"],
  ["accent-foreground", "Text on accent"],
  ["accent-soft", "Atmospheric fills"],
  ["accent-ink", "Accent as text"],
];

const duskSwatches = [
  ["background", "Forest paper"],
  ["surface", "Forest panel"],
  ["surface-strong", "Forest band"],
  ["foreground", "Paper ink"],
  ["muted-foreground", "Secondary copy"],
  ["border", "Forest rules"],
  ["accent", "Lime"],
  ["accent-soft", "Forest atmospheric"],
  ["accent-ink", "Lime as text"],
];

const typeScale = [
  ["display-1", "Feel alive"],
  ["display-2", "What I've built"],
  ["display-3", "KAVARA KAVARA"],
  ["title", "Remove friction"],
  ["lede", "Calm, considered digital experiences with a focus on clarity."],
  ["eyebrow", "Metadata label"],
];

const contrastPairs = [
  ["Ink on paper", "--foreground/--background"],
  ["Secondary on paper", "--muted-foreground/--background"],
  ["Accent ink on paper", "--accent-ink/--background"],
  ["Paper on accent", "--accent-foreground/--accent"],
  ["Paper on forest", "--dusk-foreground/--dusk-background"],
  ["Secondary on forest", "--dusk-muted-foreground/--dusk-background"],
  ["Lime on forest", "--dusk-accent/--dusk-background"],
];

const layoutTokens = [
  ["--page-max", "76rem"],
  ["--reading-max", "42rem"],
  ["--gutter", "clamp(1.25rem, 4vw, 4rem)"],
  ["--section-y", "clamp(4.5rem, 9vw, 8rem)"],
  ["--header-height", "76px"],
];

const inventory = [
  ["Design tokens & utilities", "src/app/globals.css", "Colour, type scale, layout, surfaces, motion"],
  ["Font wiring", "src/app/layout.tsx", "Inter, Instrument Serif + global cursor"],
  ["Home composition", "src/app/page.tsx", "Header → Hero → Philosophy → Projects → Education → Into → Footer"],
  ["Philosophy page", "src/app/philosophy/page.tsx", "Slide deck with rail navigation"],
  ["Work archive", "src/app/work/page.tsx", "Project list"],
  ["Case study", "src/app/work/[slug]/page.tsx", "Deep-dive template"],
  ["SiteHeader", "src/components/site-header.tsx", "Fixed translucent paper bar"],
  ["LogoMark", "src/components/site-logo.tsx", "G plate — italic G, lime stop, dusk flip"],
  ["SiteLogo", "src/components/site-logo.tsx", "G plate + Instrument Serif wordmark"],
  ["Favicon", "src/app/icon.png, apple-icon.png", "512px icon and 180px touch icon"],
  ["SiteFooter", "src/components/site-footer.tsx", "Dusk CTA and link grid"],
  ["Hero", "src/components/hero.tsx", "Arch portrait, wash, statement, about band"],
  ["SelectedWork", "src/components/selected-work.tsx", "Lead project and supporting pair"],
  ["PhilosophyReveal", "src/components/philosophy-reveal.tsx", "Editorial split with numbered principles"],
  ["EducationSection", "src/components/education-section.tsx", "Credential list"],
  ["InterestsSection", "src/components/interests-section.tsx", "Skills and hobbies"],
  ["ReadingSection", "src/components/reading-section.tsx", "Compact book shelf"],
  ["HorizontalProjects", "src/components/horizontal-projects.tsx", "Sticky horizontal gallery"],
  ["ProjectCard", "src/components/project-card.tsx", "Lead, vertical, and horizontal cards"],
  ["ProjectArtwork", "src/components/project-artwork.tsx", "Tonal mat with grid and initial"],
  ["CaseStudyNav", "src/components/case-study-nav.tsx", "Prev / next project navigation"],
  ["PhilosophyNav", "src/components/philosophy-nav.tsx", "Rail and compact slide controls"],
  ["GlobalCursor", "src/components/global-cursor.tsx", "Dot, trailing ring, labels"],
  ["Alive layer", "src/components/alive/", "Note: pointer light, magnetism, tilt, progress, marquee, clock"],
  ["Reveal", "src/components/reveal.tsx", "IntersectionObserver rise"],
  ["Section", "src/components/section.tsx", "Tone wrapper, intro, index label"],
  ["Button", "src/components/ui/button.tsx", "One press, three rules"],
  ["Badge", "src/components/ui/badge.tsx", "shadcn badge"],
  ["Separator", "src/components/ui/separator.tsx", "Rule primitive"],
];

function CatalogueSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/70">
      <div className="container-page py-16 sm:py-20">
        <h2 className="display-3">{title}</h2>
        <p className="lede measure mt-5">{description}</p>
      </div>
      {children}
    </section>
  );
}

function Specimen({
  title,
  note,
  children,
  className,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/70 pb-3">
        <h3 className="title">{title}</h3>
        {note ? <p className="eyebrow">{note}</p> : null}
      </div>
      <div className="pt-6">{children}</div>
    </div>
  );
}

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border/70 [transform:translateZ(0)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Swatch({
  token,
  label,
  variant = "light",
}: {
  token: string;
  label: string;
  variant?: "light" | "dusk";
}) {
  return (
    <div className="min-w-0">
      <div
        data-swatch={token}
        className="h-20 w-full rounded-lg border border-border/70"
        style={{ background: `var(--${token})` }}
      />
      <p className="mt-3 font-sans font-medium text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {token}
      </p>
      <code
        data-value={`${variant}-${token}`}
        className="mt-1 block font-sans font-medium text-[10px] text-muted-foreground/70"
      />
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

const sampleProject = getFeaturedProjects()[1];

export default function DesignSystemPage() {
  return (
    <main className="pb-24">
      <div className="container-page pt-20">
        <p className="eyebrow">Design system · Catalogue</p>
        <h1 className="display-2 mt-5">
          The green editorial
          <br />
          <em className="italic text-accent-ink">system</em>
        </h1>
        <p className="lede measure mt-6">
          Every token, element and component on the portfolio, rendered from the
          real code. Paper white, forest ink, one green. One material, after dark
          as forest.
        </p>

        <nav
          aria-label="Catalogue contents"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6"
        >
          {[
            ["foundations", "01 Foundations"],
            ["elements", "02 Elements"],
            ["components", "03 Components"],
            ["sections", "04 Sections"],
            ["inventory", "05 Inventory"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="link-arrow text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <CatalogueSection
        id="foundations"
        title="Foundations"
        description="Colour, type, space and motion. If a value is not defined here, it does not belong in a component."
      >
        <div className="container-page pb-16">
          <Specimen title="Paper" note="Light palette">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {lightSwatches.map(([token, label]) => (
                <Swatch key={token} token={token} label={label} />
              ))}
            </div>
          </Specimen>

          <div className="dark-section dusk-wash mt-10 rounded-2xl border border-border/70 p-6 sm:p-8">
            <Specimen title="Dusk" note="Same material, after dark">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {duskSwatches.map(([token, label]) => (
                  <Swatch
                    key={token}
                    token={token}
                    label={label}
                    variant="dusk"
                  />
                ))}
              </div>
            </Specimen>
          </div>

          <Specimen title="Type scale" note="Instrument Serif · Inter" className="mt-10">
            <div className="space-y-6">
              {typeScale.map(([className, sample]) => (
                <div key={className} className="border-b border-border/50 pb-5">
                  <p className="eyebrow mb-2">{`.${className}`}</p>
                  <p
                    className={
                      className === "eyebrow"
                        ? "eyebrow"
                        : className === "lede"
                          ? "lede"
                          : className
                    }
                  >
                    {sample}
                  </p>
                </div>
              ))}
              <div className="prose-editorial measure">
                <p>
                  Body copy is Inter 400 at{" "}
                  <em className="font-display italic text-foreground">1rem/1.7</em>{" "}
                  — italic Instrument Serif is the single expressive accent.
                </p>
              </div>
            </div>
          </Specimen>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Specimen title="Layout tokens" note="globals.css">
              <dl className="space-y-3">
                {layoutTokens.map(([token, value]) => (
                  <div
                    key={token}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3"
                  >
                    <dt className="font-sans font-medium text-xs text-muted-foreground">
                      {token}
                    </dt>
                    <dd className="font-sans font-medium text-xs">{value}</dd>
                  </div>
                ))}
              </dl>
            </Specimen>

            <Specimen title="Motion" note="Ease out expo">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Hover / focus — 180ms</li>
                <li>Reveal — 600ms, 12px rise, staggered 80ms</li>
                <li>Large image scale — 800ms, 1.03</li>
                <li>Reduced motion collapses all durations</li>
              </ul>
              <div className="mt-6">
                <Reveal>
                  <div className="surface-card p-5">
                    <p className="eyebrow">Reveal</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      This card rises 12px and fades in once, on intersection.
                    </p>
                  </div>
                </Reveal>
              </div>
            </Specimen>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Specimen title="Contrast" note="AA on paper">
              <dl className="space-y-3">
                {contrastPairs.map(([label, pair]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3"
                  >
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="font-sans font-medium text-xs">
                      <code data-contrast={pair}>—</code>
                    </dd>
                  </div>
                ))}
              </dl>
            </Specimen>

            <Specimen title="Radius" note="Media · card · panel · pill">
              <div className="flex flex-wrap items-end gap-4">
                {[
                  ["media", "var(--radius-media)"],
                  ["card", "var(--radius-card)"],
                  ["panel", "var(--radius-panel)"],
                  ["pill", "var(--radius-pill)"],
                ].map(([label, radius]) => (
                  <div key={label} className="text-center">
                    <div
                      className="size-20 border border-border/70 bg-surface-strong"
                      style={{ borderRadius: radius }}
                    />
                    <p className="eyebrow mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </Specimen>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Specimen title="Text steps" note="Micro · small · body">
              <div className="space-y-4">
                <div>
                  <p className="eyebrow">Micro · 0.6875rem</p>
                  <p className="text-micro mt-1 font-sans font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Product designer · Harare / remote
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Small · 0.8125rem</p>
                  <p className="text-small mt-1 text-muted-foreground">
                    Captions and metadata sit here, never below the small step.
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Body · 1rem</p>
                  <p className="mt-1 text-muted-foreground">
                    Body copy is Inter at 1rem with 1.7 leading.
                  </p>
                </div>
              </div>
            </Specimen>

            <Specimen title="Depth" note="z-index tokens">
              <dl className="space-y-3">
                {[
                  ["--z-rail", "Philosophy rail"],
                  ["--z-header", "Site header"],
                  ["--z-grain", "Paper grain"],
                  ["--z-cursor", "Custom cursor"],
                ].map(([token, use]) => (
                  <div
                    key={token}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3"
                  >
                    <dt className="font-sans font-medium text-xs text-muted-foreground">
                      {token}
                    </dt>
                    <dd className="text-sm">{use}</dd>
                  </div>
                ))}
              </dl>
            </Specimen>
          </div>

          <Specimen
            title="Layout primitives"
            note="Split · grid · measure"
            className="mt-10"
          >
            <div className="space-y-8">
              <div>
                <p className="eyebrow">.split-editorial</p>
                <div className="split-editorial mt-3">
                  <div className="surface-card p-5">
                    <p className="title">One</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Heading and lede column.
                    </p>
                  </div>
                  <div className="surface-card p-5">
                    <p className="title">Two</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Body column. Stacked on mobile, 1fr / 2fr from md.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="eyebrow">.grid-12</p>
                <div className="grid-12 mt-3">
                  {Array.from({ length: 12 }, (_, column) => (
                    <div
                      key={column}
                      className="h-16 rounded-sm border border-border/70 bg-surface-strong"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Specimen>

          <Specimen
            title="Background treatments"
            note="One per section"
            className="mt-10"
          >
            <div className="grid gap-5 md:grid-cols-3">
              <div className="hero-wash min-h-40 rounded-xl border border-border/70 p-5">
                <p className="eyebrow">.hero-wash</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Green radial glow from the top-right.
                </p>
              </div>
              <div className="sand-wash flex min-h-40 flex-col justify-center rounded-xl border border-border/70 p-5">
                <p className="eyebrow">.sand-wash</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A tint band with 6rem seams, not a hard edge.
                </p>
              </div>
              <div className="dark-section dusk-wash min-h-40 rounded-xl border border-border/70 p-5">
                <p className="eyebrow">.dusk-wash</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The same material at night, washed with lime.
                </p>
              </div>
            </div>
          </Specimen>
        </div>
      </CatalogueSection>

      <CatalogueSection
        id="elements"
        title="Elements"
        description="The smallest reusable pieces: buttons, badges, rules, tags and framing."
      >
        <div className="container-page space-y-12 pb-16">
          <Specimen title="Button" note="One press · three rules">
            <div className="space-y-10">
              <div>
                <p className="eyebrow">Primary press</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Button>Start a conversation</Button>
                  <Button size="sm">Contact</Button>
                  <Button size="icon" aria-label="Open contact" />
                  <Button disabled>Disabled</Button>
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  One press per section. A translucent glass pill with a light
                  border; it lifts a touch and brightens on hover, floating
                  brighter on dusk.
                </p>
              </div>

              <div>
                <p className="eyebrow">Rule &amp; type</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <Button variant="rule">View selected work</Button>
                  <Button variant="quiet">Résumé</Button>
                  <Button variant="rule" size="sm">
                    Compact rule
                  </Button>
                </div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Tertiary actions stay typographic —{" "}
                  <Button variant="inline">read the philosophy</Button> before we
                  begin.
                </p>
              </div>

              <div className="dark-section rounded-2xl border border-border/70 bg-background p-6 text-foreground sm:p-8">
                <p className="eyebrow">On dusk</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  On dusk the glass fills with a lighter tint and a brighter
                  border. The rules stay rules.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Button>Start a conversation</Button>
                  <Button variant="rule">View selected work</Button>
                  <Button variant="quiet">Résumé</Button>
                </div>
              </div>
            </div>
          </Specimen>

          <div className="grid gap-10 lg:grid-cols-2">
            <Specimen title="Badge" note="shadcn primitive">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Specimen>

            <Specimen title="Separator" note="Hairline rule">
              <Separator />
              <div className="mt-4 flex h-10 items-center gap-4">
                <Separator orientation="vertical" />
                <span className="text-sm text-muted-foreground">
                  Vertical separator
                </span>
              </div>
            </Specimen>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <Specimen title="Tag" note=".tag">
              <div className="flex flex-wrap gap-2">
                {["Brand", "Digital Experience", "Platform", "UX", "PWA"].map(
                  (tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Specimen>

            <Specimen title="Link arrow" note=".link-arrow">
              <div className="flex flex-col items-start gap-4">
                <span className="link-arrow">
                  View case study
                  <ArrowUpRight className="size-3.5" />
                </span>
                <span className="link-arrow text-muted-foreground">
                  All projects
                </span>
              </div>
            </Specimen>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <Specimen title="Asset frame" note=".asset-frame + grid">
              <div className="asset-frame aspect-[4/3] w-full">
                <div className="asset-grid opacity-30" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl text-foreground/20">
                    Aa
                  </span>
                </div>
              </div>
            </Specimen>

            <Specimen title="Arch" note=".arch">
              <div className="arch flex h-64 items-end justify-center border border-border/70 bg-surface-strong/70 p-6">
                <p className="eyebrow">Hero portrait container</p>
              </div>
            </Specimen>
          </div>

          <Specimen title="Print kit" note="Halftone · ledger · sand wash">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="eyebrow">.halftone</p>
                <div className="asset-frame isolate mt-3 aspect-[4/3]">
                  <div className="halftone" aria-hidden="true" />
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <span className="font-display text-6xl text-foreground/25">
                      Aa
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Placeholder artwork only — two dot grids, two angles.
                </p>
              </div>

              <div>
                <p className="eyebrow">.ledger</p>
                <div className="ledger mt-3 border-t border-border/70">
                  {[
                    ["2025", "Interaction design"],
                    ["2024", "Design systems"],
                    ["2023", "Accessibility"],
                  ].map(([year, name]) => (
                    <div key={year}>
                      <div className="ledger-row grid grid-cols-[3.5rem_1fr] items-center gap-5 sm:gap-8">
                        <span className="text-xs text-muted-foreground">
                          {year}
                        </span>
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">.sand-wash</p>
                <div className="sand-wash mt-3 flex min-h-56 flex-col justify-center rounded-lg border border-border/70 px-5">
                  <p className="title">Band edge</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The band rises out of the paper instead of starting on a
                    hard line.
                  </p>
                </div>
              </div>
            </div>
          </Specimen>

          <Specimen title="Section heading" note="SectionIntro">
            <div className="surface-card p-8">
              <SectionIntro
                title={
                  <>
                    What I&apos;ve <em className="italic text-accent-ink">built</em>
                  </>
                }
                description="Projects where design did the quiet work — making complex things feel obvious."
                action={<Button variant="rule">View selected work</Button>}
              />
            </div>
          </Specimen>
        </div>
      </CatalogueSection>

      <CatalogueSection
        id="components"
        title="Components"
        description="Brand, navigation, cards and motion pieces. Each is rendered live from the component the site uses."
      >
        <div className="container-page space-y-12 pb-16">
          <Specimen title="Logo" note="G plate · Instrument Serif italic">
            <div className="surface-card p-6 sm:p-8">
              <div className="flex flex-wrap items-end gap-8">
                {[72, 48, 32, 24].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <LogoMark size={size} />
                    <span className="eyebrow">{size}px</span>
                  </div>
                ))}
                <div className="flex items-center sm:ml-4 sm:border-l sm:border-border/70 sm:pl-8">
                  <SiteLogo />
                </div>
              </div>

              <div className="dark-section mt-8 rounded-xl border border-border/70 bg-background p-6">
                <p className="eyebrow">Dusk</p>
                <div className="mt-5 flex flex-wrap items-center gap-8">
                  {[72, 48, 32].map((size) => (
                    <LogoMark key={size} size={size} />
                  ))}
                  <SiteLogo />
                </div>
              </div>

              <dl className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {[
                  ["Plate radius", "25% of the side"],
                  ["Letter", "Instrument Serif italic 400 · 72%"],
                  ["Stop", "9%, inset 19%"],
                  ["Clear space", "Half the plate"],
                  ["Minimum size", "20px in the interface"],
                  ["Paper / dusk", "Forest plate / lime plate"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-2"
                  >
                    <dt className="font-sans font-medium text-xs text-muted-foreground">
                      {term}
                    </dt>
                    <dd className="text-right text-sm">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-border/50 pt-6">
                <p className="eyebrow">Don&apos;ts</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li>Roman G inside the plate — the italic is the mark.</li>
                  <li>No outline, rotation, stretch or new radius.</li>
                  <li>Never change or remove the stop.</li>
                  <li>Never on a photograph, tint band or colour fill.</li>
                  <li>No second symbol. It is the only mark on the page.</li>
                </ul>
              </div>
            </div>
          </Specimen>

          <Specimen title="GlobalCursor" note="Pointer: fine only">
            <div className="surface-card flex h-32 items-center justify-center gap-10">
              <div className="flex flex-col items-center gap-3">
                <span className="size-2.5 rounded-full bg-accent" />
                <span className="eyebrow">Rest</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="size-3.5" />
                </span>
                <span className="eyebrow">Interactive</span>
              </div>
            </div>
          </Specimen>

          <Specimen title="SiteHeader" note="Fixed · translucent paper">
            <Frame className="h-28 bg-background">
              <SiteHeader />
            </Frame>
          </Specimen>

          <div className="grid gap-10 lg:grid-cols-2">
            <Specimen title="ProjectArtwork" note="Tonal mat, grid, initial">
              <ProjectArtwork project={sampleProject} index={1} className="aspect-[4/3]" />
            </Specimen>

            <Specimen title="ProjectCard · vertical" note="Archive card">
              <ProjectCard project={sampleProject} />
            </Specimen>
          </div>

          <Specimen title="ProjectCard · horizontal" note="List row">
            <ProjectCard project={sampleProject} layout="horizontal" />
          </Specimen>

          <Specimen title="CaseStudyNav" note="Prev / next">
            <div className="surface-card p-4">
              <CaseStudyNav
                prev={getFeaturedProjects()[0]}
                next={getFeaturedProjects()[2]}
              />
            </div>
          </Specimen>

          <Specimen title="PhilosophyNav" note="Rail at lg, compact bar below">
            <Frame className="h-[560px] bg-background">
              <PhilosophyNavSpecimen />
            </Frame>
          </Specimen>
        </div>
      </CatalogueSection>

      <CatalogueSection
        id="sections"
        title="Sections"
        description="Full movements from the home page, in the order they appear."
      >
        <div className="space-y-6 pb-16">
          <div className="container-page">
            <p className="eyebrow mb-3">Hero + about</p>
          </div>
          <Frame className="rounded-none border-x-0">
            <Hero />
          </Frame>

          <div className="container-page">
            <p className="eyebrow mb-3">Selected work</p>
          </div>
          <Section tone="sand">
            <SelectedWork projects={getFeaturedProjects()} />
          </Section>

          <div className="container-page">
            <p className="eyebrow mb-3">Philosophy</p>
          </div>
          <Section>
            <PhilosophyReveal />
          </Section>

          <div className="container-page">
            <p className="eyebrow mb-3">Learning</p>
          </div>
          <Section tone="sand">
            <EducationSection />
          </Section>

          <div className="container-page">
            <p className="eyebrow mb-3">Interests</p>
          </div>
          <Section>
            <InterestsSection />
          </Section>

          <div className="container-page">
            <p className="eyebrow mb-3">Reading</p>
          </div>
          <Section tone="sand">
            <ReadingSection />
          </Section>

          <div className="container-page">
            <p className="eyebrow mb-3">Footer</p>
          </div>
          <SiteFooter />
        </div>
      </CatalogueSection>

      <CatalogueSection
        id="inventory"
        title="Inventory"
        description="Everything the system currently holds, mapped to its source file."
      >
        <div className="container-page pb-16">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-border/70">
                  <th className="eyebrow py-3 pr-6">Component</th>
                  <th className="eyebrow py-3 pr-6">File</th>
                  <th className="eyebrow py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(([name, file, role]) => (
                  <tr key={file} className="border-b border-border/50 align-top">
                    <td className="py-3 pr-6 text-sm font-medium">{name}</td>
                    <td className="py-3 pr-6 font-sans font-medium text-[11px] text-muted-foreground">
                      {file}
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="eyebrow mt-10">
            Source of truth · docs/design-system.md · src/app/globals.css
          </p>
        </div>
      </CatalogueSection>
    </main>
  );
}
