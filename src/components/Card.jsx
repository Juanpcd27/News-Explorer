import "./Card.css";
import W15 from "../assets/mercedes-f1-w15.jpg";
import Ferrari from "../assets/ferrari.png";
import McLaren from "../assets/mclaren.avif";

function Card({ isLoggedIn }) {
  return (
    <div className="card__container">
      <h2 className="search__title">Search results</h2>
      <ul className="cards">
        <li className="card">
          <img className="card__save"></img>
          <img className="card__image" src={W15} alt="W15"></img>
          <p className="card__date">October 17, 2024</p>
          <h2 className="card__title">Mercedes F1</h2>
          <p className="card__description">
            The W15 is the first car designed and developed on Allison's watch,
            and it represents a major change from its predecessor as the team
            attempts to close the gap to pacesetters Red Bull.
          </p>
          <p className="card__source">Motorsport.com</p>
        </li>
        <li className="card">
          <img className="card__save"></img>
          <img className="card__image" src={Ferrari} alt="Ferrari"></img>
          <p className="card__date">October 17, 2024</p>
          <h2 className="card__title">Ferrari F1</h2>
          <p className="card__description">
            Ferrari unveil a wholesale redesign of their F1 car for 2024 as they
            aim to battle Red Bull; Reworked livery features yellow and white
            stripes
          </p>
          <p className="card__source">Skysports.com</p>
        </li>
        <li className="card">
          <img className="card__save"></img>
          <img className="card__image" src={McLaren} alt="Mclaren"></img>
          <p className="card__date">October 17, 2024</p>
          <h2 className="card__title">McLaren F1</h2>
          <p className="card__description">
            McLaren become first F1 team to unveil 2024 look with new livery
            revealed.
          </p>
          <p className="card__source">formula1.com</p>
        </li>
      </ul>
    </div>
  );
}

export default Card;
