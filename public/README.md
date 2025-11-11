# Public Website Files

This directory contains all public-facing pages for the Inceptyon Labs website, including INCEPTŸON App Store submission requirements.

## INCEPTŸON Legal Pages (App Store Required)

### ✅ privacy.html (18 KB)
**URL:** https://inceptyon.com/privacy.html
**Status:** REQUIRED for App Store submission

Complete COPPA-compliant privacy policy:
- Zero data collection statement
- Age-gated analytics for 13+ only
- GDPR/CCPA compliance
- Educational content sources

### ✅ support.html (21 KB)
**URL:** https://inceptyon.com/support.html
**Status:** REQUIRED for App Store submission

Comprehensive FAQ and troubleshooting:
- Getting started guide
- Prestige system explanation
- Offline progress FAQ
- Educational content info
- Accessibility features
- Common issues & fixes

### ✅ terms.html (17 KB)
**URL:** https://inceptyon.com/terms.html
**Status:** Optional but recommended

End User License Agreement:
- Terms of Use
- License grant & restrictions
- Intellectual property rights
- User conduct guidelines
- Liability limitations

### ✅ inceptyon.html (23 KB)
**URL:** https://inceptyon.com/inceptyon.html
**Status:** Marketing page

INCEPTŸON landing page:
- Hero section with game overview
- 4 Jovian moons detailed
- The Architect & Parker Protocol lore
- Gameplay features showcase
- AI companions introduction
- Saturn Directive teaser

## Assets

### Images
- `INCEPTYON.png` — Main game logo
- `INCEPTYON-image-only.png` — Icon without text
- `inceptyon-labs-logo-only.png` — Studio logo

### Other Projects
- `gchl.png` — GCHL project
- `gugo-duck.png` — Gugo Duck project
- `tesseract.png` — Tesseract project
- `whiskey.png` — Whiskey project
- `studio.png` — Studio image

## Before Deployment

**Update these placeholders in ALL legal pages:**
- `Tampa, Florida` → Your business address
- `[Your State/Country]` → e.g., "California, United States"
- `Hillsborough County, Florida` → e.g., "San Francisco County, California"

**Set up these email addresses:**
- support@inceptyon.com (general support)
- privacy@inceptyon.com (privacy inquiries)
- legal@inceptyon.com (legal inquiries)

**Update App Store links in inceptyon.html:**
- Replace `#` with actual App Store URL after submission

## Testing

To test pages locally:
1. Run development server: `npm run dev`
2. Or open HTML files directly in browser

All pages are:
- ✅ Responsive (mobile-friendly)
- ✅ Accessible (semantic HTML)
- ✅ SEO-optimized (meta tags)
- ✅ Fast-loading (inline CSS, no external dependencies)

## Deployment

These pages are static HTML and will be served directly from the `public/` folder.

When deploying to Cloudflare Pages or similar:
- All `.html` files will be accessible at root
- Example: `privacy.html` → `https://inceptyon.com/privacy.html`
- Or: `https://inceptyon.com/privacy` (if server auto-appends .html)

## Contact

For questions: support@inceptyon.com

---

**Last Updated:** November 11, 2025
**Project:** INCEPTŸON iOS App Store Submission
