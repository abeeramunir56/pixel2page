/**
 * ===================================================================
 * PIXEL 2 PAGE — COMPLETE CONSOLIDATED APPLICATION ENGINE
 * ===================================================================
 * High-Fashion Digital Brutalism Engine:
 *   1. Content & Brand Data Model
 *   2. Brutalist Pixel & 'P' Custom Cursor System (No Standard Pointer)
 *   3. Kinetic 2D Hero Pixel Canvas
 *   4. Interactive Pixel System Matrix (60 Pixels)
 *   5. Dynamic View Renders & Controllers
 *   6. Direct Inquiry Form Intake
 *
 * All logic consolidated into a single zero-dependency module.
 */

/* ===================================================================
   1. BRAND & EDITORIAL CONTENT DATA
   =================================================================== */
export const brand = {
  name: "PIXEL 2 PAGE",
  shortName: "P2P",
  tagline: "WE BUILD. YOU GROW.",
  credo: "You bring the vision. We build the unfair advantage.",
  subline: "Websites, bespoke platforms, full-stack architecture, and growth systems built for brands that refuse to look ordinary.",
  systemStamp: "P2P / SYS.2025 // EDITION 01",
  coordinates: "GLOBAL STUDIO // 40.7128° N, 74.0060° W",
  contactEmail: "hello@pixel2page.com",
  talalEmail: "talal@pixel2page.com",
  saadEmail: "saad@pixel2page.com",
  socials: [
    { label: "LINKEDIN", url: "https://linkedin.com" },
    { label: "INSTAGRAM", url: "https://instagram.com" }
  ]
};

export const tickerPhrases = [
  "PIXEL 2 PAGE",
  "WE BUILD. YOU GROW.",
  "HIGH-TICKET WEB ARCHITECTURE",
  "BESPOKE WEB PLATFORMS",
  "ZERO TEMPLATES",
  "DIGITAL EDITORIAL CRAFT",
  "CONVERSION ENGINEERING",
  "SUB-SECOND LATENCY"
];

export const disciplines = [
  {
    num: "01",
    id: "web-engineering",
    title: "WEB ARCHITECTURE",
    tagline: "ZERO TEMPLATES. SUB-SECOND SPEED.",
    desc: "Custom-engineered web flagships, headless frontends, and bespoke digital platforms built with zero bloat. We write clean, resilient code engineered for ruthless conversion and speed.",
    deliverables: ["Custom Full-Stack Builds", "Core Web Vitals 100/100", "Micro-Interactions", "Custom CMS & APIs"],
    stat: "0.4s",
    statLabel: "AVG TIME TO INTERACTIVE"
  },
  {
    num: "02",
    id: "creative-direction",
    title: "UI / UX & IDENTITY",
    tagline: "HIGH-FASHION DIGITAL DESIGN.",
    desc: "Visual identities that demand respect. We blend editorial typography, asymmetrical layouts, and tactile interface design to make your brand impossible to ignore.",
    deliverables: ["Complete Design Systems", "High-Fidelity Prototypes", "Frictionless Checkout", "Tactile UI Motion"],
    stat: "3.4x",
    statLabel: "AVERAGE SESSION LIFT"
  },
  {
    num: "03",
    id: "bespoke-platforms",
    title: "BESPOKE PLATFORMS",
    tagline: "MISSION-CRITICAL WEB SYSTEMS.",
    desc: "Custom web applications, client portals, real-time data engines, and resilient API architectures built to scale without third-party SaaS limitations or bloated subscriptions.",
    deliverables: ["Custom Web Applications", "Client Portals & Dashboards", "High-Volume REST / GraphQL APIs", "Sub-Second Database Architecture"],
    stat: "99.99%",
    statLabel: "UPTIME & RELIABILITY"
  },
  {
    num: "04",
    id: "algorithmic-growth",
    title: "GROWTH & ATTRIBUTION",
    tagline: "CUSTOMER ACQUISITION ENGINES.",
    desc: "Performance marketing without vanity metrics. Full-funnel acquisition, paid media architecture, and retention systems built to scale enterprise revenue.",
    deliverables: ["High-Converting Landers", "Attribution Modeling", "Omni-Channel Retargeting", "ROAS Dashboards"],
    stat: "+184%",
    statLabel: "CHECKOUT CONVERSION"
  },
  {
    num: "05",
    id: "technical-seo",
    title: "ALGORITHMIC SEO",
    tagline: "ORGANIC MARKET DOMINANCE.",
    desc: "Engineered search authority that survives algorithm updates. Semantic JSON-LD schema, topical entity networks, and technical server-side speed optimization.",
    deliverables: ["Topical Entity Graph", "Core Web Vitals Audit", "Programmatic Architecture", "High-Intent Keywords"],
    stat: "99+",
    statLabel: "TECHNICAL SPEED SCORE"
  }
];

export const selectedWork = [
  {
    index: "01",
    id: "indus-couture",
    title: "INDUS COUTURE",
    category: "HAUTE E-COMMERCE / KARACHI",
    year: "2025",
    client: "Indus Apparel Group Pakistan",
    heroImage: "/assets/portfolio_watch.jpg",
    problem: "Sluggish 5.4s WooCommerce storefront causing 76% cart abandonment on luxury bridal and prêt collections.",
    solution: "Engineered a headless sub-second digital flagship with custom currency toggles, high-fidelity fabric zoom, and zero-drop checkout.",
    impact: "+210% checkout conversion lift. ₨85M+ transacted in first quarter.",
    tags: ["Headless Next.js", "Sub-Second Edge", "Custom Checkout", "High-Fashion UI"]
  },
  {
    index: "02",
    id: "crescent-freight",
    title: "CRESCENT FREIGHT",
    category: "CUSTOM ENTERPRISE ERP / LAHORE",
    year: "2025",
    client: "Crescent Logistics Pakistan",
    heroImage: "/assets/portfolio_estate.jpg",
    problem: "Fragmented spreadsheets and delayed dispatch updates causing operational friction across 40+ national distribution hubs.",
    solution: "Constructed a custom enterprise ERP with real-time transit telemetry, automated dispatch manifests, and client tracking portals.",
    impact: "140+ manual hours eliminated weekly. Zero system latency under peak shipment volume.",
    tags: ["Custom ERP", "Python / SQL", "Realtime WebSockets", "Fleet Telemetry"]
  },
  {
    index: "03",
    id: "metro-commerce-pk",
    title: "METRO COMMERCE PK",
    category: "B2B WHOLESALE PLATFORM / ISLAMABAD",
    year: "2025",
    client: "Metro Retail & Distribution PK",
    heroImage: "/assets/portfolio_ai.jpg",
    problem: "Wholesale commercial buyers struggling with sluggish catalog filtering across 15,000+ national distributor SKUs.",
    solution: "Architected a high-density, sub-50ms instant search catalog with automated credit terms, invoice generation, and wholesale bulk checkout.",
    impact: "3.8x faster order processing. ₨120M annual B2B transaction flow.",
    tags: ["High-Density UI", "Instant Search", "Bespoke B2B Portal", "Node Backend"]
  },
  {
    index: "04",
    id: "apex-chrono",
    title: "APEX CHRONO",
    category: "HAUTE HORLOGERIE / SWITZERLAND",
    year: "2025",
    client: "Apex Watchmakers Geneva (Global)",
    heroImage: "/assets/portfolio_audio.jpg",
    problem: "A Geneva watchmaker needed a high-prestige digital flagship conveying the tactile weight of $15,000+ bespoke timepieces.",
    solution: "Engineered an in-browser 3D interactive timepiece configurator, editorial brutalist layouts, and lossless media previews.",
    impact: "+184% mobile checkout lift. $1.8M gross transacted in first 90 days.",
    tags: ["Three.js 3D", "Stripe Global", "Editorial Design", "Sub-Second Latency"]
  }
];

export const founders = [
  {
    id: "talal",
    name: "M. TALAL MAKKI",
    role: "FOUNDER",
    title: "CHIEF ARCHITECT & SYSTEM LEAD",
    codeStamp: "P2P_ARCH // 01",
    avatar: "/assets/founder_talal.jpg",
    intro: "Engineering the foundation. M. Talal Makki obsesses over sub-second latency, procedural web architecture, and backend systems that never break under million-user traffic spikes.",
    doctrine: "“If a website is slow, generic, or built from a cheap template, you're disrespecting your own business. We engineer digital assets that perform like weapons.”",
    email: "talal@pixel2page.com",
    focus: ["System Architecture", "Performance Engineering", "Full-Stack Code", "Cloud Infrastructure"]
  },
  {
    id: "saad",
    name: "SAAD CHAUDHRY",
    role: "CO-FOUNDER",
    title: "CREATIVE DIRECTOR & STRATEGY",
    codeStamp: "P2P_CRTV // 02",
    avatar: "/assets/founder_saad.jpg",
    intro: "Directing the visual voice. Saad Chaudhry dictates brand identity, editorial brutalism, and ruthless conversion psychology that transforms unknown startups into category leaders.",
    doctrine: "“A website should make people feel something the second it opens. If you look like everyone else in your industry, you've already lost the battle.”",
    email: "saad@pixel2page.com",
    focus: ["Creative Direction", "Editorial Typography", "Brand Identity", "Growth Architecture"]
  }
];

export const team = [
  {
    index: "01",
    name: "NOOR E HIRA",
    role: "FULL-STACK DEVELOPER",
    specialty: "Full-Stack skilled developer in React.js, Next.js frontend, and Python, SQL as main backend for building fast, scalable applications and custom-built ERPs."
  },
  {
    index: "02",
    name: "ABEERA MUNEER",
    role: "FULL-STACK DEVELOPER",
    specialty: "Passionate full-stack developer that turns ideas into functional, responsive, and scalable web applications through smart coding and innovation."
  },
  {
    index: "03",
    name: "MAYRA RIZWAN",
    role: "AI INTEGRATION & MCP",
    specialty: "Working at Pixel2Page on AI integration and MCP. Connects AI models with tools and real systems to build smart automated workflows for business."
  },
  {
    index: "04",
    name: "LARAIB",
    role: "UI/UX & FRONTEND",
    specialty: "Crafting bespoke visual identities, editorial layouts, micro-interactions, and conversion-focused design systems for digital platforms."
  },
  {
    index: "05",
    name: "ABIDA ZIA",
    role: "RESEARCHER & STRATEGIST",
    specialty: "In-depth market research, architectural feasibility analysis, user journey telemetry, and competitive benchmarking for high-impact web deployments."
  }
];

export const studioObjects = [
  {
    num: "01",
    name: "BESPOKE WEBSITES",
    summary: "Handcrafted digital flagships tailored to your exact brand identity.",
    specs: ["Custom HTML/CSS/JS", "100/100 Core Web Vitals", "Sub-second CDN edge routing"]
  },
  {
    num: "02",
    name: "DATA DASHBOARDS",
    summary: "High-density executive interfaces built for speed and real-time operational clarity.",
    specs: ["Real-time WebSocket feeds", "Clean visual telemetry", "Granular role permissions"]
  },
  {
    num: "03",
    name: "CRMS & CLIENT PORTALS",
    summary: "Custom customer management systems without the recurring per-seat SaaS tax.",
    specs: ["Custom pipeline stages", "Direct WhatsApp & Email sync", "Automated lead intake"]
  },
  {
    num: "04",
    name: "CUSTOM CLIENT PORTALS",
    summary: "Private, high-security client dashboards and management workstations.",
    specs: ["Role-based access security", "Real-time document exchange", "Bespoke activity feeds"]
  },
  {
    num: "05",
    name: "CONNECTED AUTOMATIONS",
    summary: "Integrated webhook networks that eradicate manual data entry across all apps.",
    specs: ["API & Webhook infrastructure", "Multi-app data sync", "Instant phone & Slack alerts"]
  },
  {
    num: "06",
    name: "HIGH-TICKET E-COMMERCE",
    summary: "Custom checkout systems engineered to maximize high-ticket cart completion.",
    specs: ["Custom Stripe Elements", "Bespoke product configurators", "Optimized 2-step checkout"]
  }
];

export const processStages = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "DECONSTRUCTION",
    desc: "We tear down your current setup, analyze competitor vulnerabilities, and define the exact digital problem to solve."
  },
  {
    step: "02",
    title: "STRATEGIZE",
    subtitle: "CONVERSION ARCHITECTURE",
    desc: "We map user journeys, page hierarchy, and revenue funnels before a single line of code is written."
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "EDITORIAL BRUTALISM",
    desc: "We craft an uncopyable visual identity. Custom typography, grid systems, and high-status digital aesthetics."
  },
  {
    step: "04",
    title: "BUILD",
    subtitle: "CLEAN ENGINEERING",
    desc: "Zero-bloat code. Sub-second load times, bespoke backend logic, and bulletproof responsive performance."
  },
  {
    step: "05",
    title: "LAUNCH",
    subtitle: "MARKET DOMINANCE",
    desc: "Rigorous stress testing, SEO verification, domain routing, and handing over a digital system that converts from day one."
  }
];

/* ===================================================================
   2. BRUTALIST PIXEL & 'P' CUSTOM CURSOR (NO STANDARD POINTER)
   =================================================================== */
export function initCursor() {
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.innerWidth < 1024;
  if (isTouch) {
    document.body.classList.add('no-custom-cursor');
    return;
  }

  document.documentElement.classList.add('custom-cursor-active');

  const cursorWrap = document.createElement('div');
  cursorWrap.className = 'brutalist-cursor-wrap';
  cursorWrap.innerHTML = `
    <div class="b-cursor-pixel" id="cursorPixel">
      <span class="pixel-p-glyph">P</span>
    </div>
    <div class="b-cursor-frame" id="cursorFrame">
      <span class="b-cursor-label" id="cursorLabel"></span>
    </div>
  `;
  document.body.appendChild(cursorWrap);

  const pixel = document.getElementById('cursorPixel');
  const frame = document.getElementById('cursorFrame');
  const label = document.getElementById('cursorLabel');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let frameX = mouseX;
  let frameY = mouseY;
  let magneticTarget = null;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    pixel.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  function render() {
    let targetX = mouseX;
    let targetY = mouseY;

    if (magneticTarget) {
      const rect = magneticTarget.getBoundingClientRect();
      targetX = rect.left + rect.width / 2;
      targetY = rect.top + rect.height / 2;
    }

    frameX = lerp(frameX, targetX, 0.22);
    frameY = lerp(frameY, targetY, 0.22);

    frame.style.transform = `translate3d(${frameX}px, ${frameY}px, 0)`;

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('[data-cursor], a, button, .magnetic-btn, .project-card-editorial, .pixel-cell');
    if (!el) return;

    pixel.classList.add('hovering');
    const tag = el.getAttribute('data-cursor');
    if (tag) {
      frame.classList.add('expanded');
      label.textContent = `[P] ${tag.toUpperCase()}`;
    } else if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.classList.contains('magnetic-btn') || el.classList.contains('pixel-cell')) {
      frame.classList.add('hovered');
      label.textContent = '[P]';
      if (el.classList.contains('magnetic-btn')) {
        magneticTarget = el;
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    const el = e.target.closest('[data-cursor], a, button, .magnetic-btn, .project-card-editorial, .pixel-cell');
    if (!el) return;

    pixel.classList.remove('hovering');
    frame.className = 'b-cursor-frame';
    label.textContent = '';
    magneticTarget = null;
  });

  window.addEventListener('mousedown', () => {
    pixel.classList.add('clicking');
    frame.classList.add('clicking');
  });

  window.addEventListener('mouseup', () => {
    pixel.classList.remove('clicking');
    frame.classList.remove('clicking');
  });
}

/* ===================================================================
   3. KINETIC 2D HERO PIXEL CANVAS
   =================================================================== */
export function initHeroCanvas(canvasId = 'heroCanvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    initParticles();
  }

  let particles = [];
  const spacing = 22;

  class KineticPixel {
    constructor(originX, originY, isTarget = false) {
      this.originX = originX;
      this.originY = originY;
      this.x = originX + (Math.random() - 0.5) * 60;
      this.y = originY + (Math.random() - 0.5) * 60;
      this.vx = 0;
      this.vy = 0;
      this.size = isTarget ? 3.5 : 2;
      this.isTarget = isTarget;
      this.baseAlpha = isTarget ? 0.85 : 0.25;
      this.alpha = this.baseAlpha;
    }

    update(mx, my, isHovered) {
      const dxOrigin = this.originX - this.x;
      const dyOrigin = this.originY - this.y;
      this.vx += dxOrigin * 0.055;
      this.vy += dyOrigin * 0.055;

      if (isHovered) {
        const dxMouse = this.x - mx;
        const dyMouse = this.y - my;
        const dist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse) || 1;
        const maxDist = 140;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 12;
          this.vx += (dxMouse / dist) * force;
          this.vy += (dyMouse / dist) * force;
          this.alpha = 1;
        } else {
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
        }
      } else {
        this.alpha += (this.baseAlpha - this.alpha) * 0.05;
      }

      this.vx *= 0.82;
      this.vy *= 0.82;

      this.x += this.vx;
      this.y += this.vy;
    }

    draw() {
      if (this.isTarget) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      } else {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.alpha * 0.7})`;
        ctx.fillRect(this.x - 1, this.y - 1, 2, 2);
      }
    }
  }

  function initParticles() {
    particles = [];
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);
    const offsetX = (width - cols * spacing) / 2;
    const offsetY = (height - rows * spacing) / 2;

    const offscreen = document.createElement('canvas');
    offscreen.width = cols;
    offscreen.height = rows;
    const offCtx = offscreen.getContext('2d');
    offCtx.fillStyle = '#ffffff';
    offCtx.font = `900 ${Math.floor(rows * 0.48)}px sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText('P2P', cols / 2, rows / 2);

    const imgData = offCtx.getImageData(0, 0, cols, rows).data;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * spacing;
        const y = offsetY + r * spacing;
        const idx = (r * cols + c) * 4;
        const isTarget = imgData[idx + 3] > 120;

        particles.push(new KineticPixel(x, y, isTarget));
      }
    }
  }

  resize();
  window.addEventListener('resize', resize);

  let mouse = { x: -1000, y: -1000, active: false };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom
    ) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    } else {
      mouse.active = false;
    }
  }, { passive: true });

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    particles.forEach(p => {
      const dx = p.x - clickX;
      const dy = p.y - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist < 260) {
        const power = (260 - dist) * 0.45;
        p.vx += (dx / dist) * power;
        p.vy += (dy / dist) * power;
      }
    });
  });

  function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, width, height);

    if (mouse.active) {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(mouse.x, 0); ctx.lineTo(mouse.x, height);
      ctx.moveTo(0, mouse.y); ctx.lineTo(width, mouse.y);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(mouse.x - 3, mouse.y - 3, 6, 6);
    }

    particles.forEach(p => {
      p.update(mouse.x, mouse.y, mouse.active);
      p.draw();
    });
  }

  render();
}

/* ===================================================================
   4. INTERACTIVE PIXEL SYSTEM MATRIX (60 PIXELS)
   =================================================================== */
export function initPixelSystem() {
  const gridContainer = document.getElementById('pixelMatrix');
  const disciplinePills = document.querySelectorAll('.pixel-keyword-btn');
  const activeWordEl = document.getElementById('pixelActiveWord');
  const livePreviewEl = document.getElementById('pixelLivePagePreview');
  const counterEl = document.getElementById('pixelActivatedCount');

  if (!gridContainer) return;

  const disciplines = [
    { word: "WEB", desc: "Custom, zero-bloat web development and high-speed architecture.", layer: "layer-web" },
    { word: "DESIGN", desc: "Editorial visual hierarchy, crisp typography, and intentional composition.", layer: "layer-design" },
    { word: "CODE", desc: "Handcrafted HTML, CSS, JavaScript, and resilient database backends.", layer: "layer-code" },
    { word: "SEO", desc: "Semantic structure, Core Web Vitals 100/100, and organic authority.", layer: "layer-seo" },
    { word: "SYSTEMS", desc: "Mission-critical platform engineering, robust API grids, and resilient infrastructure.", layer: "layer-systems" },
    { word: "AUTOMATION", desc: "Connected webhook pipelines that eradicate manual work.", layer: "layer-auto" },
    { word: "GROWTH", desc: "Conversion engineering that turns visitors into high-ticket clients.", layer: "layer-growth" }
  ];

  const totalCols = 10;
  const totalRows = 6;
  const totalCells = totalCols * totalRows;

  const wordAssignments = {
    4: "WEB",
    13: "DESIGN",
    25: "CODE",
    32: "SEO",
    38: "SYSTEMS",
    46: "AUTOMATION",
    54: "GROWTH"
  };

  let activatedPixels = new Set();
  gridContainer.innerHTML = '';

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'pixel-cell';
    cell.setAttribute('data-index', i);

    if (wordAssignments[i]) {
      cell.classList.add('has-word');
      cell.setAttribute('data-word', wordAssignments[i]);
      cell.innerHTML = `<span class="pixel-glyph-text">${wordAssignments[i]}</span>`;
    }

    cell.addEventListener('mouseenter', () => {
      activatePixel(cell, i);
    });

    cell.addEventListener('click', () => {
      activatePixel(cell, i);
    });

    gridContainer.appendChild(cell);
  }

  function activatePixel(cell, index) {
    cell.classList.add('active');
    activatedPixels.add(index);

    if (counterEl) {
      counterEl.textContent = `${activatedPixels.size}/${totalCells} PIXELS ACTIVE`;
    }

    const assignedWord = wordAssignments[index] || cell.getAttribute('data-word');
    if (assignedWord) {
      selectDiscipline(assignedWord);
    }
  }

  function selectDiscipline(word) {
    const item = disciplines.find(d => d.word === word);
    if (!item) return;

    if (activeWordEl) {
      activeWordEl.innerHTML = `<span style="color: var(--accent-electric); font-weight: 800;">${item.word}</span> — ${item.desc}`;
    }

    disciplinePills.forEach(pill => {
      if (pill.getAttribute('data-word') === word) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    if (livePreviewEl) {
      livePreviewEl.className = 'page-synthesis-mockup ' + item.layer;
    }
  }

  disciplinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const w = pill.getAttribute('data-word');
      selectDiscipline(w);

      const targetCell = gridContainer.querySelector(`[data-word="${w}"]`);
      if (targetCell) {
        targetCell.classList.add('active');
        const idx = parseInt(targetCell.getAttribute('data-index'), 10);
        activatedPixels.add(idx);
        if (counterEl) counterEl.textContent = `${activatedPixels.size}/${totalCells} PIXELS ACTIVE`;
      }
    });
  });

  selectDiscipline("WEB");
}

/* ===================================================================
   5. MAIN APPLICATION LIFECYCLE CONTROLLER
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Fast Branded Loader (~1.5s)
  initLoader();

  // 2. Custom Brutalist Pixel & 'P' Cursor
  initCursor();

  // 3. Mobile Navigation Drawer
  initMobileNav();

  // 4. Kinetic Hero Pixel Canvas
  initHeroCanvas('heroCanvas');

  // 5. Render What We Do (5 Disciplines)
  renderDisciplines();

  // 6. Signature Pixel System Matrix
  initPixelSystem();

  // 7. Render Asymmetric Work Portfolio
  renderWork();

  // 8. Render Founders (Equal Size Blocks)
  renderFounders();

  // 9. Render Team (5 Members)
  renderTeam();

  // 10. Render Studio Objects
  renderStudioObjects();

  // 11. Render Process
  renderProcess();

  // 12. Direct Inquiry Form Handler
  initInquiryForm();
});

/* ===================================================================
   6. VIEW CONTROLLERS & RENDERS
   =================================================================== */
function initLoader() {
  const loader = document.getElementById('loadingScreen');
  if (!loader) return;

  const isCached = sessionStorage.getItem('p2p_brutal_visited');
  const delay = isCached ? 800 : 1500;

  setTimeout(() => {
    loader.classList.add('loaded');
    sessionStorage.setItem('p2p_brutal_visited', 'true');
  }, delay);

  loader.addEventListener('click', () => loader.classList.add('loaded'));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') loader.classList.add('loaded');
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const anchors = document.querySelectorAll('.mobile-anchor');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  anchors.forEach(a => {
    a.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

function renderDisciplines() {
  const container = document.getElementById('disciplineList');
  if (!container) return;

  container.innerHTML = disciplines.map(disc => `
    <div class="discipline-card-row" data-cursor="VIEW">
      <div class="disc-head">
        <h3 class="disc-title">${disc.title}</h3>
        <span class="disc-num">[${disc.num}]</span>
      </div>
      <div class="disc-tagline">${disc.tagline}</div>
      <p class="disc-desc">${disc.desc}</p>
      <div class="disc-tags">
        ${disc.deliverables.map(d => `<span class="pill-tag">${d}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderWork() {
  const container = document.getElementById('portfolioGrid');
  if (!container) return;

  container.innerHTML = selectedWork.map((item, idx) => {
    let cardClass = '';
    if (idx === 0) cardClass = 'card-dominant dog-ear';
    else if (idx === 2) cardClass = 'card-wide';

    return `
      <article class="project-card-editorial ${cardClass}" data-cursor="VIEW CASE">
        <span class="crop-mark crop-tl">+</span>
        <span class="crop-mark crop-tr">+</span>

        <div class="project-visual-frame">
          <img src="${item.heroImage}" alt="${item.title}" class="project-img-asset" loading="lazy">
        </div>

        <div class="project-details-pane">
          <div>
            <div class="project-index-spec">
              <span>PROJECT ${item.index} // ${item.category}</span>
              <span>[${item.year}]</span>
            </div>
            <h3 class="project-name-bold">${item.title}</h3>
            <p class="project-synopsis">${item.problem} ${item.solution}</p>
          </div>

          <div>
            <div class="project-metric-banner">
              <strong>RESULT:</strong> ${item.impact}
            </div>

            <div class="project-action-bar">
              <div class="disc-tags" style="margin-top: 0;">
                ${item.tags.map(t => `<span class="pill-tag">${t}</span>`).join('')}
              </div>
              <a href="#contact" class="project-inquire-link">
                INQUIRE CASE ↗
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderFounders() {
  const container = document.getElementById('foundersContainer');
  if (!container) return;

  container.innerHTML = founders.map(f => `
    <div class="founder-editorial-card dog-ear" data-cursor="${f.name}">
      <span class="crop-mark crop-tl">+</span>
      <span class="crop-mark crop-tr">+</span>
      <span class="crop-mark crop-bl">+</span>
      <span class="crop-mark crop-br">+</span>

      <div>
        <div class="founder-portrait-viewport">
          ${f.avatar ? `<img src="${f.avatar}" alt="${f.name}" class="founder-img-asset" loading="lazy">` : `<div class="founder-monogram-art">${f.name[0]}</div>`}
          <span class="founder-serial-tag">[${f.codeStamp}]</span>
        </div>

        <h3 class="founder-hero-name">${f.name}</h3>
        <div class="founder-role-title">${f.role} // ${f.title}</div>
        <p class="founder-bio-paragraph">${f.intro}</p>

        <div class="founder-quote-callout">
          ${f.doctrine}
        </div>

        <div class="disc-tags" style="margin-bottom: 2rem;">
          ${f.focus.map(tag => `<span class="pill-tag">${tag}</span>`).join('')}
        </div>
      </div>

      <a href="mailto:${f.email}" class="founder-reach-btn">
        DIRECT REACH // ${f.email} ↗
      </a>
    </div>
  `).join('');
}

function renderTeam() {
  const container = document.getElementById('teamContainer');
  if (!container) return;

  container.innerHTML = team.map(m => `
    <div class="team-member-cell" data-cursor="${m.role}">
      <span class="crop-mark crop-tl">+</span>
      <span class="crop-mark crop-tr">+</span>

      <div>
        <div class="team-index-tag">[MEMBER ${m.index}]</div>
        <h4 class="team-person-name">${m.name}</h4>
        <div class="team-person-role">${m.role}</div>
      </div>
      <p class="team-person-specialty">${m.specialty}</p>
    </div>
  `).join('');
}

function renderStudioObjects() {
  const container = document.getElementById('studioObjectsContainer');
  if (!container) return;

  container.innerHTML = studioObjects.map(obj => `
    <div class="studio-object-card" data-cursor="OBJECT">
      <div>
        <div class="obj-num">[SPEC_${obj.num}]</div>
        <h3 class="obj-title">${obj.name}</h3>
        <p class="obj-summary">${obj.summary}</p>
      </div>

      <ul class="obj-specs">
        ${obj.specs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProcess() {
  const container = document.getElementById('processContainer');
  if (!container) return;

  container.innerHTML = processStages.map(p => `
    <div class="process-cell-box">
      <div>
        <div class="process-big-index">${p.step}</div>
        <h3 class="process-stage-name">${p.title}</h3>
        <div class="font-mono" style="font-size: 0.75rem; color: var(--accent-electric); margin-bottom: 0.75rem;">
          [${p.subtitle}]
        </div>
      </div>
      <p class="process-stage-desc">${p.desc}</p>
    </div>
  `).join('');
}

function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value;
    const business = document.getElementById('clientBusiness').value;
    const email = document.getElementById('clientEmail').value;
    const budget = document.getElementById('clientBudget').value;
    const needs = document.getElementById('clientNeeds').value;
    const message = document.getElementById('clientMessage').value;

    form.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: left;">
        <span class="tag-system">INTAKE TRANSMITTED</span>
        <h3 style="font-size: 2.2rem; font-weight: 900; color: #fff; margin: 0.5rem 0 1rem; letter-spacing: -0.03em;">
          BLUEPRINT RECEIVED.
        </h3>
        <p style="color: var(--text-secondary); line-height: 1.6; font-size: 1.05rem; margin-bottom: 1.5rem;">
          Thank you, <strong>${name}</strong>. Our leadership has received your request for <strong>${business}</strong> and will reply directly to <strong>${email}</strong> within 12 hours.
        </p>
        <div class="font-mono" style="font-size: 0.82rem; color: var(--accent-electric); margin-bottom: 2rem; border-left: 3px solid var(--accent-electric); padding-left: 1.25rem;">
          EST. BUDGET: ${budget} // SCOPE: ${needs || 'Flagship Web Platform'}
        </div>
        <a href="mailto:hello@pixel2page.com?subject=Project Inquiry for ${encodeURIComponent(business)}&body=${encodeURIComponent('Client: ' + name + '\nNeeds: ' + needs + '\nBudget: ' + budget + '\nDetails: ' + message)}" class="btn-brutal-primary" style="display: inline-flex;">
          CONFIRM VIA DIRECT EMAIL ↗
        </a>
      </div>
    `;
  });
}
