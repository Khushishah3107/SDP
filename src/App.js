import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Components/Homepage";

import Navbar from "./Components/Navbar";
import { useState } from "react";
import Login from "./Components/Login";
import './index.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Admission from "./routes/Admission";
import Contact from "./routes/Contact";
import Facilities from "./routes/Facilities";
import Placements from "./routes/Placements";
import Technology from "./routes/Technology";
import Dental from "./routes/Dental";
import Medical from "./routes/Medical";
import Journalism from "./routes/Journalism";
import Pharmacy from "./routes/Pharmacy";
import CE from './routes/CE'
import EC from "./routes/EC";
import IT from "./routes/IT";
import CH from "./routes/CH";
import MH from "./routes/MH";
function App() {

  const [theme,setTheme] =useState('light');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/placements" element={<Placements/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tech" element={<Technology/>}/>
        <Route path="/dental" element={<Dental/>}/>
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/journalism" element={<Journalism/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/ced" element={<CE/>}/>
        <Route path="/ecd" element={<EC/>}/>
        <Route path="/itd" element={<IT/>}/>
        <Route path="/chd" element={<CH/>}/>
        <Route path="/mhd" element={<MH/>}/>
      </Routes>
    </>
    // {/* <div className={`container ${theme}`}>
    // <Navbar theme={theme} setTheme={setTheme}/>
    // {/* <Login/> */}
    // {/* </div> */}
    
    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Homepage/>} />
         
    //       <Route path="/student" element={<Student/>} />
    //       {/* <Route path="/login" element={<Login/>} /> */}
    //         </Routes>

    //   </BrowserRouter> 
    // {/* </> */}
  );
}

export default App;


