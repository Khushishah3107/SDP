import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Homepage from "./Components/Homepage";
import Student from "./StudentModule/Student";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Login from "./Components/Login";
function App() {

  const [theme,setTheme] =useState('light');
  return (
    <>
    <div className={`container ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme}/>
    {/* <Login/> */}
    </div>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
         
          <Route path="/student" element={<Student/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
            </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;


