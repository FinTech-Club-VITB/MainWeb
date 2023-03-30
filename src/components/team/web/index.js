import React from 'react'
import './index.scss'
import { webTeam } from '../members'
import WebMember from './member'

const Web = () => {
  return (
    <div className='webTeamSection'>
        <h2 className='heading'>THE WEB & DEVELOPMENT TEAM</h2>
        <div className='members'>
            {webTeam.map(member => {
                return <WebMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Web