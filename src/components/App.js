import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onCardClick={setSelectedCard}
        />

        <Footer />

        <PopupWithForm
          name="edit-avatar-form"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
          buttonText="Сохранить">
          <input
            id="url-input-avatar"
            className="popup__content-form-input popup__content-form-input_type_url"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="url-input-avatar-error popup__content-form-input-text-error edit-avatar-popup__container-form-input-text-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit-form"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          buttonText="Сохранить">
          <input
            id="name-input"
            className="popup__content-form-input popup__content-form-input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-input-error popup__content-form-input-text-error "></span>
          <input
            id="job-input"
            className="popup__content-form-input popup__content-form-input_type_job"
            type="text"
            name="about"
            placeholder="Вид деятельности"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="job-input-error popup__content-form-input-text-error "></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-form"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
          buttonText="Создать">
          <input
            id="place-input"
            className="popup__content-form-input popup__content-form-input_type_name-place"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="place-input-error popup__content-form-input-text-error "></span>
          <input
            id="url-input"
            className="popup__content-form-input popup__content-form-input_type_url"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="url-input-error popup__content-form-input-text-error "></span>
        </PopupWithForm>

        <PopupWithForm name="delete-form" title="Вы уверены?" buttonText="Да"></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
      </div>
    </div>
  );
}

export default App;
