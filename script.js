// Mobile menu
const toggle = document.querySelector(".navToggle");
const links = document.querySelector(".navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Demo form -> opens mail client with prefilled message
function mailtoFromLead(form) {
  const data = new FormData(form);
  const subject = `Quote Request — ${data.get("company") || "CriticalOps PowerTech"}`;
  const body = [
    `Name: ${data.get("name") || ""}`,
    `Company: ${data.get("company") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Need: ${data.get("need") || ""}`,
    `Notes: ${data.get("notes") || ""}`,
  ].join("\n");

  const to = "sales@criticalopspowertech.com"; // change this
  window.location.href =
    `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    mailtoFromLead(leadForm);
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(contactForm);
    const subject = `Website Contact — ${d.get("firstName")} ${d.get("lastName")}`;
    const body = [
      `Name: ${d.get("firstName")} ${d.get("lastName")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || ""}`,
      ``,
      `${d.get("message")}`,
    ].join("\n");

    const to = "sales@criticalopspowertech.com"; // change this
    window.location.href =
      `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
