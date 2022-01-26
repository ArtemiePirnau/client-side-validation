"use strict";

//Elements
const allInputs = document.querySelectorAll(".form__input--special")
const usernameInput = document.querySelector(".form__username-search");
const emailInput = document.querySelector(".form__email-search");
const passwordInput = document.querySelector(".form__password-search");
const checkboxField = document.querySelector(".form__checkbox-input");
const submitButton = document.querySelector(".form__btn");
const form = document.querySelector(".form");
const formWraps = document.querySelector(".form__username-wrap");
const modal = document.querySelector(".modal__success");
const modalCloseBtn = document.querySelector(".modal__success-btn");
//Functions

const checkIsEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

const addClass = (element, selector) => {
    element.classList.add(selector);
};

const removeClass = (element, selector) => {
    element.classList.remove(selector);
};

const errorMessage = (element, message) => {
    element.setAttribute("placeholder", message);
};

const closeModal = (element, modalSelector, selector) => {
    element.addEventListener("click", () => {
        modalSelector.classList.remove(selector);
    });
};

const checkAllInputs = () => {
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    //Check username
    if (usernameValue === "" || usernameValue == null) {
        addClass(usernameInput, "error");
        removeClass(usernameInput, "success");
        errorMessage(usernameInput, "Username is empty");
    } else {
        usernameInput.removeAttribute("placeholder");
        removeClass(usernameInput, "error");
        addClass(usernameInput, "success");
    }
    //Check email
    if (emailValue === "" || emailValue == null) {
        addClass(emailInput, "error");
        removeClass(emailInput, "success");
        errorMessage(emailInput, "Email is empty");
    } else if (!checkIsEmail(emailValue)) {
        addClass(emailInput, "error");
        removeClass(emailInput, "success");
        errorMessage(emailInput, "Email is empty");
    } else {
        emailInput.removeAttribute("placeholder");
        removeClass(emailInput, "error");
        addClass(emailInput, "success");
    }
    //Check password 
    if (passwordValue === "" || passwordValue == null) {
        addClass(passwordInput, "error");
        removeClass(passwordInput, "success");
        errorMessage(passwordInput, "Password is empty");
    } else {
        passwordInput.removeAttribute("placeholder");
        removeClass(passwordInput, "error");
        addClass(passwordInput, "success");
    }

    if (usernameValue && checkIsEmail(emailValue) && passwordValue) {
        modal.classList.add("block")
    }

    allInputs.forEach(input => {
        input.value = "";
    });
};
//Evenet Listeners
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkAllInputs();
});
modalCloseBtn.addEventListener("click", closeModal(modalCloseBtn, modal, "block"));