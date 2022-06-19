import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from '../components/Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfileInfo()
      .then((userStats) => {
        setUserAvatar(userStats.avatar);

        setUserName(userStats.name);

        setUserDescription(userStats.about);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
          })),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Изменить_аватар"
            onClick={() => {
              onEditAvatar(true);
            }}></button>
          <img
            className="profile__avatar-image"
            style={{ backgroundImage: `url(${userAvatar})`, backgroundSize: 'cover' }}
          />
        </div>
        <div className="profile__intro">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit"
            type="button"
            aria-label="Редактировать"
            onClick={() => {
              onEditProfile(true);
            }}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-card"
          type="button"
          aria-label="Добавить"
          onClick={() => {
            onAddPlace(true);
          }}></button>
      </section>

      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
