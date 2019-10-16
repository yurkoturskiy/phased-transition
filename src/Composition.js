import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { spacing } from "primitivo-svg";
import usePhasedTransition from "./usePhasedTransition";

function Composition(props) {
  const phasesOutput = usePhasedTransition(props);
  const ts = spacing({
    progression: phasesOutput.progressions,
    keySplines: "0.75, 0, 0.25, 1"
  });

  return (
    <svg
      width={props.compositionWidth}
      height={props.compositionHeight}
      className={props.className}
    >
      <path
        id="transition-stroke-one"
        className="transition-path"
        strokeWidth="2"
      >
        <animate
          calcMode="spline"
          keyTimes={ts.keyTimes}
          keySplines={ts.keySplines}
          attributeName="d"
          dur="1300ms"
          repeatCount="1"
          values={phasesOutput.dValues}
        />
      </path>
      <path
        id="transition-stroke-two"
        className="transition-path"
        strokeWidth="2"
      >
        <animate
          calcMode="spline"
          keyTimes={ts.keyTimes}
          keySplines={ts.keySplines}
          attributeName="d"
          dur="1300ms"
          begin="100ms"
          repeatCount="1"
          values={phasesOutput.dValues}
        />
      </path>

      <path
        id="transition-stroke-three"
        className="transition-path"
        strokeWidth="2"
      >
        <animate
          calcMode="spline"
          keyTimes={ts.keyTimes}
          keySplines={ts.keySplines}
          attributeName="d"
          dur="1300ms"
          begin="210ms"
          repeatCount="1"
          values={phasesOutput.dValues}
        />
      </path>
    </svg>
  );
}

Composition.propTypes = {
  centerX: PropTypes.number,
  centerY: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Composition;
