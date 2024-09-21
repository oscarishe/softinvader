const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form__input');
const formButton = document.querySelector('.contact-form__button');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (form.checkValidity()) formButton.classList.add('active');
        else formButton.classList.remove('active');
    })
})