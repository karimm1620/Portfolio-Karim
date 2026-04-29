import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Todo App",
  category: "Productivity App",
  heroImg: "/assets/todo-app.webp",
  tagline:
    "A cross-platform todo application built with Expo and powered by Convex Realtime DB for fast, synchronized task management.",
  year: "2025",
  stack: [
    "Expo",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Convex",
    "Realtime Database",
    "Mobile UI",
  ],
  features: [
    "Cross-platform todo app built with Expo for a smooth mobile experience.",
    "Realtime task syncing powered by Convex for instant updates.",
    "Clean and simple interface designed for fast daily task management.",
    "Task creation, updating, and completion flow built for ease of use.",
    "Focused on productivity, speed, and practical mobile interaction.",
  ],
  impact: [
    "Shows my ability to build useful mobile applications.",
    "Highlights experience with Expo and realtime backend services.",
    "Represents a practical productivity project with modern tooling.",
  ],
  links: {
    repo: "https://github.com/karimm1620/todo-app",
  },
};

export default function TodoAppsDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
