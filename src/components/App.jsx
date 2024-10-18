import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import RegisterModal from "./RegisterModal.jsx";
import SignInModal from "./SignInModal.jsx";
import { userRegistration, userSignin } from "../utils/auth";
import { getToken, setToken, removeToken } from "../utils/token";
import { fetchNews, savedNews } from "../utils/newsApi";
import { getItems } from "../utils/api";
import SavedNews from "./SavedNews.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Card from "./Card";

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

  function handleEscKey(e) {
    if (e.key === "Escape") {
      return closeModal();
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    getItems()
      .then((data) => {
        const articles = data[0].articles;
        setSavedArticles(articles);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   fetchNews()
  //     .then((data) => {
  //       const newsData = savedNews(data);
  //       setSavedArticles(newsData);
  //     })
  //     .catch(console.error);
  // }, []);

  const handleRegistration = ({ email, password, username }) => {
    userRegistration(email, password, username)
      .then(() => {
        openSignInModal();
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
          console.log(data);
          setIsLoggedIn(true);
          navigate("/saved-news");
        }
      })
      .catch(console.error);
  };

  const handleSearchNews = (query) => {
    setIsLoading(true);
    fetchNews(query)
      .then((articles) => {
        if (articles.length === 0) {
          setIsNotFound(true);
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
      <div className="app__content app__saved-news">
        <Header openSignInModal={openSignInModal} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                cardItem={cardItem}
                handleSearchNews={handleSearchNews}
              />
            }
          />
          <Route
            id="app__content"
            path="/saved-news"
            element={
              // <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews isLoggedIn={isLoggedIn} />

              // </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
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
    </div>
  );
}

export default App;
