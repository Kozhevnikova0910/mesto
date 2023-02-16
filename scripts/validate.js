const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement)
    }
}

const setEventListeners = (formElement) => {
    const inputArray = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonSubmit = formElement.querySelector('.popup__submit-btn');
    toggleButtonState(inputArray, buttonSubmit);
    inputArray.forEach(inputElement => inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputArray, buttonSubmit);
    }))
}

const enableValidation = () => {
    const formArray = Array.from(document.querySelectorAll('.popup__form'));
    formArray.forEach(formElement => {
        formElement.addEventListener('submit', function (e) {
            e.preventDefault();
        })
        setEventListeners(formElement);
    });
}

const hasInvalidInput = (inputArray) => {
    return inputArray.some(function (inputElement) {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputArray, buttonElement) => {
    if (hasInvalidInput(inputArray)) {
        buttonElement.classList.add('popup__submit-btn_inactive')
    }
    else {
        buttonElement.classList.remove('popup__submit-btn_inactive')
    }
}