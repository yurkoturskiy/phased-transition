import React from "react";
import FactorButton from "./FactorButton";

function FactorButtons({ numOfButtons }) {
  var buttons = [];
  for (let i = 0; i < numOfButtons; i++) {
    buttons.push(<FactorButton key={`factor-button-${i}`} progression={i} />);
  }
  return <div className="factor-buttons-wrapper">{buttons}</div>;
}

export default FactorButtons;
