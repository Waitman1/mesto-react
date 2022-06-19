import React from 'react';

function PopupWithForm({ name, title, isOpen, children, onClose, buttonText }) {
  return (
    <section className={`popup popup_type_${name}` + ' ' + (isOpen ? 'popup_opened' : '')}>
      <div className="popup__content">
        <button
          className="popup__close edit-popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}></button>
        <form className="popup__content-form edit-popup__form" name={name} noValidate>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button className="popup__submit edit-avatar-popup__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
