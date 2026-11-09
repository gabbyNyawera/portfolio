import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const layers = [
  {
    index: "01",
    name: "Material",
    status: "In use",
    body: "Paper grain on body, one overlay, very low opacity. This is the floor — everything else sits on it.",
  },
  {
    index: "02",
    name: "Light",
    status: "Underused",
    body: "The hero wash and dusk wash are the only light sources. Directional light is what makes a flat field read as a room.",
  },
  {
    index: "03",
    name: "Structure",
    status: "Underused",
    body: "Rules, the asset grid, the 12-column frame. Print gets depth from ruled, measured surfaces, not from decoration.",
  },
  {
    index: "04",
    name: "Accent",
    status: "Reserved",
    body: "Halftone, riso offsets, guilloche. Loud by nature, so each one appears once and never competes with type.",
  },
];

const rules = [
  "One treatment per section",
  "Never behind body copy without a scrim",
  "Must read at 100% zoom, not just as a thumbnail",
  "Must survive reduced motion and 200% text zoom",
  "If it looks like a different site, it is out",
];

const verdict = [
  {
    label: "Adopt",
    tone: "adopt",
    items: [
      ["Halftone screen", "Gives every placeholder artwork a print identity. Replaces the flat gradient box."],
      ["Letterpress cards", "One inset highlight and one inset shadow. Depth for free, no new colour."],
      ["Ledger rules", "Puts Education and Interests on ruled paper. Structure, not ornament."],
      ["Section seam", "A 6rem blend instead of a hard band edge. Removes the last hard line on the page."],
    ],
  },
  {
    label: "Test next",
    tone: "test",
    items: [
      ["Dusk horizon", "Makes the footer read as a place rather than a dark block."],
      ["Arch bloom", "Deepens the hero's existing glow into layered arches."],
      ["Rail edge fade", "Cards dissolve at the viewport edge instead of being sliced."],
      ["Registration marks", "Crop marks on media frames. Small signal that the placeholder is deliberate."],
    ],
  },
  {
    label: "No",
    tone: "reject",
    items: [
      ["Animated gradient mesh", "Loops are banned for everything but the scroll cue."],
      ["Gold gradient type", "Contrast collapses below 3:1 mid-gradient. Fails the type rules."],
      ["Full-page vignette", "Deadens the cream and makes the paper look dirty."],
      ["Marbled endpaper", "Fights the grain overlay. Two textures, one surface."],
    ],
  },
];

function Specimen({
  index,
  name,
  note,
  where,
  children,
  className,
}: {
  index: string;
  name: string;
  note: string;
  where: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col">
      <div className={`tx-tile h-44 ${className ?? ""}`}>{children}</div>
      <figcaption className="mt-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-ink">
            {index}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {where}
          </p>
        </div>
        <h3 className="title mt-2">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>
      </figcaption>
    </figure>
  );
}

export default function TexturePage() {
  return (
    <main className="bg-background pb-24 text-foreground">
      <style>{`
        .tx-tile {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          border: 1px solid color-mix(in srgb, var(--border) 85%, transparent);
          background: var(--background);
          isolation: isolate;
        }

        /* 01 — halftone screen: two dot grids, two angles, one duotone plate */
        .tx-screen {
          background:
            radial-gradient(120% 110% at 18% 0%, rgba(240, 169, 59, 0.55), transparent 58%),
            linear-gradient(135deg, #4e0f17 0%, #8e2f16 48%, #d08a2e 100%);
        }
        .tx-screen::before {
          content: "";
          position: absolute;
          inset: -25%;
          background-image: radial-gradient(
            circle,
            rgba(255, 252, 245, 0.95) 1.45px,
            transparent 1.85px
          );
          background-size: 9px 9px;
          transform: rotate(15deg);
          mix-blend-mode: soft-light;
          opacity: 0.9;
        }
        .tx-screen::after {
          content: "";
          position: absolute;
          inset: -25%;
          background-image: radial-gradient(
            circle,
            rgba(78, 15, 23, 0.95) 1.2px,
            transparent 1.6px
          );
          background-size: 13px 13px;
          transform: rotate(45deg);
          mix-blend-mode: multiply;
          opacity: 0.35;
        }

        /* 02 — letterpress: raised and recessed, no drop shadow */
        .tx-press-up {
          background: linear-gradient(180deg, #fffdf8, #f6f0e3);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(10, 10, 10, 0.08),
            0 2px 4px rgba(10, 10, 10, 0.05);
        }
        .tx-press-down {
          background: linear-gradient(180deg, #f1eadc, #fbf6ec);
          box-shadow:
            inset 0 2px 6px rgba(10, 10, 10, 0.12),
            inset 0 -1px 0 rgba(255, 255, 255, 0.8);
        }

        /* 03 — ink vignette: plate edge burn */
        .tx-vignette {
          background: radial-gradient(
            120% 95% at 50% 40%,
            #fffcf5 25%,
            color-mix(in srgb, #0a0a0a 13%, #fffcf5) 100%
          );
        }
        .tx-vignette::after {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(10, 10, 10, 0.12);
        }

        /* 04 — ledger rules: ruled paper + gold margin */
        .tx-ledger {
          background-color: #fffcf5;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0 calc(2rem - 1px),
            rgba(10, 10, 10, 0.11) calc(2rem - 1px) 2rem
          );
          background-position: 0 1.25rem;
        }
        .tx-ledger::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 4.25rem;
          width: 1px;
          background: rgba(138, 90, 0, 0.28);
        }

        /* 05 — guilloche: engraved rings, faded out of the corner */
        .tx-guilloche {
          background: radial-gradient(120% 120% at 100% 0%, #7a2028 0%, #5c121b 48%, #480e16 100%);
        }
        .tx-guilloche::before,
        .tx-guilloche-rings {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-radial-gradient(
            circle at 100% 0%,
            transparent 0 17px,
            rgba(240, 169, 59, 0.55) 17px 18px
          );
          -webkit-mask-image: radial-gradient(140% 140% at 100% 0%, #000 6%, transparent 58%);
          mask-image: radial-gradient(140% 140% at 100% 0%, #000 6%, transparent 58%);
        }
        .tx-guilloche-rings {
          pointer-events: none;
        }

        /* 06 — crosshatch: woven fill for empty states */
        .tx-hatch {
          background-color: color-mix(in srgb, #0a0a0a 6%, #fffcf5);
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(10, 10, 10, 0.2) 0 1px,
              transparent 1px 7px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(10, 10, 10, 0.1) 0 1px,
              transparent 1px 7px
            );
        }

        /* 07 — registration marks: crop corners on a media mat */
        .tx-marks {
          background-color: color-mix(in srgb, #0a0a0a 4%, #fffcf5);
          background-image:
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42)),
            linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.42));
          background-size:
            12px 1px, 1px 12px, 12px 1px, 1px 12px,
            12px 1px, 1px 12px, 12px 1px, 1px 12px;
          background-position:
            left 14px top 14px, left 14px top 14px,
            right 14px top 14px, right 14px top 14px,
            left 14px bottom 14px, left 14px bottom 14px,
            right 14px bottom 14px, right 14px bottom 14px;
          background-repeat: no-repeat;
        }

        /* 08 — arch bloom: the hero's glow, layered */
        .tx-bloom {
          background:
            radial-gradient(58% 52% at 50% 100%, rgba(240, 169, 59, 0.55), transparent 72%),
            linear-gradient(180deg, #fffcf5, #f7f1e4);
        }
        .tx-bloom-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 15rem;
          height: 12rem;
          transform: translateX(-50%);
          background: radial-gradient(50% 60% at 50% 100%, rgba(240, 169, 59, 0.5), transparent 72%);
          filter: blur(18px);
          pointer-events: none;
        }

        /* 09 — dusk horizon */
        .tx-horizon {
          background: linear-gradient(
            180deg,
            #480e16 0%,
            #5a1119 34%,
            #7c222a 56%,
            #5c121b 58%,
            #3e0b12 100%
          );
        }
        .tx-horizon::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 56%;
          height: 1.5px;
          background: linear-gradient(
            90deg,
            transparent 4%,
            rgba(240, 169, 59, 0.95) 50%,
            transparent 96%
          );
          box-shadow: 0 0 18px 2px rgba(240, 169, 59, 0.25);
        }
        .tx-horizon::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 56%;
          width: 34rem;
          height: 15rem;
          transform: translate(-50%, -100%);
          background: radial-gradient(50% 60% at 50% 100%, rgba(240, 169, 59, 0.35), transparent 70%);
          pointer-events: none;
        }

        /* 10 — living light: one slow drift, screen-blended */
        .tx-living {
          background: #5c121b;
        }
        .tx-living::before {
          content: "";
          position: absolute;
          inset: -20%;
          background: radial-gradient(40% 50% at 50% 50%, rgba(240, 169, 59, 0.55), transparent 70%);
          filter: blur(28px);
          mix-blend-mode: screen;
          animation: tx-drift 18s ease-in-out infinite;
        }
        .tx-living::after {
          content: "";
          position: absolute;
          inset: -25%;
          background-image: radial-gradient(
            circle,
            rgba(255, 252, 245, 0.5) 1px,
            transparent 1.3px
          );
          background-size: 9px 9px;
          opacity: 0.12;
          mix-blend-mode: overlay;
        }
        @keyframes tx-drift {
          0%,
          100% {
            transform: translate3d(-6%, 0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate3d(6%, -4%, 0) scale(1.12);
            opacity: 0.85;
          }
        }

        /* 11 — riso misregistration */
        .tx-riso {
          background: #fffcf5;
        }

        /* 12 — seam: hard band edge vs 6rem blend */
        .tx-seam-hard {
          background: linear-gradient(180deg, #f1ebde 0 52%, #fffcf5 52% 100%);
        }
        .tx-seam-soft {
          background: linear-gradient(180deg, #f1ebde 0%, #f1ebde 40%, #fffcf5 66%, #fffcf5 100%);
        }

        /* 13 — rail edge mask */
        .tx-fade {
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 14%,
            #000 86%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 14%,
            #000 86%,
            transparent 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .tx-living::before {
            animation: none;
            opacity: 0.7;
          }
        }
      `}</style>

      <header className="container-page pt-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">Design system · Study 04</p>
          <Link
            href="/design-system"
            className="link-arrow"
          >
            Back to the system
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <h1 className="display-1 mt-6 max-w-4xl">
          Depth
          <br />
          <em className="italic text-accent-ink">and life.</em>
        </h1>
        <p className="lede mt-7 max-w-xl">
          One material, four layers of treatment. These studies test how far the
          existing cream, ink, oxblood and gold can go before the page stops
          being paper and starts being decoration.
        </p>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-y border-border/70 py-4">
          {[
            ["#layers", "The four layers"],
            ["#patterns", "Patterns"],
            ["#light", "Light & gradient"],
            ["#applied", "In context"],
            ["#verdict", "Verdict"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="layers" className="container-page mt-16 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">The frame</p>
            <h2 className="display-2 mt-4">
              Depth is light
              <br />
              and structure.
            </h2>
            <p className="lede mt-5">
              Pattern alone flattens. A surface reads as deep when something
              lights it, something rules it, and one thing is allowed to be loud.
            </p>
          </div>

          <ol className="border-t border-border/70">
            {layers.map((layer) => (
              <li
                key={layer.index}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-border/70 py-6 sm:grid-cols-[auto_10rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="eyebrow pt-1 text-accent-ink">{layer.index}</span>
                <h3 className="title">{layer.name}</h3>
                <p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">
                  {layer.body}
                </p>
                <span className="eyebrow col-start-2 sm:col-start-auto">{layer.status}</span>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
          {rules.map((rule) => (
            <li
              key={rule}
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <section id="patterns" className="container-page mt-20 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border/70 pt-10">
          <div>
            <p className="eyebrow">Patterns</p>
            <h2 className="display-2 mt-4">Structure you can see</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Print textures that carry meaning: a screen for artwork, rules for
            lists, marks for media. All CSS, no images.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Specimen
            index="01"
            name="Halftone screen"
            where="Artwork"
            note="Two dot grids at 15° and 45° over a gold-to-oxblood plate. Instant print identity for every placeholder."
            className="tx-screen"
          >
            <span className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFFCF5]/80">
              <span>01 — Case study</span>
              <span>2025</span>
            </span>
            <span className="absolute bottom-4 left-4 font-display text-4xl leading-none text-[#FFFCF5]">
              K
            </span>
          </Specimen>

          <Specimen
            index="02"
            name="Letterpress"
            where="Cards"
            note="A top highlight and a bottom shade, both inset. The surface catches light without a drop shadow."
            className="tx-press-up p-5"
          >
            <div className="flex h-full flex-col justify-between">
              <p className="eyebrow">Raised</p>
              <div className="tx-press-down rounded-lg p-4">
                <p className="font-display text-2xl leading-tight">Recessed</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Same paper, negative light
                </p>
              </div>
            </div>
          </Specimen>

          <Specimen
            index="03"
            name="Ledger rules"
            where="Education"
            note="Baseline rules at 2rem with a gold margin. Rows stop floating and start sitting on a page."
            className="tx-ledger pl-24 pr-5 pt-4"
          >
            <div className="space-y-4">
              {["Google UX", "Interaction Design", "Design Systems"].map((row, i) => (
                <div key={row} className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium">{row}</span>
                  <span className="font-mono text-[9px] text-muted-foreground">
                    202{i + 4}
                  </span>
                </div>
              ))}
            </div>
          </Specimen>

          <Specimen
            index="04"
            name="Guilloche"
            where="Dusk corners"
            note="Engraved rings, masked out of one corner. Banknote craft, in gold on oxblood, at 8% of the surface."
            className="tx-guilloche"
          >
            <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFFCF5]/60">
              Security print
            </span>
          </Specimen>

          <Specimen
            index="05"
            name="Oversized glyph"
            where="Section intros"
            note="One letter at 16rem and 5% ink, cropped by the frame. Type as texture, not as ornament."
            className="bg-[#F3EDDF]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-20 select-none font-display text-[18rem] leading-none text-[#0A0A0A]/10"
            >
              G
            </span>
            <div className="relative flex h-full flex-col justify-end p-5">
              <p className="eyebrow">04 — What I&apos;m into</p>
              <p className="title mt-2">Off-screen inputs</p>
            </div>
          </Specimen>

          <Specimen
            index="06"
            name="Registration marks"
            where="Media frames"
            note="Four crop corners and a light mat. Signals that a placeholder is a plate, not a missing image."
            className="tx-marks"
          >
            <div className="flex h-full items-center justify-center">
              <p className="font-display text-3xl text-[#0A0A0A]/25">Artwork</p>
            </div>
          </Specimen>

          <Specimen
            index="07"
            name="Crosshatch"
            where="Empty states"
            note="Two diagonal line sets in ink. A woven fill for anything that would otherwise be a grey box."
            className="tx-hatch"
          >
            <div className="flex h-full items-center justify-center">
              <span className="tag bg-background/70">Coming soon</span>
            </div>
          </Specimen>

          <Specimen
            index="08"
            name="Ink vignette"
            where="Artwork edges"
            note="A slow burn from the plate edge. Makes a flat fill feel printed rather than filled."
            className="tx-vignette"
          >
            <div className="flex h-full items-center justify-center">
              <p className="font-display text-2xl text-[#0A0A0A]/70">Plate edge</p>
            </div>
          </Specimen>

          <Specimen
            index="09"
            name="Rail edge fade"
            where="Project rail"
            note="A mask at both edges so cards dissolve instead of being sliced by the viewport."
          >
            <div className="tx-fade flex h-full items-center gap-3 px-6">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 w-28 shrink-0 rounded-md border border-border/70 bg-surface-strong"
                />
              ))}
            </div>
          </Specimen>
        </div>
      </section>

      <section id="light" className="container-page mt-20 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border/70 pt-10">
          <div>
            <p className="eyebrow">Light &amp; gradient</p>
            <h2 className="display-2 mt-4">A room, not a field</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Gradients are only allowed to do one of three jobs: light a surface,
            join two surfaces, or fade a plate.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Specimen
            index="10"
            name="Arch bloom"
            where="Hero"
            note="The existing glow, organised into arches. Each ring is 1px at a lower opacity than the last."
            className="tx-bloom"
          >
            <div className="tx-bloom-glow" aria-hidden="true" />
            {["w-28 h-32", "w-36 h-40", "w-44 h-48"].map((size, i) => (
              <div
                key={size}
                aria-hidden="true"
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full border border-[#B4531F] ${size}`}
                style={{ opacity: 0.6 - i * 0.15 }}
              />
            ))}
            <div className="absolute bottom-0 left-1/2 size-16 -translate-x-1/2 rounded-t-full bg-[#B4531F]/15" />
          </Specimen>

          <Specimen
            index="11"
            name="Dusk horizon"
            where="Footer"
            note="Oxblood graded to a gold horizon line at 56%, with the glow rising from below. The page ends at nightfall."
            className="tx-horizon"
          >
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <p className="font-display text-2xl text-[#FFFCF5]/90">
                Feel <em className="italic text-[#F0A93B]">alive.</em>
              </p>
            </div>
          </Specimen>

          <Specimen
            index="12"
            name="Living light"
            where="One per page"
            note="A blurred gold bloom drifting over 18 seconds. Life without movement the eye has to track."
            className="tx-living"
          >
            <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFFCF5]/60">
              18s · screen blend
            </span>
          </Specimen>

          <Specimen
            index="13"
            name="Seam"
            where="Section joins"
            note="Left is today's hard band edge. Right is a 6rem blend. Same two colours, one reads as a fold."
          >
            <div className="grid h-full grid-cols-2">
              <div className="tx-seam-hard relative">
                <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  Hard
                </span>
              </div>
              <div className="tx-seam-soft relative border-l border-border/70">
                <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  Seam
                </span>
              </div>
            </div>
          </Specimen>

          <Specimen
            index="14"
            name="Riso offset"
            where="Accent marks"
            note="The arch, printed twice: gold offset up-left, ink down-right, multiply where they overlap."
            className="tx-riso"
          >
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[#F0A93B] mix-blend-multiply" />
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 translate-x-2 translate-y-2 rounded-t-full border-2 border-[#0A0A0A]/80 mix-blend-multiply" />
            </div>
            <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              2 passes
            </span>
          </Specimen>

          <Specimen
            index="15"
            name="Marginal print"
            where="Case study"
            note="A gold rule and mono folio running in the margin. Quiet structure for long reads."
            className="bg-[#FFFCF5]"
          >
            <div className="flex h-full">
              <div className="flex w-12 flex-col items-center justify-between border-r border-[#8A5A00]/25 py-4">
                <span className="size-1.5 rounded-full bg-[#F0A93B]" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#8A5A00] [writing-mode:vertical-rl]">
                  12 — 14
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2 px-5">
                <div className="h-1.5 w-3/4 rounded-full bg-[#0A0A0A]/12" />
                <div className="h-1.5 w-full rounded-full bg-[#0A0A0A]/8" />
                <div className="h-1.5 w-5/6 rounded-full bg-[#0A0A0A]/8" />
                <div className="h-1.5 w-2/3 rounded-full bg-[#0A0A0A]/8" />
              </div>
            </div>
          </Specimen>
        </div>
      </section>

      <section id="applied" className="container-page mt-20 scroll-mt-24">
        <div className="border-t border-border/70 pt-10">
          <p className="eyebrow">In context</p>
          <h2 className="display-2 mt-4">Three places it earns its keep</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="surface-card overflow-hidden">
            <div className="tx-bloom relative h-56 overflow-hidden">
              <div className="tx-bloom-glow" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[11rem] leading-none text-[#0A0A0A]/10"
              >
                G
              </span>
              <div className="absolute bottom-0 left-1/2 flex w-40 -translate-x-1/2 justify-center rounded-t-full border border-[#B4531F]/45 pt-6">
                <div className="flex h-28 w-32 items-end justify-center rounded-t-full border border-[#B4531F]/25 bg-[#F0A93B]/15 pb-6 font-display text-5xl text-[#0A0A0A]/70">
                  G
                </div>
              </div>
              <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                Hero
              </span>
            </div>
            <div className="p-5">
              <h3 className="title">The portrait, lit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bloom, arches and one glyph field. Replaces the single blur with a
                printed plate that has a light source.
              </p>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="p-2">
              <div className="tx-screen relative aspect-[4/3] overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1612]/80 via-[#1B1612]/10 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFFCF5]/80">
                  <span>01 — Case study</span>
                  <span>2025</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="font-display text-4xl leading-none text-[#FFFCF5]">K</p>
                    <p className="mt-1 text-xs text-[#FFFCF5]/85">Kavara Kavara</p>
                  </div>
                  <span className="rounded-full border border-[#FFFCF5]/25 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#FFFCF5]/70">
                    Brand
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <h3 className="title">Artwork that reads as a plate</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The same card, with the placeholder replaced by a screen and a
                mat. No new component, no stock photo.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-border/70">
            <div className="tx-horizon relative h-56 overflow-hidden">
              <div className="tx-guilloche-rings opacity-70" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-6 px-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFFCF5]/55">
                  Have something in mind?
                </p>
                <p className="mt-2 font-display text-2xl leading-tight text-[#FFFCF5]">
                  Let&apos;s make something{" "}
                  <em className="italic text-[#F0A93B]">alive.</em>
                </p>
              </div>
            </div>
            <div className="bg-[#5C121B] p-5">
              <h3 className="title text-[#FFFCF5]">The footer as nightfall</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#FFFCF5]/60">
                Horizon, glow and one engraved corner. Still the same oxblood —
                just lit from below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="verdict" className="container-page mt-20 scroll-mt-24">
        <div className="border-t border-border/70 pt-10">
          <p className="eyebrow">Verdict</p>
          <h2 className="display-2 mt-4">What I would ship</h2>
          <p className="lede measure mt-5">
            Four treatments are ready to go into the system today. Four need a
            page to prove themselves on. Four break the rules as written.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {verdict.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-2 border-b border-border/70 pb-3">
                <span
                  className={`size-1.5 rounded-full ${
                    group.tone === "adopt"
                      ? "bg-accent"
                      : group.tone === "test"
                        ? "bg-[#0A0A0A]/40"
                        : "border border-border bg-transparent"
                  }`}
                  aria-hidden="true"
                />
                <p className="eyebrow text-foreground">{group.label}</p>
              </div>
              <ul className="mt-2">
                {group.items.map(([name, reason]) => (
                  <li key={name} className="border-b border-border/50 py-4">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {reason}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[1.25rem] border border-border/70 bg-surface-strong/60 p-6 sm:p-8">
          <p className="eyebrow">Next step</p>
          <p className="mt-3 max-w-2xl font-display text-2xl leading-snug">
            Pick two from the adopt list, and I&apos;ll wire them into the real
            components — tokens and utilities first, then the hero, artwork and
            band seams.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each one becomes a named utility in <code>globals.css</code>, so the
            system stays inspectable and nothing gets hand-painted into a page.
          </p>
        </div>
      </section>
    </main>
  );
}
