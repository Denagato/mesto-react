import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: "", name: ""});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    const {link, name} = card;
    setSelectedCard({isOpen: true, link: link, name: name});
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({isOpen: false, link: "", name: ""});
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      
      <Footer />

      <PopupWithForm title="Вы уверены?" name="delete-image"/>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar-edit"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input required className="popup__input popup__field_avatar-edit" 
          type="url" name="avatar" placeholder="Ссылка на аватар" id="input-avatar"/>
        <span className="error" id="input-avatar-error"/>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input required className="popup__input popup__field-name" id="input-name" 
          minLength="2" maxLength="40" type="text" name="name"/>
        <span id="input-name-error" className="error"/>
        <input required className="popup__input popup__field-job" id="input-job" 
          minLength="2" maxLength="200" type="text" name="job"/>
        <span id="input-job-error" className="error"/>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input required className="popup__input popup__field-title" id="input-title" 
          minLength="2" maxLength="30" type="text" name="title" placeholder="Название"/>
        <span id="input-title-error" className="error"/>
        <input required className="popup__input popup__field-link" id="input-link" 
          type="url" name="link" placeholder="Ссылка на картинку"/>
        <span id="input-link-error" className="error"/>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
