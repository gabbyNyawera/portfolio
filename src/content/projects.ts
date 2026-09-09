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
  caseStudy: {
    heroDescription: string;
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    id: "kavara-kavara",
    title: "Kavara Kavara",
    slug: "kavara-kavara",
    description:
      "A storytelling-driven e-commerce experience built around fire, food, and outdoor living.",
    year: "2024",
    role: "Designer",
    category: "E-commerce / Brand",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A storytelling-driven e-commerce experience built around fire, food, and outdoor living.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content: "[PROJECT CONTEXT TO BE ADDED]",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content: "[DESIGN CHALLENGE TO BE ADDED]",
        },
        {
          id: "research",
          label: "Research",
          title: "Discovery and exploration",
          content: "[RESEARCH CONTENT TO BE ADDED]",
        },
        {
          id: "insights",
          label: "Insights",
          title: "What we learned",
          content: "[INSIGHTS TO BE ADDED]",
        },
        {
          id: "process",
          label: "Design Process",
          title: "How the design evolved",
          content: "[DESIGN PROCESS CONTENT TO BE ADDED]",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content: "[DESIGN DECISIONS TO BE ADDED]",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content: "[FINAL DESIGN IMAGES TO BE ADDED]",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content: "[OUTCOME TO BE ADDED]",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content: "[REFLECTION TO BE ADDED]",
        },
      ],
    },
  },
  {
    id: "study-app",
    title: "Study App",
    slug: "study-app",
    description:
      "A PWA study companion designed to help Zimbabwean learners access curriculum content and practice skills.",
    year: "2024–2026",
    role: "Designer & Developer",
    category: "Education / PWA",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A PWA study companion designed to help Zimbabwean learners access curriculum content and practice skills.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content: "[PROJECT CONTEXT TO BE ADDED]",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content: "[DESIGN CHALLENGE TO BE ADDED]",
        },
        {
          id: "research",
          label: "Research",
          title: "Discovery and exploration",
          content: "[RESEARCH CONTENT TO BE ADDED]",
        },
        {
          id: "insights",
          label: "Insights",
          title: "What we learned",
          content: "[INSIGHTS TO BE ADDED]",
        },
        {
          id: "process",
          label: "Design Process",
          title: "How the design evolved",
          content: "[DESIGN PROCESS CONTENT TO BE ADDED]",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content: "[DESIGN DECISIONS TO BE ADDED]",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content: "[FINAL DESIGN IMAGES TO BE ADDED]",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content: "[OUTCOME TO BE ADDED]",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content: "[REFLECTION TO BE ADDED]",
        },
      ],
    },
  },
  {
    id: "portfolio",
    title: "Portfolio",
    slug: "portfolio",
    description:
      "A personal portfolio designed to showcase design work through editorial storytelling.",
    year: "2026",
    role: "Designer & Developer",
    category: "Portfolio / Personal",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A personal portfolio designed to showcase design work through editorial storytelling.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content: "[PROJECT CONTEXT TO BE ADDED]",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content: "[DESIGN CHALLENGE TO BE ADDED]",
        },
        {
          id: "research",
          label: "Research",
          title: "Discovery and exploration",
          content: "[RESEARCH CONTENT TO BE ADDED]",
        },
        {
          id: "insights",
          label: "Insights",
          title: "What we learned",
          content: "[INSIGHTS TO BE ADDED]",
        },
        {
          id: "process",
          label: "Design Process",
          title: "How the design evolved",
          content: "[DESIGN PROCESS CONTENT TO BE ADDED]",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content: "[DESIGN DECISIONS TO BE ADDED]",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content: "[FINAL DESIGN IMAGES TO BE ADDED]",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content: "[OUTCOME TO BE ADDED]",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content: "[REFLECTION TO BE ADDED]",
        },
      ],
    },
  },
  {
    id: "jq-face",
    title: "JQ Face",
    slug: "jq-face",
    description:
      "A conceptual project focused on identity, expression, and bold visual design.",
    year: "2024",
    role: "Designer",
    category: "Identity / Concept",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A conceptual project focused on identity, expression, and bold visual design.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content: "[PROJECT CONTEXT TO BE ADDED]",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content: "[DESIGN CHALLENGE TO BE ADDED]",
        },
        {
          id: "research",
          label: "Research",
          title: "Discovery and exploration",
          content: "[RESEARCH CONTENT TO BE ADDED]",
        },
        {
          id: "insights",
          label: "Insights",
          title: "What we learned",
          content: "[INSIGHTS TO BE ADDED]",
        },
        {
          id: "process",
          label: "Design Process",
          title: "How the design evolved",
          content: "[DESIGN PROCESS CONTENT TO BE ADDED]",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content: "[DESIGN DECISIONS TO BE ADDED]",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content: "[FINAL DESIGN IMAGES TO BE ADDED]",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content: "[OUTCOME TO BE ADDED]",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content: "[REFLECTION TO BE ADDED]",
        },
      ],
    },
  },
  {
    id: "thais-house-to-home",
    title: "Thais House to Home",
    slug: "thais-house-to-home",
    description:
      "A service-focused experience designed to help users navigate home and living solutions.",
    year: "2024",
    role: "Designer",
    category: "Service / UX",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A service-focused experience designed to help users navigate home and living solutions.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content: "[PROJECT CONTEXT TO BE ADDED]",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content: "[DESIGN CHALLENGE TO BE ADDED]",
        },
        {
          id: "research",
          label: "Research",
          title: "Discovery and exploration",
          content: "[RESEARCH CONTENT TO BE ADDED]",
        },
        {
          id: "insights",
          label: "Insights",
          title: "What we learned",
          content: "[INSIGHTS TO BE ADDED]",
        },
        {
          id: "process",
          label: "Design Process",
          title: "How the design evolved",
          content: "[DESIGN PROCESS CONTENT TO BE ADDED]",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content: "[DESIGN DECISIONS TO BE ADDED]",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content: "[FINAL DESIGN IMAGES TO BE ADDED]",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content: "[OUTCOME TO BE ADDED]",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content: "[REFLECTION TO BE ADDED]",
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
