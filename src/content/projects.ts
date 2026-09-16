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
    title: "KAVARA KAVARA",
    slug: "kavara-kavara",
    description:
      "A storytelling-driven brand and digital experience built around fire, food, and outdoor living.",
    year: "2024",
    role: "Designer",
    category: "Brand / Digital Experience",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A brand and digital experience designed around one central idea: Outdoor Food Culture. Rather than designing a conventional restaurant website, the goal was to create a digital world that makes people feel the brand before they visit it.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "What is KAVARA KAVARA?",
          content:
            "KAVARA KAVARA is an outdoor food culture brand built around one central idea: Outdoor Food Culture. It is about what happens when food moves outside — the fire being lit, smoke moving through the air, people gathering around a table, food cooking slowly, stories getting longer, friends and family staying a little later than planned. At its heart, KAVARA KAVARA is not simply about what is being served. It is about the culture around the food.",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "How do you design a feeling?",
          content:
            "The challenge was to create a digital presence that communicated something difficult to describe through conventional website language. KAVARA KAVARA needed to feel premium without feeling luxurious, outdoor without becoming rustic or cliché, contemporary without chasing trends, warm without becoming overly sentimental, and editorial without becoming overly formal. The central question became: How do you design a website that makes someone feel an outdoor meal before they have experienced one?",
          quote:
            "How do you design a website that makes someone feel an outdoor meal before they have experienced one?",
        },
        {
          id: "research",
          label: "Finding the Core",
          title: "Reducing everything to one pillar",
          content:
            "The project became clearer once everything was reduced to one pillar: Outdoor Food Culture. This became the filter for every major decision. If it was visual, it needed to feel outdoors. If it was copy, it needed to sound human. If it was a layout, it needed to feel intentional. If it was an interaction, it needed to have a reason. If it did not contribute to the feeling of Outdoor Food Culture, it did not need to be there.",
        },
        {
          id: "insights",
          label: "Guiding Posts",
          title: "Three principles",
          content:
            "Every design decision was judged against three principles. Premium — premium comes from craft rather than luxury. The design uses restraint, typography, spacing, photography and composition to create quality. The goal was never to make KAVARA KAVARA look expensive — it was to make it look considered. Clever and well thought out — nothing should exist simply because it looks good. Every element should have a purpose. Make people feel something — the website should create emotion before it creates conversion: warmth, curiosity, belonging, nostalgia, hunger, connection, relaxation, the desire to gather.",
        },
        {
          id: "process",
          label: "Visual Direction",
          title: "Between hospitality and editorial",
          content:
            "The visual direction sits between hospitality and editorial design. The website should feel like a beautifully art-directed food publication, an outdoor lifestyle journal, a premium hospitality brand, and a visual story about gathering. It should not feel like a restaurant template, a food delivery platform, a luxury hotel, or a corporate website. The design relies heavily on space, scale, imagery and typography.",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Typography, colour, and voice",
          content:
            "Typography pairs Rotherham for expressive moments — large display headlines, hero statements, quotes — with Made Tommy for structure and usability: navigation, headings, body copy, buttons. The colour system is deliberately restrained: green as the primary brand colour connecting to nature, white for space and contrast, beige for warmth and a tactile, natural quality. The palette is intentionally narrow so that photography, typography and the brand anchors carry the visual experience. The voice speaks like someone who has cooked over fire for years — experienced, relaxed, confident, never trying too hard.",
          columns: [
            {
              label: "Typography",
              items: [
                "Rotherham — expressive display",
                "Made Tommy — structure and UI",
                "Editorial expression + functional clarity",
              ],
            },
            {
              label: "Colour",
              items: [
                "Green — nature and outdoors",
                "White — space and contrast",
                "Beige — warmth and tactility",
              ],
            },
            {
              label: "Brand Anchors",
              items: [
                "Fire, smoke, embers, wood",
                "Outdoor tables, cushions, umbrellas",
                "Shared plates, friends and family",
              ],
            },
          ],
        },
        {
          id: "final",
          label: "Final Design",
          title: "The resulting design language",
          content:
            "The resulting KAVARA KAVARA language can be described as Editorial + Outdoor + Fire + Hospitality + Culture. It combines premium typography, natural colour, documentary photography, outdoor environments, editorial layouts, handcrafted illustration, cultural details, and human storytelling. The result should feel recognisable even before the logo is seen. Every major design decision was tested against six questions: Does it feel outdoors? Does it feel real? Does it feel premium? Is it clever and intentional? Does it make you feel something? Does it feel like KAVARA KAVARA?",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "Designing around a feeling",
          content:
            "KAVARA KAVARA became an exercise in designing a brand around a feeling rather than a product. The challenge was not simply to create a beautiful restaurant website. It was to build a visual system capable of communicating a culture — a culture of fire, food, gathering, and taking your time outside. The central idea of Outdoor Food Culture became the thread connecting the brand identity, typography, colour, imagery, copy and website experience.",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content:
            "The experience progression follows Feel, Understand, Discover, Desire. First the visitor feels the world. Then they understand what KAVARA KAVARA is. Then they discover the food, people and ideas behind it. Finally, they want to experience it themselves. A major part of the project was resisting the temptation to fill every space. The website uses whitespace as part of the identity — large images are given room, large type is allowed to breathe, quotes become visual moments, and illustration interrupts the rhythm.",
          quote:
            "Outdoor Food Culture by KAVARA KAVARA.",
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
    id: "jack-reverse",
    title: "Jack Reverse",
    slug: "jack-reverse",
    description:
      "A curated events discovery platform designed to showcase Harare's creative culture.",
    year: "2024",
    role: "Designer",
    category: "Platform / UX",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    caseStudy: {
      heroDescription:
        "A curated events discovery platform designed to help people discover what's happening across Zimbabwe — not through a generic directory, but through an experience that feels connected to the country's creative and social scene.",
      sections: [
        {
          id: "context",
          label: "Context",
          title: "Making Zimbabwe's events easier to discover",
          content:
            "Zimbabwe has a vibrant and constantly changing events scene — music, art, food, culture, nightlife, community and more. But discovering what's actually happening can be fragmented. Events are often spread across social platforms, individual venues, communities and different cities. Jack Reverse was designed around a simple question: What if discovering what's happening across Zimbabwe felt as effortless as discovering something you actually want to do? The goal wasn't to build another ticketing platform. Jack Reverse exists to showcase and curate events across Zimbabwe, helping people discover what's happening, where it's happening, and what they might want to experience.",
        },
        {
          id: "challenge",
          label: "The Challenge",
          title: "More than just listing events",
          content:
            "The challenge quickly became bigger than simply listing events. A conventional events directory tends to become a grid of event cards, lots of filters, dates and categories, repetitive metadata, and overwhelming amounts of information. That approach is functional, but it doesn't necessarily make people want to explore. For Jack Reverse, the design needed to balance two things: Discovery — help people quickly find something relevant, whether they know exactly what they're looking for or simply want to see what's happening, and Culture — make the platform feel connected to Zimbabwe's creative and social scene rather than like a generic events database.",
          quote:
            "Searching should feel like exploration, not administration.",
        },
        {
          id: "research",
          label: "Defining the Experience",
          title: "Mapping the visitor's questions",
          content:
            "Before designing individual pages, the experience was mapped around the questions a visitor naturally has. 'What's happening?' leads to Home — a curated introduction to what's happening across Zimbabwe. 'What can I do?' leads to Browse Events — an exploratory experience where users can discover events by location, category, date and other interests. 'I know what I'm looking for.' leads to Search — a focused utility for finding a specific event, artist, venue, category or keyword. 'Tell me more about this.' leads to Event Page — the details needed to understand an event and decide whether to attend. 'What happened?' leads to Past Events — a way to explore previous events and document the culture around them. 'I have an event.' leads to Submit Event — a simple route for organisers to get their event onto Jack Reverse.",
        },
        {
          id: "insights",
          label: "Key Insight",
          title: "Designing for Zimbabwe, not just one city",
          content:
            "One of the important decisions was to avoid treating Jack Reverse as a city-specific events guide. Zimbabwe's events ecosystem extends across different cities, towns and destinations. Harare may have a large concentration of events, but it is only part of the experience. This meant location needed to be treated as a core discovery dimension, alongside categories, dates and interests. The design needed to support a user who might think: 'What's happening in Harare?' 'What's happening in Bulawayo?' 'What's happening in Victoria Falls?' 'What's happening near me?' 'I don't care where it is — just show me something interesting.' This changed the way Browse, Search and event discovery were approached.",
        },
        {
          id: "process",
          label: "Design Process",
          title: "Iteration was part of the design",
          content:
            "The visual direction wasn't established in a single pass. Several decisions came from deliberately challenging the first solution. Dropdown filters became visible buttons and tags. The large ticket section became a simpler floating action. The sticker inside a box became artwork that breaks out of the layout. The long event page became a more compressed spatial composition. City-focused discovery became location-aware Zimbabwe-wide discovery. These weren't cosmetic changes. Each iteration came from asking: Is this helping the user, or are we adding UI because that's what event websites normally do?",
        },
        {
          id: "decisions",
          label: "Design Decisions",
          title: "Structure meets expression",
          content:
            "The visual language is built around a tension between structure and expression. Structure — typography, spacing, grids, hierarchy and consistent components. Expression — editorial layouts, event artwork, stickers, imagery and unexpected positioning. This is important because Jack Reverse isn't trying to make every event look identical. The system needs to create consistency around the content, while allowing the content itself to remain expressive. That becomes particularly important when events come from different cities, communities and creative scenes across Zimbabwe.",
          columns: [
            {
              label: "Structure",
              items: [
                "Typography and spacing",
                "Grids and hierarchy",
                "Consistent components",
              ],
            },
            {
              label: "Expression",
              items: [
                "Editorial layouts",
                "Event artwork and stickers",
                "Unexpected positioning",
              ],
            },
            {
              label: "Principle",
              items: [
                "The grid provides structure",
                "The artwork provides personality",
              ],
            },
          ],
        },
        {
          id: "final",
          label: "Final Design",
          title: "A way to experience Zimbabwe's event culture",
          content:
            "The project became less about designing an 'events website' and more about designing a way to experience Zimbabwe's event culture online. Instead of asking 'What components does an events platform need?' the better question became: 'What does someone need to see, feel and understand to decide where they want to be?' That question influenced the hierarchy, search experience, event pages, artwork treatment, location discovery and information architecture.",
        },
        {
          id: "outcome",
          label: "Outcome",
          title: "Discovery rather than transaction",
          content:
            "Jack Reverse evolved into a platform built around discovery rather than transaction. The resulting experience gives users different paths depending on their intent: Explore what's happening through Home and Browse. Find something specific through Search. Explore a location through Location and Browse. Understand an event through the Event page. Look back at what's happened through Past Events. Add something to the ecosystem through Submit Event. The design system provides the consistency needed for the platform to scale, while the editorial and expressive elements keep individual events from feeling interchangeable. Most importantly, the experience is designed to work as a Zimbabwe-wide discovery platform, rather than a directory tied to one city.",
        },
        {
          id: "reflection",
          label: "Reflection",
          title: "What I learned",
          content:
            "Don't design the category. Design the problem. 'Events website' is a category. 'Help someone discover what they want to do in Zimbabwe' is a problem. The second produces much better design questions. More UI doesn't necessarily mean more functionality — filters, cards, buttons and sections can make a page feel comprehensive while actually making it harder to understand. Location is part of discovery — when events exist across an entire country, location can't be treated as secondary metadata. It needs to be easy to understand, easy to filter and present throughout the experience without becoming the only way people discover events. A design system shouldn't flatten content — events are inherently visual and expressive, and the system should create consistency without making every event look like the same event.",
          quote:
            "Show people what's happening, help them find something they care about, and give them a reason to go.",
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
