import React from 'react'
import './index.scss'

const Sponsor = () => {
    const sponsors=[
        {
            logo:'',
            para:'It was popularized in the 1960s was PageMaker including versions of Lorem Ipsum.'
        },
        {
            logo:'',
            para:'It was popularized in the 1960s was PageMaker including versions of Lorem Ipsum.'
        },
    ]
  return (
    <div className='finwizzSponsorSection'>
        <div>
            <h2 className='sectionTitle'>OUR FEATURED SPONSOR</h2>
            <p className='sectionPara'>It was popularized in the 1960s with the release of Letraset sheets containing  desklike Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='sectionSponsors'>
            {sponsors.map(sponsor=>{
                return(
                    <div>
                        <div className='sponsorLogo'>
                            <img src={sponsor.logo}/>
                        </div>
                        <p>{sponsor.para}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sponsor