// Переменные попапа Edit Profile
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const openEditProfileButton = document.querySelector('.profile__edit-btn');
const inputEditProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputEditProfileDescription = popupEditProfile.querySelector('.popup__input_type_about');

// Переменные попапа Add Place
const popupAddPlace = document.querySelector('.popup_type_add');
const formAddPlace = popupAddPlace.querySelector('.popup__form');
const openAddPlaceButton = document.querySelector('.profile__add-btn');

// Другие переменные...
const data = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
const formArray = Array.from(document.querySelectorAll(data.formSelector));
const formValidators = {};


// Переменные для Api
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');
const profileAvatarContainerElement = document.querySelector('.profile__avatar-container');
const profileAvatarElement = profileAvatarContainerElement.querySelector('.profile__avatar')

export {
    formEditProfile,
    openEditProfileButton,
    inputEditProfileName,
    inputEditProfileDescription,
    formAddPlace,
    openAddPlaceButton,
    data,
    formArray,
    formValidators,
    profileNameElement,
    profileDescriptionElement,
    profileAvatarElement,
    profileAvatarContainerElement,
}