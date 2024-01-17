import React from 'react'
import './login.css'

const Form = () => {
  return (
    <div className='card'>

   
    <div className='form'>
        <h1 className='title'>Log In</h1>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password' />
        <div className='forgot-password'>
            <p>Forgot password? <span>Click Here</span></p>
            
        </div>
        <button className='btn'>Submit</button>
       
      </form>
    </div>
    </div>
  )
}

export default Form
