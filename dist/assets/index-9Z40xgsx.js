(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const L=[{num:"01",id:"web-engineering",title:"WEB ARCHITECTURE",tagline:"ZERO TEMPLATES. SUB-SECOND SPEED.",desc:"Custom-engineered web flagships, headless frontends, and bespoke digital platforms built with zero bloat. We write clean, resilient code engineered for ruthless conversion and speed.",deliverables:["Custom Full-Stack Builds","Core Web Vitals 100/100","Micro-Interactions","Custom CMS & APIs"],stat:"0.4s",statLabel:"AVG TIME TO INTERACTIVE"},{num:"02",id:"creative-direction",title:"UI / UX & IDENTITY",tagline:"HIGH-FASHION DIGITAL DESIGN.",desc:"Visual identities that demand respect. We blend editorial typography, asymmetrical layouts, and tactile interface design to make your brand impossible to ignore.",deliverables:["Complete Design Systems","High-Fidelity Prototypes","Frictionless Checkout","Tactile UI Motion"],stat:"3.4x",statLabel:"AVERAGE SESSION LIFT"},{num:"03",id:"bespoke-platforms",title:"BESPOKE PLATFORMS",tagline:"MISSION-CRITICAL WEB SYSTEMS.",desc:"Custom web applications, client portals, real-time data engines, and resilient API architectures built to scale without third-party SaaS limitations or bloated subscriptions.",deliverables:["Custom Web Applications","Client Portals & Dashboards","High-Volume REST / GraphQL APIs","Sub-Second Database Architecture"],stat:"99.99%",statLabel:"UPTIME & RELIABILITY"},{num:"04",id:"algorithmic-growth",title:"GROWTH & ATTRIBUTION",tagline:"CUSTOMER ACQUISITION ENGINES.",desc:"Performance marketing without vanity metrics. Full-funnel acquisition, paid media architecture, and retention systems built to scale enterprise revenue.",deliverables:["High-Converting Landers","Attribution Modeling","Omni-Channel Retargeting","ROAS Dashboards"],stat:"+184%",statLabel:"CHECKOUT CONVERSION"},{num:"05",id:"technical-seo",title:"ALGORITHMIC SEO",tagline:"ORGANIC MARKET DOMINANCE.",desc:"Engineered search authority that survives algorithm updates. Semantic JSON-LD schema, topical entity networks, and technical server-side speed optimization.",deliverables:["Topical Entity Graph","Core Web Vitals Audit","Programmatic Architecture","High-Intent Keywords"],stat:"99+",statLabel:"TECHNICAL SPEED SCORE"}],w=[{index:"01",id:"indus-couture",title:"INDUS COUTURE",category:"HAUTE E-COMMERCE / KARACHI",year:"2025",client:"Indus Apparel Group Pakistan",heroImage:"/assets/portfolio_watch.jpg",problem:"Sluggish 5.4s WooCommerce storefront causing 76% cart abandonment on luxury bridal and prêt collections.",solution:"Engineered a headless sub-second digital flagship with custom currency toggles, high-fidelity fabric zoom, and zero-drop checkout.",impact:"+210% checkout conversion lift. ₨85M+ transacted in first quarter.",tags:["Headless Next.js","Sub-Second Edge","Custom Checkout","High-Fashion UI"]},{index:"02",id:"crescent-freight",title:"CRESCENT FREIGHT",category:"CUSTOM ENTERPRISE ERP / LAHORE",year:"2025",client:"Crescent Logistics Pakistan",heroImage:"/assets/portfolio_estate.jpg",problem:"Fragmented spreadsheets and delayed dispatch updates causing operational friction across 40+ national distribution hubs.",solution:"Constructed a custom enterprise ERP with real-time transit telemetry, automated dispatch manifests, and client tracking portals.",impact:"140+ manual hours eliminated weekly. Zero system latency under peak shipment volume.",tags:["Custom ERP","Python / SQL","Realtime WebSockets","Fleet Telemetry"]},{index:"03",id:"metro-commerce-pk",title:"METRO COMMERCE PK",category:"B2B WHOLESALE PLATFORM / ISLAMABAD",year:"2025",client:"Metro Retail & Distribution PK",heroImage:"/assets/portfolio_ai.jpg",problem:"Wholesale commercial buyers struggling with sluggish catalog filtering across 15,000+ national distributor SKUs.",solution:"Architected a high-density, sub-50ms instant search catalog with automated credit terms, invoice generation, and wholesale bulk checkout.",impact:"3.8x faster order processing. ₨120M annual B2B transaction flow.",tags:["High-Density UI","Instant Search","Bespoke B2B Portal","Node Backend"]},{index:"04",id:"apex-chrono",title:"APEX CHRONO",category:"HAUTE HORLOGERIE / SWITZERLAND",year:"2025",client:"Apex Watchmakers Geneva (Global)",heroImage:"/assets/portfolio_audio.jpg",problem:"A Geneva watchmaker needed a high-prestige digital flagship conveying the tactile weight of $15,000+ bespoke timepieces.",solution:"Engineered an in-browser 3D interactive timepiece configurator, editorial brutalist layouts, and lossless media previews.",impact:"+184% mobile checkout lift. $1.8M gross transacted in first 90 days.",tags:["Three.js 3D","Stripe Global","Editorial Design","Sub-Second Latency"]}],R=[{id:"talal",name:"M. TALAL MAKKI",role:"FOUNDER",title:"CHIEF ARCHITECT & SYSTEM LEAD",codeStamp:"P2P_ARCH // 01",avatar:"/assets/founder_talal.jpg",intro:"Engineering the foundation. M. Talal Makki obsesses over sub-second latency, procedural web architecture, and backend systems that never break under million-user traffic spikes.",doctrine:"“If a website is slow, generic, or built from a cheap template, you're disrespecting your own business. We engineer digital assets that perform like weapons.”",email:"talal@pixel2page.com",focus:["System Architecture","Performance Engineering","Full-Stack Code","Cloud Infrastructure"]},{id:"saad",name:"SAAD CHAUDHRY",role:"CO-FOUNDER",title:"CREATIVE DIRECTOR & STRATEGY",codeStamp:"P2P_CRTV // 02",avatar:"/assets/founder_saad.jpg",intro:"Directing the visual voice. Saad Chaudhry dictates brand identity, editorial brutalism, and ruthless conversion psychology that transforms unknown startups into category leaders.",doctrine:"“A website should make people feel something the second it opens. If you look like everyone else in your industry, you've already lost the battle.”",email:"saad@pixel2page.com",focus:["Creative Direction","Editorial Typography","Brand Identity","Growth Architecture"]}],x=[{index:"01",name:"NOOR E HIRA",role:"FULL-STACK DEVELOPER",specialty:"Full-Stack skilled developer in React.js, Next.js frontend, and Python, SQL as main backend for building fast, scalable applications and custom-built ERPs."},{index:"02",name:"ABEERA MUNEER",role:"FULL-STACK DEVELOPER",specialty:"Passionate full-stack developer that turns ideas into functional, responsive, and scalable web applications through smart coding and innovation."},{index:"03",name:"MAYRA RIZWAN",role:"AI INTEGRATION & MCP",specialty:"Working at Pixel2Page on AI integration and MCP. Connects AI models with tools and real systems to build smart automated workflows for business."},{index:"04",name:"LARAIB",role:"UI/UX & FRONTEND",specialty:"Crafting bespoke visual identities, editorial layouts, micro-interactions, and conversion-focused design systems for digital platforms."},{index:"05",name:"ABIDA ZIA",role:"RESEARCHER & STRATEGIST",specialty:"In-depth market research, architectural feasibility analysis, user journey telemetry, and competitive benchmarking for high-impact web deployments."}],O=[{num:"01",name:"BESPOKE WEBSITES",summary:"Handcrafted digital flagships tailored to your exact brand identity.",specs:["Custom HTML/CSS/JS","100/100 Core Web Vitals","Sub-second CDN edge routing"]},{num:"02",name:"DATA DASHBOARDS",summary:"High-density executive interfaces built for speed and real-time operational clarity.",specs:["Real-time WebSocket feeds","Clean visual telemetry","Granular role permissions"]},{num:"03",name:"CRMS & CLIENT PORTALS",summary:"Custom customer management systems without the recurring per-seat SaaS tax.",specs:["Custom pipeline stages","Direct WhatsApp & Email sync","Automated lead intake"]},{num:"04",name:"CUSTOM CLIENT PORTALS",summary:"Private, high-security client dashboards and management workstations.",specs:["Role-based access security","Real-time document exchange","Bespoke activity feeds"]},{num:"05",name:"CONNECTED AUTOMATIONS",summary:"Integrated webhook networks that eradicate manual data entry across all apps.",specs:["API & Webhook infrastructure","Multi-app data sync","Instant phone & Slack alerts"]},{num:"06",name:"HIGH-TICKET E-COMMERCE",summary:"Custom checkout systems engineered to maximize high-ticket cart completion.",specs:["Custom Stripe Elements","Bespoke product configurators","Optimized 2-step checkout"]}],k=[{step:"01",title:"DISCOVER",subtitle:"DECONSTRUCTION",desc:"We tear down your current setup, analyze competitor vulnerabilities, and define the exact digital problem to solve."},{step:"02",title:"STRATEGIZE",subtitle:"CONVERSION ARCHITECTURE",desc:"We map user journeys, page hierarchy, and revenue funnels before a single line of code is written."},{step:"03",title:"DESIGN",subtitle:"EDITORIAL BRUTALISM",desc:"We craft an uncopyable visual identity. Custom typography, grid systems, and high-status digital aesthetics."},{step:"04",title:"BUILD",subtitle:"CLEAN ENGINEERING",desc:"Zero-bloat code. Sub-second load times, bespoke backend logic, and bulletproof responsive performance."},{step:"05",title:"LAUNCH",subtitle:"MARKET DOMINANCE",desc:"Rigorous stress testing, SEO verification, domain routing, and handing over a digital system that converts from day one."}];function M(){if("ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<1024){document.body.classList.add("no-custom-cursor");return}document.documentElement.classList.add("custom-cursor-active");const e=document.createElement("div");e.className="brutalist-cursor-wrap",e.innerHTML=`
    <div class="b-cursor-pixel" id="cursorPixel">
      <span class="pixel-p-glyph">P</span>
    </div>
    <div class="b-cursor-frame" id="cursorFrame">
      <span class="b-cursor-label" id="cursorLabel"></span>
    </div>
  `,document.body.appendChild(e);const i=document.getElementById("cursorPixel"),o=document.getElementById("cursorFrame"),n=document.getElementById("cursorLabel");let r=window.innerWidth/2,u=window.innerHeight/2,f=r,m=u,y=null;window.addEventListener("mousemove",d=>{r=d.clientX,u=d.clientY,i.style.transform=`translate3d(${r}px, ${u}px, 0)`},{passive:!0});const b=(d,t,s)=>(1-s)*d+s*t;function l(){let d=r,t=u;if(y){const s=y.getBoundingClientRect();d=s.left+s.width/2,t=s.top+s.height/2}f=b(f,d,.22),m=b(m,t,.22),o.style.transform=`translate3d(${f}px, ${m}px, 0)`,requestAnimationFrame(l)}requestAnimationFrame(l),document.addEventListener("mouseover",d=>{const t=d.target.closest("[data-cursor], a, button, .magnetic-btn, .project-card-editorial, .pixel-cell");if(!t)return;i.classList.add("hovering");const s=t.getAttribute("data-cursor");s?(o.classList.add("expanded"),n.textContent=`[P] ${s.toUpperCase()}`):(t.tagName==="A"||t.tagName==="BUTTON"||t.classList.contains("magnetic-btn")||t.classList.contains("pixel-cell"))&&(o.classList.add("hovered"),n.textContent="[P]",t.classList.contains("magnetic-btn")&&(y=t))}),document.addEventListener("mouseout",d=>{d.target.closest("[data-cursor], a, button, .magnetic-btn, .project-card-editorial, .pixel-cell")&&(i.classList.remove("hovering"),o.className="b-cursor-frame",n.textContent="",y=null)}),window.addEventListener("mousedown",()=>{i.classList.add("clicking"),o.classList.add("clicking")}),window.addEventListener("mouseup",()=>{i.classList.remove("clicking"),o.classList.remove("clicking")})}function N(a="heroCanvas"){const e=document.getElementById(a);if(!e)return;const i=e.getContext("2d");let o,n,r=window.devicePixelRatio||1;function u(){const t=e.parentElement.getBoundingClientRect();o=t.width,n=t.height,e.width=o*r,e.height=n*r,i.scale(r,r),b()}let f=[];const m=22;class y{constructor(s,c,E=!1){this.originX=s,this.originY=c,this.x=s+(Math.random()-.5)*60,this.y=c+(Math.random()-.5)*60,this.vx=0,this.vy=0,this.size=E?3.5:2,this.isTarget=E,this.baseAlpha=E?.85:.25,this.alpha=this.baseAlpha}update(s,c,E){const v=this.originX-this.x,g=this.originY-this.y;if(this.vx+=v*.055,this.vy+=g*.055,E){const I=this.x-s,p=this.y-c,h=Math.sqrt(I*I+p*p)||1,C=140;if(h<C){const S=(1-h/C)*12;this.vx+=I/h*S,this.vy+=p/h*S,this.alpha=1}else this.alpha+=(this.baseAlpha-this.alpha)*.05}else this.alpha+=(this.baseAlpha-this.alpha)*.05;this.vx*=.82,this.vy*=.82,this.x+=this.vx,this.y+=this.vy}draw(){this.isTarget?(i.fillStyle=`rgba(255, 255, 255, ${this.alpha})`,i.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size)):(i.fillStyle=`rgba(59, 130, 246, ${this.alpha*.7})`,i.fillRect(this.x-1,this.y-1,2,2))}}function b(){f=[];const t=Math.floor(o/m),s=Math.floor(n/m),c=(o-t*m)/2,E=(n-s*m)/2,v=document.createElement("canvas");v.width=t,v.height=s;const g=v.getContext("2d");g.fillStyle="#ffffff",g.font=`900 ${Math.floor(s*.48)}px sans-serif`,g.textAlign="center",g.textBaseline="middle",g.fillText("P2P",t/2,s/2);const I=g.getImageData(0,0,t,s).data;for(let p=0;p<s;p++)for(let h=0;h<t;h++){const C=c+h*m,S=E+p*m,T=(p*t+h)*4,A=I[T+3]>120;f.push(new y(C,S,A))}}u(),window.addEventListener("resize",u);let l={x:-1e3,y:-1e3,active:!1};window.addEventListener("mousemove",t=>{const s=e.getBoundingClientRect();t.clientX>=s.left&&t.clientX<=s.right&&t.clientY>=s.top&&t.clientY<=s.bottom?(l.x=t.clientX-s.left,l.y=t.clientY-s.top,l.active=!0):l.active=!1},{passive:!0}),e.addEventListener("click",t=>{const s=e.getBoundingClientRect(),c=t.clientX-s.left,E=t.clientY-s.top;f.forEach(v=>{const g=v.x-c,I=v.y-E,p=Math.sqrt(g*g+I*I)||1;if(p<260){const h=(260-p)*.45;v.vx+=g/p*h,v.vy+=I/p*h}})});function d(){requestAnimationFrame(d),i.clearRect(0,0,o,n),l.active&&(i.strokeStyle="rgba(59, 130, 246, 0.25)",i.lineWidth=1,i.setLineDash([4,4]),i.beginPath(),i.moveTo(l.x,0),i.lineTo(l.x,n),i.moveTo(0,l.y),i.lineTo(o,l.y),i.stroke(),i.setLineDash([]),i.fillStyle="#3b82f6",i.fillRect(l.x-3,l.y-3,6,6)),f.forEach(t=>{t.update(l.x,l.y,l.active),t.draw()})}d()}function P(){const a=document.getElementById("pixelMatrix"),e=document.querySelectorAll(".pixel-keyword-btn"),i=document.getElementById("pixelActiveWord"),o=document.getElementById("pixelLivePagePreview"),n=document.getElementById("pixelActivatedCount");if(!a)return;const r=[{word:"WEB",desc:"Custom, zero-bloat web development and high-speed architecture.",layer:"layer-web"},{word:"DESIGN",desc:"Editorial visual hierarchy, crisp typography, and intentional composition.",layer:"layer-design"},{word:"CODE",desc:"Handcrafted HTML, CSS, JavaScript, and resilient database backends.",layer:"layer-code"},{word:"SEO",desc:"Semantic structure, Core Web Vitals 100/100, and organic authority.",layer:"layer-seo"},{word:"SYSTEMS",desc:"Mission-critical platform engineering, robust API grids, and resilient infrastructure.",layer:"layer-systems"},{word:"AUTOMATION",desc:"Connected webhook pipelines that eradicate manual work.",layer:"layer-auto"},{word:"GROWTH",desc:"Conversion engineering that turns visitors into high-ticket clients.",layer:"layer-growth"}],m=10*6,y={4:"WEB",13:"DESIGN",25:"CODE",32:"SEO",38:"SYSTEMS",46:"AUTOMATION",54:"GROWTH"};let b=new Set;a.innerHTML="";for(let t=0;t<m;t++){const s=document.createElement("div");s.className="pixel-cell",s.setAttribute("data-index",t),y[t]&&(s.classList.add("has-word"),s.setAttribute("data-word",y[t]),s.innerHTML=`<span class="pixel-glyph-text">${y[t]}</span>`),s.addEventListener("mouseenter",()=>{l(s,t)}),s.addEventListener("click",()=>{l(s,t)}),a.appendChild(s)}function l(t,s){t.classList.add("active"),b.add(s),n&&(n.textContent=`${b.size}/${m} PIXELS ACTIVE`);const c=y[s]||t.getAttribute("data-word");c&&d(c)}function d(t){const s=r.find(c=>c.word===t);s&&(i&&(i.innerHTML=`<span style="color: var(--accent-electric); font-weight: 800;">${s.word}</span> — ${s.desc}`),e.forEach(c=>{c.getAttribute("data-word")===t?c.classList.add("active"):c.classList.remove("active")}),o&&(o.className="page-synthesis-mockup "+s.layer))}e.forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-word");d(s);const c=a.querySelector(`[data-word="${s}"]`);if(c){c.classList.add("active");const E=parseInt(c.getAttribute("data-index"),10);b.add(E),n&&(n.textContent=`${b.size}/${m} PIXELS ACTIVE`)}})}),d("WEB")}document.addEventListener("DOMContentLoaded",()=>{$(),M(),B(),N("heroCanvas"),D(),P(),H(),U(),W(),j(),G(),F()});function $(){const a=document.getElementById("loadingScreen");if(!a)return;const i=sessionStorage.getItem("p2p_brutal_visited")?800:1500;setTimeout(()=>{a.classList.add("loaded"),sessionStorage.setItem("p2p_brutal_visited","true")},i),a.addEventListener("click",()=>a.classList.add("loaded")),window.addEventListener("keydown",o=>{o.key==="Escape"&&a.classList.add("loaded")})}function B(){const a=document.getElementById("mobileNavToggle"),e=document.getElementById("mobileNavDrawer"),i=document.querySelectorAll(".mobile-anchor");!a||!e||(a.addEventListener("click",()=>{e.classList.toggle("open")}),i.forEach(o=>{o.addEventListener("click",()=>e.classList.remove("open"))}))}function D(){const a=document.getElementById("disciplineList");a&&(a.innerHTML=L.map(e=>`
    <div class="discipline-card-row" data-cursor="VIEW">
      <div class="disc-head">
        <h3 class="disc-title">${e.title}</h3>
        <span class="disc-num">[${e.num}]</span>
      </div>
      <div class="disc-tagline">${e.tagline}</div>
      <p class="disc-desc">${e.desc}</p>
      <div class="disc-tags">
        ${e.deliverables.map(i=>`<span class="pill-tag">${i}</span>`).join("")}
      </div>
    </div>
  `).join(""))}function H(){const a=document.getElementById("portfolioGrid");a&&(a.innerHTML=w.map((e,i)=>{let o="";return i===0?o="card-dominant dog-ear":i===2&&(o="card-wide"),`
      <article class="project-card-editorial ${o}" data-cursor="VIEW CASE">
        <span class="crop-mark crop-tl">+</span>
        <span class="crop-mark crop-tr">+</span>

        <div class="project-visual-frame">
          <img src="${e.heroImage}" alt="${e.title}" class="project-img-asset" loading="lazy">
        </div>

        <div class="project-details-pane">
          <div>
            <div class="project-index-spec">
              <span>PROJECT ${e.index} // ${e.category}</span>
              <span>[${e.year}]</span>
            </div>
            <h3 class="project-name-bold">${e.title}</h3>
            <p class="project-synopsis">${e.problem} ${e.solution}</p>
          </div>

          <div>
            <div class="project-metric-banner">
              <strong>RESULT:</strong> ${e.impact}
            </div>

            <div class="project-action-bar">
              <div class="disc-tags" style="margin-top: 0;">
                ${e.tags.map(n=>`<span class="pill-tag">${n}</span>`).join("")}
              </div>
              <a href="#contact" class="project-inquire-link">
                INQUIRE CASE ↗
              </a>
            </div>
          </div>
        </div>
      </article>
    `}).join(""))}function U(){const a=document.getElementById("foundersContainer");a&&(a.innerHTML=R.map(e=>`
    <div class="founder-editorial-card dog-ear" data-cursor="${e.name}">
      <span class="crop-mark crop-tl">+</span>
      <span class="crop-mark crop-tr">+</span>
      <span class="crop-mark crop-bl">+</span>
      <span class="crop-mark crop-br">+</span>

      <div>
        <div class="founder-portrait-viewport">
          ${e.avatar?`<img src="${e.avatar}" alt="${e.name}" class="founder-img-asset" loading="lazy">`:`<div class="founder-monogram-art">${e.name[0]}</div>`}
          <span class="founder-serial-tag">[${e.codeStamp}]</span>
        </div>

        <h3 class="founder-hero-name">${e.name}</h3>
        <div class="founder-role-title">${e.role} // ${e.title}</div>
        <p class="founder-bio-paragraph">${e.intro}</p>

        <div class="founder-quote-callout">
          ${e.doctrine}
        </div>

        <div class="disc-tags" style="margin-bottom: 2rem;">
          ${e.focus.map(i=>`<span class="pill-tag">${i}</span>`).join("")}
        </div>
      </div>

      <a href="mailto:${e.email}" class="founder-reach-btn">
        DIRECT REACH // ${e.email} ↗
      </a>
    </div>
  `).join(""))}function W(){const a=document.getElementById("teamContainer");a&&(a.innerHTML=x.map(e=>`
    <div class="team-member-cell" data-cursor="${e.role}">
      <span class="crop-mark crop-tl">+</span>
      <span class="crop-mark crop-tr">+</span>

      <div>
        <div class="team-index-tag">[MEMBER ${e.index}]</div>
        <h4 class="team-person-name">${e.name}</h4>
        <div class="team-person-role">${e.role}</div>
      </div>
      <p class="team-person-specialty">${e.specialty}</p>
    </div>
  `).join(""))}function j(){const a=document.getElementById("studioObjectsContainer");a&&(a.innerHTML=O.map(e=>`
    <div class="studio-object-card" data-cursor="OBJECT">
      <div>
        <div class="obj-num">[SPEC_${e.num}]</div>
        <h3 class="obj-title">${e.name}</h3>
        <p class="obj-summary">${e.summary}</p>
      </div>

      <ul class="obj-specs">
        ${e.specs.map(i=>`<li>${i}</li>`).join("")}
      </ul>
    </div>
  `).join(""))}function G(){const a=document.getElementById("processContainer");a&&(a.innerHTML=k.map(e=>`
    <div class="process-cell-box">
      <div>
        <div class="process-big-index">${e.step}</div>
        <h3 class="process-stage-name">${e.title}</h3>
        <div class="font-mono" style="font-size: 0.75rem; color: var(--accent-electric); margin-bottom: 0.75rem;">
          [${e.subtitle}]
        </div>
      </div>
      <p class="process-stage-desc">${e.desc}</p>
    </div>
  `).join(""))}function F(){const a=document.getElementById("inquiryForm");a&&a.addEventListener("submit",e=>{e.preventDefault();const i=document.getElementById("clientName").value,o=document.getElementById("clientBusiness").value,n=document.getElementById("clientEmail").value,r=document.getElementById("clientBudget").value,u=document.getElementById("clientNeeds").value,f=document.getElementById("clientMessage").value;a.innerHTML=`
      <div style="padding: 2.5rem 1rem; text-align: left;">
        <span class="tag-system">INTAKE TRANSMITTED</span>
        <h3 style="font-size: 2.2rem; font-weight: 900; color: #fff; margin: 0.5rem 0 1rem; letter-spacing: -0.03em;">
          BLUEPRINT RECEIVED.
        </h3>
        <p style="color: var(--text-secondary); line-height: 1.6; font-size: 1.05rem; margin-bottom: 1.5rem;">
          Thank you, <strong>${i}</strong>. Our leadership has received your request for <strong>${o}</strong> and will reply directly to <strong>${n}</strong> within 12 hours.
        </p>
        <div class="font-mono" style="font-size: 0.82rem; color: var(--accent-electric); margin-bottom: 2rem; border-left: 3px solid var(--accent-electric); padding-left: 1.25rem;">
          EST. BUDGET: ${r} // SCOPE: ${u||"Flagship Web Platform"}
        </div>
        <a href="mailto:hello@pixel2page.com?subject=Project Inquiry for ${encodeURIComponent(o)}&body=${encodeURIComponent("Client: "+i+`
Needs: `+u+`
Budget: `+r+`
Details: `+f)}" class="btn-brutal-primary" style="display: inline-flex;">
          CONFIRM VIA DIRECT EMAIL ↗
        </a>
      </div>
    `})}
