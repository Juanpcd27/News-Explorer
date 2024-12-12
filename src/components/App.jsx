import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import RegisterModal from "./RegisterModal.jsx";
import SignInModal from "./SignInModal.jsx";
import { userRegistration, userSignin } from "../utils/auth.js";
import { getToken, setToken, removeToken } from "../utils/token.js";
import { fetchNews, savedNews } from "../utils/newsApi.js";
import { getItems } from "../utils/api.js";
import SavedNews from "./SavedNews.jsx";
// import ProtectedRoute from "./ProtectedRoute.jsx";
import mainImg from "../assets/mainimage.png";
import SuccessModal from "./SuccessModal.jsx";
import Navigation from "./Navigation.jsx";

function App() {
  const [activeModal, setactiveModal] = useState("");
  const [cardItem, setCardItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });
  const [currentUser, setCurrentUser] = useState({});

  function openSignInModal() {
    setactiveModal("signin");
  }

  function openSignupModal() {
    setactiveModal("signup");
  }

  function closeModal() {
    setactiveModal("");
  }

  function openSuccessModal() {
    setactiveModal("success");
  }

  function openNavModal() {
    setactiveModal("nav");
  }

  function handleEscKey(e) {
    if (e.key === "Escape") {
      return closeModal();
    }
  }

  const navigate = useNavigate();

  const location = useLocation();

  const getBackgroundStyle = () => {
    if (location.pathname === "/saved-news") {
      return { backgroundImage: "none" };
    }

    return { backgroundImage: { mainImg } };
  };

  const getFontStyle = () => {
    if (location.pathname === "/saved-news") {
      return { color: "black" };
    }
    return { color: "white" };
  };

  const handleRegistration = ({ email, password, username }) => {
    userRegistration(email, password, username)
      .then(() => {
        openSuccessModal();
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  const handlesignin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    userSignin(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
        }
      })
      .catch(console.error);
  };

  const handleSearchNews = (query) => {
    setIsLoading(true);
    setIsSearched(true);
    fetchNews(query)
      .then((articles) => {
        if (articles.length === 0) {
          setIsNotFound(true);
          setIsSearched(false);
        } else {
          setIsNotFound(false);
        }
        setCardItem(articles);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <div className="app__content" style={getBackgroundStyle()}>
        <Header
          openSignInModal={openSignInModal}
          isLoggedIn={isLoggedIn}
          logout={handleLogout}
          openNavModal={openNavModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                cardItem={cardItem}
                handleSearchNews={handleSearchNews}
                isSearched={isSearched}
                isLoading={isLoading}
                isNotFound={isNotFound}
              />
            }
          />
          <Route
            id="app__content"
            path="/saved-news"
            element={
              // <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                isLoggedIn={isLoggedIn}
                cardItem={cardItem}
                isSearched={isSearched}
              />

              // </ProtectedRoute>
            }
          />

          {/* <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          /> */}
        </Routes>
        <Footer />
      </div>
      <SignInModal
        isOpen={activeModal === "signin"}
        closeModal={closeModal}
        openSignUp={openSignupModal}
        handlesignin={handlesignin}
        handleEscKey={handleEscKey}
      />
      <RegisterModal
        isOpen={activeModal === "signup"}
        closeModal={closeModal}
        opensignIn={openSignInModal}
        handleRegistration={handleRegistration}
        handleEscKey={handleEscKey}
      />
      <SuccessModal
        isOpen={activeModal === "success"}
        closeModal={closeModal}
        opensignIn={openSignInModal}
      />
      <Navigation
        isOpen={activeModal === "nav"}
        closeModal={closeModal}
        opensignIn={openSignInModal}
        isLoggedin={isLoggedIn}
        logout={handleLogout}
      ></Navigation>
    </div>
  );
}

export default App;
