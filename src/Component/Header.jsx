import React, { useEffect, useState } from "react";
import "./Header.css";
import { toast } from "react-toastify";
import Model from "./Model";
import { IoIosArrowDropdown } from "react-icons/io";
// import Cart from "./Cart";
import { useLocation } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Header({proCategory}) {
  const [showform, setshowform] = useState(false);
  const [showPrpfile, setshowProfile] = useState(false);
  const location=useLocation();

  console.log("location",location.pathname)

  const navigate = useNavigate();

  const EmailformLocal = localStorage.getItem("userData");
  const userData = EmailformLocal ? JSON.parse(EmailformLocal) : null;
  // const [dropdown , setdropdown] = useState(false);
 
 
  //  const [purchaseDataId, setpurchaseDataId]= useState([])

  const handlelogout = () => {
    localStorage.removeItem("userData");
    toast.success("Successfully logged out");
    navigate("/");
    setshowProfile(false);
  };

  

const purchaseId = localStorage.getItem("Buyitems");
const purchasedataId = purchaseId ? JSON.parse(purchaseId) : [];

  console.log("showprifile",showPrpfile)

  return (
    <>
      {showform && <Model show={showform} onHide={() => setshowform(false)} />}

      <div className="header">
        {/* Left */}
        <div className="header-left">
          <div className="logo">
            <img src="/aurra.img.png" alt="Logo" />
            <span></span>
          </div>
        </div>

        {/* Right */}
        <div className="header-right">
          {!userData ? (
            <button className="login-btn" onClick={() => setshowform(true)}>
              Login
            </button>
          ) : (
            <>
              <div
                className="user-box"
                onClick={() => {
                  console.log("called headd ")
                  setshowProfile(!showPrpfile)
                }}
              >
                <FaUser className="user-icon" />
                <span className="user-name">
                  {userData.name || userData.emaildata}
                   
                </span>
              </div>

                <div className={`profile-dropdown${showPrpfile?"activedata":""}`}>
                  <h3>Welcome</h3>
         <div className="close-btn" onClick={() => setshowProfile(!showPrpfile)}> ✖  </div>
 
                  <button 
                     className={location.pathname=='/userProfile'?"activetab":""}
                    onClick={() => navigate("/userProfile")}
                  >
                    <FaUser className="user-icon" /> My Account
                  </button>

                 
                  <button 
                  className={location?.pathname=='/'?"activetab":""}
                  onClick={()=> navigate("/")}>
                    Home</button>
                  <button onClick={()=> navigate('/orderview')}>My Order</button>
                  <button onClick={()=>navigate('/about')}>About</button>
                  <button onClick={()=>navigate("/contact")}>Contact</button>
                  <button>Services</button>
                  <button>FAQ's</button>
                  <hr />
                 <button className="logout-btn" onClick={handlelogout}>
                    Logout
                  </button>
                </div>
         
            </>
          )
          }

        </div>

      </div>
    </>
  );
}

export default Header;
