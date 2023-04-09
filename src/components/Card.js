export class Card {
    constructor (place,
                userId,
                openPopupPicture,
                onDeleteClick,
                putLike,
                deleteLike,
                placeTemplateSelector) {
        this._name = place.name;
        this._link = place.link;
        this._likes = place.likes;
        this._userId = userId;
        this._isLiked = this._likes.some((like) => this._userId === like._id);
        this._id = place._id;
        this._ownerId = place.owner._id;
        this._isOwner = false;
        this._openPopupPicture = openPopupPicture;
        this._placeTemplateSelector = placeTemplateSelector;
        this._onDeleteClick = onDeleteClick;
        this._putLike = putLike;
        this._deleteLike = deleteLike;
    }

    _getTemplate() {
        return document
            .querySelector(this._placeTemplateSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
    }

    _handleLikeClick() {
        if (this._isLiked) {
            this._handleLikedClick()
        }
        else {
            this._handleNotLikedClick()
        }
    }

    _handleLikedClick() {
        this._isLiked = !this._isLiked;
        this._deleteLike(this._id, this._placeLikeCountElement, this._placeLikeElement);
    }

    _handleNotLikedClick() {
        this._isLiked = !this._isLiked;
        this._putLike(this._id, this._placeLikeCountElement, this._placeLikeElement);
    }

    _handleDeleteClick() {
        this._onDeleteClick(this._id, this._element)
    }

    _handleImageClick() {
        this._openPopupPicture({image: this._link, name: this._name})
    }

    _setEventListeners() {
        this._placeLikeElement.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._placeImageElement.addEventListener('click', () => {
            this._handleImageClick();
        });
        if (this._isOwner) {
            this._placeDeleteElement.addEventListener('click', () => {
                this._handleDeleteClick();
            });
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._placeNameElement = this._element.querySelector('.place__name');
        this._placeImageElement = this._element.querySelector('.place__image');
        this._placeLikeElement = this._element.querySelector('.place__like');
        this._placeLikeCountElement = this._element.querySelector('.place__like-count');
        if (this._ownerId === this._userId) {
            this._placeDeleteElement = document.createElement("button");
            this._placeDeleteElement.classList.add('place__delete');
            this._element.prepend(this._placeDeleteElement);
            this._isOwner = true;
        }
        if (this._isLiked) {
            this._placeLikeElement.classList.add('place__like_active');
        }
        this._placeNameElement.textContent = this._name;
        this._placeImageElement.src = this._link;
        this._placeImageElement.alt = this._name;
        this._placeLikeCountElement.textContent = this._likes.length;

        this._setEventListeners();

        return this._element;
    }
}