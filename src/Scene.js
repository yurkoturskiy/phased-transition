import React, { useMemo, useState, useEffect, useRef } from "react";
import { morphing, spacing } from "primitivo-svg";
// Local components
import ControlPanel from "./ControlPanel";
import Composition from "./Composition";
import TransitionEffect from "./TransitionEffect";
import useDebounce from "./misc/useDebounce";

function Scene(props) {
  const [effectsData, setEffectsData] = useState([]);
  const [compositionSize, setCompositionSize] = useState(
    (Math.min(window.innerHeight, window.innerWidth) / 100) * 68
  );
  const resizeHandler = () => {
    setCompositionSize(
      (Math.min(window.innerHeight, window.innerWidth) / 100) * 68
    );
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  const [depth, setDepth] = useState(0);
  const [centerX, setCenterX] = useState(100);
  const [centerY, setCenterY] = useState(100);
  const [numOfClicks, setNumOfClicks] = useState(0);
  // const debouncedDepth = useDebounce(depth, depth * 200);
  const updateDepth = factor => {
    setDepth(depth => {
      let result = depth + factor;
      // Limit number of segment
      return result < 0 || result > 5 ? depth : result;
    });
  };

  const interactiveArea = useRef();
  const sceneRef = useRef();
  const handleClick = e => {
    e.preventDefault();
    var offsets = interactiveArea.current.getBoundingClientRect();
    let clickX = e.clientX - offsets.left;
    let clickY = e.clientY - offsets.top;
    setCenterX(clickX);
    setCenterY(clickY);
    var data = {};
    data.centerX = clickX;
    data.centerY = clickY;
    data.depth = depth;
    data.active = true;
    setEffectsData(effectsData => {
      effectsData.push(data);
      data.index = effectsData.length - 1;
      return effectsData;
    });
    setNumOfClicks(numOfClicks => numOfClicks + 1);
    setTimeout(() => {
      setEffectsData(effectsData => {
        effectsData[data.index].active = false;
        return effectsData;
      });
    }, 2000);
  };

  const effects = effectsData.map((data, index) => {
    if (data.active) {
      return (
        <TransitionEffect
          key={index}
          depth={data.depth}
          x={0}
          y={0}
          centerX={data.centerX}
          centerY={data.centerY}
          compositionWidth={compositionSize}
          compositionHeight={compositionSize}
          width={compositionSize}
          height={compositionSize}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className="scene" ref={sceneRef}>
      <div className="composition-wrapper">
        <div
          className="interactive-area"
          ref={interactiveArea}
          onClick={e => handleClick(e)}
        />
        {effects.length && effects}
      </div>
      <div className="square-option" />
      <div className="circle-option" />
      <ControlPanel depth={depth} updateDepth={updateDepth} />
    </div>
  );
}

export default Scene;
