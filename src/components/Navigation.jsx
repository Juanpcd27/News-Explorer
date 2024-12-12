import "./Navigation.css";
import logoutwhite from "../assets/logoutwhite.svg";

function Navigation({ isOpen, opensignIn, closeModal, isLoggedin, logout }) {
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
            {isLoggedin ? (
              <>
                {" "}
                <a
                  className="saved__article-button"
                  href="/final-project-JPCD-frontend/saved-news"
                >
                  {" "}
                  Saved articles
                </a>
                <div className="header__user-container-nav">
                  <button
                    className="header__username-nav"
                    type="submit"
                    onClick={logout}
                  >
                    Juan
                  </button>
                  <img
                    className="header__username_img-nav"
                    src={logoutwhite}
                    alt="username-image"
                  ></img>
                </div>
              </>
            ) : (
              <></>
            )}
            {isLoggedin === false ? (
              <>
                <button className="nav__signin-button" onClick={opensignIn}>
                  Sign in
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
