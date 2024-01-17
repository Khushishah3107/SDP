import React ,{useState} from 'react'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import {FaBars , FaTimes} from "react-icons/fa"
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[click,setClick] =useState(false);

  const handleClick = () =>setClick(!click);
  const[color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=100)
    {
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor)

    // const toggle_mode = () => {
    //     theme == 'light' ? setTheme('dark') : setTheme('light');
    // }

    
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <img src={logo_dark} alt="" className='logo'/>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/facilities">Facilities</Link>
        </li>
        <li>
          <Link to="/placements">Placements</Link>
        </li>
        <li>
          <Link to="/admission">Admission</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        { click ? <FaTimes size={20} style={{color:"#fff"}}/> : <FaBars size={20} style={{color:"#fff"}}/>}
        
        
      </div>
    </div>












    // <div className='navbar' >
    //   <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
    //   <ul >
    //     <li >Home</li>
    //     <li >About</li>
    //     <li >Facilities</li>
    //     <li >Placements</li>
    //     <li >Admission</li>
    //     <li >Contact Us</li>
    //   </ul>

    //   <div className='search-box'  >
    //     <input type="text" placeholder='Search'/>
    //     <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
    //   </div>

    //   <img src={theme == 'light' ?  toggle_light : toggle_dark} alt="" onClick={()=>{toggle_mode()}}className='toggle' />
    //   <h3 className='login'>Login</h3>
    // </div>
  )
}

export default Navbar
