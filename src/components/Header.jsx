import "./header.css";
import { Link } from "react-router-dom";

function Header({ openSignInModal, isLoggedIn }) {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
      <Link to="/">
        <button className="header__home-button">Home</button>
      </Link>
      {isLoggedIn ? (
        <>
          <button className="saved__article-button"> Saved articles</button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{userData.name}</p>
            </div>
          </Link>
        </>
      ) : (
        <>
          <button className="header__signin-button" onClick={openSignInModal}>
            Sign in
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
