import React, { useState, useEffect } from 'react';
import './profile.css';
import UpdateProfile from './Model/UpdateProfile';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showEdit, setshowEdit]=useState(false)

  useEffect(() => {
    // Attempt to get data from localStorage
    const storedData = localStorage.getItem('userData');
    
    if (storedData) {
      setUser(JSON.parse(storedData));
    }
  }, []);
  console.log("caekke")

  if(user==null){
    return <h2>loading</h2>
  }

  const handleEdit=()=>{
    console.log("called dajsda")
    setshowEdit(!showEdit)
  }
  return (
    <>
    
    <UpdateProfile  show={showEdit} onclose={()=>setshowEdit(false)}/>
    <div className="user-profile-view profile-container">
  <h2 className="profile-title">User Profile</h2>
  
  <div className="profile-content">
    {/* Left Side: Avatar */}
    <div className="profile-image-section">
      <div className="profile-avatar">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400" 
          alt="Profile" 
        />
      </div>
    </div>

    {/* Right Side: Info */}
    <div className="profile-details-section">
      <div className="detail-row">
        <span className="detail-label">Full Name</span>
        <span className="detail-value">{user.name}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Email Address</span>
        <span className="detail-value">{user.emaildata}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Mobile Number</span>
        <span className="detail-value">{user.number}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Password</span>
        <span className="detail-value">••••••••</span> {/* Security practice: Masking password */}
      </div>

      <button className="edit-button" onClick={handleEdit}>
        <span className="edit-icon">✎</span> Edit Profile
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default Profile;