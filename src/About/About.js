import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { appearVariant } from "../Hero/variants";
import { useInView } from "react-intersection-observer";
import "./styles.scss";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <div className="about" ref={ref}>
      {inView && (
        <motion.div
          className="about__content"
          variants={appearVariant(1)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={appearVariant(0.5)}
            initial="hidden"
            animate="visible"
          >
            About
            <br />
            <span>MENARCHE.ID</span>
          </motion.h1>
          <div className="about__body">
            <motion.p
              variants={appearVariant(1.5)}
              initial="hidden"
              animate="visible"
            >
              “We Are a social movement dedicated to improving the health of
              young women all over Indonesia.”
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
