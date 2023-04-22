import React from "react";
import "./index.scss";
import Slider from "react-slick";
import LeftArrow from "./leftArrow.js";
import RightArrow from "./rightArrow";
import { InstagramEmbed } from "react-social-media-embed";

const Testimonials = () => {
  const slide = window.innerWidth > 700 ? 2 : 1;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slide,
    slidesToScroll: slide,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  const instaURLs = [
    "CokmgFUAx7C",
    "CoLDCTionN3",
    "CnejioChqyG",
    "CnSR_0lBaT7",
    "CmQZKhJoH9k",
  ];
  return (
    <div className="testimonialSection">
      <h2 className="testimonialHeading">GROW WITH US</h2>
      <div className="testimonialSlider">
        {/* <FaChevronLeft className="leftArrow"/> */}
        {/* <LeftArrow/> */}
        <Slider {...settings}>
          {instaURLs.map((url) => (
            <div className="testimonialSlide">
              <InstagramEmbed url={`https://www.instagram.com/reel/${url}/`} />
            </div>
          ))}
        </Slider>
        <div className="testimonialBG1" />
        <div className="testimonialBG2" />
      </div>
    </div>
  );
};

export default Testimonials;
