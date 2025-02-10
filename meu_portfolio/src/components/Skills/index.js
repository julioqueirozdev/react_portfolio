import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-content">
        <spam></spam>
        <h2>Sobre</h2>
        <p className="dev-description">
          Eu transformo código em realidade no navegador!
        </p>
        <p className="dev-languages">Minhas Linguagens:</p>
        <p className="dev-languages-list">HTML, JavasCript, CSS, Git</p>
        <p className="dev-tools">Dev Tools:</p>
        <ul className="dev-tools-list">
          <li>React.Js</li>
          <li>Github</li>
          <li>Vs Code</li>
        </ul>
      </div>
    </div>
  );
}
