import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
   <div className='footer'>

  <div className='left1'>
    <div className="logo-box">
      <img src="/aurra.img.png" alt="logo" />
      <h2>Auraliving</h2>
    </div>
    <p>Email:</p>
    <p>support@auraliving.com</p>
    <p>Phone:</p>
    <p>+91 1234567890</p>
  </div>

  <div className='left2'>
    <h3>Company</h3>
    <p>About Us</p>
    <p>FAQ's</p>
  </div>

  <div className='left3'>
    <h3>Products</h3>
    <p>Beauty</p>
    <p>Fragrances</p>
    <p>Furniture</p>
    <p>Groceries</p>
  </div>

  <div className='left4'>
    <h3>Help & Support</h3>
    <p>Contact Us</p>
    <p>Terms & Condition</p>
    <p>Policy</p>
  </div>

  <hr />

  <div className='footer-bottom'>
    © 2026 HotStream. All rights reserved. <br />
    Developed by Vivek Saini
  </div>

</div>
    
    </>
  )
}

export default Footer