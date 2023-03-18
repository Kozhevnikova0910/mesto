export class FormValidator {
    constructor(data, formElement) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;
        this._inputArray = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput () {
        return this._inputArray.some(function (inputElement) {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
            this._buttonSubmit.setAttribute('disabled', 'disabled');
        }
        else {
            this._buttonSubmit.classList.remove(this._inactiveButtonClass);
            this._buttonSubmit.removeAttribute('disabled');
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputArray.forEach(inputElement => inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        }))
    }

    resetValidation() {
        this._inputArray.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._toggleButtonState();
    }

    enableValidation () {
        this._formElement.addEventListener('submit', function (e) {
            e.preventDefault();
        })
        this._setEventListeners();
    }
}