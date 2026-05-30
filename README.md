# ⚡ Sahil Mangla — Immersive Developer Portfolio Website

A highly interactive, single-page professional portfolio operating at the intersection of high-fidelity Web Architecture and Advanced Deep Learning models. Optimized specifically to showcase production systems-level thinking to international engineering teams and recruiters.

---

## 🎨 Visual Identity & Key Features

### 1. Interactive Neural Canvas Synapse Engine
- An interactive, high-performance **HTML5 2D Canvas particle system** running in the background.
- Dynamically calculates distances between node synapse particles, rendering linking synapses with responsive vector strokes.
- Includes a smooth cursor physics system—particles react to the recruiter's mouse cursor, simulating neural synapse activations on cursor proximity.
- Configured with high-contrast, royalty-blue vector paths dynamically optimized for a permanent light background.

### 2. Recruiter-Playable Developer Terminal Shell
- A custom-built, fully interactive **monospaced developer terminal console mockup** in the hero section.
- Built strictly with Vanilla JS command-parsing logic (no heavy framework overheads).
- **recruiter commands:**
  - `help`      — Print the complete interactive command instruction set.
  - `about`     — Output operational profiles and computer engineering blueprint.
  - `skills`    — Display technical proficiency matrices in visual monospaced blocks.
  - `projects`  — List prioritized architectural works (**Volt AI**, **BiasBeacon**, **MyHeritage Passport**).
  - `education` — Output Thapar Institute of Engineering and Technology (TIET) academic scoreboard.
  - `contact`   — Print electronic communication coordinates.
  - `hire`      — Initiate handshake handshake and secure relocation protocols.
  - `clear`     — Cleanse console log history.
- **Micro-Interaction Polish:** 
  - Clicking anywhere on the console triggers automatic focus.
  - Implements the modern CSS `:has()` pseudo-class selector—the skewed 3D tilted container automatically flattens and rises to face the user when the terminal receives typing focus, preventing browser 3D hit-testing coordinate offsets.

### 3. Glassmorphic Selected Showcases Grid
- A clean, responsive projects grid presenting your three prioritized works from the resume:
  1. **Volt AI** — Cloud-native EV battery health & Remaining Useful Life estimation platform.
  2. **BiasBeacon** — Machine Learning dataset algorithmic ethics auditing and mitigation studio.
  3. **MyHeritage Passport** — Facial biometric analytics and secure ancestry passport generator.
- Incorporates a `.project-card-header` flex row that wraps dynamically, resolving classic mobile layout overlap bugs completely.

---

## 🛠️ Architecture & Technology Stack

- **Structure:** Semantic HTML5 Markup with high-integrity ARIA descriptors for accessibility.
- **Styling:** CSS Custom Properties (CSS variables) locked in a premium slate-50 light background with deep slate-900 contrast, frosted glass panels (`backdrop-filter`), and double-layered soft translucent shadows.
- **Typography:** Sleek pairing of **Montserrat** for readable body measures, **Fira Code** for monospaced shell structures, and the display serif **Cormorant** for branding headers.
- **Logic:** Vanilla JS control centers separated into isolated `try-catch` sandbox blocks to ensure fault tolerance.
- **Asset Caching:** Appends script query cache-busters (`?v=1.0.6`) to script tags to force local browser instances to pull the latest versions directly.

---

## 📂 Project Directory Structure

```bash
portfolio-web/
├── index.html            # Semantic HTML5 page layout skeleton
├── index.css             # Unified CSS variable system, typography, and glassmorphic patterns
├── index.js              # Canvas synapse loop, terminal command registry, and observers
├── Sahil-Resume.pdf      # Prioritized systems-engineering resume asset
├── portfolio-plan.md     # Original architectural and hosting master plan
└── README.md             # Project overview & architectural guide
```

---

## 🚀 Execution & Local Development

This is a pure, static vanilla web application with zero external compilation dependencies, ensuring ultra-light assets and instant cold starts:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/sahil-mangla/portfolio.git
   ```
2. Open `index.html` inside any standard web browser, or launch a local dev server (e.g., Live Server in VS Code) to run the site locally:
   ```bash
   npx serve .
   ```
3. Open `http://localhost:3000` to view the running, high-fidelity experience!
