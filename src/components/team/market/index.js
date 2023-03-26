import React from 'react'
import './index.scss'
import { marketTeam } from '../members'
import MarketMember from './member'

const Market = () => {
  return (
    <div className='marketTeamSection'>
        <h2 className='heading'>THE SOCIAL MEDIA TEAM</h2>
        <div className='members'>
            {marketTeam.map(member => {
                return <MarketMember {...member}/>
            })}
        </div>
    </div>
  )
}

export default Market