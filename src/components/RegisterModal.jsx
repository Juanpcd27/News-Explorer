import React, { useState } from "react";
import ModalWithForm from ".src/components/ModalWithForm.jsx";
import "./RegisterModal.css";

function RegisterModal({ isOpen, closeModal, opensignIn, handleRegistration }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onRegistration = (e) => {
    e.preventDefault();
    handleRegistration(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onRegistration}
    >
      <label htmlFor="email-signup" className="modal__label">
        <h3 className="modal__label-title">Email</h3>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Enter email"
          id="email-signup"
          required
          value={data.email}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="password-signup" className="modal__label">
        <h3 className="modal__label-title">Password</h3>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          id="password-signup"
          required
          value={data.password}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="username-signup" className="modal__label">
        <h3 className="modal__label-title">Username</h3>
        <input
          className="modal__input"
          type="username"
          name="username"
          placeholder="Enter your username"
          id="username-signup"
          required
          value={data.username}
          onChange={handleChange}
        ></input>
      </label>
      <button
        className="signin__button-redirect"
        type="button"
        onClick={opensignIn}
      >
        or Sign in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
