# Personal Developer Portfolio & Project Showcase

**Program:** Datheon Full Stack Web Development Internship  
**Project:** Personal Developer Portfolio & Project Showcase  
**Repository Name:** `Datheon_Full_Stack_Web_Development_Internship`  
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+)  
**Target Hosting:** GitHub Pages / Netlify / Vercel  

---

## Overview

A responsive, accessible, single-page developer portfolio website built to showcase technical skills, completed projects, curriculum vitae/resume, and contact channels. Developed as a core milestone for the Datheon Full Stack Web Development Internship.

## Key Features

- **Semantic Structure:** Native HTML5 landmark elements and accessible heading hierarchy.
- **Design Tokens & Themes:** Fully responsive design system supporting light and dark themes with persistent user preferences.
- **Mobile-First Layout:** Fluid layouts engineered for viewports ranging from 320px to 1920px+ without horizontal overflow.
- **Vanilla JavaScript Interactions:** Accessible mobile navigation drawer, theme toggle, and smooth scrolling.
- **Performance & Accessibility:** Zero heavy dependencies or frameworks, targeting WCAG 2.2 Level AA compliance.

## Project Structure

```text
Portfolio/
├── index.html              # Main HTML entry point
├── README.md               # Project documentation and deployment guide
├── .gitignore              # Git ignore rules
│
├── assets/
│   ├── icons/              # Favicon and UI icons
│   │   └── favicon.svg
│   ├── images/             # Profile photos and project showcase graphics
│   │   ├── profile-placeholder.svg
│   │   └── project-placeholder.svg
│   └── documents/          # Downloadable assets (Resume PDF)
│       └── resume-placeholder.pdf
│
├── css/
│   └── style.css           # Design tokens, reset, typography, and base layout
│
├── js/
│   └── main.js             # Core Vanilla JavaScript entry point
│
└── Docs/                   # Architectural specifications and project planning
    ├── Project-Proposal.md # Project proposal and scope boundaries
    ├── PRD.md              # Product requirements document brief
    ├── Design.md           # Visual design system brief
    ├── Plan.md             # Implementation roadmap brief
    └── Task.md             # Actionable task checklist
```

## Getting Started Locally

This project uses standard web technologies with **zero build steps or package managers**.

### Prerequisites
- A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- Python 3 (recommended for local static serving) or any static HTTP file server.

### Running the Project
1. Clone or navigate to the repository:
   ```bash
   cd "d:\Year4\S2\Build Own Project\Datheon Intern\Portfolio"
   ```
2. Start a local static HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```

## Development Principles & Guidelines

1. **No External Frameworks:** Do not introduce React, Vue, Angular, jQuery, Tailwind, or Bootstrap. All styling is pure CSS3 and all logic is Vanilla JavaScript.
2. **Accessibility First:** Maintain semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), visible `:focus-visible` styles, and keyboard accessibility.
3. **Data Integrity:** Do not invent personal details, credentials, or project URLs. Use labeled placeholders until authentic assets are supplied.

---

## License & Credits

Developed as part of the Datheon Full Stack Web Development Internship. All rights reserved &copy; 2026.
