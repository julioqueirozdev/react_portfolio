import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import './queries.css';
import projects from './data/projects.json'
import ProjectGrid from "./components/ProjectGrid";
import { profile } from "./data/profile";

function App() {
  return (
    <div className="App">
      <Header profile={profile[0]}/> 
      <Skills profile={profile[0]}/>
      <Project/>
      <ProjectGrid>
        {projects.map(project => {
        return(
          <Cards key={project.id} name={project.name} description={project.description} url={project.url} github={project.github} background={project.backgorund}/>
        );
      })}
      </ProjectGrid>
      <Footer profile={profile[0]}/>
    </div>
  );
}

export default App;
