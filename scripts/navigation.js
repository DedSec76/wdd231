

const hamburger = document.querySelector("#nav-button")
const navBar = document.querySelector('#nav-bar')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('show');
    navBar.classList.toggle('show');
})