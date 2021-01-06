import React from "react";

const Picture = ({ image, height, width, top, bottom, left, right }) => {
  return (
    <div
      className="imageFrame"
      style={{
        height: height,
        width: width,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      <img className="image" src={image} alt="picture" />
    </div>
  );
};

export default Picture;
