import React, { useState } from "react";
import "./Header.css";
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Model from "./Model";
import { IoIosArrowDropdown } from "react-icons/io";
import Cart from "./Cart";

import { useDispatch, useSelector } from "react-redux";
import { toggleProfile, logoutUser } from "../Redux/userSlice";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../Redux/counterSlice";


function Header() {
  const [showform, setshowform] = useState(false);
  const [showprofile, setshowProfile] = useState(false);

  //  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const EmailformLocal = localStorage.getItem("userData");
  const userData = EmailformLocal ? JSON.parse(EmailformLocal) : null;
  const [dropdown , setdropdown] = useState(false);
  // const [purchaseDataId, setpurchaseDataId]= useState('')
   const [purchaseDataId, setpurchaseDataId]= useState([])
//  const [purchaseDataId, setpurchaseDataId] =useState(()=>{
  //  const data=localStorage.getItem('BuyItems')
  //  if(data){
  //   const parsed= JSON.parse(data)
  //   return parsed;
  //  }
  //  else{
  //   return[]
  //  }
// })
  const handlelogout = () => {
    localStorage.removeItem("userData");
    toast.success("Successfully logged out");
    navigate("/");
    setshowProfile(false);
  };
  
  // const handleOrder=()=>{
  //   console.log('called drowdan')
  // setpurchaseDataId(purchasedataId)
  // }

  // const purchaseId=  localStorage.getItem("Buyitems")
  //     const purchasedataId=JSON.parse(purchaseId)
const purchaseId = localStorage.getItem("Buyitems");
const purchasedataId = purchaseId ? JSON.parse(purchaseId) : [];

    const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { pserData, showProfile } = useSelector(
   const { pserData, showProfile } = useSelector(
    (state) => state.user
  );

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  // if (!userData) return null;

  return (
    <>
      {showform && <Model show={showform} onHide={() => setshowform(false)} />}

      <div className="header">
        {/* Left */}
        <div className="header-left">
          <div className="logo">
            <img src="/wel.webp" alt="Logo" />
            <span>MyStore</span>
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
              {/* <div
                className="user-box"
                onClick={() => setshowProfile(!showPrpfile)}
              >
                <FaUser className="user-icon" />
                <span className="user-name">
                  {userData.name || userData.email}
                </span>
              </div>

              {showPrpfile && (
                <div className="profile-dropdown">
                  <button
                    className="profile-name"
                    onClick={() => navigate("/userProfile")}
                  >
                    User Profile
                  </button>

                  <hr />

                  <button className="logout-btn" onClick={handlelogout}>
                    Logout
                  </button>
                </div>
              )} */}

 <div
        className="user-box"
        onClick={() => dispatch(toggleProfile())}
      >
        <FaUser className="user-icon" />
        <span className="user-name">
          {userData.name || userData.email}
        </span>
      </div>

      {showProfile && (
        <div className="profile-dropdown">
          <button
            className="profile-name"
            onClick={() => navigate("/userProfile")}
          >
            User Profile
          </button>

          <hr />

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

            </>
          )
          }

             <button onClick={()=>setdropdown(!dropdown)} className="dropbtn">
           <IoIosArrowDropdown className="icondropdown" />
 </button>
 
{  dropdown && 
<div  className="dropdown-wrapper  "> 

 <div className={`side-menu ${dropdown ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setdropdown(false)}>
          ✖
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          {/* <li onClick={handleOrder}>PurchaseId={purchaseDataId}</li> */}
          <li>
  PurchaseId = {purchaseDataId.join(", ")}
</li>
          <li onClick={()=>navigate('/orderview')}>My Order </li>
        </ul>
      </div>
</div>
}

        </div>

         {/* <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
   */}
      </div>
    </>
  );
}

export default Header;
