const menu = document.querySelector(".burger-menu"); // bars icon
const closeBtn = document.querySelector(".close"); // x icon
const mobileMenu = document.querySelector(".mobile"); // menu container

// Open menu
menu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
