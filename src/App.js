import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import FeatureWikipedia from "./feature-wikipedia/components/feature-wiki";
import FeatureYoutube from "./feature-youtube/feature-youtube";
import TestFunctionalComponent from "./shared/fComponent";
import Dropdown from "./shared/dropdown";
import Translator from "./components/translator";
const options = [
  { label: "lorem", value: "lorem" },
  { label: "lorem1", value: "lorem1" },
  { label: "lorem2", value: "lorem2" },
];
function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Components</h1>
      </header>
      <main>
        
        <FeatureWikipedia />
        <Translator />
      </main>
    </div>
  );
}
export default App;
