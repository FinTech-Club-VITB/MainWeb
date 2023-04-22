import React from "react";
import "./index.scss";
import Socials from "../../common/socials";

const Hero = () => {
  return (
    <>
      <div className="bgimg"></div>
      <div className="heroSection">
        <div className="infoSection">
          <h1 className="heroHeading">FINTECH CLUB</h1>
          <h3>
            <span className="heroSubheading">DEFINING THE FUTURE OF </span>
            <span className="finance">FINANCE</span>
          </h3>
          <a
            href="https://chat.whatsapp.com/FqAeqLFPVjA5Nl7hWgguq2"
            target="_blank"
          >
            <button className="heroJoinUs" role="button">
              JOIN NOW
            </button>
          </a>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Hero;
