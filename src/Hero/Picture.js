import React from "react";
import { motion } from "framer-motion";
import { appearVariant } from "./variants";

const Picture = ({ image, height, width, top, bottom, left, right, time }) => {
  return (
    <motion.div
      className="imageFrame"
      variants={appearVariant(time)}
      initial="hidden"
      animate="visible"
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
    </motion.div>
  );
};

export default Picture;
