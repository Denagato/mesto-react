function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card)
  }

  return(
    <li className="element">
      <button className="element__delete" type="button"/>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <div className="element__sign">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-field">
          <button className="element__like" type="button"/>
          <p className="element__like-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;