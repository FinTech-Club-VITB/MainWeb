import picture from './'
import React from 'react'
import './index.scss'
import background from './images/planet.png'
import phone from './images/phone-layers.png'

const About = () => {
  return (
    <>
      <img class="background" src={background} alt="back" />
      <div class="gradient" />
      <div class="about">
        <h1 class="aboutus">ABOUT US</h1>
        <hr class="line" />
        <p class="tag">
          We built your feuture
        </p>
        <p1 class="word">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <br /><br /><br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br /><br /><br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
        </p1>
        <img class="phone-layers" src={phone} data-value="5" alt="phone" />

      </div>
    </>
  )
}

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".phone-layers").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
export default About