import React from "react";
import "./index.scss";
import Socials from "../../../common/socials";

const Hero = () => {
  return (
    <div className="btbHeroSection">
      <div className="darkSection">
        <h2 className="heroTitle">BEYOND THE ₿LOCKS</h2>
        <h3 className="heroInfo">NFTs . LEDGER . WEB3 . CRYPTO . DE-FI </h3>
        <p className="heroRegister">Register Now</p>
      </div>
      <Socials arrow="" />
    </div>
  );
};

export default Hero;
