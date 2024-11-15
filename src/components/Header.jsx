import "./header.css";
import { Link, useLocation } from "react-router-dom";
import usernameimg from "../assets/logout.svg";
import logoutwhite from "../assets/logoutwhite.svg";

function Header({ openSignInModal, isLoggedIn, logout }) {
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
      {isLoggedIn && location.pathname === "/" ? (
        <>
          <Link className="header__saved-button" to="/saved-news">
            <button className="saved__button" type="button">
              {" "}
              Saved articles
            </button>
          </Link>
        </>
      ) : (
        <></>
      )}
      {location.pathname === "/saved-news" ? (
        <>
          <button className="saved__article-button"> Saved articles</button>
          <div className="header__user-container">
            <button className="header__username" type="submit" onClick={logout}>
              Juan
            </button>
            <img
              className="username__img"
              src={usernameimg}
              alt="username-image"
            ></img>
          </div>
        </>
      ) : (
        <></>
      )}
      {isLoggedIn && location.pathname === "/" ? (
        <>
          <div className="header__user-container">
            <button
              className="header__username"
              type="submit"
              onClick={logout}
              style={getFontStyle()}
            >
              Juan
            </button>
            <img
              className="username__img"
              src={logoutwhite}
              alt="username-image"
            ></img>
          </div>
        </>
      ) : (
        <></>
      )}
      {location.pathname === "/" && isLoggedIn === false ? (
        <>
          <button
            className="header__signin-button"
            onClick={openSignInModal}
            style={getFontStyle()}
          >
            Sign in
          </button>
        </>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
