import './index.css';
import {
    formEditProfile,
    openEditProfileButton,
    profileName,
    profileDescription,
    inputEditProfileName,
    inputEditProfileDescription,
    formAddPlace,
    openAddPlaceButton,
    inputAddPlaceName,
    inputAddPlaceLink,
    data,
    formArray,
    formValidators,
    initialCards
} from '../utils/constants.js'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';


const popupEditProfileClass = new PopupWithForm({
    handleSubmit: (e) => {
        e.preventDefault();
        profileName.textContent = inputEditProfileName.value;
        profileDescription.textContent = inputEditProfileDescription.value;
        popupEditProfileClass.close();
    }
}, '.popup_type_edit')

const popupAddPlaceClass = new PopupWithForm({
    handleSubmit: (e) => {
        e.preventDefault();
        renderCard({name: inputAddPlaceName.value, link: inputAddPlaceLink.value});
        popupAddPlaceClass.close();
    }
}, '.popup_type_add')

const popupWithImage = new PopupWithImage(data, '.popup_type_picture');

popupEditProfileClass.setEventListeners();
popupAddPlaceClass.setEventListeners();
popupWithImage.setEventListeners();


function openPopupEditProfile () {
    inputEditProfileName.value = profileName.textContent;
    inputEditProfileDescription.value = profileDescription.textContent;
    formValidators[formEditProfile.getAttribute('name')].resetValidation();
    popupEditProfileClass.open();
}

function openPopupAddPlace () {
    formValidators[formAddPlace.getAttribute('name')].resetValidation();
    popupAddPlaceClass.open();
}

function openPopupPicture (data) {
    const popupWithImage = new PopupWithImage(data, '.popup_type_picture');
    popupWithImage.open();
}

function createCard(place) {
    const card = new Card(place, openPopupPicture, '#place');
    return card.generateCard();
}

function renderCard(place) {
    cardList.addItem(createCard(place))
}


// Слушатели для открытия попапов
openEditProfileButton.addEventListener('click', openPopupEditProfile);

openAddPlaceButton.addEventListener('click', openPopupAddPlace);


const cardList = new Section({
    items: initialCards,
    renderer: (place) => {
        const card = new Card(place, openPopupPicture, '#place');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }}, '.places'
);

cardList.renderItems();


// Вешаем валидацию на все формы
formArray.forEach(formElement => {
    const form = new FormValidator(data, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = form;
    form.enableValidation();
});