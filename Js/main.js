
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("show");
});


const closeMenu = document.querySelector(".close-menu");

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("show");
});