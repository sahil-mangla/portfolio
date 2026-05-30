# Portfolio Website — Master Plan

## Who You Are (Identity First)

A CS student operating at the intersection of **web development** and **ML engineering**, with a clear trajectory toward **AI engineering** and deep learning. The portfolio should feel like it was *built by someone who understands both sides* — clean, functional frontend craft meeting data-driven, systems-level thinking. Not a generic student portfolio. Something that signals you think in architectures.

---

## Aesthetic Direction

**Theme: Terminal meets Neural Network**

- Dark background (near-black, not pure black) with a monospace/code aesthetic as the base layer
- Accent color — one strong color only (options: electric cyan, amber, or neon green — decide based on personal preference)
- Subtle animated background: think a faint node-graph or flowing data particles — built with vanilla JS Canvas or CSS, no library dependency, which itself is a flex of your skills
- Typography: a monospace display font for headings (signals your technical identity), clean sans-serif for body text
- Every section should feel like a *component* a developer would build — cards, code blocks, terminal prompts, progress indicators

This aesthetic itself is your first project showcase — visitors who are technical will immediately notice you wrote the portfolio itself with intent.

---

## Page Architecture (Single Page)

The entire site lives on one scrollable page with smooth anchor navigation. Sections in order:

### 1. Hero / Landing

- Your name rendered large — possibly with a typewriter/terminal cursor animation typing out your name and role
- A one-liner that captures all three layers: `"CS Student → Web Dev + ML Engineer → AI Engineer"`
- Subtle CTA: `[View My Work ↓]` and `[Download Resume]` side by side
- Background animation lives here (node graph, particle flow, or matrix-style rain — tasteful, not overwhelming)
- No photo needed unless you want one — the code speaks

### 2. About

- Short, punchy paragraph (3–4 sentences max) — who you are, where you're headed, what drives you
- A few "currently learning / currently building" tags rendered as code badges: `` `PyTorch` `` `` `Transformers` `` `` `Next.js` ``
- Could include a small ASCII-art style self-portrait or a minimal avatar

### 3. Skills

- **Not a boring list.** Render skills as a categorized grid:
  - `// Web Development` → React, Next.js, Node, Tailwind, etc.
  - `// ML / AI` → Python, PyTorch, TensorFlow, scikit-learn, Hugging Face, etc.
  - `// Tools & Infra` → Git, Docker, Linux, VS Code, Jupyter, etc.
- Each skill shown as a styled tag/pill, optionally with proficiency shown as a minimal bar or dot scale (1–5)
- No circular progress charts — those are cliché and meaningless. Use honest, simple indicators.

### 4. Projects

- **This is the centerpiece — give it the most space**
- Each project as a card with:
  - Project name + one-line description
  - Tech stack tags (rendered like code)
  - What problem it solves / what you learned
  - Links: `[GitHub]` `[Live Demo]` (if applicable)
- 3–5 featured projects max. Quality over quantity.
- Projects should span both domains — show at least one pure web project, at least one ML/AI project, ideally one that bridges both (e.g., a web app with an ML backend)
- Cards should have a subtle hover effect — a border glow or a slight lift

### 5. Education

- Clean, minimal — one card or timeline entry per institution
- Degree, institution, expected graduation, relevant coursework (pick 4–6 courses that are relevant to your trajectory)
- If you have a GPA worth showing, show it. If not, skip it.
- Any certifications, online courses (Coursera, fast.ai, etc.) can live here too as secondary items

### 6. Contact

- Pinned at the bottom, easy to reach
- Simple: a small form (Name, Email, Message) with a `[Send Message]` button — or just direct links if you don't want a backend
- Links displayed as icons + handles: GitHub, LinkedIn, Email, Twitter/X (only include what you actually use)
- Could render your email as a terminal-style command: `$ echo "contact@youremail.com"`

---

## Resume Strategy

**Recommendation: Download button, not embedded viewer**

Reasons:
- An embedded PDF viewer (iframe) looks clunky and breaks on mobile
- A download button is cleaner, faster, and lets your resume be properly formatted as a designed PDF
- Place the button in two spots: **Hero section** (primary CTA) and **bottom of page near Contact** (secondary, for anyone who scrolled all the way down)
- Button label: `[↓ Download Resume]` — clear, no ambiguity

If you later want to show it inline, a modal with a PDF viewer is a decent middle ground — but start with the download button.

---

## Navigation

- Fixed top navbar, minimal — just your initials/logo on the left and anchor links on the right
- On scroll, navbar gets a subtle backdrop blur so it doesn't compete with content
- Mobile: hamburger menu that slides in a full-screen nav overlay
- Smooth scroll behavior on all anchor links

---

## Tech Stack for the Portfolio Itself

This choice is intentional — it should reflect your skills:

**Recommended: Next.js (React) + Tailwind CSS**

- Shows frontend competence immediately
- Static export means free hosting on Vercel or GitHub Pages
- Easy to add dynamic features later (contact form via API route, blog, etc.)
- Tailwind lets you move fast without writing a ton of CSS

**Alternative: Pure HTML/CSS/JS**

- Simpler, faster to ship, no build step
- Signals you understand the fundamentals
- Easier for the background canvas animation

**Skip:** WordPress, Wix, Webflow, or any template builder — defeats the purpose

---

## Hosting & Domain

- **Hosting:** Vercel (free tier, perfect for Next.js) or GitHub Pages (free, good for static HTML)
- **Domain:** Get a custom domain — `yourname.dev` or `yourname.io` — costs ~$10–15/year and makes the whole thing look professional. `.dev` is particularly on-brand for a developer.

---

## Content You Need to Prepare (Before Building)

- [ ] 3–5 project writeups (name, description, stack, links)
- [ ] Finalized skills list across all three categories
- [ ] 2–3 sentence About blurb
- [ ] Education details (institution, degree, graduation, coursework)
- [ ] Updated, designed resume as a PDF
- [ ] GitHub profile cleaned up (pinned repos match the projects you'll feature)
- [ ] Profile links you want to include (LinkedIn, GitHub, etc.)
- [ ] Accent color decision

---

## Build Order (Recommended)

1. Set up project (Next.js + Tailwind or plain HTML)
2. Build the layout skeleton — all sections present, no styling
3. Style the Hero first — this sets the visual tone for everything else
4. Build Skills and Education (simpler, data-driven)
5. Build Projects section (most complex, most important)
6. Add Contact section and resume download button
7. Add the background animation
8. Add navbar with smooth scroll
9. Mobile responsiveness pass
10. Performance + SEO basics (meta tags, og:image, page title)
11. Deploy

---

## Things to Avoid

- No stock photos or generic illustrations
- No purple gradient on white (overused AI-era cliché)
- No circular skill charts (meaningless and cliché)
- No autoplay audio or video
- No splash/loading screen — get the user to content immediately
- Don't list every technology you've ever touched — curate ruthlessly
- Don't make the contact form the only way to reach you — include direct links

---

## The Goal

Someone visiting your portfolio — whether a recruiter, a senior engineer, or a fellow student — should leave with three impressions:

1. **He knows how to build things** (the portfolio itself is evidence)
2. **He operates across the stack and into ML/AI** (skills + projects prove this)
3. **He has a trajectory** (the About and project selection shows where you're going, not just where you've been)
