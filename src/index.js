import React from "react";
import ReactDOM from "react-dom";

import Scene from "./Scene";
import Footer from "./Footer";

import "./styles/index.css";
import "./styles/shapeToggle.css";
import "./styles/footer.css";
import "./styles/adaptation.css";
import "@material/react-button/dist/button.css";

function App() {
  return (
    <div className="App">
      <Scene />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
