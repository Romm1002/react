import BaseSection from "./base-section";
import Button from "./button";

const About = ({ title, picture, name, firstname, poste }) => {
  return (
    <BaseSection className="about" id="about">
      <h2 className="title">{title}</h2>
      <div className="about-content">
        <div className="column left">
          <img src={picture} alt={title} />
        </div>
        <div className="column right">
          <div className="text">
            Moi c&apos;est {firstname} et je suis{" "}
            <span className="typing">{poste}</span>
          </div>
          <p>
            Je m&apos;appelle {`${firstname} ${name}`} et j&apos;ai 21 ans.
            Après l&apos;obtention de mon Baccalauréat en 2020, je me suis
            dirigé vers des études basées sur le développement web et la
            programmation. C&apos;est donc à l&apos;École IPSSI que j&apos;ai
            décidé de suivre la formation : Bachelor Développement Fullstack et
            DevOPS à la suite de mon BTS SIO. Dans la continuité de mon BTS,
            j&apos;aimerais continuer jusqu&apos;au master pour ensuite me
            lancer pleinement dans les métiers de l&apos;informatique !
          </p>
          <Button
            redirection={"#"}
            download={"mon_cv.pdf"}
            content={"Télécharger mon CV"}
          />
          <p>Compétences : </p>
          <ul>
            <li>HTML5 / CSS : 20/20</li>
            <li>JS : 20/20</li>
            <li>PHP / SQL : 30/20</li>
          </ul>
          <p>Centres d&apos;intérêt : Corentin</p>
        </div>
      </div>
    </BaseSection>
  );
};

export default About;
