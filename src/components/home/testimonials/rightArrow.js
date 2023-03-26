import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import "./index.scss";

const rightArrow = (props) => {
  return (
    <div
    onClick={props.onClick}>
      <FaChevronRight className="rightArrow"/>
    </div>
  )
}

export default rightArrow