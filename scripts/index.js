// Переменные попапа Edit Profile
const popupEditProfile = document.querySelector('.popup_type_edit');
const openEditProfileButton = document.querySelector('.profile__edit-btn');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let inputEditProfileName = popupEditProfile.querySelector('.popup__input_type_name');
let inputEditProfileDescription = popupEditProfile.querySelector('.popup__input_type_about');

// Переменные попапа Add Place
const popupAddPlace = document.querySelector('.popup_type_add');
const openAddPlaceButton = document.querySelector('.profile__add-btn');
const closeAddPlaceButton = popupAddPlace.querySelector('.popup__close-btn');
let inputAddPlaceName = popupAddPlace.querySelector('.popup__input_type_name');
let inputAddPlaceLink = popupAddPlace.querySelector('.popup__input_type_link');

// Переменные попапа Picture
const popupPicture = document.querySelector('.popup_type_picture');
const closePictureButton = popupPicture.querySelector('.popup__close-btn');
const imagePopupPicture = popupPicture.querySelector('.picture__image');
const titlePicture = popupPicture.querySelector('.picture__title');

// Остальные переменные...
const placeTemplate = document.querySelector('#place').content;
const placesContainer = document.querySelector('.places');


// Функции открытия попапа
function openPopup (element) {
    element.classList.add('popup_opened');
    inputEditProfileName.value = profileName.textContent;
    inputEditProfileDescription.value = profileDescription.textContent;
}

function openPopupEditProfile () {
    openPopup(popupEditProfile);
}

function openPopupAddPlace () {
    openPopup(popupAddPlace);
}

function openPopupPicture () {
    openPopup(popupPicture);
}

// Функции закрытия попапа
function closePopup (element) {
    element.classList.remove('popup_opened');
}

function closePopupEditProfile () {
    closePopup(popupEditProfile);
}

function closePopupAddPlace () {
    closePopup(popupAddPlace);
}

function closePopupPicture () {
    closePopup(popupPicture);
}

// Другие функции
function saveProfileChanges (e) {
    e.preventDefault();
    profileName.textContent = inputEditProfileName.value;
    profileDescription.textContent = inputEditProfileDescription.value;
    closePopup(popupEditProfile);
}

function addPlace(name, link) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__name').textContent = name;
    placeElement.querySelector('.place__image').src = link;
    addLikeHandler(placeElement.querySelector('.place__like'));
    addRemovePlaceHandler(placeElement.querySelector('.place__delete'));
    placeElement.querySelector('.place__image').addEventListener('click', openImageClick);
    placesContainer.prepend(placeElement);
}


// События попапа Edit Profile
openEditProfileButton.addEventListener('click', openPopupEditProfile);
closeEditProfileButton.addEventListener('click', closePopupEditProfile);
popupEditProfile.addEventListener('submit', saveProfileChanges);

// События попапа Add Place
openAddPlaceButton.addEventListener('click', openPopupAddPlace);
closeAddPlaceButton.addEventListener('click', closePopupAddPlace);
popupAddPlace.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputAddPlaceName.value && inputAddPlaceLink.value) {
        addPlace(inputAddPlaceName.value, inputAddPlaceLink.value);
        closePopupAddPlace();
        inputAddPlaceName.value = '';
        inputAddPlaceLink.value = '';
    }
});

// Вешаем клик на лайки из HTML, на остальные лайки клик вешаем при добавлении
const likesArray = document.querySelectorAll('.place__like')
likesArray.forEach(item => addLikeHandler(item));

function addLikeHandler(item) {
    item.addEventListener('click', e => e.target.classList.toggle('place__like_active'))
}


// Добавление карточек мест
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(place => addPlace(place.name, place.link));

// Вешаем клик на иконку удаления места
const removeButtonsArray = document.querySelectorAll('.place__delete')
removeButtonsArray.forEach(item => addRemovePlaceHandler(item));

function addRemovePlaceHandler(item) {
    item.addEventListener('click', e => e.target.parentElement.remove())
}

// Вешаем клик на фуллскрин места
const imagesArray = document.querySelectorAll('.place__image');
imagesArray.forEach(item => item.addEventListener('click', openImageClick));

function openImageClick(e) {
    openPopupPicture();
    imagePopupPicture.src = e.target.src;
    titlePicture.textContent = e.target.nextElementSibling.firstElementChild.textContent;
}

closePictureButton.addEventListener('click', closePopupPicture);