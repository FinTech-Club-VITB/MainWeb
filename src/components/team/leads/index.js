import React from 'react'
import './index.scss'
import Member from './member'
import { leads } from '../members'
import {HiOutlineArrowLongDown, HiOutlineArrowLongUp} from 'react-icons/hi2'

const Leads = () => {
  return (
    <div className='leadSection'>
        <h2 className='heading'>THE CORE TEAM</h2>
        <div className='members'>
          {leads.map((member, index) => {
            if(index%2===0)
              return <Member {...member} cls='up' arrow={<HiOutlineArrowLongDown/>} />
            else
              return <Member {...member} cls='down' arrow={<HiOutlineArrowLongUp/>} />
          })}
        </div>
    </div>
  )
}

export default Leads