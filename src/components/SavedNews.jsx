import "./SavedNews.css";
import Card from "./Card.jsx";

function SavedNews({ isLoggedIn, cardItem, isSearched }) {
  return (
    <div className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h1 className="saved__title">Juan, you have 3 saved articles </h1>
      <div className="saved__text">
        <p className="saved__keywords">By keywords:</p>
        <span className="saved__span">Tesla, Robotaxi, Asian shares</span>
      </div>
      <section className="cards">
        {isSearched ? (
          <>
            <h2 className="search__title">Search results</h2>
          </>
        ) : (
          <></>
        )}
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
          <div className="button__more">
            <button className="card__more" type="button">
              Show more
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SavedNews;
