import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "MacBook Landing Page 3D",
  category: "Creative Frontend",
  heroImg: "/assets/macbook-landing.webp",
  tagline:
    "An Apple-inspired 3D landing page built to showcase premium visuals, smooth motion, and an immersive product presentation experience.",
  year: "2025",
  stack: [
    "Vite",
    "React",
    "GSAP",
    "Three.js",
    "Tailwind CSS",
    "Zustand",
    "clsx",
    "react-responsive",
  ],
  features: [
    "Apple-inspired landing page with a premium product presentation style.",
    "3D visuals powered by Three.js for a more immersive experience.",
    "Smooth scroll and motion interactions using GSAP.",
    "Responsive layout designed to adapt across different screen sizes.",
    "Built with a modern frontend stack for clean UI and fast performance.",
  ],
  impact: [
    "Shows my ability to build polished, visually strong frontend experiences.",
    "Highlights my experience with 3D rendering and animation-driven interfaces.",
    "Represents a creative project focused on product storytelling and interaction design.",
  ],
  links: {
    live: "https://macbook-lp-six.vercel.app",
    repo: "https://github.com/karimm1620/macbook-landing-page",
  },
};

export default function MacLandingDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
