import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const Navbar = () => {
  const sections = ["Home", "About Us", "Our Work", "Contact"];
  const navVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      className="nav"
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="logo">
        <img src="/images/logo.png" alt="LOGO" />
      </div>
      <div className="nav-links">
        <ul>
          {sections.map((section) => (
            <li className="nav-link">
              <a>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
