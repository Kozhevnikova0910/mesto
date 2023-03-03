// Товарищ ревьюер, спасибо большое за комментарии "Можно лучше" и подсказки! Очень помогают улучшать мой код. =)

import {initialCards} from './cards.js'
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

// Переменные попапа Edit Profile
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const openEditProfileButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputEditProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputEditProfileDescription = popupEditProfile.querySelector('.popup__input_type_about');

// Переменные попапа Add Place
const popupAddPlace = document.querySelector('.popup_type_add');
const formAddPlace = popupAddPlace.querySelector('.popup__form');
const openAddPlaceButton = document.querySelector('.profile__add-btn');
const inputAddPlaceName = popupAddPlace.querySelector('.popup__input_type_name');
const inputAddPlaceLink = popupAddPlace.querySelector('.popup__input_type_link');

// Переменные попапа Picture
const popupPicture = document.querySelector('.popup_type_picture');
const imagePopupPicture = popupPicture.querySelector('.picture__image');
const titlePicture = popupPicture.querySelector('.picture__title');

// Остальные переменные...
const placesContainer = document.querySelector('.places');
const popups = document.querySelectorAll('.popup');
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

// Функции открытия попапа
function openPopup (element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
}

function openPopupEditProfile () {
    inputEditProfileName.value = profileName.textContent;
    inputEditProfileDescription.value = profileDescription.textContent;
    formValidators[formEditProfile.getAttribute('name')].resetValidation();
    openPopup(popupEditProfile);
}

function openPopupAddPlace () {
    formValidators[formAddPlace.getAttribute('name')].resetValidation();
    openPopup(popupAddPlace);
}

function openPopupPicture (pictureData) {
    imagePopupPicture.src = pictureData.imageElement.src;
    imagePopupPicture.alt = pictureData.nameElement.textContent;
    titlePicture.textContent = pictureData.nameElement.textContent;
    openPopup(popupPicture);
}

// Функции закрытия попапа
function closePopup (element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
}

function closePopupByEscape(e) {
    if (e.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Другие функции
function saveProfileChanges (e) {
    e.preventDefault();
    profileName.textContent = inputEditProfileName.value;
    profileDescription.textContent = inputEditProfileDescription.value;
    closePopup(popupEditProfile);
}

function createCard(place) {
    const card = new Card(place, openPopupPicture, '#place');
    return card.generateCard();
}

function renderCard(place) {
    placesContainer.prepend(createCard(place));
}

function popupAddPlaceSubmit(e) {
    e.preventDefault();
    renderCard({name: inputAddPlaceName.value, link: inputAddPlaceLink.value});
    closePopup(popupAddPlace);
    formAddPlace.reset();
}


// Слушатели попапа Edit Profile
openEditProfileButton.addEventListener('click', openPopupEditProfile);
popupEditProfile.addEventListener('submit', saveProfileChanges);

// Слушатели попапа Add Place
openAddPlaceButton.addEventListener('click', openPopupAddPlace);
popupAddPlace.addEventListener('submit', popupAddPlaceSubmit);


// Добавляем карточки из массива
initialCards.forEach(function (place) {
    renderCard(place);
});

// Вешаем валидацию на все формы
formArray.forEach(formElement => {
    const form = new FormValidator(data, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = form;
    form.enableValidation();
});

// Добавляем события закрытия попапов
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-btn')) {
            closePopup(popup)
        }
    })
})