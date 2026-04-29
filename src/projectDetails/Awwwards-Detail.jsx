import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Spylt 3D Web Awwwards",
  category: "Creative Frontend",
  heroImg: "/assets/awwwards-gsap.webp",
  tagline:
    "An experimental Awwwards-inspired landing page focused on immersive visuals, smooth motion, and polished frontend presentation.",
  year: "2025",
  stack: [
    "React",
    "JavaScript",
    "Vite",
    "CSS",
    "GSAP",
  ],
  features: [
    "Awwwards-style visual composition with strong layout hierarchy.",
    "Smooth animations and transitions powered by GSAP.",
    "Creative frontend experiment focused on motion and storytelling.",
    "Responsive design that keeps the experience consistent across devices.",
    "Built to explore premium presentation and interactive UI flow.",
  ],
  impact: [
    "Shows my interest in high-end creative web design.",
    "Highlights my ability to combine animation, layout, and interaction.",
    "Represents practice in building polished, presentation-focused frontend work.",
  ],
  links: {
    live: "https://spylt-gsap-ten.vercel.app",
    repo: "https://github.com/karimm1620/Awwards-GSAP",
  },
};

export default function AwwardsDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
