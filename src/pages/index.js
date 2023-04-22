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
    profileAvatarContainerElement,
} from '../utils/constants.js'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupDeleteCard} from '../components/PopupDeleteCard.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api';

const userInfo = new UserInfo({
    name: '.profile__name',
    description: '.profile__description',
    avatar: '.profile__avatar'})

let label;
function uxLabelSaving(button) {
    label = button.textContent;
    button.textContent = 'Сохранение...';
}
function uxLabelDefault(button) {
    button.textContent = label;
}

const popupEditProfile = new PopupWithForm({
    handleSubmit: (e, inputValues) => {
        e.preventDefault();
        uxLabelSaving(popupEditProfile.submitButton);
        api.patchUserInfo(inputValues)
            .then((data) => {
                userInfo.setUserInfo({name: data.name, description: data.about});
                popupEditProfile.close();
            })
            .catch((error) => console.log(error))
            .finally(() => uxLabelDefault(popupEditProfile.submitButton))
    }
}, '.popup_type_edit')

const popupAddPlace = new PopupWithForm({
    handleSubmit: (e, inputValues) => {
        e.preventDefault();
        uxLabelSaving(popupAddPlace.submitButton);
        api.postNewCard(inputValues)
            .then((data) => {
                renderCard(data);
                popupAddPlace.close();
            })
            .catch(error => console.log(error))
            .finally(() => uxLabelDefault(popupAddPlace.submitButton))
    }
}, '.popup_type_add')

const popupDeleteCard = new PopupDeleteCard('.popup_type_confirm', deleteCard)

const popupPicture = new PopupWithImage(data, '.popup_type_picture');

const popupAvatar = new PopupWithForm({
    handleSubmit: (e, inputValues) => {
        e.preventDefault();
        uxLabelSaving(popupAvatar.submitButton);
        api.patchAvatar(inputValues.link)
            .then((data) => {
                userInfo.setUserInfo({avatar: data.avatar});
                popupAvatar.close()
            })
            .catch(error => console.log(error))
            .finally(() => uxLabelDefault(popupAvatar.submitButton))
    }
}, '.popup_type_avatar')

popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();
popupDeleteCard.setEventListeners();
popupPicture.setEventListeners();
popupAvatar.setEventListeners();

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

function openPopupAvatar () {
    popupAvatar.open();
}

function createCard(place) {
    const card = new Card(place,
        userId,
        openPopupPicture,
        (cardId, card) => popupDeleteCard.open(cardId, card),
        putLike,
        deleteLike,
        '#place');
    return card.generateCard();
}

function renderCard(place) {
    cardList.addItem(createCard(place))
}

function deleteCard(e, {cardId, card}) {
    e.preventDefault();
    uxLabelSaving(popupDeleteCard.submitButton)
    api.deleteCard(cardId)
        .then(() => {
            card.remove();
            popupDeleteCard.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => uxLabelDefault(popupDeleteCard.submitButton));
}

function putLike(cardId, countElement, likeElement) {
    api.putLike(cardId)
        .then(data => {
            countElement.textContent = data.likes.length;
            likeElement.classList.add('place__like_active');
        })
        .catch((err) => {
            console.log(err);
        });
}

function deleteLike(cardId, countElement, likeElement) {
    api.deleteLike(cardId)
        .then(data => {
            countElement.textContent = data.likes.length;
            likeElement.classList.remove('place__like_active');
        })
        .catch((err) => {
            console.log(err);
        });
}

// Слушатели
openEditProfileButton.addEventListener('click', openPopupEditProfile);
openAddPlaceButton.addEventListener('click', openPopupAddPlace);
profileAvatarContainerElement.addEventListener('click', openPopupAvatar)

// Вешаем валидацию на все формы
formArray.forEach(formElement => {
    const form = new FormValidator(data, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = form;
    form.enableValidation();
});


// API

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
        authorization: 'de4d1a5e-b347-4878-b328-8f0194692392',
        'Content-Type': 'application/json'
    }
});

// Информация пользователя и карточки
let userId;
let cardList = [];

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardsData]) => {
        userInfo.setUserInfo({
            name: userData.name,
            description: userData.about,
            avatar: userData.avatar,
        });
        userId = userData._id;

        cardList = new Section({
            items: cardsData, renderer: (place) => {
                renderCard(place)
            }
        }, '.places');

        cardList.renderItems();
    })
    .catch(err => console.log(err));