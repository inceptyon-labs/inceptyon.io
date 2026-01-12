# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the **Inceptyon Labs LLC** marketing website — a modern, responsive single-page application built with React 19, Vite 7, Tailwind CSS 3, and Framer Motion 12. Currently deployed to Cloudflare Pages at https://inceptyon.io.

## Development Commands

### Local Development

```bash
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:5173
npm run build           # Build for production (outputs to dist/)
npm run preview         # Preview production build
```

**Note**: Docker commands (`npm run docker:build`, `npm run docker:run`) are available but no longer actively maintained. Use Cloudflare Pages for deployment.

## Architecture

### Single-Page Application Structure

The website is a classic React SPA with a simple, flat component hierarchy:

- **App.jsx** (`src/App.jsx`) - Root component that composes all sections sequentially
- **Components** (`src/components/`) - Self-contained section components:
  - `AnimatedBackground.jsx` - Canvas-based animated gradient orbs with grid overlay
  - `NavBar.jsx` - Sticky navigation with smooth scroll to sections
  - `Hero.jsx` - Landing section with headline, CTA, scroll indicator
  - `About.jsx` - Two-column layout with feature cards
  - `Work.jsx` - Project showcase grid with status badges
  - `Contact.jsx` - Email link and social media icons
  - `Footer.jsx` - Copyright and legal links

**Key Pattern**: Each component is a full-height section (`<section id="...">`). Navigation uses anchor links with smooth scrolling. No routing library needed.

### Styling System

**Tailwind Configuration** (`tailwind.config.js`):
- Custom color palette: `navy-{900,800,700}`, `cyan-{400,500}`, `gray-{100,200,300}`
- Custom fonts: Space Grotesk (headings), Inter (body)
- Extended backdrop blur utilities

**Global Styles** (`src/index.css`):
- Tailwind base imports
- Custom gradient classes (`.text-gradient`, `.bg-gradient`)
- Font face declarations for Space Grotesk and Inter

### Animation Strategy

Uses **Framer Motion** exclusively for animations:
- `useInView` hook triggers scroll-based animations (once only, with margin offset)
- Stagger delays on lists (e.g., project cards use `delay={0.1 * index}`)
- Hover states use `whileHover` (e.g., `{ y: -10 }` for card lift)
- All animations are performance-optimized (GPU-accelerated transforms)

### Content Management

**Projects** are defined as a simple array in `Work.jsx:51-82`:
```jsx
const projects = [
  { title: 'Name', tagline: 'Description', status: 'Coming Soon' | 'In Development' | 'Available' }
]
```

Status badges auto-style based on status value (see `statusColors` in `Work.jsx:9-13`).

### Build Configuration

**Vite** (`vite.config.js`):
- Dev server runs on port 5173 with auto-open
- Uses `@vitejs/plugin-react` for Fast Refresh
- Production builds to `dist/` with automatic optimization
- Configured for SPA with proper asset handling

## Deployment

### Primary: Cloudflare Pages (Current)
- **Live site**: https://inceptyon.io
- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **Auto-deployed** on push to main branch
- Global CDN coverage with automatic HTTPS

### Alternative: Other Cloud Platforms
- **Vercel**: Build command `npm run build`, output dir `dist/`
- **Netlify**: Build command `npm run build`, output dir `dist/`
- **Docker** (legacy): `npm run docker:build` && `npm run docker:run` (unmaintained)

## Important Notes

- **No tests configured** - Add test framework if needed
- **No linting configured** - Add ESLint if code quality checks needed
- **No TypeScript** - Pure JavaScript with JSX
- **No backend** - Static site only, no API routes
- **Contact email**: `hello@inceptyon.io` (hardcoded in Contact.jsx)
- **Social links**: GitHub/LinkedIn/X in Contact.jsx (update URLs there)
- **Favicon**: Custom SVG in `public/favicon.svg`

## Making Changes

### Adding New Projects
Edit `src/components/Work.jsx`, add to `projects` array (line 51)

### Changing Colors
Edit `tailwind.config.js` color definitions, then components will inherit

### Updating Content
- Hero text: `src/components/Hero.jsx`
- About features: `src/components/About.jsx`
- Contact info: `src/components/Contact.jsx`

### Modifying Animations
All animations use Framer Motion. Key props:
- `initial` - Starting state
- `animate` - End state (triggered by `isInView`)
- `transition` - Duration, delay, easing
- `whileHover` - Interactive state

## Package Versions

All dependencies are kept up-to-date:
- React 19.2.3 (latest)
- Vite 7.3.1 (latest)
- Tailwind CSS 3.4.19 (latest stable)
- Framer Motion 12.25.0 (latest)

Run `npm outdated` to check for updates.
