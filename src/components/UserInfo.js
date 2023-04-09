export class UserInfo {
    constructor({ name, description, avatar, _id }) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src,
        }
    }

    setUserInfo({ name, description, avatar }) {
        if (name) this._name.textContent = name;
        if (description) this._description.textContent = description;
        if (avatar) this._avatar.src = avatar;
    }
}