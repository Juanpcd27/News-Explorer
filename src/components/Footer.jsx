import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">2024 Supersite, Powered by News API</p>
      <Link to="/">
        <button className="footer__home-button">Home</button>
      </Link>
      <Link to="https://tripleten.com/">
        <button className="footer__tripleten-button">TripleTen</button>
      </Link>
      <button className="footer__github-button"></button>
      <button className="footer__facebook-button"></button>
    </footer>
  );
}

export default Footer;
