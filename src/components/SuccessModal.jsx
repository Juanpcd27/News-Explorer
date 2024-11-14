import "./SuccessModal.css";

function SuccessModal({ isOpen, closeModal, opensignIn }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container">
        <button className="modal__close" type="button" onClick={closeModal}>
          X
        </button>
        <h2 className="modal__title">Registration successfully completed!</h2>
        <button className="button__sign-in" type="button" onClick={opensignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
