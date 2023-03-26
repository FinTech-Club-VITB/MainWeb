import React from 'react'
import Content from './content'
import Hero from './hero'
import Leads from './leads'
import Management from './management'
import Market from './market'
import PR from './pr'
import Social from './social'
import Web from './web'

const Team = () => {
  return (
    <div>
      <Hero/>
      <Leads/>
      <Social/>
      <Management/>
      <Market/>
      <PR/>
      <Content/>
      {/* <Technical/> */}
      <Web/>
    </div>
  )
}

export default Team