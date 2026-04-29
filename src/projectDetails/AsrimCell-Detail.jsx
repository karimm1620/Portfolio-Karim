import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Asrim-Cell Store",
  category: "E-Commerce Web App",
  heroImg: "/assets/asrimcell-store.webp",
  tagline:
    "A modern store website built to present products in a clean, responsive, and user-friendly shopping experience.",
  year: "2025",
  stack: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Responsive UI",
  ],
  features: [
    "Product-focused storefront with a clean and modern layout.",
    "Responsive design for smooth viewing across desktop and mobile devices.",
    "Simple and user-friendly shopping experience built for easy browsing.",
    "Fast frontend structure optimized for interaction and presentation.",
    "Created as a practical e-commerce style web project.",
  ],
  impact: [
    "Shows my ability to build product-oriented web interfaces.",
    "Highlights responsive design and clean presentation skills.",
    "Represents practical frontend work for real-world business use.",
  ],
  links: {
    live: "https://asrim-cell-store.vercel.app/",
    repo: "https://github.com/karimm1620/AsrimCell-Store-V3",
  },
};

export default function AsrimCellDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
