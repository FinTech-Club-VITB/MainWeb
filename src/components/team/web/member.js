import React from 'react'
import './index.scss'

const WebMember = (props) => {
  return (
    <div className='member'>
        <img src={props.image} alt='' />
        <h3>{props.name}</h3>
        <p>{props.para}</p>
    </div>
  )
}

export default WebMember