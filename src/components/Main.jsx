import "./Main.css";
import SearchForm from "./SearchForm.jsx";
import About from "./About.jsx";
import Card from "./Card.jsx";

function Main(isLoggedIn, cardItem, handleSearchNews) {
  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world?</h1>
      <p className="main__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearchNews={handleSearchNews} />
      {/* <section className="cards">
        <ul className="cards__list">
          {cardItem.map((article, index) => {
            <Card key={index} article={article} isLoggedIn={isLoggedIn} />;
          })}
        </ul>
      </section> */}
      <About />
    </main>
  );
}

export default Main;
