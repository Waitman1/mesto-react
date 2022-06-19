import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props);
  }

  return (
    <li className="elements__card">
      <img
        className="elements__card-image"
        src={props.link}
        alt={props.name}
        onClick={handleCardClick}
      />
      <h2 className="elements__card-title">{props.name}</h2>
      <div className="elements__card-like">
        <button
          className="elements__card-like-button"
          type="button"
          aria-label="Лайк"
          onClick={() => {}}></button>
        <p className="elements__card-like-counter">{props.likes.length}</p>
      </div>
      <button className="elements__card-delete-button" type="button" aria-label="Корзина"></button>
    </li>
  );
}

export default Card;
