import React from 'react'
import Socials from '../../common/socials'
import './index.scss'

const Hero = () => {
  return (
    <div className='teamsHeroSection'>
      <div className='heading'>
        <h2><span>MEET</span></h2>
        <h2>OUR TEAM</h2>
      </div>
      <p className='para'>It was popularized in the 1960s with the release of Letraset sheets containing  desklike Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Socials arrow='' size='2.1rem' />
    </div>
  )
}

export default Hero