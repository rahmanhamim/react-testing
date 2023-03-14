import "./App.css";
import Application from "./components/Application/Application";
import Counter from "./components/Counter/Counter";
import { MuiMode } from "./components/Mui/MuiMode";
import Skills from "./components/Skills/Skills";
import { AppProviders } from "./Providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;

/* 
        <Application />
        <Skills skills={["HTML", "CSS", "JS"]} />
         <MapComponent /> 
        <Counter /> */
