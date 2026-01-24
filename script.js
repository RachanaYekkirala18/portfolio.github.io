/* ========= Edit only this block ========= */
const PROFILE = {
  name: "Venkata Rachana Yekkirala",
  email: "your.email@gmail.com",
  phone: "+1-XXX-XXX-XXXX",
  links: {
    linkedin: "https://www.linkedin.com/in/your-link/",
    github: "https://github.com/your-username",
    tableau: "https://public.tableau.com/app/profile/your-name",
    powerbi: "https://app.powerbi.com/",
    medium: "https://medium.com/@your-handle"
  }
};

// Projects + experience prefilled (based on what you typically work on)
// Replace repo links with your actual GitHub repo URLs.
const PROJECTS = [
  {
    title: "AWS Data Lakehouse Pipeline",
    type: "Data Engineering",
    tags: ["AWS", "S3", "Glue", "Athena", "Lambda", "Medallion"],
    blurb: "Built a lakehouse-style pipeline with curated layers and query-ready analytics datasets.",
    stack: ["S3", "Glue", "Lambda", "Step Functions", "Athena", "Redshift", "QuickSight", "PySpark"],
    highlights: [
      "Medallion architecture: bronze → silver → gold datasets",
      "Data validation + quality checks before publishing",
      "Query-ready tables optimized for analytics workloads"
    ],
    link: "https://github.com/your-username/your-lakehouse-repo"
  },
  {
    title: "Kafka Clickstream Streaming Pipeline",
    type: "Streaming",
    tags: ["Kafka", "CDC", "Docker", "PostgreSQL", "Monitoring"],
    blurb: "Real-time ingestion + processing pipeline for clickstream analytics with monitoring.",
    stack: ["Kafka", "Kafka Connect", "Python", "PostgreSQL", "Docker", "Grafana"],
    highlights: [
      "Streaming ingestion with connectors + durable topics",
      "Consumers transform/validate events for analytics",
      "Dashboards for throughput, lag, and error rates"
    ],
    link: "https://github.com/your-username/your-kafka-repo"
  },
  {
    title: "Power BI Sales Dashboard",
    type: "BI / Analytics",
    tags: ["Power BI", "DAX", "KPI", "Data Modeling"],
    blurb: "Interactive KPI dashboard with clean metric definitions and executive-ready views.",
    stack: ["Power BI", "DAX", "Power Query", "Excel/CSV"],
    highlights: [
      "Star schema modeling + reusable measures",
      "KPI drilldowns and variance breakdowns",
      "Designed for weekly/monthly business reviews"
    ],
    link: "https://github.com/your-username/your-powerbi-repo"
  },
  {
    title: "Financial Data Analysis (Signals + Insights)",
    type: "Analytics",
    tags: ["Python", "Pandas", "Power BI", "EDA"],
    blurb: "Analysis of financial datasets with trend/variance insights and clear storytelling.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    highlights: [
      "Cleaned + transformed raw data into analysis-ready frames",
      "Created repeatable analysis workflow and visuals",
      "Summarized insights into decision recommendations"
    ],
    link: "https://github.com/your-username/your-finance-repo"
  },
  {
    title: "Healthcare Analytics Capstone",
    type: "Domain Analytics",
    tags: ["Healthcare", "SQL", "Tableau", "BigQuery"],
    blurb: "Outcome-focused analytics project with SQL + dashboards for stakeholders.",
    stack: ["SQL", "Python", "Tableau", "BigQuery", "S3"],
    highlights: [
      "Defined metrics aligned to business questions",
      "Built dashboards with transparent definitions",
      "Produced insights with clear stakeholder narrative"
    ],
    link: "https://github.com/your-username/your-healthcare-repo"
  },
  {
    title: "Synthetic Data Generator (GenAI)",
    type: "GenAI",
    tags: ["GenAI", "Python", "Data Quality"],
    blurb: "Generated realistic synthetic datasets with validation and quality checks.",
    stack: ["Python", "Pandas", "LLM API", "Validation Rules"],
    highlights: [
      "Generated constrained synthetic rows for testing",
      "Quality validation + schema consistency checks",
      "Reusable pipeline for multiple dataset shapes"
    ],
    link: "https://github.com/your-username/your-synthetic-data-repo"
  }
];

const SKILLS = [
  {
    group: "Data Engineering Core",
    items: ["SQL (CTEs, Window Functions)", "ETL/ELT", "Data Modeling", "Data Quality", "Orchestration", "APIs"]
  },
  {
    group: "AWS + Cloud",
    items: ["S3", "Glue", "Lambda", "Athena", "Redshift", "Step Functions", "CloudWatch", "IAM", "Terraform (basic)"]
  },
  {
    group: "Streaming + Big Data",
    items: ["Apache Kafka", "Kafka Connect", "Spark / PySpark", "CDC Concepts", "Docker", "Monitoring"]
  },
  {
    group: "Analytics + BI",
    items: ["Power BI", "DAX", "Power Query", "Tableau", "KPI Design", "A/B Testing basics", "Stakeholder Reporting"]
  },
  {
    group: "Python + Data",
    items: ["Pandas", "NumPy", "Matplotlib", "Automation Scripts", "Data Validation", "Notebook Workflows"]
  },
  {
    group: "Professional",
    items: ["Requirements Gathering", "Documentation", "Cross-functional Collaboration", "Problem Solving", "Ownership"]
  }
];

const EXPERIENCE = [
  {
    role: "Business Analyst / Data Analyst",
    company: "NB Alpha Omega",
    when: "Sep 2024 — Present",
    where: "USA",
    bullets: [
      "Built and maintained analytics datasets and KPI definitions for recurring business reviews.",
      "Developed Power BI dashboards for operational, financial, and campaign performance tracking.",
      "Wrote optimized SQL for ad-hoc analysis and decision support across large tables.",
      "Automated recurring data checks and reporting workflows using Python."
    ]
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    when: "May 2021 — Jun 2022",
    where: "India / Client projects",
    bullets: [
      "Supported data pipelines and reporting workflows with SQL and cloud-based tooling.",
      "Built dashboards and recurring reports aligned with stakeholder requirements.",
      "Collaborated across teams to deliver clean data outputs and consistent metrics."
    ]
  }
];
/* ========= End edit block ========= */


/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function toast(msg){
  const el = $("#toast");
  if(!el) return;
  el.textContent = msg;
  el.style.opacity = "1";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (el.style.opacity = "0"), 1600);
}

function setLinks(){
  $("#lnkLinkedIn").href = PROFILE.links.linkedin;
  $("#lnkGitHub").href = PROFILE.links.github;
  $("#lnkTableau").href = PROFILE.links.tableau;
  $("#lnkPowerBI").href = PROFILE.links.powerbi;

  $("#cLinkedIn").href = PROFILE.links.linkedin;
  $("#cGitHub").href = PROFILE.links.github;
  $("#cMedium").href = PROFILE.links.medium;

  const mailHref = `mailto:${PROFILE.email}?subject=Opportunity%20—%20${encodeURIComponent(PROFILE.name)}`;
  $("#mailBtn").href = mailHref;
}

/* ---------- Theme ---------- */
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

/* ---------- Mobile menu ---------- */
function toggleMobile(open){
  const menu = $("#mobileMenu");
  const ham = $("#hamburger");
  const isOpen = menu.classList.contains("show");
  const next = (open !== undefined) ? open : !isOpen;

  menu.classList.toggle("show", next);
  menu.setAttribute("aria-hidden", String(!next));
  ham.setAttribute("aria-expanded", String(next));
}

/* ---------- Cursor glow ---------- */
function initCursorGlow(){
  const glow = $("#cursorGlow");
  if(!glow) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });
}

/* ---------- Terminal ---------- */
const TERM_LINES = {
  pipelines: [
    "> pipelines: online",
    "> ingestion: stable",
    "> transforms: deterministic",
    "> quality gates: enforced",
    "> output: analytics-ready"
  ],
  dashboards: [
    "> dashboards: clean",
    "> model: star schema",
    "> measures: reusable",
    "> filters: fast",
    "> story: decision-first"
  ],
  metrics: [
    "> KPI definitions: versioned",
    "> grain: consistent",
    "> thresholds: explicit",
    "> owners: assigned",
    "> actions: measurable"
  ],
  governance: [
    "> lineage: tracked",
    "> access: least-privilege",
    "> docs: crisp",
    "> audits: painless",
    "> humans: happy"
  ]
};

function renderTerminal(lines){
  const box = $("#terminal");
  box.innerHTML = lines.map(l => `<div class="line"><span class="prompt">></span> ${escapeHtml(l.replace(/^>\s?/, ""))}</div>`).join("");
}
function escapeHtml(s){
  return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function initTerminal(){
  const chips = $$(".chip");
  chips.forEach(btn => btn.addEventListener("click", () => {
