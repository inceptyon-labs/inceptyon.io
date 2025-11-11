# INCEPTŸON Website Pages - Summary

**Created:** November 11, 2025
**Purpose:** App Store Connect submission requirements

---

## Files Created

All files have been created in the `public/` directory and will be accessible at your domain root.

### 1. Privacy Policy (REQUIRED)
**File:** `/public/privacy.html`
**URL:** `https://inceptyon.com/privacy` or `https://inceptyon.com/privacy.html`

**Purpose:** Required by Apple for App Store submission

**Content:**
- Complete COPPA-compliant privacy policy
- Zero data collection statement
- Age-gated analytics (Sentry, Posthog) for 13+ only
- GDPR/CCPA compliance sections
- Data retention policies
- Children's privacy protections
- Contact information

**Key Points:**
- ✅ TLDR section: "We don't collect your data"
- ✅ Detailed analytics opt-in explanation
- ✅ COPPA compliance for under-13
- ✅ Educational content sources (NASA/ESA)
- ✅ Legal compliance (GDPR, CCPA)

---

### 2. Support Page (REQUIRED)
**File:** `/public/support.html`
**URL:** `https://inceptyon.com/support` or `https://inceptyon.com/support.html`

**Purpose:** Required by Apple for App Store submission

**Content:**
- Comprehensive FAQ covering:
  - Getting Started (how to play)
  - Resources explanation
  - Moon unlock requirements
  - Prestige (Synthesis Protocol)
  - Offline progress
  - Educational content
  - Accessibility features
  - Troubleshooting (lag, crashes, save issues)
- System requirements
- Contact email: support@inceptyon.com

**Key Sections:**
- 🎮 Getting Started (7 detailed FAQs)
- ♻️ Prestige System (3 FAQs)
- 🌙 Offline Progress (2 FAQs)
- 📚 Educational Content (3 FAQs, classroom use)
- ⚙️ Settings & Accessibility (4 FAQs)
- 🐛 Troubleshooting (5 common issues)

---

### 3. Terms of Use (Optional but Recommended)
**File:** `/public/terms.html`
**URL:** `https://inceptyon.com/terms` or `https://inceptyon.com/terms.html`

**Purpose:** Legal protection, user agreement

**Content:**
- End User License Agreement (EULA)
- Acceptance of Terms
- Eligibility (ages 9+, parental consent for under-13)
- License grant and restrictions
- Intellectual property rights (trademarks)
- User conduct guidelines
- In-App Purchase terms (future feature)
- Data collection reference (links to Privacy Policy)
- Disclaimers & warranties
- Limitation of liability
- Indemnification
- Termination conditions
- Governing law (update with your state)
- Dispute resolution
- Contact information

**Key Points:**
- ✅ Age 9+ with parental consent for under-13
- ✅ Trademarks: INCEPTŸON, LPN Directive, The Parker Protocol, The Architect
- ✅ No current IAP (may be added in future)
- ✅ Educational content attribution (NASA/ESA)

---

### 4. INCEPTŸON Landing Page (Marketing)
**File:** `/public/inceptyon.html`
**URL:** `https://inceptyon.com/inceptyon` or `https://inceptyon.com/inceptyon.html`

**Purpose:** Marketing page showcasing the game

**Content:**
- Hero section with tagline and CTA buttons
- About The Architect (full lore explanation)
- 4 Moon Cards:
  - Europa (The Nursery)
  - Ganymede (The Conductor)
  - Callisto (The Extractor)
  - Io (The Forge)
- The Parker Protocol explanation (Quantum Xenogenesis)
- Gameplay features grid (8 features)
- AI Companions section (JSØN, A.M.Y., TΛYL0R-18)
- Saturn Directive teaser (Titan, Enceladus)
- Scientific accuracy section
- Performance specifications
- Download CTAs

**Design:**
- Dark/space theme with gradients
- Responsive design
- Beautiful card layouts for moons
- Quote boxes with lore
- Feature grid with icons
- CTA buttons throughout

---

## Required URLs for App Store Connect

When filling out App Store Connect metadata, use these URLs:

| Field | URL |
|-------|-----|
| **Privacy Policy URL** (REQUIRED) | `https://inceptyon.com/privacy.html` |
| **Support URL** (REQUIRED) | `https://inceptyon.com/support.html` |
| **Marketing URL** (Optional) | `https://inceptyon.com/inceptyon.html` |
| **Terms of Use URL** (Optional) | `https://inceptyon.com/terms.html` |

---

## Placeholder Values to Update

Before deploying, search and replace these placeholders:

### In All Files:
- `[Your Address]` → Your actual business address
- `[Your State/Country]` → e.g., "California, United States"
- `[Your County/State]` → e.g., "San Francisco County, California"

### Contact Emails (Already Set):
- ✅ `support@inceptyon.com` — General support
- ✅ `privacy@inceptyon.com` — Privacy inquiries
- ✅ `legal@inceptyon.com` — Legal inquiries (in terms.html)

**These emails should be set up before launch!**

---

## Deployment Checklist

### Before Deploying to Production:

- [ ] **Update placeholder addresses** in all HTML files
- [ ] **Set up email accounts:**
  - [ ] support@inceptyon.com
  - [ ] privacy@inceptyon.com
  - [ ] legal@inceptyon.com (optional)
- [ ] **Update App Store download links** in inceptyon.html (replace `#` with actual App Store URL)
- [ ] **Test all pages** locally:
  - [ ] Run: `npm run dev` (if using Vite)
  - [ ] Or: Open HTML files in browser directly
- [ ] **Verify all internal links work** (footer navigation)
- [ ] **Check mobile responsiveness** (all pages are mobile-friendly)
- [ ] **Validate HTML** (optional but recommended)
- [ ] **Deploy to production** (push to your hosting/Cloudflare Pages)
- [ ] **Verify URLs are live** before submitting to App Store

### After Deployment:

- [ ] Test all URLs from App Store Connect perspective:
  - [ ] Privacy Policy loads correctly
  - [ ] Support page loads correctly
  - [ ] Terms page loads correctly
  - [ ] Landing page loads correctly
- [ ] Verify emails are being received at support/privacy addresses
- [ ] Add URLs to App Store Connect metadata
- [ ] Submit for App Store review

---

## Design Notes

All pages feature:
- **Consistent Branding:**
  - Space Grotesk font for headings
  - Inter font for body text
  - LPN Directive color palette:
    - Europa Blue: #002A54
    - Ice Silver: #D8E4EC
    - Biolume Teal: #00C2A8
  - The Architect color palette:
    - Obsidian Black: #0A0A0F
    - Spectral Violet: #662EFF
    - Cyan Lumina: #00F0FF

- **Responsive Design:**
  - Mobile-first approach
  - Breakpoints at 768px
  - Readable on all devices

- **Accessibility:**
  - Semantic HTML
  - Clear heading hierarchy
  - High contrast ratios
  - Readable font sizes (16px+ base)

- **Navigation:**
  - Footer links on every page
  - Breadcrumb-style "Back" links
  - Consistent footer across all pages

---

## File Sizes

Approximate file sizes:
- `privacy.html` — ~25 KB
- `support.html` — ~22 KB
- `terms.html` — ~20 KB
- `inceptyon.html` — ~28 KB

**Total:** ~95 KB for all legal/marketing pages

---

## Contact Information

All pages link to:
- **Support Email:** support@inceptyon.com
- **Privacy Email:** privacy@inceptyon.com
- **Legal Email:** legal@inceptyon.com
- **Website:** inceptyon.com

**Set up these email addresses before launch!**

---

## Next Steps

1. **Review all HTML files** in `/public/` directory
2. **Update placeholder values** ([Your Address], etc.)
3. **Set up email addresses** (support@, privacy@, legal@)
4. **Test locally** (open HTML files in browser)
5. **Deploy to production** (push to Git, deploy to hosting)
6. **Verify URLs are live** (visit each URL in browser)
7. **Add URLs to App Store Connect** (during submission)

---

## Questions?

If you need to make changes:
- All files are standard HTML with inline CSS
- No build process required (static pages)
- Can be edited in any text editor
- Styles are in `<style>` tags in `<head>`

For major changes, contact: support@inceptyon.com

---

**Status:** ✅ All required pages created and ready for deployment

**Created by:** Claude Code (Anthropic)
**Date:** November 11, 2025
**Project:** INCEPTŸON iOS App Store Submission
