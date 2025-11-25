
const level_details = document.querySelector('#level-details')
const btn_learn = document.querySelector('.btn_learn')
const btn_close = document.querySelector('.closeModal')

const fieldtimestamp = document.querySelector('#timestamp')
const appli_form = document.querySelector('.appli-form') 


appli_form.addEventListener("submit", () => {
    const timestamp = new Date().toLocaleString('es-PE')
    fieldtimestamp.value = timestamp
})

btn_learn.addEventListener("click", () => {
    level_details.showModal();
})
btn_close.addEventListener("click", () => {
    level_details.close();
})


