import React from "react";
const OutlineSquare = ({ width, height, top, bottom, right, left }) => {
  return (
    <div
      className="OutlineObject"
      style={{
        width: width,
        height: height,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
      }}
    />
  );
};

export default OutlineSquare;
