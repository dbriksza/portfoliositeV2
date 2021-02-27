import "./App.scss";
import NavBar from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Animations from "./components/animations";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Animations />
      <Projects />
    </div>
  );
}

export default App;
