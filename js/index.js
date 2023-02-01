let editButton = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.querySelector('.popup__name');
let popupDescription = document.querySelector('.popup__description');

function popupOpen () {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
}
function popupClose () {
    popup.classList.remove('popup_opened');
}
function saveProfileChanges (e) {
    e.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    popupClose();
}

popupCloseButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
popup.addEventListener('submit', saveProfileChanges);
