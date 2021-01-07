import React from "react";
import "./styles.scss";

const Navbar = () => {
  const sections = ["Home", "About Us", "Our Work", "Contact"];
  return (
    <div className="nav">
      <div className="logo">
        <img src="/images/logo.png" alt="LOGO" />
      </div>
      <div className="nav-links">
        <ul>
          {sections.map((section) => (
            <li className="nav-link">{section}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
