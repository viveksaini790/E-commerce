import React from 'react'
import "./about.css"
function About() {
  return (
    <>
    <div className='abot'>
    {/* <div className='abot2'> */}
        <div className='left'> 
      <h1>About Us</h1><br />
      <p>Welcome to our website! We are passionate about delivering 
        high-quality products and services to our users. Our mission is to
         make learning and access to resources easier and more effective for everyone.</p>
         <br />
         <h2>Our Mission</h2>
         <br />
         <p>To provide value through innovation, creativity, and dedication.
             We aim to make technology simple and useful for everyday life.</p>
             <br />
             <h2>Our Vision</h2><br />
             <p>Empower individuals with digital tools,
                 knowledge, and services that help them grow personally and professionally.

</p>
        </div>
    <div className='right'>
        <img src="/product-img.webp" alt="...product-img" />
    </div>
    {/* </div> */}
    </div>
    </>
  )
}

export default About