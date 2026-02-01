import React, { useState } from "react";
import "./Buy.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    pincode: "",
    alternate: "",
    landmark: "",
    address: "",
    coupon: "",
    agree: false
  });
  const navigator=useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  
    
  };

  const handleSave = () => {
    //  console.log("Saved Address:", form);
      //  console.log('form data',form)
  
if (!form.name) {
   toast.error("Name is required");
}
else if (!form.phone) {
   toast.error("Phone number is required");
}
else if (!form.state) {
   toast.error("state is required");
}
else if (!form.district) {
   toast.error("district is required");
}
else if (!form.pincode) {
   toast.error("pincode is required");
}
else if (!form.alternate) {
   toast.error("alternate is required");
}
else if (!form.landmark) {
   toast.error("landmark is required");
}
else if (!form.address) {
   toast.error("Address is required");
}
else if (!form.coupon) {
   toast.error("coupon is required");
}
else if (!form.agree) {
   toast.error("agree is required");
}

else{
  
    toast.success("Address Saved!");
}

  
   
  };

  const handleCheckout = () => {
    if (!form.agree) {
      toast.error("Please agree to terms before payment");
      return;
    }
    toast.success("Proceeding to Checkout...");
  };

  return (

<>
  <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    
    <div className="checkout-container">
      {/* LEFT FORM */}
      <div className="address-box">
           <button onClick={()=>navigator("/")} style={{cursor:"pointer"}}>back to home</button>
        <div className="row">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange}
               
              
                  // onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label>State:</label>
            <select name="state" value={form.state} onChange={handleChange}>
              <option value="">--Select State--</option>
              <option value="Delhi">Delhi</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="MH">Maharashtra</option>
            </select>
          </div>

          <div>
            <label>District:</label>
            <select
              name="district"
              value={form.district}
              onChange={handleChange}
            >
              <option value="">--Select District--</option>
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div>
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              value={form.pincode}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Alternate Number:</label>
            <input
              type="text"
              name="alternate"
              placeholder="Enter alternate Number"
              value={form.alternate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Landmark:</label>
          <input
            type="text"
            name="landmark"
            placeholder="Enter Landmark"
            value={form.landmark}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Address:</label>
          <textarea
            name="address"
            placeholder="Enter Address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <button type="button" className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>

      {/* RIGHT PAYMENT */}
      <div className="payment-box">
        <button className="pay-type">One Time Payment</button>

        <div className="coupon-box">
          <input
            type="text"
            name="coupon"
            placeholder="Enter Coupon Here"
            value={form.coupon}
            onChange={handleChange}
          />
          <button>Apply</button>
        </div>

        <div className="price-box">
          <div className="price-row">
            <span>Total price</span>
            <span>₹499</span>
          </div>
          <div className="price-row">
            <span>GST</span>
            <span>₹0</span>
          </div>
          <div className="price-row">
            <span>Delivery Charge</span>
            <span>₹100</span>
          </div>

          <hr />

          <div className="price-row total">
            <span>To Pay</span>
            <span>₹599</span>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>Before making payment you agree to our terms</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Checkout;
