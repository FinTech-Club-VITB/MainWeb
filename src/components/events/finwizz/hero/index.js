import React from "react";
import "./index.scss";
import Socials from "../../../common/socials";

const Hero = () => {
  return (
    <div className="finwizzHeroSection">
      <h2 className="heroTitle">
        THE INAUGURATION <span>FINWIZZ</span>
      </h2>
      <h3 className="heroInfo">
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </h3>
      <p className="heroRegister">Registeration Closed!</p>
      <Socials arrow="" />
    </div>
  );
};

export default Hero;
