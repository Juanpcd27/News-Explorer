import "./SavedNews.css";

function SavedNews({ isLoggedIn }) {
  return (
    <section className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h1 className="saved__title">Juan, you have 3 saved articles </h1>
      <p className="saved__keywords">By keywords: etc etc etc </p>
    </section>
  );
}

export default SavedNews;
