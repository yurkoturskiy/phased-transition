import React from "react";

function SquareButton({ incircle, setIncircle, transition, setTransition }) {
  return (
    <div
      className={incircle ? "square-button" : "square-button active"}
      onClick={() => {
        !transition && setTransition(true);
        setIncircle(false);
      }}
    />
  );
}

export default SquareButton;
