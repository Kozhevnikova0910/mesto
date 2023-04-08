import { Popup } from "./Popup";

export class PopupDeleteCard extends Popup {
    constructor(selector, onSubmit) {
        super(selector);
        this._onSubmit = onSubmit;
        this._popupForm = this._popup.querySelector(".popup__form");
    }

    _onSubmitHandler = (e) => {
        this._onSubmit(e, { cardId: this._cardId, card: this._card });
        this._popup.classList.remove('popup_opened');
        this._popupForm.removeEventListener("submit", this._onSubmitHandler);
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", this._onSubmitHandler);
    }

    open(cardId, card) {
        super.open();
        this._cardId = cardId;
        this._card = card;
    }
}