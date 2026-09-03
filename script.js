// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with saved preference
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {
  // localStorage unavailable (private mode, etc.) — fall back to system preference
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // ignore if storage is unavailable
  }
});
