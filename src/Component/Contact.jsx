import React, { useState } from 'react'
import './contact.css'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function Contact() {

  const [frm ,setFrm]=useState({
    firstname: "",
    lastname:"",
    email:"",
    phone:"",
    textarea:""
  })

   console.log("frmfrm",frm)

  const handleinput=(e)=>{
    const {name, type,value}=e.target;
    // console.log('inputvalue==',e.target)
    setFrm({
      ...frm,
      [name]:e.target.value
    })

    if(name==="email"){

      setFrm({...frm, email:value});
    }
     if (name === "phone") {
    // Only digits allowed
    if (!/^[0-9]*$/.test(value)) return;
    // Max 10 digits
    if (value.length > 10) return;
 
    if (value.length === 1 && parseInt(value[0]) <= 5 ) return;

    setFrm({ ...frm, phone: value });
    return;
  }

  }
  const handlesave=(e)=>{
    e.preventDefault()
    console.log('value===')
    if(!frm.firstname){
      toast.error("First name is require...");
    }
    else if(!frm.lastname){
      toast.error("Last name is require...");
    }
    else if(!frm.email){
      toast.error("Email is require...");
    }
    else if(frm.phone.length!==10){
      toast.error("Phone no is 10 digit require...");
    }
    else if(!frm.textarea){
      toast.error("Enter Comment or Message...");
    }
    else{
      toast.success('successfully submit');
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
    <div className='contct'>
        Contact
        <div className='contct-left'>
            <div className='contct-left2'>
              <h2>Contact Us</h2><br />
              <form action="" onSubmit={handlesave}>
                <label htmlFor="">First Name</label><br />
            <input type="text" name='firstname' placeholder='Enter first name' value={frm.firstname} 
                                  onChange={handleinput} /><br /><br />
            <label htmlFor="">Last Name</label><br />
            <input type="text" name='lastname' placeholder='Enter last name' value={frm.lastname} 
                                                onChange={handleinput}/><br /><br />
            <label htmlFor="">Email</label><br />
            <input type="text" name='email' placeholder='Enter email' value={frm.email} 
                                         onChange={handleinput} /><br /><br />
            <label htmlFor="">Phone</label><br />
            <input type="number" placeholder='Enter phone number' name='phone' value={frm.phone}
                                      onChange={handleinput} /><br /><br />
            <label htmlFor="">Select Location</label><br />
            <input type="text" placeholder='Enter a location' /><br /><br />
            <label htmlFor="">Your Comment</label><br />
           <textarea name="textarea" id="" cols={86} rows={5} placeholder='Enter your message here'
                   value={frm.textarea} onChange={handleinput} ></textarea>
           <button type='submit'>Submit</button>
              </form><br />
              
            </div>

        </div>
        <div className='contct-right'>right</div>
        </div>
          </>
  )
}

export default Contact