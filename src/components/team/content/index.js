import React from 'react'
import './index.scss'
import { contentTeam } from '../members'
import ContentMember from './member'

const Content = () => {
  return (
    <div className='contentTeamSection'>
        <h2 className='heading'>THE CONTENT & DESIGN TEAM</h2>
        <div className='members'>
            {contentTeam.map(member => {
                return <ContentMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Content