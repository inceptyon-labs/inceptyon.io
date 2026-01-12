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

## Deployment

### Cloudflare Pages (Live)

This project is **currently deployed to Cloudflare Pages**.

Visit: **https://inceptyon.io**

To deploy your own fork to Cloudflare Pages:
1. Push code to GitHub (repo is public)
2. Connect repo to Cloudflare Pages in [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Build command: `npm run build`
4. Output directory: `dist`

### Docker (Legacy)

Docker configuration is available for local development or self-hosting but is no longer actively maintained. If you need Docker, the old setup is in `Dockerfile` and `docker-compose.yml`.

## Project Structure

```
inceptyon-web/
├── public/
│   ├── favicon.svg              # Custom favicon
│   ├── robots.txt               # SEO optimization
│   └── sitemap.xml              # Sitemap for crawlers
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
├── index.html                   # HTML template with OpenGraph SEO
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── CLAUDE.md                    # Development guidelines
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
- **SEO Ready**: OpenGraph, Twitter Card meta tags, structured data, sitemap, robots.txt
- **Responsive**: Mobile-first design, works on all devices
- **Performance**: Optimized with Vite, global CDN caching via Cloudflare
- **Security**: HTTPS everywhere, security headers configured

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

## Deploy Your Own

Choose your preferred hosting platform:

### Cloudflare Pages (Recommended)
1. Fork this repo on GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Connect your forked repo
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy!

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

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

- **Bundle Size**: ~200 KB (gzipped)
- **Initial Load**: < 2s on 4G
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **CDN**: Global coverage via Cloudflare

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
- Check [CLAUDE.md](./CLAUDE.md) for development guidelines
- Email: hello@inceptyon.io
