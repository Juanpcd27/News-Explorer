import "./Main.css";
import SearchForm from "./SearchForm.jsx";
import About from "./About.jsx";
import Card from "./Card.jsx";
import Preloader from "./Preloader.jsx";
import NotFound from "./NotFound.jsx";
import { Link } from "react-router-dom";

function Main({
  isLoggedIn,
  cardItem,
  handleSearchNews,
  isSearched,
  isLoading,
  isNotFound,
}) {
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
      {isSearched ? (
        <>
          <h2 className="search__title">Search results</h2>
        </>
      ) : (
        <></>
      )}

      <section className="cards">
        <ul className="cards__list">
          {cardItem.map((article, index) => {
            return (
              <Card key={index} article={article} isLoggedIn={isLoggedIn} />
            );
          })}
        </ul>
      </section>
      {isSearched ? (
        <>
          <Link className="card__link" to="/saved-news">
            <button className="card__more" type="button">
              Show more
            </button>
          </Link>
        </>
      ) : (
        <></>
      )}
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
