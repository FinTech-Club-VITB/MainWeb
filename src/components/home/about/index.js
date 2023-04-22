import React from "react";
import "./index.scss";
import background from "./images/planet.png";
import phone from "./images/phone-layers.png";

const About = () => {
  return (
    <div className="aboutSection" id="aboutSection">
      <img className="background" src={background} alt="back" />
      <div className="gradabout" />
      <div className="infoSection">
        <h1 className="heading">ABOUT US</h1>
        <p className="tagline">We built your feuture</p>

        <hr className="line" />
        <p className="para">
          At VIT Bhopal , the FinTech Club serves as an innovative platform
          spearheaded by students who ardently seek to cultivate a keen interest
          in finance. Their vision is to foster and nurture a financial acumen
          within the institute, through a gamut of initiatives that resonate
          with the practical world of finance.
          <br />
          <br />
          The club harnesses the expertise of industry stalwarts, who unfurl
          pearls of wisdom, highlighting the latest advancements in areas like
          stocks, cryptocurrencies, and software tools.
          <br />
          <br />
          These initiatives bestow a holistic experience that prepares students
          to navigate the dynamic landscape of financial services with
          confidence and finesse, ensuring that they are well prepared to handle
          the nuances of the financial services industry in practical life.
        </p>
      </div>
      <img className="phone-layers" src={phone} data-value="5" alt="phone" />
    </div>
  );
};

// document.addEventListener("mousemove", parallax);
// function parallax(e) {
//   document.querySelectorAll(".phone-layers").forEach(function (move) {
//     var moving_value = move.getAttribute("data-value");
//     var x = (e.clientX * moving_value) / 250;
//     var y = (e.clientY * moving_value) / 250;

//     move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
//   });
// }

export default About;
