import React from 'react'
import './index.scss'
import { technicalTeam } from '../members'
import TechnicalMember from './member'

const Technical = () => {
  return (
    <div className='technicalTeamSection'>
        <div className='members'>
            <h2 className='heading'>THE TECHNICAL TEAM</h2>
            {technicalTeam.map(member => {
                return <TechnicalMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Technical