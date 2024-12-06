import "./Main.css";
import SearchForm from "./SearchForm.jsx";
import About from "./About.jsx";
import Card from "./Card.jsx";
import Preloader from "./Preloader.jsx";
import NotFound from "./NotFound.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function Main({
  isLoggedIn,
  cardItem,
  handleSearchNews,
  isSearched,
  isLoading,
  isNotFound,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world?</h1>
      <p className="main__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearchNews={handleSearchNews} />
      {isLoading ? (
        <>
          <Preloader />
        </>
      ) : (
        <></>
      )}

      <section className="cards">
        {isSearched ? (
          <>
            <h2 className="card__search-title">Search results</h2>
          </>
        ) : (
          <></>
        )}
        <div className="cards__list">
          {cardItem.slice(0, 3).map((article, index) => {
            return (
              <Card key={index} article={article} isLoggedIn={isLoggedIn} />
            );
          })}
        </div>
        {isSearched ? (
          <>
            <div className="cards__list">
              {showMore &&
                cardItem.slice(3).map((article, index) => {
                  return (
                    <Card
                      key={index}
                      article={article}
                      isLoggedIn={isLoggedIn}
                    />
                  );
                })}{" "}
              <button
                className="card__more"
                type="button"
                onClick={() => setShowMore(true)}
              >
                Show more
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </section>

      {isNotFound ? (
        <>
          <NotFound />
        </>
      ) : (
        <></>
      )}
      <About />
    </main>
  );
}

export default Main;
