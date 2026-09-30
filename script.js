const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const announcementClose = document.querySelector(".announcement-close");
const announcement = document.querySelector(".announcement");
const backTop = document.querySelector(".back-top");

menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("open"));
document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

announcementClose?.addEventListener("click", () => {
  announcement.style.display = "none";
});

const filters = document.querySelectorAll(".filter");
const courses = document.querySelectorAll(".course-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;

    courses.forEach(card => {
      card.classList.toggle("hidden", value !== "all" && card.dataset.category !== value);
    });
  });
});

const form = document.getElementById("demoForm");
const formMessage = document.getElementById("formMessage");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");

  formMessage.textContent = `Thanks, ${name}! Your demo request has been recorded in this demo.`;
  form.reset();
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();
