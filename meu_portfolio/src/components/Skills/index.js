import "./Skills.css";

export default function Skills({profile}) {
  const {about} = profile;
  const {description, lenguages, tools} = about[0]

  return (
    <div className="skills">
      <div className="skills-content">
        <span></span>
        <h2 className="about-skills">Sobre</h2>
        <p className="dev-description">
          {description}
        </p>
        <h3 className="dev-languages">Minhas Linguagens</h3>
        <p className="dev-languages-list">{lenguages.join(', ')}</p>
        <h3 className="dev-tools">Dev Tools</h3>
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
