import React from 'react'
import About from './about'
import Hero from './hero'
import Objectives from './objectives'
import Teams from './team'
import Testimonials from './testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Objectives/>
        <Testimonials/>
        {/* <Teams/> */}
    </div>
  )
}

export default Home