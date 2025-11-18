
const grid = document.querySelector('#grid')
const list = document.querySelector('#list')
const section = document.querySelector('.directory')

if (grid) {
    grid.addEventListener('click', () => {
        section.classList.add('directory')
        section.classList.remove('list')
    })
}

if (list) {
    list.addEventListener('click', showList)

    function showList() {
        section.classList.add('list')
        section.classList.remove('container-business')
    }
}

