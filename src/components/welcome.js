import BaseSection from "./base-section";
import Button from "./button";

const Welcome = ({ nom, prenom, poste }) => {
  return (
    <BaseSection className="home" id="home">
      <div className="home-content">
        <div className="text-1">Bonjour, je m&apos;appelle</div>
        <div className="text-2">{`${nom} ${prenom}`}</div>
        <div className="text-3">
          Et je suis un jeune <span className="typing-2">{poste}</span>
        </div>
        <Button
          redirection={"https://www.linkedin.com/in/rom1-chaumont/"}
          content={"Contactez moi"}
        />
      </div>
    </BaseSection>
  );
};

export default Welcome;
