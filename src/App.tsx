import "./App.css";
import Application from "./components/Application/Application";
import MapComponent from "./components/Map/MapComponent";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={["HTML", "CSS", "JS"]} /> */}
      <MapComponent />
    </div>
  );
}

export default App;
