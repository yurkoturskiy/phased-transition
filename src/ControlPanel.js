import React from "react";
import Button from "@material/react-button";
import ShapeToggle from "./misc/ShapeToggle";

function ControlPanel({ depth, updateDepth }) {
  return (
    <div className="control-panel">
      <Button
        id="decrease"
        dense={true}
        disabled={depth === 0}
        className="material-button"
        onClick={() => updateDepth(-1)}
      >
        -
      </Button>
      <div id="depth">{depth}</div>
      <Button
        id="increase"
        dense={true}
        disabled={depth === 5}
        className="material-button"
        onClick={() => updateDepth(+1)}
      >
        +
      </Button>
    </div>
  );
}

export default ControlPanel;
