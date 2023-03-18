export class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (e) => {
            this._handleEscClose(e);
        });
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (e.target.classList.contains('popup__close-btn')) {
                this.close();
            }
        })
    }

}