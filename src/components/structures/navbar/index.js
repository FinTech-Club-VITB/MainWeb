import React from 'react'
import './index.scss'
import logo from "../../../assets/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className="logo" alt=""/>
      <div className="right">
        <Link to='/'><h2 className='link'>HOME</h2></Link>
        <Link to='/event'><h2 className='link'>EVENTS</h2></Link>
        <Link to='/our-team'><h2 className='link'>OUR TEAM</h2></Link>
        <Link to='/resources'><h2 className='link'>RESOURCES</h2></Link>
      </div>
    </div>
  )
}

export default Navbar