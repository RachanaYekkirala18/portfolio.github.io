// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobile = document.getElementById("mobile");
menuBtn.addEventListener("click", () => mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobile.classList.remove("open")));

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

// Projects render
const projects = [
  {
    title: "AWS Data Lakehouse Pipeline",
    desc: "Lakehouse pipeline with S3, Glue, Lambda, Step Functions, Athena/Redshift for analytics-ready data.",
    tags: ["AWS", "ETL", "Lakehouse"],
    github: "https://github.com/",
    demo: ""
  },
  {
    title: "Kafka Clickstream Streaming Pipeline",
    desc: "Real-time ingestion with Kafka + Connect, Python consumers, PostgreSQL sink and monitoring.",
    tags: ["Kafka", "Python", "Streaming"],
    github: "https://github.com/",
    demo: ""
  },
  {
    title: "Power BI Sales Dashboard",
    desc: "Executive KPI dashboard with DAX measures, star schema modeling and drill-down insights.",
    tags: ["Power BI", "DAX", "KPIs"],
    github: "https://github.com/",
    demo: ""
  }
];

const projectsGrid = document.getElementById("projectsGrid");
projects.forEach((p) => {
  const el = document.createElement("article");
  el.className = "card projectCard";
  el.innerHTML = `
    <div class="cardTop">
      <h3>${p.title}</h3>
    </div>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="projectLinks">
      <a href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : `<span class="smallMuted">Demo</span>`}
    </div>
  `;
  projectsGrid.appendChild(el);
});

// Skills render + search
const skills = [
  "SQL (CTEs, Window Functions)",
  "Python (Pandas, PySpark)",
  "AWS (S3, Glue, Lambda, Athena)",
  "Power BI (DAX, Power Query)",
  "Tableau",
  "KPI Design • Variance Analysis",
  "Stakeholder Management",
  "ETL/ELT • Data Modeling",
  "Kafka (Streaming)",
  "Git • Docker"
];

const skillsWrap = document.getElementById("skillsWrap");
const skillSearch = document.getElementById("skillSearch");

function renderSkills(q = "") {
  const query = q.trim().toLowerCase();
  skillsWrap.innerHTML = "";
  skills
    .filter((s) => s.toLowerCase().includes(query))
    .forEach((s) => {
      const chip = document.createElement("span");
      chip.className = "chipSkill";
      chip.textContent = s;
      skillsWrap.appendChild(chip);
    });
}
skillSearch.addEventListener("input", (e) => renderSkills(e.target.value));
renderSkills();
