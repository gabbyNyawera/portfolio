import Image from "next/image";
import Link from "next/link";
import { profile, approach } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/alive/magnetic";
import { StatusDot } from "@/components/alive/status-dot";
import { Tilt } from "@/components/alive/tilt";

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden pb-14 pt-[calc(var(--header-height)+3rem)] sm:pb-20 sm:pt-[calc(var(--header-height)+4.5rem)]">
      <div className="alive-aura" aria-hidden="true" />
      <div className="container-page relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <h1 className="display-1 enter-rise">
              Gabe
              <span className="mt-2 block text-[0.52em] leading-[1.05] tracking-[-0.025em]">
                Product Designer<span className="text-accent-ink">.</span>
              </span>
            </h1>

            <p
              className="lede enter-rise mt-8 max-w-md"
              style={{ animationDelay: "120ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="enter-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
              style={{ animationDelay: "220ms" }}
            >
              <Magnetic strength={8}>
                <Button asChild>
                  <a href={`mailto:${profile.email}`} data-cursor="Say hello">
                    Let&apos;s make something
                  </a>
                </Button>
              </Magnetic>
              <Button asChild variant="rule">
                <Link href="/work">View selected work</Link>
              </Button>
            </div>
          </div>

          <Tilt className="relative">
            <div
              className="enter-rise relative"
              style={{ animationDelay: "320ms" }}
            >
              <div className="relative mx-auto w-full max-w-[27rem]">
                <div
                  className="absolute -inset-8 rounded-t-full bg-accent-soft/45 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative arch border border-border/80 bg-surface/70 p-3 shadow-[0_24px_80px_-48px_rgba(36,30,24,0.55)] backdrop-blur-sm">
                  <div className="arch overflow-hidden bg-surface-strong/80 px-5 pt-10">
                    <Image
                      src="/images/hero/gabe-illustration.png"
                      alt="Illustrated portrait of Gabrielle Nyawera"
                      width={1230}
                      height={1278}
                      priority
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-1.5 shadow-sm">
                  <StatusDot />
                  <span className="font-sans font-medium text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    {profile.availability}
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <div id="about" className="mt-20 border-t border-border/70 pt-12 sm:pt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">About</p>
              <h2 className="display-2 mt-3">A designer who sweats the structure.</h2>
              <p className="mt-4 max-w-xl font-display text-2xl leading-snug text-foreground">
                Structure before surface.
              </p>
            </div>
            <p className="lede max-w-md">
              A closer look at the person behind the work — how I think, how I
              collaborate, and what I care about.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal>
              <div className="surface-card grid gap-8 p-6 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
                <div className="relative">
                  <div className="arch relative mx-auto w-full max-w-[15rem] overflow-hidden border border-border/70 bg-surface-strong/70 p-3 shadow-[0_18px_60px_-44px_rgba(36,30,24,0.45)]">
                    <div className="arch overflow-hidden bg-surface-strong/80 px-4 pt-8">
                      <Image
                        src="/images/hero/gabe-illustration.png"
                        alt="Illustrated portrait of Gabrielle Nyawera"
                        width={1230}
                        height={1278}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-1.5 shadow-sm">
                    <StatusDot />
                    <span className="font-sans font-medium text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      {profile.availability}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="title">Gabrielle Nyawera</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {profile.role} · {profile.location}
                  </p>

                  <div className="prose-editorial mt-6">
                    {profile.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="tag">Open to full-time and contract</span>
                    <span className="tag">Remote, across time zones</span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Read résumé
                      </a>
                    </Button>
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-arrow"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={80}>
                <div className="surface-card p-6 sm:p-8">
                  <p className="eyebrow">How I work</p>
                  <ul className="mt-6 divide-y divide-border/70">
                    {approach.map((item, index) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                      >
                        <span className="font-display text-2xl leading-none text-accent-ink">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-sm font-medium text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="surface-card p-6 sm:p-8">
                  <p className="eyebrow">At a glance</p>
                  <dl className="mt-6 grid gap-4">
                    {profile.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3 last:border-b-0 last:pb-0"
                      >
                        <dt className="text-xs text-muted-foreground">
                          {fact.label}
                        </dt>
                        <dd className="text-right text-sm leading-snug text-foreground">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {profile.socials.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag"
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
