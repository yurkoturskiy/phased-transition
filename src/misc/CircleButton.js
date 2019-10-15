import React from "react";

function CircleButton({ incircle, setTransition, setIncircle }) {
  return (
    <div
      className={incircle ? "circle-button active" : "circle-button"}
      onClick={() => {
        !incircle && setTransition(true);
        setIncircle(true);
      }}
    />
  );
}

export default CircleButton;
