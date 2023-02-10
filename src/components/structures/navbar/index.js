import React from 'react'
import './index.scss'
import logo from './logo.png'  

export default function Navbar() {
  return (
    <nav className="navbar">

        <div className="left"><img src={logo} alt=""/></div>
        <div className="right">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>HOME</li>
            </ul>
        </div>
    </nav>
  )
}
