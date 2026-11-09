import { Instrument_Serif, Newsreader, Bricolage_Grotesque, JetBrains_Mono, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ProjectArtwork } from "@/components/project-artwork";
import { getFeaturedProjects } from "@/content/projects";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const directions = [
  {
    id: "a",
    name: "Ember editorial",
    note: "The current warmth, sharpened. More ink, less cream, a serif with a spine.",
    fonts: { display: "Instrument Serif", body: "Inter", mono: "Geist Mono" },
    style: {
      "--background": "#F6F0E5",
      "--surface": "#FCF7EE",
      "--surface-strong": "#ECE0CC",
      "--foreground": "#1E1813",
      "--muted": "#EAE0CF",
      "--muted-foreground": "#6A5B4B",
      "--border": "#D9CBB6",
      "--accent": "#C04A18",
      "--accent-foreground": "#FCF7EE",
      "--accent-soft": "#EBC7AE",
      "--moss": "#57624B",
      "--gold": "#C08A3E",
      "--font-display": "var(--font-instrument), Georgia, serif",
      "--font-serif": "var(--font-instrument), Georgia, serif",
      "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
    },
  },
  {
    id: "b",
    name: "Ink & sage",
    note: "A colder paper, oxblood instead of terracotta, a literary serif. Print journal energy.",
    fonts: { display: "Newsreader", body: "Inter", mono: "JetBrains Mono" },
    style: {
      "--background": "#F3F1EA",
      "--surface": "#FBFAF6",
      "--surface-strong": "#E7E3D8",
      "--foreground": "#17150F",
      "--muted": "#EAE6DC",
      "--muted-foreground": "#66635A",
      "--border": "#D5D0C2",
      "--accent": "#7C2F22",
      "--accent-foreground": "#FBFAF6",
      "--accent-soft": "#E3C9C1",
      "--moss": "#58654C",
      "--gold": "#B0873F",
      "--font-display": "var(--font-newsreader), Georgia, serif",
      "--font-serif": "var(--font-newsreader), Georgia, serif",
      "--font-mono": "var(--font-jetbrains), ui-monospace, monospace",
    },
  },
  {
    id: "c",
    name: "Studio sans",
    note: "No serif at all. A characterful grotesque, white paper, cobalt. Product-company energy.",
    fonts: { display: "Bricolage Grotesque", body: "Inter", mono: "Geist Mono" },
    style: {
      "--background": "#F4F4F0",
      "--surface": "#FFFFFF",
      "--surface-strong": "#E8E8E1",
      "--foreground": "#101012",
      "--muted": "#ECECE6",
      "--muted-foreground": "#5D5D58",
      "--border": "#D6D6CE",
      "--accent": "#2452D6",
      "--accent-foreground": "#FFFFFF",
      "--accent-soft": "#D8E0F8",
      "--moss": "#4F6350",
      "--gold": "#D9A21B",
      "--font-display": "var(--font-bricolage), system-ui, sans-serif",
      "--font-serif": "var(--font-bricolage), system-ui, sans-serif",
      "--font-mono": "var(--font-geist-mono), ui-monospace, monospace",
    },
  },
] as const;

const swatches = [
  "background",
  "surface",
  "surface-strong",
  "foreground",
  "muted-foreground",
  "border",
  "accent",
  "accent-soft",
  "moss",
  "gold",
];

const project = getFeaturedProjects()[0];

export default function DirectionsPage() {
  return (
    <main
      className={`${instrument.variable} ${newsreader.variable} ${bricolage.variable} ${jetbrains.variable} ${geistMono.variable} bg-background pb-24`}
    >
      <style>{`
        [data-direction="a"] .display-1,
        [data-direction="a"] .display-2,
        [data-direction="a"] .display-3 { letter-spacing: -0.01em; }
        [data-direction="c"] .display-1,
        [data-direction="c"] .display-2,
        [data-direction="c"] .display-3 { font-weight: 600; letter-spacing: -0.035em; }
        [data-direction="c"] .title { font-weight: 600; }
      `}</style>
      {directions.map((direction) => (
        <section
          key={direction.id}
          data-direction={direction.id}
          style={direction.style as React.CSSProperties}
          className="border-b border-border/70 bg-background text-foreground"
        >
          <div className="container-page py-16">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Direction {direction.id.toUpperCase()}</p>
                <h2 className="display-2 mt-3">{direction.name}</h2>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {direction.fonts.display} · {direction.fonts.body} · {direction.fonts.mono}
              </p>
            </div>
            <p className="lede measure mt-4">{direction.note}</p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {swatches.map((token) => (
                <div key={token}>
                  <div
                    className="h-14 rounded-md border border-border/70"
                    style={{ background: `var(--${token})` }}
                  />
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {token}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h3 className="display-1">
                  Feel
                  <br />
                  <em className="italic text-accent">alive.</em>
                </h3>
                <p className="lede mt-6 max-w-md">
                  Calm, considered digital experiences with a focus on clarity,
                  usability, and the details that make complex things feel{" "}
                  <em className="font-display italic text-foreground">obvious</em>.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <Button>Start a conversation</Button>
                  <Button variant="rule">View selected work</Button>
                  <span className="tag">Design systems</span>
                </div>
                <div className="mt-10 border-t border-border/70 pt-6">
                  <p className="eyebrow">Section label · 01 Philosophy</p>
                  <h4 className="title mt-3">Remove friction</h4>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Good design should make the difficult feel obvious.
                  </p>
                </div>
              </div>

              <div className="surface-card self-start p-4">
                <ProjectArtwork project={project} className="aspect-[4/3]" />
                <div className="p-2 pt-5">
                  <p className="eyebrow">
                    {project.year} — {project.category}
                  </p>
                  <h4 className="title mt-2">{project.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
