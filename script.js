/* Mobile menu */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* Dropdown */
const dropdown = document.querySelector(".nav-dropdown");
if (dropdown) {
  const btn = dropdown.querySelector(".nav-drop-btn");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
}

/* Year */
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
