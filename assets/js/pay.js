
const buyBtns = document.querySelectorAll('.js-buy')
const payMain = document.querySelector('.js-pay')
const closeBtn = document.querySelector('.js-close')
const payForm = document.querySelector('.js-pay-form')

const showForm = () => {
    payMain.classList.add('open')
}

const closeForm = () => {
    payMain.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showForm)
}

closeBtn.addEventListener('click', closeForm)

payMain.addEventListener('click', closeForm)

payForm.addEventListener('click', (event) => {
    event.stopPropagation()
})