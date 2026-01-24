/* ========= EDIT THESE ONLY ========= */
const PROFILE = {
  name: "Venkata Rachana Yekkirala",
  email: "your.email@gmail.com",
  resume: "resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/your-link/",
    github: "https://github.com/your-username",
    tableau: "https://public.tableau.com/app/profile/your-name",
    medium: "https://medium.com/@your-handle"
  }
};

const ABOUT_PILLS = [
  "ETL/ELT pipelines", "KPI definitions", "SQL optimization", "Power BI dashboards",
  "Data quality checks", "Streaming basics", "Stakeholder communication"
];

const FACTS = [
  { k: "Degree", v: "MS Data Science" },
  { k: "Focus", v: "Data Engineering + BI" },
  { k: "Primary", v: "AWS • SQL • Python" },
  { k: "Style", v: "Clean metrics, calm execution" }
];

const PROJECTS = [
  {
    title: "AWS Data Lakehouse Pipeline",
    type: "Data Engineering",
    desc: "Lakehouse pipeline with curated layers (bronze/silver/gold) and analytics-ready datasets.",
    tags: ["S3","Glue","Athena","Lambda","Medallion"],
    bullets: [
      "Built layered datasets with validation before publishing.",
      "Optimized tables for fast analytics queries.",
      "Designed reusable patterns for ingestion + transformation."
    ],
    tech: ["S3","Glue","Lambda","Athena","Redshift","PySpark"],
    link: "https://github.com/your-username/your-lakehouse-repo"
  },
  {
    title: "Kafka Clickstream Streaming Pipeline",
    type: "Streaming",
    desc: "Real-time ingestion + processing pipeline for clickstream analytics with monitoring.",
    tags: ["Kafka","Connect","Docker","PostgreSQL"],
    bullets: [
      "Durable topics with producer/consumer patterns.",
      "Validation + transformations for downstream analytics.",
      "Monitoring for throughput, lag, and failures."
    ],
    tech: ["Kafka","Kafka Connect","Python","PostgreSQL","Docker","Grafana"],
    link: "https://github.com/your-username/your-kafka-repo"
  },
  {
    title: "Power BI KPI Dashboard",
    type: "BI / Analytics",
    desc: "Executive-ready KPI dashboard with clean metric definitions and drilldowns.",
    tags: ["Power BI","DAX","Modeling","KPI"],
    bullets: [
      "Built star schema model + reusable measures.",
      "KPI drilldowns with variance breakdowns.",
      "Designed for weekly/monthly business reviews."
    ],
    tech: ["Power BI","DAX","Power Query","SQL"],
    link: "https://github.com/your-username/your-powerbi-repo"
  },
  {
    title: "Healthcare Analytics Capstone",
    type: "Domain Analytics",
    desc: "Outcome-focused analytics project with SQL + dashboards for stakeholders.",
    tags: ["SQL","Tableau","BigQuery","Healthcare"],
    bullets: [
      "Defined metrics aligned to business questions.",
      "Built dashboards with transparent definitions.",
      "Delivered insights with clear stakeholder narrative."
    ],
    tech: ["SQL","Python","Tableau","BigQuery"],
    link: "https://github.com/your-username/your-healthcare-repo"
  },
  {
    title: "Synthetic Data Generator (GenAI)",
    type: "GenAI",
    desc: "Generated realistic synthetic datasets with validation and schema consistency.",
    tags: ["Python","GenAI","Validation"],
    bullets: [
      "Created constrained synthetic rows for testing.",
      "Validation rules for quality + schema checks.",
      "Reusable generator for multiple dataset shapes."
    ],
    tech: ["Python","Pandas","LLM API","Validation"],
    link: "https://github.com/your-username/your-synthetic-data-repo"
  },
  {
    title: "Financial Insights (Python)",
    type: "Analytics",
    desc: "Clean EDA workflow with trend/variance insights and decision-friendly summaries.",
    tags: ["Python","Pandas","EDA"],
    bullets: [
      "Transformed raw datasets into analysis-ready frames.",
      "Built repeatable analysis workflow and visuals.",
      "Summarized insights into recommendations."
    ],
    tech: ["Python","Pandas","NumPy","Matplotlib"],
    link: "https://github.com/your-username/your-finance-repo"
  }
];

const SKILLS = [
  { group: "Data Engineering", items: ["SQL (CTE, Window)", "ETL/ELT", "Data Modeling", "Data Quality", "Orchestration"] },
  { group: "AWS", items: ["S3", "Glue", "Lambda", "Athena", "Redshift", "CloudWatch", "IAM"] },
  { group: "Streaming / Big Data", items: ["Kafka", "Kafka Connect", "Spark / PySpark", "Docker", "Monitoring"] },
  { group: "BI / Analytics", items: ["Power BI", "DAX", "Power Query", "Tableau", "KPI Design"] },
  { group: "Python", items: ["Pandas", "NumPy", "Automation", "Validation", "Notebook Workflows"] },
  { group: "Professional", items: ["Requirements", "Documentation", "Stakeholders", "Ownership", "Problem Solving"] }
];

const EXPERIENCE = [
  {
    role: "Business Analyst / Data Analyst",
    org: "NB Alpha Omega",
    when: "Sep 2024 — Present",
    where: "USA",
    bullets: [
      "Defined KPIs and maintained analytics datasets for recurring business reviews.",
      "Built Power BI dashboards for operational and performance tracking.",
      "Wrote optimized SQL for ad-hoc analysis and decision support.",
      "Automated data checks and reporting workflows using Python."
    ]
  },
  {
    role: "Project Engineer",
    org: "Wipro",
    when: "May 2021 — Jun 2022",
    where: "Client projects",
    bullets: [
      "Supported data workflows and reporting using SQL and cloud tooling.",
      "Built dashboards and recurring reports aligned to stakeholder needs.",
      "Delivered consistent metric outputs with clear documentation."
    ]
  }
];
/* ========= END EDIT ========= */

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function toast(msg){
  const t = $("#toast");
  if(!t) return;
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.style.opacity = "0", 1600);
}

function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

/* Theme */
function loadTheme(){
  const t = localStorage.getItem("theme") || "dark";
  if(t === "light") document.documentElement.setAttribute("data-theme","light");
  $("#themeIcon").textContent = (t === "light") ? "☀" : "☾";
}
function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  if(next === "light") document.documentElement.setAttribute("data-theme","light");
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme", next);
  $("#themeIcon").textContent = (next === "light") ? "☀" : "☾";
}

/* Mobile */
function toggleMobile(open){
  const menu = $("#mobileMenu");
  const ham = $("#hamburger");
  const isOpen = menu.classList.contains("show");
  const next = (open !== undefined) ? open : !isOpen;
  menu.classList.toggle("show", next);
  menu.setAttribute("aria-hidden", String(!next));
  ham.setAttribute("aria-expanded", String(next));
}

/* Links */
function setLinks(){
  $("#lnkLinkedIn").href = PROFILE.links.linkedin;
  $("#lnkGitHub").href = PROFILE.links.github;
  $("#lnkTableau").href = PROFILE.links.tableau;

  $("#cLinkedIn").href = PROFILE.links.linkedin;
  $("#cGitHub").href = PROFILE.links.github;
  $("#cMedium").href = PROFILE.links.medium;

  $("#resumeBtn").href = PROFILE.resume;

  const emailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Opportunity — " + PROFILE.name)}`;
  $("#lnkEmail").href = emailHref;
  $("#emailBtn").href = emailHref;
}

/* Copy */
async function copyEmail(){
  try{
    await navigator.clipboard.writeText(PROFILE.email);
    toast("Email copied.");
  }catch{
    toast("Copy failed.");
  }
}

/* Hero metric cycle */
function initSignal(){
  const el = $("#signalMetric");
  if(!el) return;
  const vals = ["10M+ rows", "1M+/month", "30–45% faster", "clean KPIs"];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % vals.length;
    el.textContent = vals[i];
  }, 1800);
}

/* Console */
const MODES = {
  pipelines: [
    "pipelines: online",
    "ingestion: stable",
    "transforms: deterministic",
    "quality gates: enforced",
    "output: analytics-ready"
  ],
  metrics: [
    "kpis: defined",
    "grain: consistent",
    "thresholds: explicit",
    "owners: assigned",
    "action: measurable"
  ],
  dashboards: [
    "model: star schema",
    "measures: reusable",
    "refresh: predictable",
    "views: fast",
    "story: decision-first"
  ],
  streaming: [
    "topics: durable",
    "connect: reliable",
    "lag: monitored",
    "errors: handled",
    "alerts: meaningful"
  ]
};

function renderConsole(mode){
  const box = $("#consoleBody");
  const lines = MODES[mode] || MODES.pipelines;
  box.innerHTML = lines.map(x => `<div class="line"><span class="p">></span> ${esc(x)}</div>`).join("");
}

function initConsole(){
  const segs = $$(".seg");
  segs.forEach(btn => btn.addEventListener("click", () => {
    segs.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    renderConsole(btn.dataset.mode);
  }));
  renderConsole("pipelines");
}

/* About */
function renderAbout(){
  const pills = $("#aboutPills");
  pills.innerHTML = ABOUT_PILLS.map(p => `<span class="pill">${esc(p)}</span>`).join("");

  const facts = $("#facts");
  facts.innerHTML = FACTS.map(f => `
    <div class="fact"><span>${esc(f.k)}</span><b>${esc(f.v)}</b></div>
  `).join("");
}

/* Projects */
let active = "All";
let q = "";

function types(){
  return ["All", ...Array.from(new Set(PROJECTS.map(p => p.type)))];
}

function renderFilters(){
  const el = $("#filters");
  el.innerHTML = types().map(t => `
    <button class="filter ${t===active ? "active":""}" data-type="${esc(t)}">${esc(t)}</button>
  `).join("");

  $$(".filter").forEach(b => b.addEventListener("click", () => {
    active = b.dataset.type;
    renderFilters();
    renderProjects();
  }));
}

function match(p){
  const typeOk = (active === "All") || (p.type === active);
  if(!typeOk) return false;
  if(!q) return true;
  const hay = [p.title,p.type,p.desc,(p.tags||[]).join(" "),(p.tech||[]).join(" "), (p.bullets||[]).join(" ")].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function renderProjects(){
  const grid = $("#projectGrid");
  const list = PROJECTS.filter(match);

  if(!list.length){
    grid.innerHTML = `
      <div class="panel" style="grid-column:1/-1; padding:16px;">
        <div class="kicker">No match</div>
        <div class="big">Try another keyword.</div>
        <div class="muted small">Example: kafka, glue, power bi</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="card" role="button" tabindex="0" data-idx="${i}">
      <div class="kicker">${esc(p.type)}</div>
      <div class="card-title">${esc(p.title)}</div>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="pillrow">
        ${(p.tags||[]).slice(0,5).map(t => `<span class="badge">${esc(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");

  $$(".card").forEach(c => {
    const open = () => openModal(list[Number(c.dataset.idx)]);
    c.addEventListener("click", open);
    c.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " ") open();
    });
  });
}

/* Skills */
function renderSkills(){
  const grid = $("#skillsGrid");
  grid.innerHTML = SKILLS.map(s => `
    <div class="panel skillbox">
      <div class="skill-head">
        <div class="big">${esc(s.group)}</div>
        <div class="muted small">active use</div>
