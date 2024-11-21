import "./Footer.css";
import github from "../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">2024 Supersite, Powered by News API</p>
      <a className="footer__home-button" href="/">
        Home
      </a>

      <a className="footer__tripleten-button" href="https://tripleten.com/">
        TripleTen
      </a>

      <a
        className="footer__github-button"
        href="https://github.com/Juanpcd27/final-project-JPCD-frontend"
      ></a>
      <a className="footer__facebook-button" href="https://facebook.com"></a>
    </footer>
  );
}

export default Footer;
