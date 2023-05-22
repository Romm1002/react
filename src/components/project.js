const Project = ({title, url, github, technique, fonctionnelle}) => {
  return (
    <div className="content">
      <div className="content-part">
        <h3>{title}</h3>
        <ul>
          <li>
            URL d&apos;accès :
            <a href={url} target="_blank" rel="noreferrer">
                {url}
            </a>
          </li>
          <li>
            Lien du dépôt GitHub :
            <a href={github} target="_blank" rel="noreferrer">
                {github}
            </a>
          </li>
          <li>
            Documentation technique :
            <a
              href={technique}
              target="_blank" rel="noreferrer"
            >
              Accéder
            </a>
          </li>
          <li>
            Documentation fonctionnelle :
            <a
              href={fonctionnelle}
              target="_blank" rel="noreferrer"
            >
              Accéder
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
