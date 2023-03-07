import React from 'react'
import {FaChevronLeft} from 'react-icons/fa'
import "./index.scss";

const leftArrow = (props) => {
  return (
    <div
    onClick={props.onClick}>
      <FaChevronLeft className="leftArrow"/>
    </div>
  )
}

export default leftArrow