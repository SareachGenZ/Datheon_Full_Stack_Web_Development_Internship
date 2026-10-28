# Task: Generate Design.md for My Developer Portfolio Project

Act as a senior UI/UX designer, frontend architect, and software design documentation specialist.

Your task is to analyze my existing project documentation and generate one complete, professional, implementation-ready `Design.md` file for my **Personal Developer Portfolio & Project Showcase**.

## 1. Read Existing Documentation First

Before writing anything, read and analyze these files:

- `PROJECT_PROPOSAL.md`
- `PRD.md`
- The original brainstorming document, if available

Use these documents as the source of truth.

Ensure that `Design.md` follows the project goals, scope, functional requirements, nonfunctional requirements, and acceptance criteria defined in the existing documentation.

If requirements conflict, identify the conflict instead of silently inventing a solution.

If information about my personal identity, profile, skills, projects, resume, or contact details is missing, use clearly labeled placeholders. Never invent personal information or achievements.

## 2. Project Overview

The project is a professional, responsive developer portfolio website that showcases my background, technical skills, projects, resume, and contact information.

The planned technology stack is:

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub
- Static website hosting, such as Vercel, Netlify, or GitHub Pages

Keep the design appropriate for a modern frontend portfolio.

Do not introduce a frontend framework, backend, database, authentication system, or unnecessary dependency unless the existing documentation explicitly requires it.

**Important scope restrictions:**
- Do not add a blog.
- Do not add features that are outside the approved PRD.
- Do not assume personal content that has not been provided.
- Do not write application code in `Design.md`.
- Do not claim that any design or feature has already been implemented.

## 3. Generate the Following Sections

Create a complete `Design.md` containing the following sections.

### 1. Document Information
Include:
- Document title
- Project name
- Version
- Status
- Date
- Related documentation

### 2. Design Overview
Explain:
- The purpose of the design document
- The overall design direction
- The relationship between the design and `PRD.md`
- The intended user experience

### 3. Design Goals
Define the main design goals, such as:
- Professional presentation
- Clear visual hierarchy
- Easy navigation
- Strong project presentation
- Responsive layouts
- Readability and accessibility
- Consistent visual identity
- Fast and intuitive interactions

Keep the goals consistent with the PRD.

### 4. Design Principles
Specify principles for:
- Simplicity
- Consistency
- Accessibility
- Mobile-first responsiveness
- Content readability
- Clear calls to action
- Maintainability
- Performance

### 5. Target Users and Their Needs
Describe the target audience using the existing PRD.

Explain what visitors need to find and how the design helps them find it.

Do not invent unsupported audience requirements.

### 6. Information Architecture
Define the website structure and section order.

Include the relevant sections from the PRD, such as:

1. Navigation
2. Hero
3. About Me
4. Technical Skills
5. Featured Projects
6. Resume
7. Contact
8. Footer

Treat this as a proposed structure and adjust it only when the existing PRD requires a different arrangement.

The project is a single-page portfolio unless the approved requirements explicitly specify otherwise.

Include a simple text-based site structure diagram.

### 7. Page Layout and Section Design
Describe each section in detail.

For every section, include:
- Purpose
- Content
- Layout
- Main components
- Visual hierarchy
- User interactions
- Responsive behavior
- Accessibility considerations

Cover the navigation, hero, about, skills, projects, resume, contact, and footer sections.

Use placeholders for missing personal information.

### 8. Visual Design System

Define a coherent visual design system.

Include:

**Color palette**
- Primary color
- Secondary color
- Accent color
- Background colors
- Surface colors
- Primary and secondary text colors
- Border colors
- Success, warning, and error colors when necessary

Provide suggested HEX values and explain the intended use of each color.

Check that the palette can support both light and dark themes if theme switching is required by the PRD.

**Typography**
- Font-family recommendations
- Heading hierarchy
- Body text
- Navigation text
- Button text
- Line heights
- Font weights
- Responsive font sizing

**Spacing**
- Define a consistent spacing scale.

**Layout**
- Content maximum width
- Container behavior
- Section spacing
- Grid and column rules
- Alignment principles

**Borders and surfaces**
- Border radius
- Border styles
- Shadow usage
- Card surfaces
- Divider styles

Keep the design system practical to implement using plain CSS.

### 9. Design Tokens
Provide a table of proposed reusable design tokens.

Include tokens for:
- Colors
- Typography
- Spacing
- Container widths
- Border radius
- Shadows
- Transitions
- Z-index layers

Use CSS custom-property naming conventions, for example:

- `--color-primary`
- `--color-background`
- `--color-text`
- `--spacing-md`
- `--radius-md`
- `--container-width`
- `--transition-normal`

Keep the tokens consistent with the visual design system.

### 10. Component Design
Define reusable interface components, including those required by the PRD.

Potential components include:
- Header
- Navigation links
- Mobile navigation menu
- Theme toggle
- Primary and secondary buttons
- Section headings
- Skill items
- Project cards
- Technology badges
- Resume download button
- Contact links
- Footer links

For each component, specify:
- Purpose
- Structure
- Visual states
- Interactions
- Responsive behavior
- Accessibility requirements

Do not create components for features outside the approved scope.

### 11. Project Card Design
Specify the visual structure of project cards.

Cover relevant fields such as:
- Project title
- Project description
- Technology stack
- Project image or screenshot, when available
- Live demo link, when available
- Source code link, when available

Define hover, focus, and responsive behavior.

Use placeholders for projects and links that have not been supplied.

Do not fabricate project details.

### 12. Navigation and Interaction Design
Define the behavior of:
- Desktop navigation
- Mobile navigation
- Smooth scrolling
- Active navigation states, if required
- Theme switching
- Buttons and links
- Resume download
- Contact links

For each interaction, describe:
- Trigger
- Expected behavior
- Feedback
- Keyboard support
- Error or fallback behavior, when relevant

Follow the PRD and avoid adding unnecessary interactions.

### 13. Light and Dark Themes
If theme switching is required by the PRD, define:
- Light theme colors
- Dark theme colors
- Theme toggle behavior
- Contrast requirements
- Persistence behavior, if required
- Initial theme selection
- Behavior when JavaScript is unavailable, where applicable

Ensure that text, buttons, cards, borders, and focus indicators remain usable in both themes.

If a behavior is not specified in the PRD, label it as a design recommendation rather than an approved requirement.

### 14. Responsive Design
Define the responsive strategy for:
- Mobile phones
- Tablets
- Laptops
- Large desktop screens

Provide suggested breakpoints and explain how the layout changes at each breakpoint.

Cover:
- Navigation
- Typography
- Hero layout
- Skills layout
- Project grid
- Buttons
- Section spacing
- Images
- Footer

Use mobile-first CSS principles.

Avoid horizontal overflow and preserve content readability at narrow screen widths.

### 15. Accessibility Design
Specify the accessibility requirements relevant to the interface, including:
- Semantic HTML
- Heading hierarchy
- Keyboard navigation
- Visible focus indicators
- Color contrast
- Accessible names for controls
- Alternative text for meaningful images
- Reduced-motion preferences
- Mobile menu accessibility
- Theme toggle accessibility
- Appropriate form labels if a contact form is included in the PRD

Use WCAG 2.2 Level AA as the target where practical and applicable.

Do not claim compliance until the implementation has been tested.

### 16. Interaction States and Feedback
Define the visual states for relevant components:
- Default
- Hover
- Focus
- Active
- Disabled
- Loading, if applicable
- Error, if applicable

Specify which states are relevant to each component.

Ensure that keyboard users receive equivalent interaction feedback to mouse users.

### 17. Content and Asset Guidelines
Define guidelines for:
- Profile images
- Project screenshots
- Icons
- Fonts
- Resume files
- Social media icons
- Placeholder content

Explain the expected image formats, aspect ratios, sizing, and fallback behavior where relevant.

Do not require paid assets or unnecessary third-party services.

Do not create fake profile images, fake project screenshots, or fabricated credentials.

### 18. Motion and Animation
Define a restrained animation approach for:
- Navigation interactions
- Buttons
- Project cards
- Section transitions, if required

Specify duration and easing recommendations.

Respect the user's reduced-motion preferences.

Avoid unnecessary animation that harms performance or accessibility.

### 19. SEO and Sharing Design
Describe the design-related requirements for:
- Page title
- Meta description
- Heading hierarchy
- Semantic page structure
- Social sharing metadata, if required
- Favicon
- Image alternative text

Separate visual design decisions from implementation and content requirements.

Refer to `PRD.md` for the approved SEO scope.

### 20. Frontend Architecture Guidance
Describe how the design can be implemented using HTML5, CSS3, and Vanilla JavaScript.

Propose a practical separation of:
- HTML structure
- CSS reset and base styles
- Design tokens
- Layout styles
- Component styles
- Responsive styles
- Theme styles
- JavaScript interactions
- Static assets

Keep this section at the architectural level. Do not generate implementation code.

Ensure that the recommendations remain consistent with the existing repository structure, if one has already been defined.

### 21. Design-to-Requirement Mapping
Create a table mapping important design decisions to their corresponding PRD requirements.

Use the actual requirement IDs from `PRD.md` whenever available.

Include:
- Requirement ID
- Requirement summary
- Design decision
- Relevant section or component
- Validation method

Do not invent requirement IDs. If the PRD does not provide an ID, identify the requirement by its actual heading or label.

### 22. Design Validation Checklist
Create a practical checklist for reviewing the design before implementation.

Include:
- Visual consistency
- Content hierarchy
- Responsive behavior
- Navigation usability
- Theme consistency
- Accessibility
- Project card layout
- Button and link states
- Asset handling
- SEO-related structure
- Performance considerations

### 23. Open Design Questions
List unresolved design decisions that require my input.

For each question:
- Explain the decision needed.
- State the available options when appropriate.
- Provide a recommended default when reasonable.
- Mark whether the decision blocks implementation.

Do not block progress over minor decisions that can use sensible defaults.

### 24. Final Design Summary
Summarize:
- The intended visual direction
- The major design decisions
- The relationship between design and PRD
- The next steps before implementation

## 4. Design Quality Requirements

The generated `Design.md` must:

- Be complete and implementation-ready.
- Use clear Markdown headings and tables.
- Be specific enough for a developer to implement the design without guessing major decisions.
- Use consistent terminology throughout.
- Map design decisions to the existing PRD.
- Distinguish confirmed requirements from recommendations and assumptions.
- Avoid contradictory colors, spacing, breakpoints, components, or interaction rules.
- Keep the design achievable with HTML, CSS, and Vanilla JavaScript.
- Preserve the approved project scope.
- Avoid unnecessary frameworks, dependencies, and complex architecture.
- Use placeholders for missing personal information.
- Avoid duplicating the entire PRD.

## 5. Instructions Before Finalizing

Before producing the final file:

1. Review the proposal and PRD.
2. Extract the actual product requirements.
3. Identify the requirements that affect UI, layout, components, and interactions.
4. Create a consistent visual design system.
5. Define responsive and accessible component behavior.
6. Map major design decisions back to the PRD.
7. Check the document for missing sections and contradictions.
8. Identify unresolved questions without inventing answers.

## 6. Output Requirements

Generate exactly one complete Markdown document named:

`Design.md`

Output only the finished contents of `Design.md`.

Do not generate `Plan.md`, `Task.md`, `AGENT.md`, source code, or additional documents in this step.

Do not provide an explanation before or after the document.

The result must be ready to save as `Design.md` in the project repository.