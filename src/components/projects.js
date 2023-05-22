import BaseSection from "./base-section";
import Project from "./project";

const Projects = ({ title }) => {
  return (
    <BaseSection className="e5" id="e5">
      <h2 className="title">{title}</h2>
      <Project
        title="Application Web - MyTeam"
        url="https://myteam.ipssi-sio.fr/pages/"
        github="https://github.com/Romm1002/myteam"
        fonctionnelle="#"
        technique="#"
      />
      <Project
        title="Application C# - MyTeam"
        github="https://github.com/Romm1002/myteam-sharp"
        fonctionnelle="#"
        technique="#"
      />
    </BaseSection>
  );
};

export default Projects;
