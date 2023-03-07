import React from 'react'
import './index.scss'
import {AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, MdKeyboardDoubleArrowDown} from "react-icons/ai"
import {MdDoubleArrow} from "react-icons/md"

const Hero = () => {
  return (
    <>
      <div className='bgimg'></div>
      <div className='heroSection'>
        <div></div>
        <div className='infoSection'>
          <h1 className="heroHeading">FINTECH CLUB</h1>
          <h3><span className='heroSubheading'>DEFINING THE FUTURE OF </span><span className='finance'>FINANCE</span></h3>
          <button className='heroJoinUs' role="button">JOIN NOW</button>
        </div>
        <div>
          <div className='social'>
            <a href="https://instagram.com/fintechclub_vitb?igshid=ZDdkNTZiNTM="><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/company/fintech-club-vit-bhopal/"><AiFillLinkedin/></a>
            <a href="https://twitter.com/fintech_vitb"><AiFillTwitterSquare/></a>
            <a href="https://youtube.com/@fintechclub-vitb"><AiFillYoutube/></a>
          </div>
          <MdDoubleArrow className='arrow'/>
        </div>
      </div>
    </>

  )
}

export default Hero
