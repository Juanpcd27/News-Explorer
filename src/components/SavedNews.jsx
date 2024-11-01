import "./SavedNews.css";
import Card from "./Card.jsx";
import { useLocation } from "react-router-dom";

function SavedNews({ isLoggedIn, cardItem }) {
  const location = useLocation();

  const paddingSaved = () => {
    if (location.pathname === "/saved-news") {
      return { paddingTop: "0" };
    }
    return;
  };

  return (
    <div className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h1 className="saved__title">Juan, you have 3 saved articles </h1>
      <div className="saved__text">
        <p className="saved__keywords">By keywords:</p>
        <span className="saved__span">Tesla, Robotaxi, Asian shares</span>
      </div>
      <section className="cards">
        <h2 className="search__title" style={paddingSaved()}>
          Search results
        </h2>
        <ul className="cards__list">
          {cardItem.map((article, index) => {
            return (
              <Card key={index} article={article} isLoggedIn={isLoggedIn} />
            );
          })}
        </ul>
      </section>
      <div className="button__more">
        <button className="card__more" type="button">
          Show more
        </button>
      </div>
    </div>
  );
}

export default SavedNews;
