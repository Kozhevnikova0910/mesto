import './index.css';
import {
    formEditProfile,
    openEditProfileButton,
    inputEditProfileName,
    inputEditProfileDescription,
    formAddPlace,
    openAddPlaceButton,
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
import {UserInfo} from '../components/UserInfo.js';

const userInfo = new UserInfo({
    name: '.profile__name',
    description: '.profile__description' })

const popupEditProfile = new PopupWithForm({
    handleSubmit: (e, inputValues) => {
        e.preventDefault();
        userInfo.setUserInfo(inputValues);
        popupEditProfile.close();
    }
}, '.popup_type_edit')

const popupAddPlace = new PopupWithForm({
    handleSubmit: (e, inputValues) => {
        e.preventDefault();
        renderCard(inputValues);
        popupAddPlace.close();
    }
}, '.popup_type_add')

const popupPicture = new PopupWithImage(data, '.popup_type_picture');

popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();
popupPicture.setEventListeners();


function openPopupEditProfile () {
    const userInfoValues = userInfo.getUserInfo();
    inputEditProfileName.value = userInfoValues.name;
    inputEditProfileDescription.value = userInfoValues.description;
    formValidators[formEditProfile.getAttribute('name')].resetValidation();
    popupEditProfile.open();
}

function openPopupAddPlace () {
    formValidators[formAddPlace.getAttribute('name')].resetValidation();
    popupAddPlace.open();
}

function openPopupPicture (data) {
    popupPicture.open(data);
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
        renderCard(place)
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