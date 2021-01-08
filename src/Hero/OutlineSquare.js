import React from "react";
import { motion } from "framer-motion";
import { appearVariant } from "./variants";
const OutlineSquare = ({ width, height, top, bottom, right, left, time }) => {
  return (
    <motion.div
      className="OutlineObject"
      style={{
        width: width,
        height: height,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
      }}
      variants={appearVariant(time)}
      initial="hidden"
      animate="visible"
    />
  );
};

export default OutlineSquare;
