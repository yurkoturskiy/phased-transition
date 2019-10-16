import React from "react";
import ReactDOM from "react-dom";

import GitHubLogo from "./misc/GitHubLogo";
import CodeSandboxLogo from "./misc/CodeSandboxLogo";
import Caption from "./misc/Caption";
import Scene from "./Scene";

import "./styles/index.css";
import "./styles/shapeToggle.css";
import "./styles/footer.css";
import "./styles/adaptation.css";
import "@material/react-button/dist/button.css";

function App() {
  return (
    <div className="App">
      <Scene />
      <a href="https://codesandbox.io/s/github/guandjoy/phased-transition">
        <CodeSandboxLogo />
      </a>
      <Caption topic="Phased transition" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
