import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import './queries.css';


function App() {
  return (
    <div className="App">
      <Header picture={''}/> 
      <Skills/>
      <Project/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
