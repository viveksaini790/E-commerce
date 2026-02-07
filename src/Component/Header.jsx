import React, { useState } from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Model from "./Model";

function Header() {
  const [showform, setshowform] = useState(false);
  const [showPrpfile, setshowProfile] = useState(false);

  const navigate = useNavigate();

  const EmailformLocal = localStorage.getItem("userData");
  const userData = EmailformLocal ? JSON.parse(EmailformLocal) : null;

  const handlelogout = () => {
    localStorage.removeItem("userData");
    toast.success("Successfully logged out");
    navigate("/");
    setshowProfile(false);
  };

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
              <div
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
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
