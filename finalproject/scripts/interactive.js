// hamburger
const menuBtn = document.getElementById("mobileMenuBtn");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

function toggleMenu() {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);