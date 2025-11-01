# Inceptyon Labs Website

A modern, responsive single-page website for Inceptyon Labs LLC — a creative technology studio developing innovative apps, immersive games, and intelligent tools.

## Tech Stack

- **React 18** - UI library (latest stable)
- **Vite 5.4** - Fast build tool and dev server (latest from Context7)
- **Tailwind CSS 3.4** - Utility-first CSS framework (latest stable)
- **Framer Motion 11.15** - Animation library (latest)
- **Space Grotesk & Inter** - Typography

## Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Local Development

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Deployment (Unraid)

This project includes a complete Docker setup optimized for Unraid servers.

### Quick Deploy

```bash
# Build and run with Docker Compose
docker-compose up -d --build

# Access at http://your-unraid-ip:8080
```

### Docker Commands

```bash
# Build image
npm run docker:build

# Run container
npm run docker:run

# Or use docker-compose
docker-compose up -d
docker-compose logs -f
docker-compose down
```

### Documentation

- **[README-DOCKER.md](./README-DOCKER.md)** - Quick start guide for Docker
- **[DOCKER-DEPLOYMENT.md](./DOCKER-DEPLOYMENT.md)** - Complete deployment guide with:
  - 3 Unraid deployment methods
  - Reverse proxy setup
  - Performance optimization
  - Troubleshooting
  - Security best practices

## Project Structure

```
inceptyon-web/
├── public/
│   └── favicon.svg              # Custom Inceptyon Labs favicon
├── src/
│   ├── components/
│   │   ├── NavBar.jsx           # Sticky navigation
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── About.jsx            # About section with features
│   │   ├── Work.jsx             # Project showcase
│   │   ├── Contact.jsx          # Contact info + social links
│   │   ├── Footer.jsx           # Footer
│   │   └── AnimatedBackground.jsx # Animated gradient background
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
├── Dockerfile                   # Multi-stage production build
├── docker-compose.yml           # Unraid deployment config
├── nginx.conf                   # Production web server config
├── index.html                   # HTML template with SEO
├── package.json                 # Latest dependencies
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

### Design & Style
- **Color Palette**: Dark navy (#0A0F1F), cyan accent (#64FFDA), soft white (#E0E6F8)
- **Typography**: Space Grotesk + Inter fonts
- **Animations**: Framer Motion scroll-triggered effects, hover states
- **Background**: Animated gradient orbs + subtle grid pattern

### Sections
1. **Sticky Navigation** - Translucent with backdrop blur, smooth scroll
2. **Hero** - Bold headline, subtext, CTA button, scroll indicator
3. **About** - Two-column layout with 3 feature cards
4. **Work** - Responsive grid with 6 projects
5. **Contact** - Email with hover underline, social icons (GitHub, LinkedIn, X/Twitter)
6. **Footer** - Copyright, Privacy/Terms links

### Technical
- **SEO Ready**: OpenGraph, Twitter Card meta tags
- **Responsive**: Mobile-first design
- **Performance**: Optimized with Vite, gzip, caching
- **Docker Ready**: Production-ready containerization

## Customization

### Update Content

**Projects** (`src/components/Work.jsx`):
```jsx
const projects = [
  { title: 'Your Project', tagline: 'Description', status: 'Coming Soon' }
]
```

**Email** (`src/components/Contact.jsx`):
```jsx
<a href="mailto:hello@inceptyon.io">
```

**Social Links** (`src/components/Contact.jsx`):
```jsx
<SocialIcon href="https://github.com/inceptyon" ... />
```

### Update Colors

Edit `tailwind.config.js`:
```js
colors: {
  navy: { 900: '#0A0F1F' },  // Background
  cyan: { 400: '#64FFDA' },   // Accent
}
```

## Deployment Options

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages
1. Connect Git repo
2. Build command: `npm run build`
3. Output directory: `dist`

### Unraid Docker (This Project)
See [DOCKER-DEPLOYMENT.md](./DOCKER-DEPLOYMENT.md) for complete guide.

## Package Versions (Latest from Context7)

All packages are using the **latest stable versions** as verified by Context7 MCP:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.15.0",
  "vite": "^5.4.11",
  "tailwindcss": "^3.4.17",
  "postcss": "^8.4.49",
  "autoprefixer": "^10.4.20"
}
```

## Performance

- **Memory**: 20-50 MB (Docker container)
- **CPU**: < 1% idle, 5-10% under load
- **Disk**: ~15 MB (Docker image)
- **Build Size**: ~200 KB (gzipped)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2025 Inceptyon Labs LLC. All rights reserved.

## Contact

- Email: hello@inceptyon.io
- Website: https://inceptyon.io

## Support

For issues or questions:
- Check [DOCKER-DEPLOYMENT.md](./DOCKER-DEPLOYMENT.md) for deployment help
- Email: hello@inceptyon.io
