import React, { useState,useEffect } from "react";
import "./Buy.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { IoArrowBackCircleSharp } from "react-icons/io5";

import { useParams } from "react-router-dom";

function Checkout() {
  const [form, setForm] = useState( {
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
  } );
  const navigator = useNavigate();
  const [thankyou, setthankyou] = useState(false)
  const [wish,setwish] = useState(false)

const [ buyreset, setbuyreset] = useState(false)
 const [ UpdateCancle, setUpdateCancle]=useState(false)


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

  if (name === "phone") {
    // Only digits allowed
    if (!/^[0-9]*$/.test(value)) return;
    // Max 10 digits
    if (value.length > 10) return;
 
    if (value.length === 1 && parseInt(value[0]) <= 5 ) return;

    setForm({ ...form, phone: value });
    return;
  }

  if(name === "pincode"){
    if (!/^[0-9]*$/.test(value)) return;
    if (value.length > 6) return;
   setForm({...form, pincode: value});
   return;
  }
  if(name === "alternate"){
    if(!/^[0-9]*$/.test(value) ) return;
    if(value.length >10) return;
    if(value.length === 1 && parseInt(value[0] ) <= 5) return;
    setForm({...form, alternate:value});
    return;
  }
  if(form.address.length>0){
    setbuyreset(true)
  }
 

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    }); 

};

const { id } = useParams();
console.log(
  'url id =',id
)

const handleSave = (value) => {
  //  console.log("Saved Address:", form);
  //  console.log('form data',form)

  
  if (!form.name) {
    toast.error("Name is required");
  }
  
//  else if (!form.phone) {
else if (form.phone.length !== 10){
    toast.error("Phone number is 10 digit required");
  }
  else if (!form.state) {
    toast.error("state is required");
  }
  else if (!form.district) {
    toast.error("district is required");
  }
  else if (form.pincode.length !==6) {
    toast.error("pincode is required 6 digit");
  }
  else if (form.alternate.length!== 10) {
    toast.error("alternate is required 10 digit");
  }
  else if (!form.landmark) {
    toast.error("landmark is required");
  }
  else if (!form.address ) {
    toast.error("Address is required");
   
  }

  else {

    toast.success("Address Saved");
 
    if( true){
       setwish(true && wishdata)
      
  console.log('vivek this is work')

    }
  

    let Buyobj={
      name:form.name,
      phone:form.phone,
      state:form.state,
      district:form.district,
      pincode:form.pincode,
      alternate:form.alternate,
      landmark:form.landmark,
       address:form.address

    }
    localStorage.setItem("BuyData",JSON.stringify(Buyobj));

  }
};

const wishdata=localStorage.getItem("BuyData")
const readwish=JSON.parse(wishdata)
// console.log('readwish',readwish)

const handledit=()=>{
  console.log(
    'handleedit callled'
  )
   setwish(false)
   setUpdateCancle(true)
  //  setForm({...form})
}


const handleReset=( )=>{
//  setForm(  handleChange.value.length===0)
setForm( 
  {
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
  }
)
}

const handleCancle=()=>{
console.log('cancle called')
setwish(true)
setForm(readwish)
}

const handleCheckout =()=>{
 if(!wish){
  toast.error("please fill the form and save the address")
}
else if(!form.agree){
      toast.error("Please agree to terms before payment");
}

else{
    toast.success("Proceeding to Checkout...");
  setthankyou(true);

  // 1️⃣ Pehle localStorage se data nikalo
  const oldItems = JSON.parse(localStorage.getItem("Buyitems")) || [];

  // 2️⃣ Duplicate id se bachne ke liye check
  if (!oldItems.includes(id)) {
    oldItems.push(id);
  }

  // 3️⃣ Wapas localStorage me save karo
  localStorage.setItem("Buyitems", JSON.stringify(oldItems));

  // setTimeout(() => {
  //   navigator("/");
  // }, 3000);
}
}


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


   {thankyou && (
  <div className="thankyou-container">
    <button className="back-btn" onClick={() => navigator("/")}>
      <IoArrowBackCircleSharp />
    </button>
    <div className="thankyou-box">
      <h2>Thank You 🎉</h2>
      <p>Your order has been placed successfully.</p>
    </div>
    
  </div>
)}

   {!thankyou && (
  <div className="gemini-checkout-container">
    <button className="gemini-back-btn" onClick={() => navigator("/")}>
      <IoArrowBackCircleSharp />
    </button>

    <div className="gemini-checkout-layout">
      {/* LEFT FORM: Address Details */}
     
      {! wish ? 
      (
        <div className="gemini-address-box">
        <div className="gemini-form-row">
          <div className="gemini-input-group">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter name" value={form.name} onChange={handleChange} />
          </div>
          <div className="gemini-input-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" placeholder="Enter Number" value={form.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="gemini-form-row">
          <div className="gemini-input-group">
            <label>State:</label>
            <select name="state" value={form.state} onChange={handleChange}>
              <option value="">--Select State--</option>
              <option value="Delhi">Delhi</option>
              <option value="UP">Uttar Pradesh</option>
            </select>
          </div>
          <div className="gemini-input-group">
            <label>District:</label>
            <select name="district" value={form.district} onChange={handleChange}>
              <option value="">--Select District--</option>
              <option value="Noida">Noida</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
        </div>

        <div className="gemini-form-row">
          <div className="gemini-input-group">
            <label>Pincode:</label>
            <input type="number" name="pincode" placeholder="Enter Pincode" value={form.pincode} onChange={handleChange} />
          </div>
          <div className="gemini-input-group">
            <label>Alternate Number:</label>
            <input type="text" name="alternate" placeholder="Enter alternate Number" value={form.alternate} onChange={handleChange} />
          </div>
        </div>

        <div className="gemini-input-group full-width">
          <label>Landmark:</label>
          <input type="text" name="landmark" placeholder="Enter Landmark" value={form.landmark} onChange={handleChange} />
        </div>

        <div className="gemini-input-group full-width">
          <label>Address:</label>
          <textarea name="address" placeholder="Enter Address" value={form.address} onChange={handleChange} />
        </div>


        <div className="gemini-save-container">
          <button type="button" className="gemini-save-btn" onClick={handleSave}>Save</button>
        </div>
        { buyreset && 
        <button onClick={handleReset} >reset</button>
        }
        
        { UpdateCancle &&
          <button onClick={handleCancle} > Cancle</button>
        }
      </div>
      ) :
   (
     <div   className="gemini-address-box2" >
          <h2>Select Address </h2>
        <div className="address-card">
          <h3>Name= {readwish.name}</h3>
<p>Phone= {readwish.phone}</p>
<p>Address= {readwish.address}</p>
          <button onClick={handledit}>edit</button>
        </div>
    
           </div>
            
          )
    }



      {/* RIGHT BOX: Payment & Summary */}
      <div className="gemini-payment-box">
        <button className="gemini-pay-type-btn">One Time Payment</button>

        <div className="gemini-coupon-wrapper">
          <input type="text" name="coupon" placeholder="Enter Coupon Here" value={form.coupon} onChange={handleChange} />
          <button className="gemini-apply-btn">Apply</button>
        </div>

        <div className="gemini-summary-card">
          <div className="gemini-summary-row">
            <span>Total price</span>
            <span>₹499</span>
          </div>
          <div className="gemini-summary-row">
            <span>GST</span>
            <span>₹0</span>
          </div>
          <div className="gemini-summary-row">
            <span>Delivery Charge</span>
            <span>₹100</span>
          </div>
          <hr className="gemini-divider" />
          <div className="gemini-summary-row gemini-total">
            <span>To Pay</span>
            <span>₹599</span>
          </div>

          <div className="gemini-terms-row">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
            <span>Before making payment you agree to our terms</span>
          </div>

          <button className="gemini-checkout-submit" onClick={handleCheckout}>
            Proceed To Checkout
          </button>
          
        </div>
      </div>
    </div>
  </div>
)}
  </>
);
}

export default Checkout;
