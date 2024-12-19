import "./About.css";
import aboutPhoto from "../assets/JL.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__picture" src={aboutPhoto} alt="about-photo"></img>
      <div className="about__text">
        <h2 className="about__title">About Juan Carrion</h2>
        <p className="about__description">
          My name is Juan Carrion, I'm a Junior Software Engineer who is
          passionate about technology and software development. With a solid
          foundation in programming languages, software engineering principles,
          and problem-solving.
        </p>
      </div>
    </section>
  );
}

export default About;
