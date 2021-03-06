import "./App.scss";
import NavBar from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Animations from "./components/animations";
import BackgroundJS from "./components/background";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <About />
        <BackgroundJS />
        <Animations />
        <Projects />
      </div>
    </>
  );
}

export default App;
