import "./SavedNews.css";
import ferrari from "../assets/ferrari.png";
import mclaren from "../assets/mclaren.avif";
import mercedes from "../assets/mercedes-f1-w15.jpg";

function SavedNews() {
  return (
    <div className="saved__news">
      <h3 className="saved__description">Saved articles</h3>
      <h2 className="saved__title">Juan, you have 3 saved articles </h2>
      <div className="saved__text">
        <p className="saved__keywords">By keywords:</p>
        <span className="saved__span">Mercedes, Ferrari, McLaren</span>
      </div>
      <section className="cards">
        <div className="cards__list">
          <li className="card">
            <button className="saved__card-delete" type="button"></button>
            <div className="card__hover">Remove from saved</div>
            <img className="card__image" src={mercedes} alt="mercedes"></img>
            <p className="card__date">11/14/2024</p>
            <h3 className="card__title">Mercedes F1</h3>
            <p className="card__description">
              After 18 years together in F1, Hamilton and Mercedes will part
              ways at the end of this year's Abu Dhabi season finale. To mark
              the special occasion, Mercedes has opened a competition to be one
              of 150 names to adorn Hamilton's W15 machine at Yas Marina.
            </p>
            <p className="card__source">Motorsportweek.com</p>
          </li>
          <li className="card">
            <button className="saved__card-delete" type="button"></button>
            <div className="card__hover">Remove from saved</div>
            <img className="card__image" src={ferrari} alt="ferrari"></img>
            <p className="card__date">11/14/2024</p>
            <h3 className="card__title">Ferrari F1</h3>
            <p className="card__description">
              Carlos Sainz is confident that the final races of his four-year
              stint with Ferrari – before his impending switch to Williams –
              will not be his last chance of fighting for F1 victories, with the
              Spaniard determined to put himself in a position to contend for
              wins again in the future.
            </p>
            <p className="card__source">Formula1.com</p>
          </li>
          <li className="card">
            <button className="saved__card-delete" type="button"></button>
            <div className="card__hover">Remove from saved</div>
            <img className="card__image" src={mclaren} alt="mclaren"></img>
            <p className="card__date">11/14/2024</p>
            <h3 className="card__title">McLaren F1</h3>
            <p className="card__description">
              McLaren team principal Andrea Stella is pleased with the team's
              progress this season and the "standards" it has set for itself,
              despite some mistakes he aims to address to maintain
              championship-winning momentum into next season.
            </p>
            <p className="card__source">si.com</p>
          </li>
        </div>
      </section>
    </div>
  );
}

export default SavedNews;
