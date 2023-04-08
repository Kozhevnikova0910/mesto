import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({ handleSubmit }, selector) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this._inputArray = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._popupForm = this._popup.querySelector('.popup__form');
        this.submitButton = this._popup.querySelector('.popup__submit-btn');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputArray.forEach(inputElement => {
            const inputName = inputElement.getAttribute('name');
            inputValues[inputName] = inputElement.value;
        })
        return inputValues;
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            this._handleSubmit(e, this._getInputValues())
        });
    }
}