import React from "react";
import "./index.scss";
import Slider from "react-slick";
import LeftArrow from './leftArrow.js'
import RightArrow from "./rightArrow";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />
  };

  return (
    <div className="testimonialSection">
      <h2 className="testimonialHeading">GROW WITH US</h2>
      <div className="testimonialSlider">
        {/* <FaChevronLeft className="leftArrow"/> */}
        {/* <LeftArrow/> */}
        <Slider {...settings}>
          <div className="testimonialSlide">
            <iframe src="https://www.youtube.com/embed/mH_LFkWxpI0" height={400} width={800} />
          </div>
          <div className="testimonialSlide">
            <iframe src="https://www.youtube.com/embed/0S6Me1_tnco" height={400} width={800} />
          </div>
        </Slider>
        <div className="testimonialBG1"/>
        <div className="testimonialBG2"/>
      </div>
    </div>
  );
};

export default Testimonials;
