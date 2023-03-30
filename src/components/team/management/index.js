import React from 'react'
import './index.scss'
import { managementTeam } from '../members'
import ManagementMember from './member'

const Management = () => {
  return (
    <div className='managementTeamSection'>
        <div className='members'>
            <h2 className='heading'>THE MANAGEMENT TEAM</h2>
            {managementTeam.map(member => {
                return <ManagementMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Management