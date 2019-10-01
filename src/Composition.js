import React, { useMemo, useState, useEffect } from "react";
import { morphing, spacing } from "primitivo-svg";

function Composition({ depth }) {
  const generatePathParams = depth => {
    let numOfKeyPaths = 40;
    var groups = [];
    for (let i = 0; i < numOfKeyPaths; i++) {
      let factor = numOfKeyPaths - i;
      groups[i] = [
        {
          type: "radial",
          incircle: true,
          round: 1,
          distance: [factor / numOfKeyPaths, 2 - factor / numOfKeyPaths]
        },
        {
          type: "radial",
          incircle: true,
          round: 1,
          distance: [factor / numOfKeyPaths, 2 - factor / numOfKeyPaths]
        }
      ];
    }
    return {
      numOfSegments: 2,
      depth,
      x: 1,
      y: 1,
      width: 98,
      height: 98,
      centerX: 49,
      centerY: 49,
      rotate: 0,
      numOfGroups: 1,
      groups: groups
    };
  };

  const getProgression = numOfKeyPaths => {
    let progression = [];
    numOfKeyPaths = numOfKeyPaths * 2 - 1;
    for (let i = 0; i < numOfKeyPaths; i++) {
      progression[i] = i / (numOfKeyPaths - 1);
    }
    return progression;
  };

  const pathParams = useMemo(() => generatePathParams(depth), [depth]);
  const numOfKeyPaths = pathParams.groups.length;
  const progression = getProgression(numOfKeyPaths);
  const tns = spacing({
    progression,
    keySplines: "0.25, 0, 0.75, 1"
  });

  const morphParams = {
    numOfKeyPaths,
    loop: true
  };

  const firstPath = useMemo(() => morphing(morphParams, pathParams).dValues, [
    morphParams,
    pathParams
  ]);
  const secondPath = useMemo(() => morphing(morphParams, pathParams).dValues, [
    morphParams,
    pathParams
  ]);
  const thirdPath = useMemo(() => morphing(morphParams, pathParams).dValues, [
    morphParams,
    pathParams
  ]);

  const strokePath = {
    stroke: "white",
    fill: "transparent",
    strokeWidth: "0.5px",
    vectorEffect: "non-scaling-stroke"
  };

  const solidPath = {
    fill: "white"
  };

  const animateProps = {
    attributeName: "d",
    dur: "7s",
    calcMode: "spline",
    keyTimes: tns.keyTimes,
    keySplines: tns.keySplines,
    repeatCount: "indefinite"
  };

  return (
    <svg className="composition" viewBox="0 0 100 100">
      <path id="otherpath" {...strokePath}>
        <animate {...animateProps} values={firstPath} />
      </path>

      <path {...strokePath} transform="scale(0.6 0.6) translate(33 33)">
        <animate {...animateProps} values={secondPath} />
      </path>
      <path {...solidPath} transform="scale(0.045 0.045) translate(1060 1060)">
        <animate {...animateProps} values={thirdPath} />
      </path>
    </svg>
  );
}

export default Composition;
