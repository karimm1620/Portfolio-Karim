// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  polaid: {
    title: "Polaid",
    category: "Web-Based IDE",
    tagline:
      "A browser-based IDE inspired by modern coding environments, designed to provide a clean and interactive development experience.",
    year: "2025",
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
      "Built to support an interactive development flow directly in the browser.",
      "Focused on usability, clean layout, and smooth editing experience.",
    ],
    impact: [
      "Shows my interest in building practical developer tools.",
      "Highlights my ability to design interactive and functional web interfaces.",
      "Represents an ongoing project that reflects my growth as a full-stack developer.",
    ],
    links: {
      live: "https://polaid.vercel.app",
      repo: "https://github.com/karimm1620/polaid",
    },
    notes: "Project in progress.",
  },

  "asrimcell-store": {
    title: "AsrimCell Store",
    category: "E-Commerce Web Application",
    tagline:
      "A modern store website built to present products in a clean, responsive, and user-friendly shopping experience.",
    year: "2025",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      "Product-focused layout with a clean storefront experience.",
      "Responsive design for desktop and mobile users.",
      "Built with a modern frontend workflow for fast interaction.",
    ],
    impact: [
      "Demonstrates practical web development for real-world business use.",
      "Shows my ability to create polished and responsive UI layouts.",
      "Reflects experience building product-oriented interfaces.",
    ],
    links: {
      live: "https://asrim-cell-store.vercel.app",
      repo: "https://github.com/karimm1620/AsrimCell-Store-V3",
    },
  },

  fizzyGutsy: {
    title: "Fizzy Gutsy",
    category: "Interactive 3D Animated Landing page",
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
  },

  "awwwards-gsap": {
    title: "Spylt 3D Web Awwwards",
    category: "Creative Frontend",
    tagline:
      "An experimental landing page project focused on advanced animation, visual flow, and immersive frontend presentation.",
    year: "2025",
    stack: ["React", "JavaScript", "Vite", "CSS", "GSAP"],
    features: [
      "Animation-driven landing page experience.",
      "Built to explore motion design and visual storytelling.",
      "Focuses on smooth transitions and creative interaction.",
    ],
    impact: [
      "Represents my interest in high-end creative web design.",
      "Shows experimentation with animation and frontend polish.",
      "Helps strengthen my visual development skills.",
    ],
    links: {
      live: "https://spylt-gsap-ten.vercel.app",
      repo: "https://github.com/karimm1620/Awwards-GSAP",
    },
  },

  "todo-app": {
    title: "Todo App",
    category: "Productivity App",
    tagline:
      "A simple task management app built for organizing daily work in a clean and efficient interface.",
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
      "Task creation and management workflow.",
      "Minimal and easy-to-use interface.",
      "Focused on productivity and clarity.",
    ],
    impact: [
      "Represents a practical app for everyday use.",
      "Shows my ability to build useful CRUD-style interfaces.",
      "Useful for demonstrating core frontend fundamentals.",
    ],
    links: {
      repo: "https://github.com/karimm1620/todo-app",
    },
  },

  nodebase: {
    title: "Nodebase",
    category: "Workflow Automation",
    heroImg: "/projects/nodebase.png",
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
  },

  macbook: {
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
  },

  productify: {
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
  },

  "music-player": {
    title: "Music Player",
    category: "Web Application",
    tagline:
      "A music player interface built to explore interactive controls and clean audio-focused presentation.",
    year: "2025",
    stack: ["React", "JavaScript", "CSS"],
    features: [
      "Interactive playback-focused interface.",
      "Designed for smooth and simple user interaction.",
      "Clean layout centered around media controls.",
    ],
    impact: [
      "Shows my practice in building interactive frontend projects.",
      "Demonstrates component-based UI thinking.",
      "Adds variety to my project portfolio.",
    ],
    links: {
      repo: "https://github.com/karimm1620/music-player",
    },
  },

  sushiiDelivery: {
    title: "Sushii Delivery",
    category: "Food Delivery UI",
    tagline:
      "A clean and responsive food delivery interface designed to create a smooth browsing and ordering experience.",
    year: "2025",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Modern food delivery layout with a clean visual presentation.",
      "Responsive interface designed for smooth use across devices.",
      "Focused on simple navigation and an intuitive ordering flow.",
    ],
    impact: [
      "Shows my ability to build polished product-style interfaces.",
      "Highlights my frontend design skills with a practical use case.",
      "Represents a responsive and user-friendly web project.",
    ],
    links: {
      repo: "https://github.com/karimm1620/Sushii-Delivery",
    },
  },
};
