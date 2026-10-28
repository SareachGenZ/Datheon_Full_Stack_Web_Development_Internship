# Personal Developer Portfolio & Project Showcase

**Program:** Datheon Full Stack Web Development Internship  
**Project:** Personal Developer Portfolio & Project Showcase  
**Repository Name:** Datheon_Full_Stack_Web_Development_Internship  
**Technology Stack:** HTML5, Tailwind CSS v3, Vanilla JavaScript (ES6+) — Zero Runtime Dependencies  
**Accessibility Target:** WCAG 2.2 Level AA Compliant  
**Target Hosting:** Vercel (Primary) / GitHub Pages / Netlify  
**Live Production (Vercel):** https://datheon-portfolio-sareach.vercel.app/  
**Live Production (GitHub Pages):** https://sareachgenz.github.io/Datheon_Full_Stack_Web_Development_Internship/  

---

## Overview

A modern, responsive, and accessible single-page developer portfolio website engineered to showcase technical capabilities, completed software projects, credentials, and professional contact channels.

Developed as a core graduation milestone for the **Datheon Full Stack Web Development Internship**, this project adheres strictly to web standards, native browser capabilities, high-performance practices, and inclusive design principles without relying on heavy external frameworks or build systems.

---

## Key Features

### 1. Semantic Structure & Accessibility (WCAG 2.2 AA)
- **Native HTML5 Landmarks:** Structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` for assistive technologies.
- **Heading Hierarchy:** Strictly sequential headings (`h1` through `h4`) with zero skipped levels.
- **Keyboard Navigation:** Includes an accessible skip-to-content link (`.skip-link`), visible `:focus-visible` focus indicators with outline offsets and focus rings, and programmatic focus routing upon section navigation.
- **High-Contrast Palette:** Mathematical contrast ratios exceeding 17:1 for body text and 5.67:1 to 9.07:1 for interactive controls in both dark and light modes.
- **Motion Sensitivity:** Respects `prefers-reduced-motion` across CSS transitions and JavaScript scrolling logic.

### 2. Design System & Dynamic Theming
- **CSS Custom Properties:** Centralized design tokens for colors, typography, spacing, shadows, and layout containers.
- **Light & Dark Themes:** Smooth theme toggle supporting OS preferences (`prefers-color-scheme`) with persistent `localStorage` synchronization.
- **Touch-Friendly Controls:** All buttons, toggles, and interactive links meet or exceed the 44×44px minimum touch target recommendation.
- **Clean Modern Aesthetics:** Subtle obsidian canvas with ambient glow in dark theme, crisp zinc surfaces in light theme, and live availability badge with pulsing indicator.

### 3. Responsive Layout
- **Multi-Device Adaptability:** Engineered across 4 key breakpoints (1024px desktop, 868px tablet, 480px mobile, 340px narrow screens).
- **Horizontal Overflow Prevention:** Strict container box-sizing and overflow control ensuring zero unwanted horizontal scrollbars.
- **Mobile Navigation Drawer:** Accessible slide-out menu with outside-click dismissal, auto-close on link selection, and `Escape` key support.

### 4. Performance & Search Optimization
- **Zero Dependencies:** Pure vanilla stack with no node modules, no bundlers, and no external CDN dependencies.
- **Lightweight Payload:** Total initial site bundle is **~64 KB**, delivering near-instant load times.
- **SEO & Social Sharing:** Fully configured Open Graph, Twitter Cards, `<meta name="description">`, `<meta name="color-scheme" content="light dark">`, `robots.txt`, and `sitemap.xml`.

---

## Project Structure

```text
Portfolio/
├── index.html              # Main HTML5 entry point and semantic structure
├── package.json            # Node.js build configuration & Tailwind dependencies
├── tailwind.config.js      # Custom theme tokens & design system configuration
├── README.md               # Comprehensive project documentation and deployment guide
├── .gitignore              # Git ignore configuration
├── robots.txt              # Search engine crawler permissions
├── sitemap.xml             # XML sitemap configuration
│
├── src/
│   └── input.css           # Tailwind source with semantic tokens and custom layers
│
├── assets/
│   ├── icons/              # Favicon and UI graphics
│   │   └── favicon.svg     # Scalable vector favicon
│   ├── images/             # Vector placeholders for profile and project screenshots
│   │   ├── profile-placeholder.svg
│   │   └── project-placeholder.svg
│   └── documents/          # Verified downloadable credentials
│       └── resume-placeholder.pdf
│
├── css/
│   └── style.css           # Compiled, minified Tailwind CSS output (~28 KB)
│
├── js/
│   └── main.js             # Vanilla JS: theme management, mobile drawer, smooth scroll, scrollspy
│
└── Docs/                   # Project documentation and specifications
    ├── Project-Proposal.md # Project scope, objectives, and deliverables
    ├── PRD.md              # Product requirements, user stories, and acceptance criteria
    ├── Design.md           # Visual design tokens, component specifications, and accessibility rules
    ├── Plan.md             # Architecture, implementation roadmap, and testing strategy
    └── Task.md             # Actionable phased task checklist
```

---

## Page Sections Breakdown

1. **Navigation Bar (`#header`):** Brand logo, desktop navigation links, theme toggle (Sun/Moon), and mobile drawer button.
2. **Hero Section (`#hero`):** Live availability badge, personal greeting, developer headline, introductory summary, primary CTA (*View My Projects*), secondary CTA (*Download Resume*), social profile links, and profile image.
3. **About Me (`#about`):** Professional background, engineering philosophy, and three highlight cards (*Focus Areas*, *Development Values*, *Current Objective*) with SVG icon containers.
4. **Technical Skills (`#skills`):** Categorized skill badges covering Frontend Development, Languages & Fundamentals, Tools & Platforms, and Standards & Best Practices.
5. **Featured Projects (`#projects`):** Project showcase cards with 16:9 preview images, technology tags, status indicators (*Active Project*, *Planned Concept*), source code links, and live demo anchors.
6. **Resume & Qualifications (`#resume`):** Academic education details, Datheon internship experience arranged in a connected timeline track, and a dedicated resume download card.
7. **Contact (`#contact`):** Direct communication cards for Email (`mailto:`), GitHub profile, and LinkedIn networking.
8. **Footer (`#footer`):** Copyright notice, internship attribution, auxiliary navigation links, and an accessible *Back to Top* button.

---

## Local Development & Testing

The pre-compiled CSS (`css/style.css`) is checked into the repository, allowing zero-setup local preview or fast deployment to any static host. If modifying styles, Tailwind CSS can be recompiled or watched via npm scripts.

### Prerequisites
- Modern web browser: Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.
- Node.js (v18+ recommended for compiling Tailwind CSS).

### Tailwind CSS Compilation
```bash
# Install dependencies
npm install

# Build minified CSS for production
npm run build:css

# Watch for real-time CSS changes during development
npm run watch:css
```

### Previewing the Website
Open a terminal in the project root directory and run any static server:
```bash
# Option 1: Python 3
python -m http.server 8000

# Option 2: Node.js npx serve
npx serve .
```
Then visit: `http://localhost:8000` or `http://localhost:3000`

### Running Code Quality & Syntax Audits
- **JavaScript Syntax Verification:**
  ```bash
  npm test
  # or: node --check js/main.js
  ```
- **Automated Quality Checks:**
  Run the automated Node.js QA test suites to verify link targets, asset paths, WCAG contrast ratios, and responsive CSS rules.

---

## Deployment Guide

### Option A: GitHub Pages (Recommended)
1. Push this repository to your GitHub account under the repository name:
   `Datheon_Full_Stack_Web_Development_Internship`
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages** (under Code and automation in the sidebar).
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch.
   - **Branch:** `master` (or `main`) / `(root)`.
5. Click **Save**.
6. Wait 1–2 minutes; your portfolio will be published at:
   `https://sareachgenz.github.io/Datheon_Full_Stack_Web_Development_Internship/`

### Option B: Netlify
1. Connect your GitHub repository to Netlify, or drag-and-drop the project folder to the Netlify dashboard.
2. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (root)
3. Click **Deploy Site**.

### Option C: Vercel
1. Import your GitHub repository into Vercel.
2. Framework Preset: **Other**.
3. Root Directory: `./`.
4. Click **Deploy**.

---

## Pre-Release Content Customization Checklist

Before publishing to production, update the clearly marked placeholder values with your authentic personal details:

- [ ] **Name & Title:** Replace `[Your Name]` and `[Your Professional Headline]` in [`index.html`](index.html) and [`README.md`](README.md).
- [ ] **Profile Picture:** Replace `assets/images/profile-placeholder.svg` with your actual headshot (`.jpg`, `.png`, or `.webp`).
- [ ] **Social & Contact Links:**
  - GitHub Profile verified: `https://github.com/SareachGenZ`
  - Replace `https://linkedin.com/in/[Your-LinkedIn]` with your LinkedIn URL.
  - Replace `mailto:[Your-Email]` with your active email address.
- [ ] **Projects:** Update project titles, descriptions, screenshots, and live demo links to reflect your own software accomplishments.
- [ ] **Resume:** Replace `assets/documents/resume-placeholder.pdf` with your updated professional resume PDF.
- [ ] **SEO & Domain Configuration:**
  - Verify `sitemap.xml` with your published production URL.
  - Verify the canonical link tag in [`index.html`](index.html).

---

## Development Principles & Rules

1. **No Unapproved Frameworks:** Strict adherence to pure HTML5, CSS3, and Vanilla JavaScript.
2. **Accessibility First:** Prioritize screen-reader compatibility, keyboard access, and high contrast.
3. **Data Integrity:** Never fabricate career credentials, metrics, or live URLs.

---

## License & Attribution

Developed as part of the **Datheon Full Stack Web Development Internship** (October 2026).  
All rights reserved &copy; 2026 [Your Name].
