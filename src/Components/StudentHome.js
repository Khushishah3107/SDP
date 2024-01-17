import React from 'react'
import './StudentHome.css'
import { Link } from 'react-router-dom'
const StudentHome = () => {
  return (
    <div className='std-det-container'>
    <div className='std-det'>
      
      <div className="student-details">
      <div className="std-heading">
        <h1>Student Profile</h1> 
      </div>
        <p>
          <strong>Reporting Date :</strong> 
        </p>
        <p>
          <strong>Addmission Type :</strong> 
        </p>
        <p>
          <strong>First Name :</strong> 
        </p>
        <p>
          <strong>Middle Name :</strong> 
        </p>
       
        <p>
          <strong>Last Name :</strong> 
        </p>
        <p>
          <strong>Name Format :</strong> 
        </p>
        <p>
          <strong>Full Name :</strong> 
        </p>
        <p>
          <strong>Gender :</strong> 
        </p>
        <p>
          <strong>Birthdate :</strong> 
        </p>
        <p>
          <strong>Birth Place :</strong> 
        </p>
        <p>
          <strong>Enrollment Year :</strong> 
        </p>
        <p>
          <strong>Degree :</strong> 
        </p>
        <p>
          <strong>Student Id :</strong> 
        </p>
        <p>
          <strong>ACPC Merit Rank :</strong> 
        </p>
        <p>
          <strong>Cast Category :</strong> 
        </p>
        <p>
          <strong>Sub Cast :</strong> 
        </p>
        <p>
          <strong>Mother Tongue :</strong> 
        </p>
        <p>
          <strong>Nationality :</strong> 
        </p>
      </div>
    
    </div>
   
      <div className="gur-det">
      <div className="gur-heading">
        <h1>Guardian Profile</h1> 
      </div>
      <p>
          <strong>Relation Type :</strong> 
        </p>
        <p>
          <strong>Full Name :</strong> 
        </p>
        <p>
          <strong>Occupation :</strong> 
        </p>
        <p>
          <strong>Annual Income :</strong> 
        </p>
      </div>
     
      <div className="cont-det">
      <div className="cont-heading">
        <h1>Contact Information</h1> 
      </div>
      <p>
          <strong>Address :</strong> 
        </p>
        <p>
          <strong>City :</strong> 
        </p>
        <p>
          <strong>Pin Code :</strong> 
        </p>
        <p>
          <strong>State :</strong> 
        </p>
        <p>
          <strong>Country :</strong> 
        </p>
        <p>
          <strong>Mobile No :</strong> 
        </p>
        <p>
          <strong>Email :</strong> 
        </p>
      </div>
      <div className='std-btn'>
      <Link to="" className='btn'>Edit</Link>
      </div>
    </div>
  )
}

export default StudentHome
