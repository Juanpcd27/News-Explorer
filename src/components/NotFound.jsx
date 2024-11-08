import "./NotFound.css";
import notfoundimage from "../assets/notfound3.png";

function NotFound() {
  return (
    <section className="notFound">
      <img
        className="notFound__image"
        src={notfoundimage}
        alt="notfound-image"
      ></img>
      <h2 className="notFound__title">Nothing found</h2>
      <p className="notFound__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFound;
