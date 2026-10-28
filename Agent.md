# Task: Generate AGENT.md for My Developer Portfolio Project

Act as a senior software architect, AI coding agent designer, frontend development lead, and software quality engineer.

Your task is to read my existing project documentation and generate one complete, professional, practical `AGENT.md` file.

This file will serve as the primary instruction manual for any AI coding assistant working on my **Personal Developer Portfolio & Project Showcase**.

The agent must understand the project, follow the approved requirements, implement tasks systematically, test changes, maintain documentation, and avoid unnecessary complexity.

**Important: This step creates instructions for future implementation. Do not implement the website while generating this document.**

## 1. Read Existing Documentation First

Before generating `AGENT.md`, read and analyze:

- `PROJECT_PROPOSAL.md`
- `PRD.md`
- `Design.md`
- `Plan.md`
- `Task.md`
- The original brainstorming document, if available

Treat these files as the source of truth for project-specific decisions.

Use each document as follows:

- `PROJECT_PROPOSAL.md`: project objectives, scope, audience, and deliverables.
- `PRD.md`: functional requirements, nonfunctional requirements, user stories, and acceptance criteria.
- `Design.md`: visual design, components, layout, accessibility, and interactions.
- `Plan.md`: architecture, implementation order, dependencies, testing, and deployment.
- `Task.md`: task IDs, priorities, dependencies, checklists, and completion criteria.

If the documents conflict, identify the conflict and recommend a resolution instead of silently changing requirements.

If information is missing, use a clearly identified placeholder or ask for clarification when necessary.

Do not invent personal information, project details, or completed work.

## 2. Project Overview

The project is a professional, responsive developer portfolio website.

The approved page sections may include:

1. Navigation
2. Hero
3. About Me
4. Technical Skills
5. Featured Projects
6. Resume
7. Contact
8. Footer

Follow the actual requirements in `PRD.md`.

The planned technology stack is:

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- Static website hosting, such as Vercel, Netlify, or GitHub Pages

Follow the existing documentation if the approved stack differs.

### Strict scope restrictions

The agent must not:

- Add a blog.
- Introduce a backend, database, or authentication system unless the approved PRD explicitly requires it.
- Introduce a frontend framework without approval.
- Add unnecessary dependencies.
- Invent personal information, skills, experience, qualifications, achievements, or projects.
- Replace approved design decisions without justification.
- Rewrite unrelated files without a clear reason.
- Claim a task is complete without verification.
- Claim a deployment succeeded without checking the deployed website.
- Delete existing work without understanding its purpose and obtaining approval when the change is destructive or risky.

## 3. Generate the Following Sections

### 1. Document Information

Include:
- Document title
- Project name
- Version
- Status
- Date
- Related documentation

### 2. Agent Role and Mission

Explain that the AI coding agent is responsible for:

- Understanding the project documentation.
- Implementing the approved website.
- Following the task checklist.
- Maintaining consistent design and architecture.
- Writing maintainable HTML, CSS, and JavaScript.
- Testing changes.
- Fixing defects.
- Updating documentation.
- Preparing the website for deployment.

The agent must prioritize correctness, simplicity, accessibility, and maintainability.

### 3. Project Context

Summarize:
- What the project is.
- Who the intended audience is, according to the PRD.
- What problem the website solves.
- What the final deliverables are.
- Which technologies are approved.
- What is outside the project scope.

Keep this section consistent with the existing documentation.

### 4. Documentation Hierarchy and Source of Truth

Define how the agent must use the project documents.

Use this decision process:

1. Follow the approved project scope in `PROJECT_PROPOSAL.md`.
2. Follow product requirements and acceptance criteria in `PRD.md`.
3. Follow visual and interaction specifications in `Design.md`.
4. Follow architecture and implementation sequencing in `Plan.md`.
5. Follow task priorities, dependencies, and checklists in `Task.md`.

If documents conflict, do not silently select an arbitrary interpretation.

Explain the conflict, assess its impact, and recommend a resolution before making a significant change.

For a newly approved change, update the relevant documentation so that it remains consistent.

### 5. Required Working Process

Require the agent to follow this workflow:

**Step 1: Inspect**
- Read the relevant documentation.
- Inspect the repository.
- Check the existing file structure.
- Review the Git working tree.
- Identify relevant source files and assets.
- Understand the task before editing.

**Step 2: Plan**
- Identify the task ID.
- Review the task's dependencies.
- Confirm the acceptance criteria.
- Identify the files likely to change.
- Determine how the changes will be tested.

**Step 3: Implement**
- Make the smallest reasonable changes that satisfy the task.
- Follow the approved architecture.
- Reuse existing components and styles where appropriate.
- Avoid unrelated refactoring.

**Step 4: Validate**
- Run relevant checks and tests.
- Inspect browser behavior where possible.
- Check the console for errors.
- Verify responsive behavior when relevant.
- Confirm the acceptance criteria are satisfied.

**Step 5: Review**
- Review the changed files.
- Check for regressions.
- Check for accessibility problems.
- Check for unnecessary dependencies or duplicated code.

**Step 6: Update**
- Update `Task.md` only after the task is verified.
- Update other documentation when necessary.
- Summarize the changes and test results.
- Identify any remaining blockers.

The agent must not skip verification merely to finish faster.

### 6. Task Checklist Rules

Define how the agent must use `Task.md`.

Requirements:

- Select tasks according to priority and dependencies.
- Complete prerequisite tasks before dependent tasks.
- Work on one logical task at a time.
- Preserve unique task IDs.
- Keep unrelated tasks unchanged.
- Use `- [ ]` for incomplete tasks.
- Use `- [x]` only for verified completed tasks.
- Record blocked tasks and explain the reason.
- Do not mark an entire phase complete while required tasks remain unfinished.
- Do not delete checklist items to make progress appear faster.

Before marking a task complete, verify that its acceptance criteria have been satisfied.

If a task is partially complete, leave it unchecked and report what remains.

### 7. Coding Standards

Define practical coding standards for the approved stack.

**HTML**
- Use semantic HTML5.
- Maintain a logical heading hierarchy.
- Use appropriate landmarks.
- Associate labels with form controls when forms are required.
- Use meaningful link text.
- Avoid unnecessary wrapper elements.

**CSS**
- Follow the design tokens in `Design.md`.
- Use consistent naming conventions.
- Reuse shared styles.
- Organize styles logically.
- Use responsive layouts.
- Avoid unnecessary specificity.
- Avoid duplicated declarations.
- Keep focus states visible.
- Support the approved themes.
- Respect reduced-motion preferences.

**JavaScript**
- Use Vanilla JavaScript unless the approved stack says otherwise.
- Prefer clear, maintainable functions.
- Use appropriate event listeners.
- Avoid unnecessary global variables.
- Prevent duplicate event handling.
- Handle missing elements safely when appropriate.
- Avoid unnecessary DOM updates.
- Keep JavaScript focused on approved interactions.
- Avoid unsafe DOM manipulation.
- Do not use `eval()`.

**File organization**
- Follow the existing repository structure.
- Keep HTML, CSS, JavaScript, and assets appropriately organized.
- Avoid creating unnecessary files.
- Use consistent file naming.
- Avoid duplicating existing functionality.

Adapt these rules to the actual repository rather than enforcing a new structure unnecessarily.

### 8. Design and UI Consistency Rules

Require the agent to follow `Design.md`.

The agent must:

- Use the approved color palette.
- Use the approved typography and spacing scale.
- Follow the defined layout and component specifications.
- Maintain consistent buttons, links, cards, and section headings.
- Follow the approved responsive breakpoints.
- Preserve the intended visual hierarchy.
- Maintain consistent light and dark themes when required.
- Avoid arbitrary visual changes.
- Verify that new components match the existing design system.

If the design requires a change, explain why and update the relevant documentation when the change is approved.

### 9. Responsive Design Rules

Require the agent to:

- Follow the mobile-first approach defined in `Design.md`.
- Test layouts at narrow viewport widths.
- Verify tablet and desktop layouts.
- Avoid unintended horizontal scrolling.
- Check text wrapping.
- Check image sizing.
- Check navigation behavior.
- Verify that buttons and links remain usable on touch devices.
- Avoid hardcoded dimensions that break the approved layout.

Do not claim responsive behavior is verified without testing it.

### 10. Accessibility Rules

Require the agent to consider accessibility during implementation rather than treating it as a final cosmetic task.

Include:

- Semantic structure.
- Keyboard accessibility.
- Visible focus indicators.
- Accessible names for controls.
- Appropriate alternative text.
- Sufficient color contrast.
- Correct heading hierarchy.
- Accessible mobile navigation.
- Accessible theme controls.
- Reduced-motion support.
- Accessible form labels and feedback when applicable.

Use WCAG 2.2 Level AA as the project target where practical and applicable.

The agent must distinguish between checks performed and compliance that has not yet been verified.

### 11. Content and Asset Integrity

The agent must never fabricate:

- The user's name or biography.
- Employment history.
- Education or qualifications.
- Technical skills.
- Project descriptions.
- Project achievements.
- Repository URLs.
- Live demo URLs.
- Social media URLs.
- Email addresses.
- Resume content.

Use clearly labeled placeholders when necessary.

Keep placeholder content distinguishable from verified content.

Do not use fake project screenshots or misleading links.

Before release, identify any placeholders that still need to be replaced.

If a missing asset blocks a task, document the dependency and continue with unrelated work when possible.

### 12. Dependency Management

Require the agent to:

- Prefer the approved technology stack.
- Reuse existing capabilities.
- Avoid installing dependencies without a clear need.
- Explain why a new dependency is necessary.
- Obtain approval before introducing a significant new framework or service.
- Avoid adding backend infrastructure for a static portfolio.
- Avoid unnecessary build tools and configuration.
- Check whether an equivalent solution already exists in the repository.

Do not introduce a package manager or build process if the project does not require one.

### 13. Testing and Verification Rules

Before marking a task complete, the agent must perform the relevant checks.

These may include:

- HTML structure review.
- CSS and responsive layout checks.
- JavaScript error checks.
- Navigation testing.
- Project-link verification.
- Resume-link or download verification.
- Theme-switching tests when applicable.
- Keyboard navigation.
- Accessibility checks.
- Browser compatibility checks.
- Asset-loading checks.
- Production smoke tests after deployment.

The agent must report:
- What was tested.
- How it was tested.
- What passed.
- What failed.
- What remains unverified.

If a test cannot be performed, explain the limitation instead of reporting a false success.

### 14. Error Handling and Debugging

Define the debugging process:

1. Reproduce the problem.
2. Identify the likely cause.
3. Inspect relevant files and browser errors.
4. Make a focused correction.
5. Repeat the original test.
6. Check related functionality for regressions.
7. Document unresolved problems.

The agent must avoid hiding errors, removing failing tests without justification, or changing unrelated behavior to conceal defects.

### 15. Git and Change Management

Require the agent to:

- Inspect Git status before significant changes.
- Preserve unrelated user modifications.
- Avoid overwriting existing work.
- Make small, logical changes.
- Use meaningful commit messages when committing is requested or part of the workflow.
- Avoid destructive Git operations unless explicitly authorized.
- Never commit secrets or credentials.
- Review changed files before finalizing a task.

Do not assume that the repository has already been initialized or connected to GitHub.

### 16. Security and Privacy

Require the agent to:

- Keep credentials and secrets out of source control.
- Avoid unnecessary third-party scripts.
- Use safe link and DOM-handling practices.
- Avoid collecting personal information that the project does not need.
- Avoid adding tracking or analytics unless approved.
- Verify external links where practical.
- Avoid exposing private files or configuration details.

### 17. Performance Rules

Require the agent to:

- Optimize image sizes.
- Use appropriate image formats.
- Avoid unnecessary JavaScript.
- Avoid excessive animations.
- Avoid unnecessary external dependencies.
- Minimize layout shifts where practical.
- Use sensible asset-loading strategies.
- Review performance audit findings when available.

Do not claim that a specific performance score has been achieved without measuring it.

### 18. SEO Rules

Require the agent to follow the approved SEO requirements.

Check relevant items such as:

- Page title.
- Meta description.
- Semantic headings.
- Meaningful link text.
- Image alternative text.
- Favicon.
- Social sharing metadata when required.
- Canonical URL when appropriate.
- Sitemap and robots configuration when appropriate.

Do not invent production URLs or claim search-engine indexing has occurred without evidence.

### 19. Deployment Rules

Before deployment, require the agent to:

- Confirm the selected hosting provider.
- Verify the production content.
- Check local functionality.
- Check assets and external links.
- Confirm publishing settings.
- Avoid exposing secrets.
- Review the final repository state.

After deployment, require the agent to:

- Open the actual production URL.
- Confirm that the site loads.
- Verify critical sections.
- Test important interactions.
- Verify assets and links.
- Record any remaining issues.

Do not claim a deployment succeeded unless the result has been verified.

### 20. Documentation Maintenance

Define how the agent should maintain:

- `PROJECT_PROPOSAL.md`
- `PRD.md`
- `Design.md`
- `Plan.md`
- `Task.md`
- `AGENT.md`
- `README.md`

Rules:

- Keep documentation consistent with approved changes.
- Do not rewrite unrelated documentation.
- Update `Task.md` only when the relevant work is verified.
- Update `PRD.md` or `Design.md` when approved requirements or designs change.
- Keep `Plan.md` aligned with significant implementation changes.
- Keep `README.md` accurate about setup and deployment.
- Do not record planned work as completed work.

### 21. When to Ask for Clarification

The agent should ask for clarification before proceeding when:

- Requirements conflict in a way that changes the outcome.
- A significant feature is not approved.
- Personal information is missing and cannot be represented safely by a placeholder.
- A destructive operation may delete or overwrite important work.
- A new framework or major dependency is necessary.
- Deployment requires an unconfirmed domain, credential, or configuration.
- A proposed change expands the project scope.

For minor decisions, the agent may choose a sensible default if it is consistent with the existing documentation, reversible, and clearly reported.

### 22. Prohibited Actions

The agent must not:

- Add a blog.
- Add unapproved features.
- Invent personal information or project details.
- Rewrite the entire project unnecessarily.
- Replace approved technologies without authorization.
- Introduce unnecessary frameworks or dependencies.
- Delete important files without understanding their purpose.
- Overwrite unrelated user changes.
- Mark unverified tasks complete.
- Ignore failing tests.
- Hide errors.
- Claim successful testing without evidence.
- Claim successful deployment without verification.
- Report placeholders as real content.
- Generate excessive documentation unrelated to the task.

### 23. Required Response After Each Task

After completing a task, the agent must provide a concise implementation report containing:

**Task**
- Task ID and task name.

**Changes**
- Files created, modified, or deleted.
- Summary of the implementation.

**Verification**
- Tests and checks performed.
- Results for each relevant check.

**Acceptance Criteria**
- Criteria satisfied.
- Criteria not satisfied or not yet verified.

**Checklist**
- Whether the corresponding task in `Task.md` was marked complete.
- If not, what remains.

**Blockers**
- Missing information, unresolved problems, or required approvals.

**Next Task**
- The next logical task based on dependencies and priority.

Do not report success when verification has not been performed.

### 24. Definition of Done for Agent Tasks

A task is complete only when:

- The requested change has been implemented.
- The implementation matches the approved requirements.
- Relevant acceptance criteria are satisfied.
- Appropriate tests or verification checks have passed.
- No known blocking regression remains.
- Required documentation has been updated.
- `Task.md` accurately reflects the verified status.
- Remaining limitations are documented.

If any mandatory condition is not satisfied, keep the task incomplete and explain what remains.

### 25. Final Agent Workflow

Require the agent to follow this loop:

1. Read the relevant project documentation.
2. Inspect the repository.
3. Select the next eligible task.
4. Check its dependencies and acceptance criteria.
5. Implement the smallest reasonable change.
6. Test the change.
7. Review for regressions.
8. Update the checklist only after verification.
9. Update related documentation if necessary.
10. Report the result.
11. Continue to the next task only when the workflow and dependencies permit it.

The agent must prioritize correctness over speed and must not mark the entire project complete until the final Definition of Done is satisfied.

---

## 4. Final Validation

Before generating `AGENT.md`:

1. Confirm that its instructions match the approved technology stack.
2. Confirm that the project scope is correct.
3. Confirm that the agent follows the requirements in `PRD.md`.
4. Confirm that design decisions come from `Design.md`.
5. Confirm that implementation sequencing follows `Plan.md`.
6. Confirm that checklist management follows `Task.md`.
7. Remove contradictory or duplicate rules.
8. Ensure that verification is mandatory.
9. Ensure that missing personal information is handled safely.
10. Ensure that the agent cannot claim unverified success.
11. Ensure that the instructions are practical for an individual developer portfolio project.

## 5. Output Requirements

Generate exactly one complete Markdown document named:

`AGENT.md`

Output only the finished contents of `AGENT.md`.

Do not generate:
- Website source code.
- A new `Task.md`.
- Additional documentation files.
- A separate explanation outside the document.

The result must be ready to save as `AGENT.md` in the project repository.