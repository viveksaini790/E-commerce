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
  const [loction,setloction] =useState('Delhi')

  //  console.log("frmfrm",frm)
console.log('loction==',{loction})
 const handleinput = (e) => {
  const { name, value } = e.target;


if(name==="email"){
  setFrm({
    ...frm,
     email: value
  })
}

  if (name === "phone") {
    if (!/^[0-9]*$/.test(value)) return;
    if (value.length > 10) return;
    if (value.length === 1 && parseInt(value[0]) <= 5) return;
  }

  setFrm({
    ...frm,
    [name]: value
  });
};

  const handlesave=(e)=>{
    e.preventDefault()
    console.log('value===')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(!frm.firstname){
      toast.error("First name is require...");
    }
    else if(!frm.lastname){
      toast.error("Last name is require...");
    }
    // else if(!frm.email){
    //   toast.error("Email is require...");
    // }
  else if(!emailPattern.test(frm.email)) {
    toast.error("Enter valid Gmail (example: abc123@gmail.com)");
    return;
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


const handlechange=(e)=>{
  setloction(e.target.value)
 
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
            <input type="email" name='email' placeholder='Enter email' value={frm.email} 
                                         onChange={handleinput} /><br /><br />
            <label htmlFor="">Phone</label><br />
            <input type="number" placeholder='Enter phone number' name='phone' value={frm.phone}
                                      onChange={handleinput} /><br /><br />
            <label htmlFor="">Select Location</label><br />
            <input type="text" placeholder='Enter a location' /><br /><br />
            <label htmlFor="">Your Comment</label><br />
           <textarea name="textarea" id="" cols={86} rows={5} placeholder='Enter your message here'
                   value={frm.textarea} onChange={handleinput} ></textarea>
           <button className='subbtn' type='submit'>Submit</button>
              </form><br />
              
            </div>

        </div>
        <div className='contct-right'>
          {/* <div className='contct-right2'> */}
          <div className="map-container">
      <h1>Our Store Information</h1>
      <input className='input1' type="text" value={loction} onChange={handlechange} />
      <iframe
        title="map"
        // src="https://www.google.com/maps?q=Delhi&output=embed"
        src={`https://www.google.com/maps?q=${loction}&output=embed`}
        width="100%"
        height="450"
        border-radius= "15px"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
      <h2>Our Locations</h2>
      <div className='locat-btn'>
        <button className='loctbtn' onClick={()=>setloction('Delhi')}>Delhi</button>
        <button className='loctbtn' onClick={()=>setloction("Noida")}>Noida</button>
        <button className='loctbtn' onClick={()=>setloction("Gurugram")}>Gurugram</button>
        <button className='loctbtn' onClick={()=>setloction("Punjab")}>Punjab</button><br />
        <button className='loctbtn' onClick={()=>setloction("Goa")}>Goa</button> <br /><br /><br />
        <button className='loctbtn' onClick={()=>setloction("Bulandshahar")}>Bulandshahar</button>
      </div>
    </div>
        </div>
          {/* </div> */}
        </div>
          </>
  )
}

export default Contact