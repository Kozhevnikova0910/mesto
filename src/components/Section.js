export class Section {
    constructor({ items, renderer }, selector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._initialArray.reverse().forEach(item => {
            this._renderer(item);
        })
    }
}