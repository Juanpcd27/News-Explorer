import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  closeModal,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={closeModal}>
          X
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          {children}
          <button className="button__submit" type="submit" onSubmit={onSubmit}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
