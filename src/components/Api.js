export class Api {
    constructor(options) {
        // тело конструктора
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
    }

    // другие методы работы с API
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
    }

    patchUserInfo(inputValues) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({name: inputValues.name, about: inputValues.description})
        })
    }

    postNewCard(cardInfo) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(cardInfo)
        })
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this.headers,
        })
    }

    putLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this.headers,
        })
    }

    deleteLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this.headers,
        })
    }

    patchAvatar(link) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({avatar: link})
        })
    }

}