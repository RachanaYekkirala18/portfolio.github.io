const LINKS = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/"
};

// set links in multiple places
document.getElementById("linkedinLink").href = LINKS.linkedin;
document.getElementById("githubLink").href = LINKS.github;
document.getElementById("linkedin2").href = LINKS.linkedin;
document.getElementById("github2").href = LINKS.github;

// year
document.getElementById("year").textContent = new Date().getFullYear();

// lucide icons (in case loaded after DOM)
if (window.lucide) window.lucide.createIcons();

// ---------- Cursor glow ----------
const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX - 180}px`;
  glow.style.top = `${e.clientY - 180}px`;
});

// ---------- Sticky header style ----------
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// ---------- Smooth scroll ----------
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // close mobile menu
    mobileNav.classList.remove("open");
  });
});

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// ---------- Reveal on scroll ----------
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

// ---------- Active nav highlight ----------
const navLinks = Array.from(document.querySelectorAll(".nav-link")).filter(a => a.getAttribute("href")?.startsWith("#"));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const ioNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === id));
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((s) => ioNav.observe(s));

// ---------- Fake send button ----------
const fakeSend = document.getElementById("fakeSend");
const formNote = document.getElementById("formNote");

fakeSend.addEventListener("click", () => {
  formNote.textContent = "This form is static on GitHub Pages. If you want, I can add Formspree so messages reach your email.";
});
