import React from "react";

function Caption(props) {
  return (
    <h1 id="caption">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/guandjoy/primitivo-svg"
      >
        <span className="primitivo">Primitivo-SVG</span>
      </a>{" "}
      | {props.topic}
    </h1>
  );
}

export default Caption;
