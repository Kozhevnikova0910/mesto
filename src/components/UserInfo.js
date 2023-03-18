export class UserInfo {
    constructor({ name, description }) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        return { name: this._name.value, description: this._description.value }
    }

    setUserInfo(name, description) {
        this._name.value = name;
        this._description.value = description;
    }
}