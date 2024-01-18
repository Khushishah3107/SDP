import React, { useEffect, useState } from 'react';
import './StudentHome.css';
import { Link } from 'react-router-dom';

const StudentHome = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("YOUR_API_ENDPOINT")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='std-det-container'>
      {records.map((list, index) => (
        <div className='std-det' key={index}>
          <div className="student-details">
            <div className="std-heading">
              <h1>Student Profile</h1>
            </div>
            {/* Add the actual data from the 'list' variable */}
            <p><strong>Reporting Date :</strong> {list.reportingDate} </p>
        <p><strong>Addmission Type :</strong> {list.addType}  </p>
        <p><strong>First Name :</strong>  {list.fname} </p>
        <p><strong>Middle Name :</strong>  {list.mname} </p>
        <p><strong>Last Name :</strong>  {list.lname} </p>
        <p><strong>Name Format :</strong>  {list.nameFormat}  </p>
        <p><strong>Full Name :</strong> {list.sfullName}  </p>
        <p> <strong>Gender :</strong> {list.gender}  </p>
        <p><strong>Birthdate :</strong>  {list.birthdate}  </p>
        <p><strong>Birth Place :</strong>  {list.birthplace} </p>
        <p><strong>Enrollment Year :</strong> {list.enrollYear}  </p>
        <p><strong>Degree :</strong> {list.degree}  </p>
        <p><strong>Student Id :</strong>  {list.sid} </p>
        <p><strong>ACPC Merit Rank :</strong> {list.meritRank}  </p>
        <p><strong>Cast Category :</strong> {list.castCategory}  </p>
        <p> <strong>Sub Cast :</strong>  {list.subCast} </p>
        <p><strong>Mother Tongue :</strong> {list.motherTongue}  </p>
        <p><strong>Nationality :</strong> {list.nationality}  </p>
          </div>

          <div className="gur-det">
            <div className="gur-heading">
              <h1>Guardian Profile</h1>
            </div>
            {/* Add guardian details using 'list' variable */}
            <p><strong>Relation Type :</strong> {list.relationType}</p>
            <p><strong>Full Name :</strong> {list.gfullName}</p>
            <p><strong>Occupation :</strong> {list.occupation}</p>
            <p><strong>Annual Income :</strong> {list.annualIncome}</p>
          </div>

          <div className="cont-det">
            <div className="cont-heading">
              <h1>Contact Information</h1>
            </div>
            {/* Add contact information using 'list' variable */}
            <p><strong>Address :</strong> {list.address}</p>
            <p><strong>City :</strong> {list.city}</p>
            <p><strong>Pin Code :</strong> {list.pinCode}</p>
            <p><strong>State :</strong> {list.state}</p>
            <p><strong>Country :</strong> {list.country}</p>
            <p><strong>Mobile No :</strong> {list.mobileNo}</p>
            <p><strong>Email :</strong> {list.email}</p>
          </div>

          <div className='std-btn'>
            <Link to="" className='btn'>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentHome;
