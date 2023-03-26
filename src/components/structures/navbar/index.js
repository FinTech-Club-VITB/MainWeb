import React, { useState, useLayoutEffect } from 'react';
import './index.scss'
import logo from "../../../assets/logo.svg"
import { Link } from 'react-router-dom'
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
import {FiMenu, FiX} from 'react-icons/fi'

function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
}

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const EventsMenu= ( showEvents ?
    <>
      <AiFillCaretUp className='navIcon'/>
      <div className='eventMenu'>
        <Link to='/events/auction-arena'><h2 className='link'>AUCTION ARENA</h2></Link>    
        <Link to='/events/basics-of-finance'><h2 className='link'>FINANCE 101</h2></Link>    
        <Link to='/events/finwizz'><h2 className='link'>FINWIZZ</h2></Link>    
      </div>
    </> :
    <>
      <AiFillCaretDown className='navIcon'/>
    </>
  )
  const menu = (      
    <div className="menu">
      <Link to='/'><h2 className='link'>HOME</h2></Link>
      <div 
        onClick={()=>{setShowEvents(!showEvents)}} 
        onMouseEnter={()=>setShowEvents(true)}
        onMouseLeave={()=>setShowEvents(false)}
      >
        <h2 className='link'>EVENTS</h2>
        {EventsMenu}
      </div>
      <Link to='/our-team'><h2 className='link'>OUR TEAM</h2></Link>
      <Link to='/resources'><h2 className='link'>RESOURCES</h2></Link>
    </div>
  )

  return (
    <div className='navbar'>
      <img src={logo} className={`logo ${useWindowPosition()>300?'scrolledLogo':''}`} alt=""/>
      {window.innerWidth>700?
        menu:
        !showMenu ? <FiMenu className='menuIcon' onClick={()=>setShowMenu(true)}/>:
          <>
            <FiX className='menuIcon' onClick={()=>setShowMenu(false)}/>
            {menu}
          </>
      }
    </div>
  )
}

export default Navbar