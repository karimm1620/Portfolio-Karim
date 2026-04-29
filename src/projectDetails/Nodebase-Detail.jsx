import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Nodebase",
  category: "Workflow Automation",
  heroImg: "/assets/nodebase.webp",
  tagline:
    "A workflow automation platform inspired by n8n, built with modern web tools to explore visual logic, modular workflows, and no-code style process automation.",
  year: "2025",
  stack: [
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Prisma",
    "Polar",
    "ORM",
    "Postgres",
    "AI SDK",
    "Sentry",
    "TanStack React Query",
    "tRPC",
    "Better Auth",
    "Clsx",
    "Inngest",
    "Ky",
    "Zod",
    "ngrok",
  ],
  features: [
    "Workflow automation concept inspired by n8n.",
    "Built with a modern Next.js stack for fast and scalable product development.",
    "Uses modular tools for authentication, data flow, validation, background jobs, and monitoring.",
    "Designed to explore visual logic and no-code style process automation.",
    "Focused on clean UI, structured architecture, and product experimentation.",
  ],
  impact: [
    "Shows your interest in building developer tools and automation platforms.",
    "Highlights practical experience with a modern full-stack production stack.",
    "Represents an experimental project with strong product and engineering direction.",
  ],
  links: {
    repo: "https://github.com/karimm1620/nodebase",
  },
};

export default function NodebaseDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
