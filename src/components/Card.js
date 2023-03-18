export class Card {
    constructor (place,
                openPopupPicture,
                placeTemplateSelector) {
        this._name = place.name;
        this._link = place.link;
        this._openPopupPicture = openPopupPicture;
        this._placeTemplateSelector = placeTemplateSelector;
    }

    _getTemplate() {
        return document
            .querySelector(this._placeTemplateSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
    }

    _handleLikeClick() {
        this._placeLikeElement.classList.toggle('place__like_active');
    }

    _handleDeleteClick() {
        this._element.remove();
    }

    _handleImageClick() {
        this._openPopupPicture({image: this._link, name: this._name})
    }

    _setEventListeners() {
        this._placeLikeElement.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._placeDeleteElement.addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._placeImageElement.addEventListener('click', () => {
            this._handleImageClick();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._placeNameElement = this._element.querySelector('.place__name');
        this._placeImageElement = this._element.querySelector('.place__image');
        this._placeLikeElement = this._element.querySelector('.place__like');
        this._placeDeleteElement = this._element.querySelector('.place__delete');

        this._placeNameElement.textContent = this._name;
        this._placeImageElement.src = this._link;
        this._placeImageElement.alt = this._name;

        this._setEventListeners();

        return this._element;
    }
}