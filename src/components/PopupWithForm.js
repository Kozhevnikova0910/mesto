import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({ handleSubmit }, selector) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this._inputArray = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._inputValues = {};
    }

    _getInputValues() {
        this._inputArray.forEach(inputElement => {
            const inputName = inputElement.getAttribute('name');
            this._inputValues[inputName] = inputElement.value;
        })

    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._handleSubmit);
    }

}