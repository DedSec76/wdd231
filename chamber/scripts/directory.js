
const btn_menu = document.querySelector('#btn-menu')
const nav = document.querySelector('NAV')

btn_menu.addEventListener("click", () => {
    btn_menu.classList.toggle("show")
    nav.classList.toggle("show")
})