import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(data, selector) {
        super(selector);
        this._imageElement = this._popup.querySelector('.picture__image');
        this._titleElement = this._popup.querySelector('.picture__title');
    }

    open({ name, image }) {
        this._imageElement.src = image;
        this._imageElement.alt = image;
        this._titleElement.textContent = name;
        super.open();
    }
}