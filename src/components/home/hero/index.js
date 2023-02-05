import React from 'react'
import './index.scss'
import hero from './images/herobg.png'
import ln from './images/LinkedIn@4x.png'
import tr from './images/Twitter@4x.png'
import insta from './images/Instagram@4x.png'
import fb from './images/Facebook@4x.png'
import chat from './images/chaticon.png'

const Hero = () => {
  return (
    <>
      <div className='Hero'>
        <h1 className="Title">FINTECH CLUB</h1>
        <h3 className='subject'>DEFINING THE FUTURE OF <span className='finance'>FINANCE</span></h3>
        <button className='JoinUs' role="button">JOIN NOW</button>

        <div className='social'>
          <img className='linkedin' src={ln}></img>
          <img className='twitter' src={tr}></img>
          <img className='instagram' src={insta}></img>
          <img className='facebook' src={fb}></img>
        </div>
        <div className='arrow'>
          <i className="arrow-down1" />
          <i className="arrow-down2" />
        </div>
      </div>
      <div className='chat'>
        <span className="tooltiptext">Any Queries?</span>
      </div>
    </>

  )
}

export default Hero
