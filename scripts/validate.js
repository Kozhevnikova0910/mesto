const showInputError = (formElement, inputElement, errorMessage, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(data.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(data.errorClass);
}

const hideInputError = (formElement, inputElement, data) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(data.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(data.errorClass);
}

const checkInputValidity = (formElement, inputElement, data) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, data);
    }
    else {
        hideInputError(formElement, inputElement, data)
    }
}

const setEventListeners = (formElement, data) => {
    const inputArray = Array.from(formElement.querySelectorAll(data.inputSelector));
    const buttonSubmit = formElement.querySelector(data.submitButtonSelector);
    toggleButtonState(inputArray, buttonSubmit, data);
    inputArray.forEach(inputElement => inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, data);
        toggleButtonState(inputArray, buttonSubmit, data);
    }))
}

const enableValidation = (data) => {
    const formArray = Array.from(document.querySelectorAll(data.formSelector));
    formArray.forEach(formElement => {
        formElement.addEventListener('submit', function (e) {
            e.preventDefault();
        })
        setEventListeners(formElement, data);
    });
}

const hasInvalidInput = (inputArray) => {
    return inputArray.some(function (inputElement) {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputArray, buttonElement, data) => {
    if (hasInvalidInput(inputArray)) {
        buttonElement.classList.add(data.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled')
    }
    else {
        buttonElement.classList.remove(data.inactiveButtonClass);
        buttonElement.removeAttribute('disabled')
    }
}