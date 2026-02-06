import React, { useState, useEffect } from "react";
import "./Update.css";

function UpdateProfile({ show, onclose }) {
  const [formData, setFormData] = useState({
    name: "",
    emaildata: "",
    password: "",
    number: "",
  });

  useEffect(() => {
    if (show) {
      const user = JSON.parse(localStorage.getItem("userData"));
      if (user) setFormData(user);
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name_value",name,value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    window.location.reload()
    onclose(); 
  };

  if (!show) return null;

  return (
 <div className="userProfile-modal-overlay" onClick={onclose}>
  <div className="userProfile-modal-container" onClick={(e) => e.stopPropagation()}>
    <div className="modal-header-custom">
      <h3>Edit Profile</h3>
      <button className="close-x" onClick={onclose}>&times;</button>
    </div>

    <div className="modal-body-custom">
      <div className="input-group">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input name="emaildata" value={formData.emaildata} onChange={handleChange} placeholder="example@mail.com" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
      </div>

      <div className="input-group">
        <label>Mobile</label>
        <input name="number" value={formData.number} onChange={handleChange} placeholder="1234567890" />
      </div>
    </div>

    <div className="modal-actions">
      <button className="cancel-btn" onClick={onclose}>Cancel</button>
      <button className="save-btn" onClick={handleUpdate}>Save Changes</button>
    </div>
  </div>
</div>
  );
}

export default UpdateProfile;