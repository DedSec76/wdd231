
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
