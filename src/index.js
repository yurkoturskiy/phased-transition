import React from "react";
import ReactDOM from "react-dom";

import GitHubLogo from "./misc/GitHubLogo";
import Caption from "./misc/Caption";
import Scene from "./Scene";

import "./styles/index.css";
import "./styles/adaptation.css";
import "./styles/shapeButtons.css";
import "@material/react-button/dist/button.css";

function App() {
  return (
    <div className="App">
      <Scene />
      <a href="https://github.com/guandjoy/phased-transition">
        <GitHubLogo />
      </a>
      <Caption topic="Phased transition" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
