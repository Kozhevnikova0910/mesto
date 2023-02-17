// Переменные попапа Edit Profile
const popupEditProfile = document.querySelector('.popup_type_edit');
const openEditProfileButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputEditProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputEditProfileDescription = popupEditProfile.querySelector('.popup__input_type_about');

// Переменные попапа Add Place
const popupAddPlace = document.querySelector('.popup_type_add');
const formAddPlace = popupAddPlace.querySelector('.popup__form')
const openAddPlaceButton = document.querySelector('.profile__add-btn');
const addPlaceButton = popupAddPlace.querySelector('.popup__submit-btn');
const inputAddPlaceName = popupAddPlace.querySelector('.popup__input_type_name');
const inputAddPlaceLink = popupAddPlace.querySelector('.popup__input_type_link');

// Переменные попапа Picture
const popupPicture = document.querySelector('.popup_type_picture');
const imagePopupPicture = popupPicture.querySelector('.picture__image');
const titlePicture = popupPicture.querySelector('.picture__title');

// Остальные переменные...
const placeTemplate = document.querySelector('#place').content;
const placesContainer = document.querySelector('.places');
const popups = document.querySelectorAll('.popup');
const data = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

// Функции открытия попапа
function openPopup (element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
}

function openPopupEditProfile () {
    setPopupEditProfileValues();
    openPopup(popupEditProfile);
}

function openPopupAddPlace () {
    openPopup(popupAddPlace);
    toggleButtonState([inputAddPlaceName, inputAddPlaceName], addPlaceButton, data)
}

function openPopupPicture (pictureData) {
    imagePopupPicture.src = pictureData.image.src;
    titlePicture.textContent = pictureData.name.textContent;
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

function addLikeHandler(item) {
    item.addEventListener('click', e => e.target.classList.toggle('place__like_active'))
}

function addRemovePlaceHandler(item) {
    item.addEventListener('click', e => e.target.parentElement.remove())
}

function addPlace(placeData) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const placeNameElement = placeElement.querySelector('.place__name');
    const placeImageElement = placeElement.querySelector('.place__image');
    const placeLikeElement = placeElement.querySelector('.place__like');
    const placeDeleteElement = placeElement.querySelector('.place__delete');
    placeNameElement.textContent = placeData.name;
    placeImageElement.src = placeData.link;
    placeImageElement.alt = placeData.name;
    addLikeHandler(placeLikeElement);
    addRemovePlaceHandler(placeDeleteElement);
    placeImageElement.addEventListener('click',() =>
        openPopupPicture({name: placeNameElement, image: placeImageElement}));
    return placeElement;
}

function renderCard(place) {
    const placeElement = addPlace(place);
    placesContainer.prepend(placeElement);
}

function popupAddPlaceSubmit(e) {
    e.preventDefault();
    renderCard({name: inputAddPlaceName.value, link: inputAddPlaceLink.value});
    closePopup(popupAddPlace);
    formAddPlace.reset();
}


// Написала эту функцию, т.к. понадобилось задавать значения инпутов popup_type_edit еще при
// загрузке страницы, поскольку кнопка popup__submit-btn получала неправильное состояние валидации
function setPopupEditProfileValues () {
    inputEditProfileName.value = profileName.textContent;
    inputEditProfileDescription.value = profileDescription.textContent;
}

setPopupEditProfileValues();

enableValidation(data);

// События попапа Edit Profile
openEditProfileButton.addEventListener('click', openPopupEditProfile);
popupEditProfile.addEventListener('submit', saveProfileChanges);

// События попапа Add Place
openAddPlaceButton.addEventListener('click', openPopupAddPlace);
popupAddPlace.addEventListener('submit', popupAddPlaceSubmit);


// Добавляем карточки из массива
initialCards.forEach(function (place) {
    renderCard(place);
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