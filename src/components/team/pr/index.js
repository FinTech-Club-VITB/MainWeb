import React from 'react'
import './index.scss'
import { prTeam } from '../members'
import PRMember from './member'

const PR = () => {
  return (
    <div className='prTeamSection'>
        <h2 className='heading'>THE PR AND OUTREACH TEAM</h2>
        <div className='members'>
            {prTeam.map(member => {
                return <PRMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default PR