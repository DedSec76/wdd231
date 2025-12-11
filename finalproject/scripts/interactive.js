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

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");

if (lastMod){
    lastMod.textContent = document.lastModified || new Date().toLocaleDateString();
}




