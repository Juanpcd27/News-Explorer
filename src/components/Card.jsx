import "./Card.css";

function Card({ article, isLoggedIn }) {
  return (
    <div className="card__container">
      <h2 className="search__title">Search results</h2>
      <ul>
        <li className="card">
          <img className="card__save"></img>
          <img
            className="card__image"
            src={article.urlToImage}
            alt={article.name}
          ></img>
          <p className="card__date">{article.publishedAt}</p>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.source.name}</p>
        </li>
      </ul>
    </div>
  );
}

export default Card;
