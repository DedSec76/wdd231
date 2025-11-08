
const grid = document.querySelector('#grid')
const list = document.querySelector('#list')
const section = document.querySelector('.container-business')

grid.addEventListener('click', () => {
    section.classList.add('container-business')
    section.classList.remove('list')
})

list.addEventListener('click', showList)

function showList() {
    section.classList.add('list')
	section.classList.remove('container-business')
}

