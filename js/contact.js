const contactForm = document.querySelector("#contactForm")
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const contactMessage = document.querySelector("#contactMessage");

function validateContactForm(event) {

    event.preventDefault();

    if (checkLength(name.value, 5) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if (checkLength(subject.value, 25) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }

    contactMessage.classList.add('show');

    contactForm.reset();
}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {

    if (value.trim().length >= len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}