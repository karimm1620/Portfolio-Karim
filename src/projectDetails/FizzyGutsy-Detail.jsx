import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Fizzi-Gutsy",
  category: "Creative Frontend",
  heroImg: "/assets/fizzi-gutsy.webp",
  tagline:
    "A visually engaging frontend project focused on smooth motion, clean presentation, and an immersive user experience.",
  year: "2025",
  stack: [
    "Next.js",
    "Prismic",
    "Tailwind CSS",
    "Three.js",
    "GSAP",
    "Drei",
    "Zustand",
  ],
  features: [
    "Creative landing page with a strong visual-first presentation.",
    "Smooth animations and transitions for a more immersive experience.",
    "Responsive layout designed to look clean across different screen sizes.",
    "Built as an experimental frontend project to explore motion and interaction.",
    "Focused on modern UI styling and polished presentation flow.",
  ],
  impact: [
    "Shows my interest in creative and interactive frontend design.",
    "Highlights my ability to build visually polished web experiences.",
    "Represents hands-on practice with animation, layout, and presentation details.",
  ],
  links: {
    live: "https://fizzi-gutsy-xi.vercel.app",
    repo: "https://github.com/karimm1620/Fizzi-Gutsy",
  },
};

export default function FizziGutsyDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
