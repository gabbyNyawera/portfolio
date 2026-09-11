"use client"

import { Mail } from "lucide-react"
import { Reveal, RevealStagger, RevealItem } from "./reveal"

export function HeroReveal() {
  return (
    <section className="px-8 pt-40 pb-40">
      <div className="mx-auto max-w-6xl">
        <RevealStagger>
          <RevealItem variant="fadeInUp">
            <h1 className="font-serif text-6xl font-light leading-[1.1] tracking-tight md:text-8xl">
              Gabe — Product<br />Designer.
            </h1>
          </RevealItem>
          <RevealItem variant="fadeInUp" transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            <p className="mt-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
              I&apos;m Gabe — a product designer crafting calm, considered digital experiences.
            </p>
          </RevealItem>
          <RevealItem variant="fadeInUp" transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted-foreground">
              With a focus on clarity, usability, and the kind of details that make complex things feel obvious.
            </p>
          </RevealItem>
          <RevealItem variant="fadeInUp" transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
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
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
