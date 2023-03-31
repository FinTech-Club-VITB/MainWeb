import React from 'react'
import './index.scss'

const About = () => {
  return (
    <div className='finwizzAbout'>
      <div className='aboutTitleContainer'>
        <h2 className='aboutTitle'>ABOUT THE EVENT</h2>
      </div>

      <p className='aboutPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie but also the leap into electronic typesetting,remaining essentially unchanged. </p>

      <p className='aboutPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie but also the leap into electronic typesetting,remaining essentially unchanged. 
      <br/><br/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

export default About