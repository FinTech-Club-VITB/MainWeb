import React from 'react'
import './index.scss'
import {AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, MdKeyboardDoubleArrowDown} from "react-icons/ai"
import {MdDoubleArrow} from "react-icons/md"

const Hero = () => {
  return (
    <>
      <div className='heroSection'>
        <div></div>
        <div className='infoSection'>
          <h1 className="heroHeading">FINTECH CLUB</h1>
          <h3><span className='heroSubheading'>DEFINING THE FUTURE OF </span><span className='finance'>FINANCE</span></h3>
          <button className='heroJoinUs' role="button">JOIN NOW</button>
        </div>
        <div>
          <div className='social'>
            <a href=""><AiFillLinkedin/></a>
            <a href=""><AiFillTwitterSquare/></a>
            <a href=""><AiFillInstagram/></a>
            <a href=""><AiFillFacebook/></a>
          </div>
          <MdDoubleArrow className='arrow'/>
        </div>
      </div>
    </>

  )
}

export default Hero
