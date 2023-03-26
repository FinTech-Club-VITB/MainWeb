import React from 'react'
import {AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
import {MdDoubleArrow} from "react-icons/md"
import './index.scss'

const Socials = (props) => {
  return (
    <div
     style={{bottom: props.bottom??0}}
     className='socialsContainer'>
        <div
         style={{fontSize: props.size??'2.6rem'}}
         className='social'>
            <a href="https://instagram.com/fintechclub_vitb?igshid=ZDdkNTZiNTM="><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/company/fintech-club-vit-bhopal/"><AiFillLinkedin/></a>
            <a href="https://twitter.com/fintech_vitb"><AiFillTwitterSquare/></a>
            <a href="https://youtube.com/@fintechclub-vitb"><AiFillYoutube/></a>
        </div>
        {props.arrow??<MdDoubleArrow className='arrow'/>}
    </div>
  )
}

export default Socials