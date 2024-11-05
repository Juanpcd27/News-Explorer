import "./Main.css";
import SearchForm from "./SearchForm.jsx";
import About from "./About.jsx";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";

function Main({ isLoggedIn, cardItem, handleSearchNews, article }) {
  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world?</h1>
      <p className="main__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearchNews={handleSearchNews} />
      <section className="cards">
        <h2 className="search__title">Search results</h2>
        <ul className="cards__list">
          {cardItem.map((article, index) => {
            return (
              <Card key={index} article={article} isLoggedIn={isLoggedIn} />
            );
          })}
        </ul>
      </section>
      <Link className="card__link" to="/saved-news">
        <button className="card__more" type="button">
          Show more
        </button>
      </Link>
      <About />
    </main>
  );
}

export default Main;
