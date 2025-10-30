

const year = new Date().getFullYear()
const currentyear = document.querySelector('#currentyear')
const lastModified = document.querySelector('#lastModified')

currentyear.textContent = year
lastModified.textContent = `Last Modified: ${document.lastModified}`

