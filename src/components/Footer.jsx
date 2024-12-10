import "./Footer.css";
import github from "../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">2024 Supersite, Powered by News API</p>
      <a className="footer__home-button" href="/">
        Home
      </a>

      <a
        className="footer__tripleten-button"
        href="https://tripleten.com/"
        target="_blank"
      >
        TripleTen
      </a>

      <a
        className="footer__github-button"
        href="https://github.com/Juanpcd27/final-project-JPCD-frontend"
        target="_blank"
      ></a>
      <a
        className="footer__facebook-button"
        href="https://facebook.com"
        target="_blank"
      ></a>
    </footer>
  );
}

export default Footer;
