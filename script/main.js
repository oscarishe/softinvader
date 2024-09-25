const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form__input');
const formButton = document.querySelector('.contact-form__button');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (form.checkValidity()) formButton.classList.add('active');
        else formButton.classList.remove('active');
        if (input.checkValidity()) input.classList.add('valid');
        else input.classList.remove('valid');
    })
})

const orderButton = document.querySelector('.order-button');
const closeButton = document.querySelector('.close-button');
const contactModal = document.querySelector('.contact');
[orderButton, closeButton].forEach((button => {
    button.addEventListener('click', () => {
        contactModal.classList.toggle('d-none');
        document.body.classList.toggle('overflow-y-hidden');
    })
}))