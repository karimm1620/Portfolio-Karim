import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Productify",
  category: "Modular Product Platform",
  heroImg: "/assets/productify.webp",
  tagline:
    "A modular product platform split into frontend and backend services, built to explore modern full-stack architecture, product workflows, and scalable e-commerce foundations.",
  year: "2026",
  stack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "TanStack React Query",
    "React Router",
    "Clerk React",
    "Axios",
    "Lucide React",
    "DaisyUI",
    "Node.js",
    "Express",
    "TypeScript",
    "Drizzle ORM",
    "PostgreSQL",
    "Clerk Express",
    "Drizzle Kit",
  ],
  features: [
    "Separated frontend and backend structure for cleaner project organization.",
    "Built to explore modular product architecture and API-driven workflows.",
    "Frontend focused on responsive UI, routing, and data fetching.",
    "Backend focused on authentication, database access, and schema management.",
    "Designed as a practical foundation for product-style web applications.",
  ],
  impact: [
    "Shows my ability to structure a full-stack project into clear frontend and backend layers.",
    "Highlights practical experience with modern React and Node.js tooling.",
    "Represents my interest in building scalable product-oriented web systems.",
  ],
  links: {
    repo: "https://github.com/karimm1620/productify",
  },
};

export default function ProductifyDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
