import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ isOpen, opensignIn, closeModal }) {
  return (
    <nav className="nav">
      <div className={`modal__nav ${isOpen && "modal_opened"}`}>
        <div className="modal__container-nav">
          <button
            className="modal__close-nav"
            type="button"
            onClick={closeModal}
          >
            X
          </button>
          <h2 className="nav__title">NewsExplorer</h2>
          <div className="nav__buttons-container">
            <a className="nav__home" href="/">
              Home
            </a>
            <button className="nav__signin-button" onClick={opensignIn}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
