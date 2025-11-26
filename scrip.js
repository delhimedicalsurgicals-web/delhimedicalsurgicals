const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const yearEl = document.getElementById("year");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We have received your enquiry.");
  });
}
