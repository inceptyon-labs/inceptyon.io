# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains **Inceptyon Labs LLC** projects. The main project is `inceptyon-web/`, a modern single-page marketing website built with React 18, Vite 5.4, Tailwind CSS 3.4, and Framer Motion 11.15.

## Development Commands

### Local Development

```bash
cd inceptyon-web
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:3000
npm run build           # Build for production (outputs to dist/)
npm run preview         # Preview production build
```

### Docker Commands

```bash
cd inceptyon-web
npm run docker:build    # Build Docker image
npm run docker:run      # Run container on port 8080
docker-compose up -d    # Start with compose (recommended for Unraid)
docker-compose logs -f  # View logs
docker-compose down     # Stop container
```

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
- Dev server runs on port 3000 with auto-open
- Uses `@vitejs/plugin-react` for Fast Refresh
- Production builds to `dist/` with automatic optimization

**Docker** (multi-stage build):
1. Node build stage: `npm install` + `npm run build`
2. Nginx production stage: serves static files from `/usr/share/nginx/html`
3. Custom `nginx.conf` with gzip, caching, SPA fallback routing, security headers

## Deployment Targets

### Primary: Unraid Docker
- Default port mapping: `8080:80`
- Health check endpoint: `/health`
- Reverse proxy ready (Nginx Proxy Manager/Traefik labels available in DOCKER-DEPLOYMENT.md)
- Expected resources: 20-50 MB RAM, <1% CPU idle

### Alternative: Cloud Platforms
- **Vercel/Netlify**: Build command `npm run build`, output dir `dist/`
- **Cloudflare Pages**: Same build settings

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

## Docker Deployment Details

See **DOCKER-DEPLOYMENT.md** for comprehensive Unraid setup including:
- 3 deployment methods (Compose Manager, Manual Template, Custom XML)
- Reverse proxy configuration
- Health checks and monitoring
- Troubleshooting guide
- Security best practices
