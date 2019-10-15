import React from "react";

function SquareButton({ incircle, setTransition, setIncircle }) {
  return (
    <div
      className="square-button"
      onClick={() => {
        incircle && setTransition(true);
        setIncircle(false);
      }}
    />
  );
}

export default SquareButton;
