import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm.jsx";
import "./SignInModal.css";

function SignInModal({
  isOpen,
  closeModal,
  openSignUp,
  handlesignin,
  handleEscKey,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onsignin = (e) => {
    e.preventDefault();
    handlesignin(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Sign In"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onsignin}
      handleEscKey={handleEscKey}
    >
      <label htmlFor="email-signin" className="modal__label">
        <h3 className="modal__label-title">Email</h3>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          id="email-signin"
          value={data.email}
          required
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="password-signin" className="modal__label">
        <h3 className="modal__label-title">Password</h3>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          id="password-signin"
          value={data.password}
          required
          onChange={handleChange}
        ></input>
      </label>
      <button
        className="signup__button-redirect"
        type="button"
        onClick={openSignUp}
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
}

export default SignInModal;
