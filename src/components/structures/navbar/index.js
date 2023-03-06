import React from 'react'
import './index.scss'
import logo from "../../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className="logo" alt=""/>
      <div className="right">
        <h2 className='link'>HOME</h2>
        <h2 className='link'>EVENTS</h2>
        <h2 className='link'>OUR TEAM</h2>
        <h2 className='link'>RESOURCES</h2>
      </div>
    </div>
  )
}

export default Navbar