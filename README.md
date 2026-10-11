# Sharugesh T — Developer Portfolio

A premium, immersive 3D animated personal portfolio built with React, TypeScript, Three.js, and Tailwind CSS.

## Features

- **Cinematic 3D Hero** — Animated holographic avatar with particle field and network lines, rendered with React Three Fiber. Includes a non-3D fallback for mobile and reduced-motion users.
- **Full Portfolio Sections** — Hero, About, Skills, Projects (with case study modals), Cybersecurity Lab, Achievements timeline, Education & Certifications, and Contact form.
- **Cybersecurity Aesthetic** — Deep black/charcoal backgrounds with electric blue, violet, and cyan accents. Glassmorphism, grid patterns, and holographic interface elements.
- **Responsive Design** — Optimized for desktop, tablet, and mobile with touch-friendly navigation.
- **Accessibility** — Semantic HTML, keyboard navigation, reduced-motion support, proper form labels, and readable contrast.
- **Data-Driven** — All portfolio content stored in `src/data/portfolio.ts` for easy updates.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- Motion (Framer Motion)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run typecheck # Type checking
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   ├── three/           # 3D scene components
│   └── ui/              # Reusable UI primitives
├── data/
│   └── portfolio.ts     # All portfolio content (edit this to update)
├── hooks/               # Custom React hooks
├── types/               # TypeScript interfaces
└── App.tsx
```

## Customization

All personal information, projects, skills, achievements, and certifications are defined in `src/data/portfolio.ts`. Edit this single file to update the entire website.

## Deployment

The build output in `dist/` can be deployed to Vercel, Netlify, or any static hosting provider.

```bash
npm run build
# Deploy the dist/ folder
```

## License

Personal portfolio for Sharugesh T. All rights reserved.
