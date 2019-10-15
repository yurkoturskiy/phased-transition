import React from "react";

function SquareButton({ incircle, setTransition, setIncircle }) {
  return (
    <div
      className={incircle ? "square-button" : "square-button active"}
      onClick={() => {
        incircle && setTransition(true);
        setIncircle(false);
      }}
    />
  );
}

export default SquareButton;
