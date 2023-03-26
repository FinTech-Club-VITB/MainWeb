import React from 'react'
import Socials from '../../common/socials'
import './index.scss'

const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footerTopSection'>
        <div>
          <h3>Contact US</h3>
          <p>+91XXXXXXXXX <br/>email@fintechclub.com <br/>Vellore Institute Of Tech.</p>
        </div>
        <div>
          <h3>Events</h3>
          <p>StockPe <br/>Auction Arena <br/>FinWizz</p>
        </div>
        <div>
          <h3>Quick Link</h3>
        </div>
        <div className='footerClubInfo'>
          <hr/>
          <div>
            <h2>Fintech Club</h2>
            <p>Kind words about club. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
          </div>
        </div>
      </div>
      <div className='footerBottomSection'>
        <p>Copyright 	&#169; 2023 Fintech Club Vit Bhoapl</p>
        <hr/>
        <Socials arrow='' bottom='0.5rem'/>
      </div>
    </div>
  )
}

export default Footer