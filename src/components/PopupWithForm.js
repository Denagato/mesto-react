function PopupWithForm({title, name, children, isOpen, onClose}) {
  return(
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button className={`popup__close popup__close-${name}`} type="button" onClick={onClose}/>
        <form className={`popup__field popup__field-${name}`} name={`form${name}`} method="GET" noValidate>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button className={`popup__submit-button popup__submit-button_${name}`} type="submit" name="submit">Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;