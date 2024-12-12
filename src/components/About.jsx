import "./About.css";
import aboutPhoto from "../assets/JL.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__picture" src={aboutPhoto} alt="about-photo"></img>
      <div className="about__text">
        <h2 className="about__title">About Juan Carrion</h2>
        <p className="about__description">Talk about me etc.</p>
      </div>
    </section>
  );
}

export default About;
