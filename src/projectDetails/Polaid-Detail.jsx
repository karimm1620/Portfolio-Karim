import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Polaid",
  category: "Web-Based IDE",
  heroImg: "/assets/polaid.webp",
  tagline:
    "A browser-based IDE inspired by modern coding environments, designed to provide a clean, interactive, and developer-friendly experience directly in the browser.",
  year: "2026",
  stack: [
    "Next.js",
    "Shadcn/ui",
    "Convex",
    "Clerk",
    "Inngest",
    "Authentication (JWT / NextAuth)",
    "Firecrawl",
    "Sentry",
    "Tailwind",
    "Google Gemini API",
  ],
  features: [
    "Browser-based coding workspace with a modern and minimal interface.",
    "Interactive development flow designed for a smooth in-browser experience.",
    "Clean layout focused on usability, speed, and developer comfort.",
    "Built as an experimental IDE concept inspired by modern coding tools.",
    "Ongoing project that reflects creative frontend and product thinking.",
  ],
  impact: [
    "Shows my interest in building practical developer tools.",
    "Highlights my ability to create interactive and functional web interfaces.",
    "Represents my growth through experimental and product-focused frontend work.",
  ],
  links: {
    live: "https://polaid.vercel.app",
    repo: "https://github.com/karimm1620/polaid",
  },
};

export default function PolaidDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
