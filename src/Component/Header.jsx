import React from 'react'
import './Header.css'
import Model from './Model'
import { FaUser } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


import { useState } from 'react'
import { toast } from 'react-toastify';
function Header({hangform}) {
  const [showform,setshowform]= useState(false);
  const EmailformLocal = localStorage.getItem("userData");
  const [showPrpfile, setshowProfile]=useState(false)
const userData = EmailformLocal ? JSON.parse(EmailformLocal) : null;
const navigate=useNavigate()


console.log("showPrpfile",showPrpfile)

// const navigate=useNavigate()

  const handlelogout=()=>{
    localStorage.removeItem("userData")
    navigate("/")
    setshowform(false)
    setshowProfile(false)
    toast.success("successfully logout")
    

  }

  
  return (
    <>
   {showform && <Model  show={showform} onHide={() => setshowform(false)}/> }
    <div className="header">
     
      <div className="logo">
        <img src="/wel.webp" alt="Logo" />
        <span>MyStore</span>
      </div>
  

    {!userData ? (
  <button className="login-btn" onClick={() => setshowform(true)}>
    Login
  </button>
) : (
  <>
  <div className="user-box" onClick={()=>setshowProfile(!showPrpfile)}>
    <FaUser className="user-icon" />
    <span className="user-name">
      {userData.name || userData.email}
    </span>
  </div>

   
   {showPrpfile && (
      <div className="profile-dropdown">
        <p className="profile-name">
          { "User Profile"}
        </p>
        <hr />
        <button
          className="logout-btn"
          onClick={handlelogout}
        >
          Logout
        </button>
      </div>
    )}  
  
  </>
)}

    
    </div>
    
    </>
  )
}

export default Header
