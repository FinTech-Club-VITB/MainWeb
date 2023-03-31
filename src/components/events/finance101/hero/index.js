import React from 'react'
import './index.scss'
import Socials from '../../../common/socials'

const Hero = () => {
  return (
    <div className='f101HeroSection'>
        <h2 className='heroTitle'>FINANCE 101</h2>
        <h3 className='heroInfo'>BASICS OF STOCK MARKET</h3>
        <p className='heroRegister'>Registeration Closed!</p>
        <Socials arrow=''/>
    </div>
  )
}

export default Hero