import React from "react";
import { COLORS, shadeColor } from "../util";

const Bubble = ({ label,labelJP, isFlavor, isType, onClick, selected }) => {
  const backgroundColor = COLORS[label];
  let backgroundImage = "";
  let borderColor = selected ? "black" : backgroundColor;

  if (isFlavor) {
    backgroundImage = `-webkit-linear-gradient(100deg, ${shadeColor(backgroundColor)} 30%, ${backgroundColor} 50%)`;
  }

  return (
    <div
      className={`bubble bubble-min-width  ${isType ? "bubble-type" : ""} ${
        selected ? "key-selected" : "fake-border"
      }`}
      onClick={onClick}
      style={{ backgroundColor, borderColor, backgroundImage }}
    >
      {labelJP}
    </div>
  );
};

export default Bubble;
