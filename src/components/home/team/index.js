import React from 'react'
import './index.scss'
import bitcoin from './teamimages/bitcoin.svg'
import eth from './teamimages/eth.svg'
import rupees from './teamimages/rupees.svg'

const Teams = () => {
  return (
    <>

      <div className="team">
        <h1 className='title1'>MEET OUR "GURUS"</h1>
        <div class="row">
          <div class="card-01">
            <img className="cir-purple" src={bitcoin} />
            </div>
            <div class="card-01">
              <img className="cir-blue" src={eth} />
            </div>
            <div class="card-01">
              <img className="cir-green" src={rupees} />
            </div>
          
        </div>
        </div>
        <div className="gradteams"></div>
      </>
      )
}

      export default Teams