import React from "react";

function CircleButton({ incircle, setTransition, setIncircle }) {
  return (
    <div
      className="circle-button"
      onClick={() => {
        !incircle && setTransition(true);
        setIncircle(true);
      }}
    />
  );
}

export default CircleButton;
