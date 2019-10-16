import React from "react";

function ShapeToggle({ incircle, setIncircle, transition, setTransition }) {
  return (
    <div
      className={incircle ? "square-button" : "circle-button"}
      onClick={() => {
        !transition && setTransition(true);
        setIncircle(!incircle);
      }}
    />
  );
}

export default ShapeToggle;
