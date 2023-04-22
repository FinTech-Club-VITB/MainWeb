import React from "react";
import Socials from "../../common/socials";
import "./index.scss";

const Hero = () => {
  return (
    <div className="teamsHeroSection">
      <div className="heading">
        <h2>
          <span>MEET</span>
        </h2>
        <h2>OUR TEAM</h2>
      </div>
      <p className="para">
        Collaboration is the synergy of diverse minds, united in pursuit of a
        common vision, yielding exponential results.{" "}
      </p>
      <Socials
        arrow=""
        size={`${window.innerHeight > 700 ? "2.1rem" : "3rem"}`}
      />
    </div>
  );
};

export default Hero;
