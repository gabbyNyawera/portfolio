export type Book = {
  title: string;
  author: string;
  cover: string;
};

export type Interest = {
  id: string;
  number: string;
  title: string;
  description: string;
  items?: string[];
  books?: Book[];
  featured?: boolean;
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
    books: [
      {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        cover: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",
      },
      {
        title: "Thinking with Type",
        author: "Ellen Lupton",
        cover: "https://covers.openlibrary.org/b/isbn/9781568989693-L.jpg",
      },
      {
        title: "Refactoring UI",
        author: "Adam Wathan & Steve Schoger",
        cover: "",
      },
      {
        title: "Don't Make Me Think",
        author: "Steve Krug",
        cover: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
      },
      {
        title: "Hooked",
        author: "Nir Eyal",
        cover: "https://covers.openlibrary.org/b/isbn/9781591847786-L.jpg",
      },
    ],
    featured: true,
  },
  {
    id: "hobbies",
    number: "03",
    title: "Hobbies",
    description: "Life outside design keeps me curious and inspired.",
    items: ["Cooking", "Reading", "Crocheting", "Flower Arrangement", "Baking", "Tennis", "Music"],
  },
];
