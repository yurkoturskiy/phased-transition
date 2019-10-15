import React from "react";

function CircleButton({ incircle, setIncircle, transition, setTransition }) {
  return (
    <div
      className={incircle ? "circle-button active" : "circle-button"}
      onClick={() => {
        !transition && setTransition(true);
        setIncircle(true);
      }}
    />
  );
}

export default CircleButton;
