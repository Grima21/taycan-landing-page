import NavBar from "./components/NavBar";
import TechnologyPreview from "./components/TechonologyPreview";
import "./App.css";
import Specification from "./components/Specification";
import Models from "./components/Models";
import Highlights from "./components/Highlights/Highlights";
import Reserve from "./components/Reserve";
function App() {
  return (
    <>
      <NavBar />
      <TechnologyPreview />
      <Specification />
      <Models />
      <Highlights />
      <Reserve />
    </>
  );
}

export default App;
