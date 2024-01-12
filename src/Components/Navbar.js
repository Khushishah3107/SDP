import React from 'react'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'

import './styles.css';
import { Link } from 'react-router-dom'

const Navbar = ({theme,setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='navbar' >
      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
      <ul >
        <li >Home</li>
        <li >About</li>
        <li >Facilities</li>
        <li >Placements</li>
        <li >Admission</li>
        <li >Contact Us</li>
      </ul>

      <div className='search-box'  >
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>

      <img src={theme == 'light' ?  toggle_light : toggle_dark} alt="" onClick={()=>{toggle_mode()}}className='toggle' />
      <h3 className='login'>Login</h3>
    </div>
  )
}

export default Navbar
