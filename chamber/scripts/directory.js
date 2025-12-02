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


/* Last Visit */
// milliseconds to days
const msToDays = 86400000
// today's date
const theDateToday = new Date()

// Number of visits
const visit = document.querySelector("#visits")

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0
let lastVisit = localStorage.getItem("date")

if (visit) {
    if (!lastVisit) {
        visit.textContent=`Welcome! Let us know if you have any questions.`
        numVisits = 1
    } else {
        let theLastVisit = new Date(Number(lastVisit))
        let daysDiff = (theDateToday.getTime() - theLastVisit.getTime()) / msToDays;
    
        if (daysDiff < 1) {
            visit.textContent=`Back so soon! Awesome!`
        } else {
            visit.textContent=`You last visited ${daysDiff.toFixed(0)} days ago.`
        }

        numVisits++
    }

    // Save UPDATED data
    localStorage.setItem("numVisits-ls", numVisits)
    localStorage.setItem("date", Date.now())
}





