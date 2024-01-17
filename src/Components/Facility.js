import React from 'react'
import './Programmes.css'

import '../Components/ProgData'
const Facility = (props) => {
  return (
    <div className='faci-container'>
      <h1 className="faci-heading">
        <div className="facility-container">
          <div className="faci-card">
            <img src={props.imgsrc} alt="" />
            <h2 className='faci-title'>{props.title}</h2>
            <div className="faci-details">
              <p>{props.text}</p>
              
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Facility
