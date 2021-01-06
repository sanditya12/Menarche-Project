import React from "react";
import OutlineSquare from "./OutlineSquare";
import Picture from "./Picture";
import "./styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heading">
        <div className="headingText">
          <OutlineSquare
            width="150px"
            height="183px"
            bottom="70%"
            right="90%"
          />
          <h1>
            Improving <span>Reproductive Health</span> For All
          </h1>
        </div>
        <button className="button">
          <i class="fas fa-search"></i>
          <p>Our Work</p>
        </button>
      </div>
      <div className="objects">
        <OutlineSquare width="250px" height="270px" bottom="25%" right="40%" />
        <Picture
          height="325px"
          width="266.5px"
          image="/images/yogaWomen.jpg"
          top="20%"
        />
        <Picture
          height="290px"
          width="237px"
          image="/images/reproductive1.jpg"
          top="60%"
          left="50%"
        />
        <Picture
          height="280px"
          width="230px"
          image="/images/reproductive2.jpg"
          top="78%"
          left="-30%"
        />
        <OutlineSquare width="150px" height="170px" bottom="12%" right="120%" />
      </div>
    </div>
  );
};

export default Hero;
