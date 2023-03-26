import React from 'react'
import {BiError} from 'react-icons/bi'
import './common.scss'

const Page404 = () => {
  return (
    <div className='page404'>
        <BiError style={{fontSize:'8rem'}}/>
        <h3>ERROR 404: NOT FOUND</h3>
        <p>OOPS! LOOKS LIKE YOU LANDED ON INCORRECT URL.</p>
    </div>
  )
}

export default Page404