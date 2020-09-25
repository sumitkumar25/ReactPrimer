import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FeatureWikipedia from "./feature-wikipedia/components/feature-wiki";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Components</h1>
      </header>
      <main>
        <FeatureWikipedia />
      </main>
    </div>
  );
}

export default App;
