// When you reload the page, only the main HTML loads.
window.addEventListener("load", () => {
        document.querySelectorAll("header, main, footer").forEach(el => {
        el.style.visibility = "visible";
        });
});

// Hamburger Navigation
const btn_menu = document.querySelector('#btn-menu')
const nav = document.querySelector('NAV')

btn_menu.addEventListener("click", () => {
    btn_menu.classList.toggle("show")
    nav.classList.toggle("show")
})

/* Footer */
const year = new Date().getFullYear()
const currentyear = document.querySelector('#year')
currentyear.textContent = year

const lastModified = document.querySelector('#lastModified')

lastModified.innerHTML = `Last Modification: ${document.lastModified}`
