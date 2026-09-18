export type Interest = {
  id: string;
  number: string;
  title: string;
  description: string;
  items?: string[];
};

export const interests: Interest[] = [
  {
    id: "skills",
    number: "01",
    title: "Skills",
    description: "Design tools and techniques I'm constantly sharpening.",
    items: ["UX Design", "UI Design", "Branding", "Product Design", "Prototyping", "User Research", "Design Systems", "Wireframing"],
  },
  {
    id: "books",
    number: "02",
    title: "Books",
    description: "Reading shapes how I think about design, people, and the world.",
    items: ["The Design of Everyday Things", "Thinking with Type", "Refactoring UI", "Don't Make Me Think", "Hooked"],
  },
  {
    id: "hobbies",
    number: "03",
    title: "Hobbies",
    description: "Life outside design keeps me curious and inspired.",
    items: ["Cooking", "Reading", "Crocheting", "Flower Arrangement", "Baking", "Tennis", "Music"],
  },
];
