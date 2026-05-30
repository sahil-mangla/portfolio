/* ==========================================================================
   MASTER INTERACTIVE CONTROL CENTER (sahilmangla.dev)
   Vanilla JS Engine for the Liquid Glass Portfolio Experience
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Application Layers with isolated fault tolerance
  try { initMobileMenu(); } catch (e) { console.error("Mobile Menu error:", e); }
  try { initNeuralCanvas(); } catch (e) { console.error("Neural Canvas error:", e); }
  try { initPlayableTerminal(); } catch (e) { console.error("Terminal error:", e); }
  try { initScrollAnimations(); } catch (e) { console.error("Scroll Animations error:", e); }
  try { initProjectFiltersAndModals(); } catch (e) { console.error("Modals error:", e); }
  try { initContactForm(); } catch (e) { console.error("Contact Form error:", e); }
});

/* ==========================================================================
   1. THEME MANAGER LAYER
   ========================================================================== */
/* --- THEME TOGGLE LOGIC REMOVED --- */

/* ==========================================================================
   2. MOBILE NAV MENU
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.contains('mobile-active');
    if (isActive) {
      navLinks.classList.remove('mobile-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks.classList.add('mobile-active');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close nav menu on links click (for responsive scroll anchor)
  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   3. HIGH-PERFORMANCE NEURAL canvas BACKGROUND
   ========================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  
  let animationFrameId;
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = Math.min(65, Math.floor((width * height) / 22000)); // responsive particle density
  const connectionDistance = 140;
  
  const mouse = {
    x: null,
    y: null,
    radius: 180,
    active: false
  };

  // Node particle blueprint
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.baseRadius = Math.random() * 2 + 1.5;
      this.radius = this.baseRadius;
    }

    update() {
      // Boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      
      this.x += this.vx;
      this.y += this.vy;

      // Mouse influence
      if (mouse.active && mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Subtly attract nodes to cursor, simulating synapse activation
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
          this.radius = this.baseRadius + force * 2.5;
        } else {
          if (this.radius > this.baseRadius) this.radius -= 0.1;
        }
      } else {
        if (this.radius > this.baseRadius) this.radius -= 0.1;
      }
    }

    draw() {
      const theme = document.documentElement.getAttribute('data-theme');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'light' ? 'rgba(37, 99, 235, 0.45)' : 'rgba(59, 130, 246, 0.65)';
      ctx.fill();
    }
  }

  // Populate network
  function setup() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // Loop runner
  function loop() {
    const theme = document.documentElement.getAttribute('data-theme');
    ctx.clearRect(0, 0, width, height);

    // Draw active synapse linkages
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const alpha = (connectionDistance - dist) / connectionDistance * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          
          if (theme === 'light') {
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
          } else {
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          }
          
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  // Listeners
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
    mouse.active = false;
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrameId);
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    setup();
    loop();
  });

  setup();
  loop();
}

/* ==========================================================================
   4. PLAYABLE RECRUITER TERMINAL SHELL
   ========================================================================== */
function initPlayableTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const terminalBody = document.getElementById('terminal-body');

  const cmdRegistry = {
    help: () => `Available System Commands:
  -------------------------------------------------------------
  about     - Output operational profiles (Computer Engineering blueprint)
  skills    - Print structural technical proficiency matrices
  projects  - List elite custom architectures built & exported
  education - Output TIET systems degree metrics
  contact   - Print communication sync coordinates
  hire      - Establish sync handshake & trigger protocol
  date      - View current local timestamp
  clear     - Cleanse terminal history cache
  help      - Print this console instruction set`,
    
    about: () => `Second-year Computer Engineering student at TIET with a strong track record of building ML and full-stack web solutions for real-world problems — from EV battery diagnostics to identity fraud detection.

Driven by a conviction that sustainability and optimisation are the defining engineering challenges of this decade. Approaches every project with a structured problem-framing methodology: defining scope, constraints, and architecture before writing a single line of code.

International hackathon winner with hands-on experience shipping end-to-end systems across the ML and web stack.`,
 
    skills: () => `STRUCTURED PROFICIENCY MATRICES
=============================================================
[Web Architecture]
-------------------------------------------------------------
TypeScript / JS : █ █ █ █ █ █ █ █ █ ░  [95%]
Next.js / SSR   : █ █ █ █ █ █ █ █ ░ ░  [90%]
WebGL / Canvas  : █ █ █ █ █ █ █ █ ░ ░  [85%]

[Intelligence & Data]
-------------------------------------------------------------
Python / PyTorch: █ █ █ █ █ █ █ █ █ ░  [90%]
ONNX Webassembly: █ █ █ █ █ █ █ █ ░ ░  [85%]
Transformers    : █ █ █ █ █ █ █ ░ ░ ░  [80%]`,
 
    projects: () => `EXPORTED CODE ARCHITECTURES
=============================================================
* Volt AI [Predictive Maintenance]
  - Cloud-native EV battery health & Remaining Useful Life estimation.
  - Repo: github.com/sahil-mangla/Volt-AI
  - Live: voltt-ai.vercel.app

* BiasBeacon [Algorithmic Ethics]
  - Auditing, visualizing, and mitigating bias in ML datasets.
  - Repo: github.com/sahil-mangla/BiasBeacon
  - Live: frontend-436542799320.us-central1.run.app

* MyHeritage Passport [Identity Fraud]
  - Facial biometric analytics & secure ancestry passport generator.
  - Repo: github.com/sahil-mangla/MyHeritage-Passport
  - Live: my-heritage-passport.vercel.app`,
 
    education: () => `ACADEMIC SCOREBOARD [TIET]
=============================================================
Institution : Thapar Institute of Engineering and Technology (TIET)
Degree      : Bachelor of Engineering (B.E.) - Computer Engineering
Graduation  : Expected 2028
Current GPA : 8.3 / 10.0
Focus Area  : Machine Learning optimization, EV diagnostics & fraud detection architectures`,
 
    contact: () => `COMMUNICATION coordinates
=============================================================
Electronic Sync : sahilmangla.work@gmail.com
Main Hub        : New Delhi, India
Global Status   : Ready for immediate international relocation
Remote Capabilities: High-integrity asynchronous worker`,
 
    hire: () => `*************************************************************
SYNC HANDSHAKE ESTABLISHED successfully!
*************************************************************
Hiring protocol initiated. The relocation tunnel is configured.
Type commands, or scroll to the bottom contact board to send
a secure electronic transmission to secure candidate immediately!`,
 
    date: () => new Date().toString()
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevent default behavior (newline or form submit)
      const commandString = terminalInput.value.trim();
      const rawCommand = commandString.toLowerCase().split(' ')[0];
      
      if (commandString) {
        processCommand(commandString, rawCommand);
      }
      
      terminalInput.value = '';
    }
  });

  // Tap terminal wrapper to focus input automatically (great UX!)
  document.getElementById('terminal-trigger').addEventListener('click', () => {
    terminalInput.focus();
  });

  function processCommand(rawInput, cleanCmd) {
    // Append input line to log history
    const historyLine = document.createElement('div');
    historyLine.className = 'terminal-history-item';
    historyLine.innerHTML = `
      <div class="terminal-prompt-line">
        <span class="prompt-symbol">$</span>
        <span>${rawInput}</span>
      </div>
    `;

    // Process output
    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-response';
    
    if (cleanCmd === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    } else if (cmdRegistry[cleanCmd]) {
      responseLine.textContent = cmdRegistry[cleanCmd]();
    } else {
      responseLine.textContent = `sh: command not found: ${cleanCmd}. Type "help" to view operational pathways.`;
    }

    historyLine.appendChild(responseLine);
    terminalHistory.appendChild(historyLine);
    
    // Auto-scroll console
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

/* ==========================================================================
   5. INTERSECTION OBSERVERS FOR SCROLL REVEALS & SKILLS
   ========================================================================== */
function initScrollAnimations() {
  const elementsToReveal = document.querySelectorAll('.entrance-hidden');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Entrance observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('entrance-visible');
        observer.unobserve(entry.target); // trigger once
      }
    });
  }, { threshold: 0.15 });

  elementsToReveal.forEach(el => revealObserver.observe(el));

  // Active Nav Tracker on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 120)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. PROJECTS GRID FILTERING & PORTAL MODALS ENGINE
   ========================================================================== */
const projectData = {
  1: {
    name: "Volt AI",
    category: "Predictive Maintenance",
    tagline: "A cloud-native battery intelligence platform designed for health monitoring and Remaining Useful Life (RUL) estimation of EV battery systems.",
    specEnv: "Vercel / FastAPI",
    specClass: "Predictive Heuristics",
    specSync: "Dockerized Sync",
    tech: ["FastAPI", "Docker", "Azure App Service", "Azure SQL", "React", "LSTM Networks", "Scikit-learn"],
    longDesc: "Volt AI predicts capacity fade and Remaining Useful Life (RUL) in EV battery modules using continuous streams of current, voltage, and temperature telemetry logs. Features highly scalable ASGI containers with built-in prediction alerts.",
    learnings: "Engineered a centralized data parsing pipeline that aggregates thermodynamic battery arrays into a structured SQL lake. Integrated lightweight deep-learning models delivering sub-50ms execution times inside production Docker borders.",
    links: [
      { label: "GitHub Repo", url: "https://github.com/sahil-mangla/Volt-AI", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>` },
      { label: "Live Site", url: "https://voltt-ai.vercel.app/", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>` }
    ]
  },
  2: {
    name: "BiasBeacon",
    category: "Algorithmic Ethics",
    tagline: "A premium, ethics-driven platform designed to audit, visualize, and mitigate algorithmic bias in machine learning models.",
    specEnv: "Next.js / FastAPI",
    specClass: "Ethics & Auditing",
    specSync: "Production Pipelines",
    tech: ["Next.js", "FastAPI", "Docker", "Google Cloud Run", "Fairness Forecasting Metrics", "Algorithmic Mitigation", "Interactive Simulators"],
    longDesc: "Bias Beacon audits, visualizes, and fixes algorithmic bias in machine learning models. By combining high-fidelity data visualization with advanced fairness forecasting and real-time simulation, it provides a 'Truth-Finding Studio' for data scientists.",
    learnings: "Integrated real-time demographic parity and disparate impact metrics calculators on production FastAPI layers. Developed lightweight Next.js views running Recharts nodes, containerized with Docker, and optimized for sub-second cold starts on Cloud Run.",
    links: [
      { label: "GitHub Repo", url: "https://github.com/sahil-mangla/BiasBeacon", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>` },
      { label: "Live Site", url: "https://frontend-436542799320.us-central1.run.app/", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>` }
    ]
  },
  3: {
    name: "MyHeritage Passport",
    category: "Identity Fraud",
    tagline: "A high-fidelity digital identity verification and ancestry passport generator powered by facial metric classifiers.",
    specEnv: "Next.js / Express",
    specClass: "Digital Identity",
    specSync: "Secure Authentication",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express Backend", "Face API Classifiers", "Identity Fraud Protection", "Canvas Rendering"],
    longDesc: "MyHeritage Passport is a secure identity verification portal that parses passport documentation and evaluates facial feature points to verify identities in real-time, generating secure, sharing-friendly ancestry pass certificates.",
    learnings: "Engineered client-side document classification filters that catch fraudulent photo replacements. Optimised image rendering routines using raw HTML5 canvas transformations, achieving lightweight and scalable identity verification.",
    links: [
      { label: "GitHub Repo", url: "https://github.com/sahil-mangla/MyHeritage-Passport", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>` },
      { label: "Live Site", url: "https://my-heritage-passport.vercel.app/", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>` }
    ]
  }
};

function initProjectFiltersAndModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  // Modal Open Trigger
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent opening modal if direct links inside cards are clicked
      if (e.target.closest('a') || e.target.closest('.project-link-item')) {
        return;
      }
      const projId = card.getAttribute('data-id');
      const data = projectData[projId];
      if (data) {
        populateAndOpenModal(data);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Esc key close helper
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  let previousActiveElement = null;

  function populateAndOpenModal(data) {
    previousActiveElement = document.activeElement;
    
    document.getElementById('modal-project-category').textContent = data.category;
    document.getElementById('modal-project-name').textContent = data.name;
    document.getElementById('modal-project-tagline').textContent = data.tagline;
    document.getElementById('modal-project-long-desc').textContent = data.longDesc;
    document.getElementById('modal-project-learnings').textContent = data.learnings;
    
    document.getElementById('modal-spec-env').textContent = data.specEnv;
    document.getElementById('modal-spec-class').textContent = data.specClass;
    document.getElementById('modal-spec-sync').textContent = data.specSync;
    
    // Tech pills cloud
    const techCloud = document.getElementById('modal-tech-cloud');
    techCloud.innerHTML = '';
    data.tech.forEach(t => {
      const badge = document.createElement('span');
      badge.className = 'project-tech-badge';
      badge.textContent = t;
      techCloud.appendChild(badge);
    });

    // Modal CTA links
    const linksBox = document.getElementById('modal-links-box');
    linksBox.innerHTML = '';
    data.links.forEach(l => {
      const anchor = document.createElement('a');
      anchor.href = l.url;
      anchor.className = 'btn-primary project-link-item';
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      anchor.innerHTML = `${l.icon} <span>${l.label}</span>`;
      linksBox.appendChild(anchor);
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent underlying page scroll
    
    // Focus close button inside modal
    setTimeout(() => modalClose.focus(), 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }
}

/* ==========================================================================
   7. CONTACT FORM ASYNC SIMULATOR & VALIDATIONS
   ========================================================================== */
/* ==========================================================================
   7. CONTACT FORM REALIZATION & VALIDATIONS (Web3Forms Native Integration)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  // --- NATIVE WORKSPACE CONFIGURATION ---
  // To enable direct email delivery to your GMail inbox for FREE:
  // 1. Visit https://web3forms.com and request a free Access Key.
  // 2. Paste your Access Key below.
  const WEB3FORMS_ACCESS_KEY = "e2b5224c-c266-40e5-a697-07c58b554262"; // E.g. "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"

  if (!WEB3FORMS_ACCESS_KEY) {
    console.warn(
      "CONTACT SYSTEM: Currently running in simulation mode. " +
      "To receive direct emails, register at web3forms.com and configure WEB3FORMS_ACCESS_KEY in index.js!"
    );
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    // Simple robust validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
      showStatus("All fields are required coordinates.", "error");
      return;
    }

    if (!validateEmail(emailInput.value.trim())) {
      showStatus("Provided email coordinates are structurally invalid.", "error");
      return;
    }

    // Capture inputs for locking during transmission
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    
    // Set processing/loading state
    submitBtn.classList.add('processing');
    const submitBtnText = submitBtn.querySelector('span');
    const originalText = submitBtnText.textContent;
    submitBtnText.textContent = "Launching Transmission...";
    submitBtn.disabled = true;
    inputs.forEach(input => input.disabled = true);
    statusMsg.style.display = 'none';

    if (WEB3FORMS_ACCESS_KEY) {
      // LIVE TRANSMISSION VIA WEB3FORMS API (Standard FormData Post)
      try {
        const formData = new FormData(form);
        // Prepend custom email subject identifier
        formData.set("subject", `[Portfolio Connect] ${subjectInput.value.trim()}`);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          showStatus("Transmission delivered! I will sync with you shortly.", "success");
          form.reset();
        } else {
          showStatus(result.message || "Transmission failed to establish tunnel. Please use GMail directly.", "error");
        }
      } catch (error) {
        console.error("Transmission Error:", error);
        showStatus("Network socket timed out. Please try sending via GMail directly.", "error");
      } finally {
        resetButtonState();
      }
    } else {
      // BEAUTIFUL SIMULATED SYNCHRONIZATION Handshake
      setTimeout(() => {
        showStatus("Sync handshake succeeded (Simulated)! Please configure your Web3Forms Access Key in index.js to go live.", "success");
        form.reset();
        resetButtonState();
      }, 2000);
    }

    function resetButtonState() {
      submitBtn.classList.remove('processing');
      submitBtnText.textContent = originalText;
      submitBtn.disabled = false;
      inputs.forEach(input => input.disabled = false);
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showStatus(text, type) {
    statusMsg.className = `form-status-msg ${type}`;
    statusMsg.textContent = text;
    statusMsg.style.display = 'block';
    
    // Smooth scroll status message into view
    statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
