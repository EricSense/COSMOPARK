// Smooth scroll for any element with data-scroll-to
document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.getAttribute("data-scroll-to");
    if (!targetSelector) return;
    const target = document.querySelector(targetSelector);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Simple tab interaction for experience zones
const tabs = Array.from(document.querySelectorAll(".exp-tab"));
const panels = Array.from(document.querySelectorAll(".exp-panel"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const zone = tab.getAttribute("data-zone");
    if (!zone) return;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.getAttribute("data-zone-panel") === zone);
    });
  });
});

