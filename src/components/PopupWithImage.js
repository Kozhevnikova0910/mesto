import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(data, selector) {
        super(selector);
        this._image = data.image;
        this._name = data.name;
    }

    _setData() {
        const imageElement = this._popup.querySelector('.picture__image');
        const titleElement = this._popup.querySelector('.picture__title');
        imageElement.src = this._image;
        imageElement.alt = this._image;
        titleElement.textContent = this._name;
    }

    open() {
        this._setData();
        super.open();
    }
}