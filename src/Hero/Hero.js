import React from "react";
import OutlineSquare from "./OutlineSquare";
import Picture from "./Picture";
import { motion } from "framer-motion";
import { appearVariant } from "./variants";
import "./styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="heading"
        variants={appearVariant(1)}
        initial="hidden"
        animate="visible"
      >
        <div className="headingText">
          <OutlineSquare
            width="150px"
            height="183px"
            bottom="70%"
            right="90%"
            time={1.5}
          />
          <h1>
            Improving <span>Reproductive Health</span> For All
          </h1>
        </div>
        <motion.button
          className="button"
          whileHover={{
            backgroundColor: "#ffffff",
            // borderStyle: "solid",
            // borderColor: "#6eacb7",
            // borderWidth: "3px",
          }}
        >
          <i class="fas fa-search"></i>
          <p>Our Work</p>
        </motion.button>
      </motion.div>
      <div className="objects">
        <OutlineSquare
          width="250px"
          height="270px"
          bottom="25%"
          right="40%"
          time={2}
        />
        <Picture
          height="325px"
          width="266.5px"
          image="/images/yogaWomen.jpg"
          top="20%"
          time={1}
        />
        <Picture
          height="290px"
          width="237px"
          image="/images/reproductive1.jpg"
          top="60%"
          left="50%"
          time={1.3}
        />
        <Picture
          height="280px"
          width="230px"
          image="/images/reproductive2.jpg"
          top="78%"
          left="-30%"
          time={1.6}
        />
        <OutlineSquare
          time={1.2}
          width="150px"
          height="170px"
          bottom="12%"
          right="120%"
        />
      </div>
    </div>
  );
};

export default Hero;
