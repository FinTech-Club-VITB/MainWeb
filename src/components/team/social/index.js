import React from 'react'
import './index.scss'
import { socialTeam } from '../members'
import SocialMember from './member'

const Social = () => {
  return (
    <div className='socialTeamSection'>
        <h2 className='heading'>THE SOCIAL MEDIA TEAM</h2>
        <div className='members'>
            {socialTeam.map(member => {
                return <SocialMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Social