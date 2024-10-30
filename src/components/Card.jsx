import "./Card.css";

function Card({ isLoggedIn, article }) {
  return (
    <div className="card__container">
      <h2 className="search__title">Search results</h2>
      <ul className="cards">
        <li className="card">
          <button className="card__save" type="button"></button>
          <img
            className="card__image"
            src={article.urlToImage}
            alt={article.title}
          ></img>
          <p className="card__date">{article.publishedAt}</p>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.author}</p>
        </li>
      </ul>
    </div>
  );
}

export default Card;
