export const PROJECT_META = [
  {
    id: 1,
    slug: "polaid",
    title: "Polaid",
    category: "Web-Based IDE",
    color: "bg-lime-400",
    img: "/preview/polaidPreview.webp",
  },
  {
    id: 2,
    slug: "asrimcell",
    title: "AsrimCell Store",
    category: "E-Commerce Web App",
    color: "bg-cyan-400",
    img: "/preview/asrimcellPreview.webp",
  },
  {
    id: 3,
    slug: "fizzyGutsy",
    title: "Fizzi-Gutsy 3D Interactive Web",
    category: "Interactive 3D Animated Landing page",
    color: "bg-orange-400",
    img: "/preview/fizziPreview.webp",
  },
  {
    id: 4,
    slug: "awwwards-gsap",
    title: "Spylt 3D Web Awwwards",
    category: "Creative Frontend",
    color: "bg-brown-400",
    img: "/preview/awwwardsPreview.webp",
  },
  {
    id: 5,
    slug: "todo-app",
    title: "Todo App",
    category: "Productivity App",
    color: "bg-amber-400",
    img: "/preview/todoPreview.webp",
  },
  {
    id: 6,
    slug: "nodebase",
    title: "Nodebase Ai Workflow Automation",
    category: "Web Application",
    color: "bg-orange-400",
    img: "/preview/nodebasePreview.webp",
  },
  {
    id: 7,
    slug: "macbook",
    title: "Macbook Landing Page",
    category: "Product Landing Page",
    color: "bg-sky-400",
    img: "/preview/macbookPreview.webp",
  },
  {
    id: 8,
    slug: "productify",
    title: "Productify",
    category: "Modular Product Platform",
    color: "bg-indigo-400",
    img: "/preview/productifyPreview.webp",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
