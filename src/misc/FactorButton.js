import React from "react";

function FactorButton({ progression }) {
  var dots = [];
  for (let i = 0; i <= progression; i++) {
    dots.push(
      <div key={`factor-button-dot-${i}`} className="factor-button-dot" />
    );
  }
  return <div className="factor-button">{dots}</div>;
}

export default FactorButton;
