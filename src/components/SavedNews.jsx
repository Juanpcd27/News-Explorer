import "./SavedNews.css";
import Card from "./Card.jsx";

function SavedNews({ isLoggedIn }) {
  return (
    <section className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h1 className="saved__title">Juan, you have 3 saved articles </h1>
      <p className="saved__keywords">
        By keywords: W15, Ferrari F1, McLaren F1{" "}
      </p>
      <Card />
    </section>
  );
}

export default SavedNews;
