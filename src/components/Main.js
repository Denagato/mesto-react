import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getStartInfo()
      .then(([{name, about, avatar}, cards]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(cards);
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`))
  }, []);

  return(
    <main>
      <section className="profile">
        <div className="profile__avatar-field">
          <img className="profile__avatar" src={userAvatar} alt="Фото"/>
          <button className="profile__avatar-button" type="button" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__info-button" type="button" onClick={onEditProfile}/>
          <p className="profile__job">{userDescription}</p>
        </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__table">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;