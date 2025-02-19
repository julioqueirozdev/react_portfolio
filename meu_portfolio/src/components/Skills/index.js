import "./Skills.css";

export default function Skills({profile}) {
  const {about} = profile;
  const {description, lenguages, tools} = about[0]

  return (
    <div className="skills">
      <div className="skills-content">
        <spam></spam>
        <h2>Sobre</h2>
        <p className="dev-description">
          {description}
        </p>
        <p className="dev-languages">Minhas Linguagens:</p>
        <p className="dev-languages-list">{lenguages.join(', ')}</p>
        <p className="dev-tools">Dev Tools:</p>
        <ul className="dev-tools-list">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}
