import React from 'react'
import './index.scss'

const Member = (props) => {
  return (
    <div className='member' style={{flexDirection: props.direction??'column'}}>
        <div/>
        <div/>
        <img src={props.image} alt='' />
        <h2>{props.role}</h2>
        {props.arrow}
        <h3>{props.name}</h3>
        <p>{props.para}</p>
    </div>
  )
}

export default Member