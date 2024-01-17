import React, { useState } from 'react';
import './login.css';

const CustomPopup = ({ onClose }) => {
  return (
    <div className="custom-popup">
      <div className="popup-content">
        <h1>Forgot Password</h1>
        <p>Password is sent to you at your registered email address.</p>
        <button onClick={onClose} className='btn'>Reset Password</button>
      </div>
    </div>
  );
};

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleForgot = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div className='card'>
      <div className='form'>
        <h1 className='title'>Log In</h1>
        <form action="">
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Email' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' />
          <div className='forgot-password'>
            <p>
              Forgot password?{' '}
              <span onClick={handleForgot}>Click Here</span>
            </p>
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
     
    </div>
    <div className="pop-up">
    {showPopup && <CustomPopup onClose={closePopup} />}
    </div>
     
     </>
  );
};

export default Login;
