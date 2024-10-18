import "./SavedNews.css";
import Card from "./Card.jsx";

function SavedNews({ isLoggedIn }) {
  return (
    <section className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h1 className="saved__title">Juan, you have 3 saved articles </h1>
      <div className="saved__text">
        <p className="saved__keywords">By keywords:</p>
        <span className="saved__span">W15, Ferrari F1, McLaren F1</span>
      </div>
      <Card />
    </section>
  );
}

export default SavedNews;
