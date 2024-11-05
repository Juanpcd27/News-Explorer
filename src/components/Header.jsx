import "./header.css";
import { Link, useLocation } from "react-router-dom";

function Header({ openSignInModal, isLoggedIn }) {
  const location = useLocation();

  const getFontStyle = () => {
    if (location.pathname === "/saved-news") {
      return { color: "black" };
    }
    return { color: "white" };
  };

  return (
    <header className="header" style={getFontStyle()}>
      <p className="header__title">NewsExplorer</p>
      <Link className="header__link" to="/">
        <button className="header__home-button" style={getFontStyle()}>
          Home
        </button>
      </Link>
      {location.pathname === "/saved-news" ? (
        <>
          <button className="saved__article-button"> Saved articles</button>
          <div className="header__user-container">
            <p className="header__username">Juan</p>
          </div>
        </>
      ) : (
        <>
          <button
            className="header__signin-button"
            onClick={openSignInModal}
            style={getFontStyle()}
          >
            Sign in
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
