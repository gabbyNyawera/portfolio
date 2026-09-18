export type CaseStudySection = {
  id: string;
  label: string;
  title: string;
  content?: string;
  quote?: string;
  images?: { src: string; alt: string; caption?: string }[];
  grid?: { src: string; alt: string; caption?: string }[];
  columns?: {
    label: string;
    items: string[];
  }[];
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  year: string;
  role: string;
  category: string;
  featured: boolean;
  image: string;
  prototypeUrl?: string;
  caseStudy: {
    heroDescription: string;
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    slug: "portfolio",
    description:
      "A personal portfolio designed to communicate the designer behind the work, not just the work itself.",
    year: "2026",
    role: "Designer & Developer",
    category: "Portfolio / Personal",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A personal portfolio designed to communicate the designer behind the work — built through vibe coding, where design and code continuously inform each other.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "Designing an experience that feels alive",
          content:
            "Most designer portfolios are built to prove competence. They show polished screens, list tools, describe projects, and move the visitor from one case study to another. The work can be impressive, but the experience often feels static. I wanted to approach my portfolio differently. The goal wasn't simply to create a website that displayed my work. It was to create an experience that communicated how I think as a designer before someone even opened a case study. The portfolio needed to feel intentional, expressive, and human — without sacrificing clarity or usability.",
          quote:
            "How can a portfolio communicate the designer behind the work, rather than simply presenting the work itself?",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "Balancing expression with clarity",
          content:
            "The portfolio began with a simple belief: I design experiences that feel alive. 'Alive' became more than a visual direction. It became a way of making design decisions. An experience that feels alive shouldn't feel mechanically assembled. It should have rhythm, contrast, moments of surprise, and enough personality to create an emotional response. But there was an important constraint. Expressiveness couldn't come at the expense of usability. The portfolio still needed to communicate quickly: who I am, what I do, how I think, what I've worked on, why the work matters, and how to work with me.",
        },
        {
          id: "research",
          label: "The Process",
          title: "Designing while vibe coding",
          content:
            "This portfolio was not designed entirely in a traditional design-tool-to-development pipeline. I am designing and vibe coding the portfolio at the same time. Instead of creating every screen as a finished static artifact first and then handing it off for implementation, the design and code continuously inform each other. An idea can be explored visually, built in code, experienced in the browser, and then redesigned based on what actually works. This makes the browser part of the design process. A transition can feel different when experienced rather than imagined. A layout that looks balanced on a canvas can feel too dense when scrolling.",
        },
        {
          id: "insights",
          label: "Key Insight",
          title: "From portfolio to experience",
          content:
            "One of the earliest decisions was to stop thinking of the site as a collection of pages. Instead, I treated it as a journey. The homepage introduces the personality behind the work. The selected projects create opportunities to explore. The philosophy section explains the thinking underneath the visuals. Individual case studies slow the experience down and reveal the process. Each section has a different job: the homepage creates curiosity, the work establishes credibility, the philosophy establishes perspective, the case studies establish depth, and the contact experience creates a natural ending.",
        },
        {
          id: "process",
          label: "Design Process",
          title: "Creating visual rhythm",
          content:
            "A major part of the design process was determining how the interface should move visually, even when the user wasn't interacting with it. I explored contrast in scale, spacing, typography, image treatment, and composition. Some moments are deliberately restrained. Others are allowed to become more expressive. This contrast creates rhythm. Instead of making every section compete for attention, the design gives certain elements room to breathe and lets others become focal points. Large statements create pauses. Smaller text provides context. Project imagery creates visual weight. Whitespace gives the eye somewhere to rest.",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Work and case studies",
          content:
            "The work needed to be immediately understandable without becoming a conventional project grid. I wanted each project to feel like an invitation rather than a thumbnail in an archive. The case studies became an important extension of the portfolio's philosophy. I didn't want them to become galleries of finished screens. A polished final interface tells only part of the story. The more useful story is what happened before the final interface existed. The case-study structure focuses on decisions and reasoning, not just deliverables. The final design becomes the consequence of the process rather than the entire story.",
          columns: [
            {
              label: "Work Section",
              items: [
                "Project as invitation, not thumbnail",
                "Problem and role upfront",
                "Visual detail that creates curiosity",
              ],
            },
            {
              label: "Case Studies",
              items: [
                "Decisions and reasoning, not galleries",
                "What assumptions were challenged",
                "Why one solution survived",
              ],
            },
            {
              label: "Philosophy",
              items: [
                "State the thinking directly",
                "Editorial, not explanatory",
                "How I see design",
              ],
            },
          ],
        },
        {
          id: "final",
          label: "Final Design",
          title: "Restraint became just as important as expression",
          content:
            "One of the most useful discoveries during the process was that making the portfolio expressive didn't mean making every element expressive. Early explorations pushed some visual treatments too far. Backgrounds became too dominant. Visual effects competed with the content. Sections started demanding attention instead of earning it. That exposed an important principle: If everything is loud, nothing has a voice. The solution wasn't to remove personality. It was to control it. Strong moments became stronger when surrounded by quieter ones. Whitespace became an active design element. Motion and visual emphasis were treated as accents rather than decoration.",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "A portfolio with a pulse",
          content:
            "The finished portfolio isn't intended to be a neutral container for projects. It is itself a piece of design work. It demonstrates the same principles that appear throughout my client work: understanding the problem, establishing a point of view, exploring possibilities, making deliberate decisions, and refining until the experience feels right. The fact that it is being designed and vibe coded simultaneously is part of the story, not a footnote. The most important outcome isn't a particular animation, type treatment, layout, or visual effect. It's the relationship between all of them.",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content:
            "The portfolio became a demonstration of the thing it is trying to communicate: Good digital experiences don't just function. They have a pulse. And that's what I mean when I say: I design experiences that feel alive. Design decisions are tested in the browser. Interactions are experienced as they are built. Code becomes a medium for exploration rather than something that only enters the process at the end. The visual system ultimately became a reflection of the design philosophy — not minimal for the sake of minimalism, not expressive for the sake of expression, not animated simply because animation is possible.",
          quote:
            "There is a person behind this work, and they care about the experience they are creating.",
        },
      ],
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
}
