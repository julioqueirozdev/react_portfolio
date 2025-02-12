import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import './queries.css';
import projects from './data/projects.json'
import ProjectGrid from "./components/ProjectGrid";


function App() {
  return (
    <div className="App">
      <Header/> 
      <Skills/>
      <Project/>
      <ProjectGrid>
        {projects.map(project => {
        return(
          <Cards key={project.id} name={project.name} description={project.description} url={project.url} github={project.github}/>
        );
      })}
      </ProjectGrid>
      <Footer/>
    </div>
  );
}

export default App;
