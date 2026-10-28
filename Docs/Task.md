# Task: Generate Task.md with a Complete Implementation Checklist

Act as a senior software project manager, technical lead, and frontend development engineer.

Your task is to read my existing project documentation and generate one complete, organized, actionable `Task.md` file for my **Personal Developer Portfolio & Project Showcase**.

The purpose of `Task.md` is to transform the approved project requirements, design, and implementation plan into a step-by-step checklist that I can follow until the website is implemented, tested, deployed, and reviewed.

**Important: This step is for task planning only. Do not implement the website yet.**

---

## 1. Read Existing Documentation

Before generating `Task.md`, read the following files:

- `PROJECT_PROPOSAL.md`
- `PRD.md`
- `Design.md`
- `Plan.md`
- The original brainstorming document, if available

Treat these documents as the source of truth.

Use each document for its intended purpose:

- `PROJECT_PROPOSAL.md`: project objectives, scope, and deliverables.
- `PRD.md`: functional requirements, nonfunctional requirements, user stories, and acceptance criteria.
- `Design.md`: visual design, page layout, components, interactions, and responsive behavior.
- `Plan.md`: technical architecture, implementation phases, dependencies, testing strategy, and deployment plan.

Ensure that every task aligns with the approved project scope.

If information is missing, record it as an assumption or an open question. Do not invent personal information, requirements, or completed work.

If the documents conflict, identify the conflict and recommend a resolution rather than silently changing the requirements.

---

## 2. Project Overview

The project is a professional, responsive developer portfolio website.

The expected sections include, when confirmed by the PRD:

1. Navigation
2. Hero
3. About Me
4. Technical Skills
5. Featured Projects
6. Resume
7. Contact
8. Footer

The planned technology stack is:

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- Static website hosting, such as Vercel, Netlify, or GitHub Pages

Follow the approved documentation if it specifies different technologies.

### Scope restrictions

- Do not add a blog.
- Do not introduce a backend, database, or authentication system unless explicitly required by the approved PRD.
- Do not add unnecessary frameworks, dependencies, or features.
- Do not invent personal details, projects, skills, qualifications, achievements, or contact information.
- Do not claim that tasks have been completed before they are actually verified.
- Do not write website source code in `Task.md`.
- Do not generate `AGENT.md` in this step.

---

## 3. Checklist Formatting Rules

Use standard Markdown task checkboxes throughout the document.

**Required formats:**

- Incomplete task: `- [ ]`
- Completed task: `- [x]`

Every actionable task must have a checkbox.

Use nested checklists when a task has smaller, independently verifiable steps.

Example:

```markdown
## Phase 1: Project Setup

- [ ] TASK-001: Inspect the existing repository.
  - [ ] Review the current file structure.
  - [ ] Identify existing source files.
  - [ ] Check the Git working tree.
  - [ ] Compare existing files with the approved documentation.
- [ ] TASK-002: Establish the required project structure.
  - [ ] Create only the necessary directories.
  - [ ] Confirm the locations of HTML, CSS, JavaScript, and assets.
```

Use unchecked boxes for all new tasks.

**Do not mark any task as completed merely because it appears in the plan or documentation.**

Use clear, consistent task IDs, such as:

- `TASK-001`
- `TASK-002`
- `TASK-003`

Every task ID must be unique.

Do not reuse task IDs for different tasks.

---

## 4. Required Structure of Task.md

Generate the following sections.

### Section 1: Document Information

Include:

- Document title
- Project name
- Version
- Status
- Date
- Related documentation

### Section 2: How to Use This Checklist

Explain:

- How to mark tasks as complete.
- How to use task IDs.
- How to follow task dependencies.
- How to validate completed work.
- How to handle blocked tasks.
- How to report defects.
- Why tasks must not be marked complete without verification.

Explain that a task should be marked `[x]` only after its acceptance criteria have been satisfied.

### Section 3: Project Overview and Completion Goals

Summarize the project and define the expected final result.

Include:
- Required website sections
- Approved technology stack
- Required interactions
- Responsive behavior
- Testing requirements
- Deployment requirements
- Documentation deliverables

Derive these items from the existing documentation.

### Section 4: Task Status Summary

Create a progress summary with these categories:

| Status | Meaning |
|---|---|
| Not Started | No work has been completed. |
| In Progress | Work has started but is not complete. |
| Blocked | Work cannot continue because of an unresolved dependency. |
| Completed | Work and acceptance criteria have been verified. |

Explain that checkboxes are the source of truth for tracking progress.

Do not invent completion percentages or report actual progress without evidence.

### Section 5: Phase 0 — Documentation and Repository Review

Create checklist tasks for:

- [x] Review `PROJECT_PROPOSAL.md`.
- [x] Review `PRD.md`.
- [x] Review `Design.md`.
- [x] Review `Plan.md`.
- [x] Review the existing repository.
- [x] Identify missing or conflicting requirements.
- [x] Confirm the approved project scope.
- [x] Record unresolved questions.
- [x] Identify personal content and assets that are still missing.

Include verification steps and dependencies.

Do not duplicate existing documentation unnecessarily.

### Section 6: Phase 1 — Project Setup

Create checklist tasks for:

- [x] Inspect the repository and Git status.
- [x] Confirm the repository structure.
- [x] Create missing project directories and files.
- [x] Establish the HTML entry point.
- [x] Establish CSS files.
- [x] Establish JavaScript files.
- [x] Establish asset directories.
- [x] Confirm local development works.
- [x] Confirm version control is functioning.

Do not recreate existing files unnecessarily.

Use the actual repository structure when it is available.

### Section 7: Phase 2 — Semantic HTML Structure

Create checklist tasks for implementing the approved page structure.

Cover the relevant sections:

- [x] Navigation
- [x] Hero
- [x] About Me
- [x] Technical Skills
- [x] Featured Projects
- [x] Resume
- [x] Contact
- [x] Footer

Also include tasks for:

- Semantic HTML elements
- Heading hierarchy
- Landmark regions
- Link structure
- Accessible names
- Initial page title and metadata

Only include sections required by the PRD.

### Section 8: Phase 3 — Visual Design Foundation

Create checklist tasks for:

- [x] CSS reset and base styles.
- [x] Design tokens.
- [x] Color palette.
- [x] Typography.
- [x] Spacing scale.
- [x] Layout containers.
- [x] Grid and flexbox patterns.
- [x] Buttons.
- [x] Links.
- [x] Cards.
- [x] Section headings.
- [x] Borders and shadows.
- [x] Focus states.
- [x] Consistent visual hierarchy.

Use the design system in `Design.md`.

Do not introduce a different visual style without justification.

### Section 9: Phase 4 — Page Sections and Components

Create separate checklist groups for each required section.

For example:

**Navigation**
- [ ] Implement the desktop navigation.
- [ ] Connect navigation links to the correct sections.
- [ ] Implement the mobile navigation if required.
- [ ] Add visible keyboard focus.
- [ ] Verify navigation behavior.

**Hero**
- [ ] Add approved introductory content.
- [ ] Add the primary call to action.
- [ ] Add secondary actions if specified.
- [ ] Verify responsive layout.

**About Me**
- [ ] Add verified biography content.
- [ ] Apply the approved section layout.
- [ ] Verify readability.

**Technical Skills**
- [ ] Add verified skills.
- [ ] Group skills according to the approved design.
- [ ] Verify layout at different screen widths.

**Featured Projects**
- [ ] Implement reusable project cards.
- [ ] Add verified project titles and descriptions.
- [ ] Add technology labels when appropriate.
- [ ] Add project images when available.
- [ ] Add verified demo links when available.
- [ ] Add verified source-code links when available.
- [ ] Verify card layout and link behavior.

**Resume**
- [ ] Add the resume action.
- [ ] Provide the approved resume file if available.
- [ ] Verify download or viewing behavior.
- [ ] Handle a missing resume appropriately.

**Contact**
- [ ] Add approved contact information.
- [ ] Add verified social links.
- [ ] Verify link destinations.
- [ ] Add a contact form only if explicitly required by the PRD.

**Footer**
- [ ] Implement the approved footer.
- [ ] Add required links.
- [ ] Verify responsive layout.

Adapt all these checklists to the actual requirements. Do not fabricate personal content.

### Section 10: Phase 5 — Responsive Design

Create tasks for:

- [ ] Mobile layout.
- [ ] Tablet layout.
- [ ] Desktop layout.
- [ ] Navigation responsiveness.
- [ ] Typography scaling.
- [ ] Section spacing.
- [ ] Project grid behavior.
- [ ] Image sizing.
- [ ] Button sizing and wrapping.
- [ ] Footer layout.
- [ ] Horizontal overflow checks.
- [ ] Touch-target usability.
- [ ] Testing at narrow viewport widths.

Use the breakpoints and layout behavior defined in `Design.md`.

### Section 11: Phase 6 — JavaScript Functionality

Create tasks for each interaction required by the PRD.

Potential tasks include:

- [ ] Mobile menu behavior.
- [ ] Smooth section navigation.
- [ ] Theme switching.
- [ ] Theme persistence, if required.
- [ ] Accessible menu state updates.
- [ ] Event handling.
- [ ] Error prevention.
- [ ] Keyboard interaction.
- [ ] Reduced-motion support where applicable.

Only include applicable features.

Avoid unnecessary JavaScript and third-party dependencies.

### Section 12: Phase 7 — Content and Asset Integration

Create checklist tasks for:

- [ ] Verified personal information.
- [ ] Profile image, if used.
- [ ] Verified technical skills.
- [ ] Verified project descriptions.
- [ ] Project screenshots, if available.
- [ ] Verified project demo URLs.
- [ ] Verified source-code URLs.
- [ ] Resume file.
- [ ] Contact information.
- [ ] Social media links.
- [ ] Favicon.
- [ ] Alternative text for meaningful images.
- [ ] Image optimization.
- [ ] Broken asset checks.
- [ ] Removal or replacement of temporary placeholders before release.

If information is unavailable, keep the corresponding task blocked or pending rather than inventing content.

Separate content-dependent tasks from tasks that can proceed without the missing information.

### Section 13: Phase 8 — Accessibility and SEO

Create checklist tasks for accessibility, including:

- [ ] Semantic HTML review.
- [ ] Heading hierarchy review.
- [ ] Keyboard navigation.
- [ ] Visible focus indicators.
- [ ] Color contrast checks.
- [ ] Accessible link and button names.
- [ ] Image alternative text.
- [ ] Mobile menu accessibility.
- [ ] Theme toggle accessibility.
- [ ] Reduced-motion behavior.
- [ ] Contact form accessibility, if applicable.

Create checklist tasks for SEO, including:

- [ ] Page title.
- [ ] Meta description.
- [ ] Heading structure.
- [ ] Favicon.
- [ ] Social sharing metadata, if required.
- [ ] Canonical URL, if appropriate.
- [ ] Robots configuration, if appropriate.
- [ ] Sitemap, if appropriate.
- [ ] Production URL verification.

Do not claim WCAG compliance or SEO success until the relevant checks have been performed.

### Section 14: Phase 9 — Functional and Quality Testing

Create a practical testing checklist.

Include:

**Functional tests**
- [ ] All navigation links work.
- [ ] All buttons behave as expected.
- [ ] Mobile menu works.
- [ ] Theme switching works, if required.
- [ ] Resume action works.
- [ ] Project links work.
- [ ] Contact links work.
- [ ] Social links work.

**Responsive tests**
- [ ] Mobile layout verified.
- [ ] Tablet layout verified.
- [ ] Desktop layout verified.
- [ ] No unintended horizontal overflow.
- [ ] Text remains readable.
- [ ] Cards and grids adapt correctly.

**Browser tests**
- [ ] Test in the main target browser.
- [ ] Test in other relevant modern browsers.
- [ ] Check console errors.
- [ ] Check missing assets.

**Performance tests**
- [ ] Optimize images.
- [ ] Check unnecessary dependencies.
- [ ] Check JavaScript errors.
- [ ] Run a performance audit.
- [ ] Review the audit findings.

**Regression tests**
- [ ] Recheck existing functionality after fixes.
- [ ] Verify fixes do not introduce new defects.

### Section 15: Phase 10 — GitHub and Repository Readiness

Create tasks for:

- [ ] Confirm the repository name and destination.
- [ ] Review the Git working tree.
- [ ] Remove temporary and unnecessary files.
- [ ] Check for accidentally committed secrets.
- [ ] Verify project assets are included.
- [ ] Update `README.md`.
- [ ] Document local development steps.
- [ ] Document deployment instructions.
- [ ] Confirm repository contents are appropriate for public access.
- [ ] Commit and push changes as appropriate.

Use `Datheon_Full_Stack_Web_Development_Internship` if it is confirmed as the intended repository name in the existing project documentation. Otherwise, identify the repository name as an item to confirm.

Do not assume the repository already exists or that changes have already been pushed.

### Section 16: Phase 11 — Deployment

Create checklist tasks for:

- [ ] Select or confirm the static hosting provider.
- [ ] Verify the production content.
- [ ] Confirm the correct repository.
- [ ] Configure publishing settings.
- [ ] Confirm the correct output directory.
- [ ] Deploy the website.
- [ ] Record the actual production URL.
- [ ] Verify the production page loads.
- [ ] Verify navigation and interactions in production.
- [ ] Verify resume and project links.
- [ ] Verify images and other assets.
- [ ] Check for production console errors.
- [ ] Resolve deployment defects.
- [ ] Recheck the website after fixes.

Do not invent a production URL.

Mark deployment tasks complete only after verifying the deployed website.

### Section 17: Phase 12 — Final Review and Handover

Create checklist tasks for:

- [ ] Verify all required page sections.
- [ ] Verify all applicable PRD acceptance criteria.
- [ ] Verify design consistency.
- [ ] Verify responsive behavior.
- [ ] Verify accessibility checks.
- [ ] Verify SEO essentials.
- [ ] Verify performance findings.
- [ ] Verify all production links.
- [ ] Resolve blocking defects.
- [ ] Update project documentation.
- [ ] Confirm the final repository state.
- [ ] Confirm the deployment URL.
- [ ] Prepare the final project summary.
- [ ] Record any known limitations or incomplete items.

Do not mark the project complete if required acceptance criteria remain unsatisfied.

### Section 18: Blocked Tasks and Open Questions

Provide a checklist or table for items requiring additional information.

Include:
- Task ID
- Missing information or dependency
- Why it matters
- Person or action needed
- Whether development can continue without it
- Resolution status

Potential dependencies include personal information, resume files, project details, external URLs, and the hosting provider.

Do not treat missing personal content as a reason to stop unrelated development.

### Section 19: Final Definition of Done

Create a final completion checklist.

Include:

- [ ] All required sections are implemented.
- [ ] All approved functional requirements are addressed.
- [ ] All required interactions are verified.
- [ ] Responsive behavior has been tested.
- [ ] Accessibility checks have been completed.
- [ ] SEO essentials have been reviewed.
- [ ] Relevant performance checks have been performed.
- [ ] Blocking defects have been resolved.
- [ ] Production deployment has been verified.
- [ ] The README is complete.
- [ ] Repository contents have been reviewed.
- [ ] Known limitations are documented.
- [ ] Final acceptance criteria are satisfied.

Use the PRD as the final authority for product acceptance.

### Section 20: Next Steps

Explain how to use the completed `Task.md`.

The next documentation step is to generate `AGENT.md`, containing the coding agent's project context, rules, implementation constraints, and workflow.

After `AGENT.md` is ready, begin implementation using the checklist, completing one task at a time.

Do not generate `AGENT.md` in this step.

---

## 5. Requirements for Every Major Task

Every major task must contain:

1. **Task ID:** Unique identifier.
2. **Task name:** Clear and actionable.
3. **Priority:** P0, P1, or P2.
4. **Dependencies:** Prerequisite task IDs, or `None`.
5. **Description:** What needs to be done.
6. **Acceptance criteria:** Observable conditions for completion.
7. **Verification:** How to confirm the task works.

Use these priority definitions:

- **P0 — Critical:** Required for the core website or to meet an essential acceptance criterion.
- **P1 — Important:** Required for a complete, polished, production-ready project.
- **P2 — Optional:** A nonessential improvement that is explicitly in scope or approved as a recommendation.

Do not classify unapproved features as optional tasks. Exclude them from the checklist unless the PRD approves them.

For small subtasks, nested checkboxes are acceptable. Avoid unnecessary administrative overhead.

### Task example

```markdown
### TASK-015: Implement the Responsive Project Grid

- [ ] **Status:** Not started
- **Priority:** P0
- **Dependencies:** TASK-008, TASK-012
- **Description:** Implement the project grid according to `Design.md`.

**Acceptance Criteria**
- [ ] Project cards display the approved project information.
- [ ] The grid adapts to the defined viewport breakpoints.
- [ ] No unintended horizontal overflow occurs.
- [ ] Links are keyboard-accessible.
- [ ] Card layout matches the approved design.

**Verification**
- [ ] Test the grid on mobile, tablet, and desktop.
- [ ] Test all project links.
- [ ] Check keyboard focus and browser console errors.
```

Treat this as a formatting example only. Create task IDs, priorities, and dependencies based on the actual documentation.

---

## 6. Task Quality Rules

The final checklist must:

- Cover all applicable requirements in `PRD.md`.
- Follow the development order in `Plan.md`.
- Respect the visual design in `Design.md`.
- Preserve the scope in `PROJECT_PROPOSAL.md`.
- Use unique task IDs.
- Use Markdown checkboxes for actionable work.
- Include acceptance criteria for major tasks.
- Include verification steps.
- Identify task dependencies accurately.
- Separate blocked tasks from tasks that can proceed.
- Avoid duplicating the same task across multiple phases.
- Avoid vague tasks such as "finish website" without actionable subtasks.
- Avoid overly large tasks that cannot be verified independently.
- Avoid unnecessary microtasks that add no value.
- Avoid implementing unapproved features.
- Keep all new tasks unchecked.
- Never claim that implementation or testing has already happened.

Use clear, professional Markdown.

---

## 7. Final Validation Before Output

Before generating the final document:

1. Read all available project documentation.
2. Extract the approved functional and nonfunctional requirements.
3. Map each major requirement to one or more tasks.
4. Verify that the tasks follow the implementation plan.
5. Check task dependencies and execution order.
6. Ensure each major task has acceptance criteria.
7. Ensure every major task has a verification method.
8. Check that task IDs are unique.
9. Check that all new checkboxes are unchecked.
10. Confirm that no blog, backend, database, authentication, or other unapproved feature has been introduced.
11. Confirm that deployment tasks include production verification.
12. Confirm that the final Definition of Done matches the PRD.

If the documents do not provide enough information to define a task accurately, record the missing information as an open question.

---

## 8. Output Requirements

Generate exactly one complete Markdown document named:

`Task.md`

Output only the finished contents of `Task.md`.

Do not generate:
- `AGENT.md`
- Website source code
- Additional documents
- A separate explanation

The result must be ready to save as `Task.md` in the project repository.

Every new task must remain unchecked until the work has actually been completed and verified.