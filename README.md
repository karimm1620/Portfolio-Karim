# Portfolio — Abdul Karim Sulaeman

Personal portfolio website built with React, Vite, and Tailwind CSS. Features an AI-powered terminal chat assistant, smooth animations, and a fully responsive layout.

## 🚀 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animation:** GSAP
- **Smooth Scroll:** Lenis
- **Routing:** React Router DOM
- **AI Chat:** Google Gemini API (`gemini-2.5-flash`)
- **Icons:** Lucide React

---

## 📁 Project Structure

```
portfolio-karim/
├── public/
│   ├── assets/                         # Project thumbnail images
│   │   ├── asrimcell-store.webp
│   │   ├── awwwards-gsap.webp
│   │   ├── fizzi-gutsy.webp
│   │   ├── macbook-landing.webp
│   │   ├── nodebase.webp
│   │   ├── polaid.webp
│   │   ├── productify.webp
│   │   └── todo-app.webp
│   ├── certs/                          # Certificate images
│   │   ├── cert.webp                   # OSPAN 2023 — PKN
│   │   ├── cert2.webp                  # OSPAN 2023 — Bahasa Inggris
│   │   └── cert3.webp                  # OPN 2023 — Bahasa Indonesia
│   ├── preview/                        # Project preview images
│   │   ├── asrimcellPreview.webp
│   │   ├── awwwardsPreview.webp
│   │   ├── fizziPreview.webp
│   │   ├── macbookPreview.webp
│   │   ├── nodebasePreview.webp
│   │   ├── polaidPreview.webp
│   │   ├── productifyPreview.webp
│   │   └── todoPreview.webp
│   ├── cv.pdf
│   ├── favicon.svg
│   ├── og-icon.png
│   ├── profilee.webp
│   ├── profile.webp
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── projects/
│   │   │   ├── ProjectCaseLayout.jsx   # Reusable project case study layout
│   │   │   ├── ProjectDetailModal.jsx  # Project detail modal overlay
│   │   │   └── ProjectDetailRouter.jsx # Route handler for project modals
│   │   ├── AboutSection.jsx            # About + achievements card
│   │   ├── CertsDetailModal.jsx        # Certificate viewer modal (OSPAN & OPN)
│   │   ├── ChatLauncher.jsx            # Floating button to open chat
│   │   ├── ChatWidget.jsx              # Terminal-style AI chat widget
│   │   ├── Cursor.jsx                  # Custom cursor
│   │   ├── Footer.jsx
│   │   ├── GitHubStats.jsx             # GitHub activity stats
│   │   ├── HeroSection.jsx
│   │   ├── Magnetic.jsx                # Magnetic hover effect wrapper
│   │   ├── MarqueeBanner.jsx           # Scrolling marquee banner
│   │   ├── Navbar.jsx
│   │   ├── NoiseOverlay.jsx            # Film grain / noise texture overlay
│   │   ├── Preloader.jsx               # Page preloader animation
│   │   ├── ProfessionalExperience.jsx
│   │   ├── ProjectGallery.jsx          # Project cards grid
│   │   ├── TechnicalCapabilities.jsx
│   │   └── TechStack.jsx
│   │
│   ├── data/
│   │   ├── portfolioData.js            # Profile, experience, techStack, achievements
│   │   ├── projectDetailsData.js       # Per-project: features, stack, impact, links
│   │   ├── projectMeta.js              # Project metadata for routing & gallery
│   │   └── sectionRegistry.js          # Section labels used by AI context & nav
│   │
│   ├── hooks/
│   │   ├── useLenis.js                 # Lenis smooth scroll setup
│   │   └── useScrollToGallery.js       # Scroll-to-project utility
│   │
│   ├── pages/
│   │   └── Home.jsx                    # Main page, composes all sections
│   │
│   ├── projectDetails/                 # Individual project case study pages
│   │   ├── AsrimCell-Detail.jsx
│   │   ├── Awwwards-Detail.jsx
│   │   ├── FizzyGutsy-Detail.jsx
│   │   ├── MacLandingPage-Detail.jsx
│   │   ├── Nodebase-Detail.jsx
│   │   ├── Polaid-Detail.jsx
│   │   ├── Productify-Detail.jsx
│   │   ├── TodoApps-Detail.jsx
│   │   └── projectRegistry.js          # Maps slugs to detail components
│   │
│   ├── services/
│   │   └── aiContext.js                # System prompt generator + Gemini streaming client
│   │
│   ├── App.jsx                         # Router setup + ScrollToTop logic
│   ├── index.css                       # Global styles
│   └── index.js                        # React entry point
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── .env                                # VITE_GEMINI_API_KEY=...
```

---

## ⚙️ Setup

### Environment Variables

Buat file `.env` di root project:

```env
VITE_GEMINI_API_KEY=.....
```

Dapetin API key di [aistudio.google.com/apikey](https://aistudio.google.com/apikey).

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🤖 AI Chat Assistant

Portfolio ini dilengkapi terminal-style chat widget yang ditenagai **Google Gemini**. AI berperan sebagai Karim sendiri dan hanya menjawab pertanyaan seputar portofolio — proyek, skill, pengalaman, dan pencapaian.

Konfigurasi ada di `src/services/aiContext.js` yang berisi:
- System prompt generator (`generateSystemPrompt`)
- Scoped context builder (`buildScopedContext`)
- Gemini API streaming client (`streamGemini`)

---

## 📜 License

MIT — feel free to use as inspiration, but please don't copy directly.