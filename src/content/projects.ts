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
    prototypeUrl: "http://localhost:3001",
    caseStudy: {
      heroDescription:
        "Designing and vibe-coding a child-friendly study experience. A digital learning platform designed to help students study independently through a simple, structured, and engaging experience.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What was this project?",
          content:
            "The Study App is a digital learning platform designed to help students study independently through a simple, structured, and engaging experience. The goal was not to build another content-heavy education platform. Instead, I focused on creating a clear study system that guides learners through their syllabus one section at a time — from learning new material to practicing questions and reviewing completed chapters. The project combined UX/UI design, information architecture, educational UX, and AI-assisted development through vibe coding.",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "What problem were we solving?",
          content:
            "Traditional study materials can feel overwhelming. Students often have to move between textbooks, notes, worksheets, revision guides, and exam papers. This creates friction around a simple question: \"What should I study next?\" I wanted to design an experience where the app could answer that question for the learner. Instead of presenting a large library of disconnected resources, the experience is structured around a clear learning journey: Subject → Section → Learn → Example → Practice → Review → Next Section.",
          quote:
            "Make studying feel simple, structured and approachable.",
        },
        {
          id: "research",
          label: "Information Architecture",
          title: "Structuring the learning journey",
          content:
            "The initial architecture was built around the syllabus. The app starts with the student's subjects and progressively narrows the experience down to individual learning sections. The core hierarchy follows: Grade → Subjects → Term → Section / Chapter → Learn → Example → Practice → Review → Next Section. This structure became the foundation for both the UX and the eventual codebase. Subjects are divided into three academic terms (Term 1, Term 2, Term 3), with revision separated from the learning journey to keep the main experience focused.",
        },
        {
          id: "insights",
          label: "The Learning Experience",
          title: "Breaking studying into smaller actions",
          content:
            "One of the most important decisions was to break studying into smaller actions. Rather than displaying an entire chapter as a large block of information, each section follows a simple sequence. Learn: the learner is introduced to the concept using clear, age-appropriate study material. Example: after learning the concept, the student sees an example that demonstrates how the idea works in practice. Practice: the student then answers questions based on the section they have just studied. Review: the final step allows students to revisit the material and identify areas that need more attention.",
        },
        {
          id: "process",
          label: "Design Process",
          title: "From design to functional prototype",
          content:
            "The development process used vibe coding as an extension of the design process. Rather than manually writing every component from scratch, I used AI-assisted development to translate the product architecture and interface decisions into a working application. The process followed: Idea → UX architecture → Wireframes → Design system → AI development prompt → Generated interface → Test → Identify problems → Refine → Repeat. The important part was that AI was not responsible for deciding what the product should be. I defined the product logic and design direction first. AI became the implementation partner.",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Key choices made",
          content:
            "Designing for children changed the way I approached the interface. The product cannot rely on assumptions that users will understand complex navigation patterns. I focused on: one primary action per screen, reduced cognitive load, visual guidance through progress indicators and cards, clear language in simple and direct terms, and immediate feedback on practice activities. The visual direction was designed specifically for a younger audience — friendly, modern, playful, but still focused. I avoided making the interface look like a traditional school portal.",
        },
        {
          id: "final",
          label: "Final Design",
          title: "The finished work",
          content:
            "The result is a study experience that turns a potentially overwhelming curriculum into a clear sequence of manageable learning activities. Instead of asking \"What do I study?\" the product gives the student a clear path: Choose → Learn → See an Example → Practice → Review → Continue. The interface uses large clear typography, strong visual hierarchy, cards and contained sections, friendly visual language with rounded elements, and consistent interaction patterns across every subject.",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "What was achieved",
          content:
            "The project demonstrates how UX design and AI-assisted development can work together to move from product concept to functional prototype much faster. The architecture was intentionally designed to expand — the same product architecture could eventually support multiple grades and curricula without fundamentally changing the core experience. By creating reusable content and UI patterns, adding another subject becomes a content problem rather than a complete redesign.",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content:
            "Structure matters more than decoration. A beautiful interface cannot compensate for confusing navigation. AI works better with constraints — the more clearly I defined the architecture and interaction patterns, the more useful the AI-generated implementation became. Educational UX requires restraint — every additional feature can create distraction. Vibe coding did not make the design process less important. It made good product thinking more valuable.",
          quote:
            "Designed the experience. Structured the system. Used AI to accelerate the build. Tested the product. Iterated on the UX.",
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
