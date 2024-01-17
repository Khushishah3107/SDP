import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form'>
        <h1 className='title'>Any Queries ?</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Your Name'/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Your Email' />
        <label htmlFor="">Subject</label>
        <input type="text" placeholder='Your Subject'/>
        <label htmlFor="">Message</label>
        <textarea rows={6} placeholder='Type your message here'></textarea>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
