import React from 'react'
import './Programmes.css'
import Programmes from '../Components/Programmes';
import ProgCardData from '../Components/ProgData'
const Prog = () => {
  return (
    <div className='prog-container'>
      
      <h1 className="prog-heading">
      <p>Today, EduFord offers world-class graduate, postgraduate as well as doctoral courses through following institutions</p>
        <div className="programe-container">
          {ProgCardData.map((val,ind)=>{
            return(
                <Programmes
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view} 
                />
            )
          })}
        </div>
      </h1>
    </div>
  )
}

export default Prog
