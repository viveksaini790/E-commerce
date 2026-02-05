import React, { useState,useEffect } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useNavigate ,useLocation} from 'react-router-dom';

// function Cart({cartLength}) {
function Cart() {


  const navigate=useNavigate()
  const location=useLocation()

  // const [CartProduct,setCartProduct]=useState([]);

  const data = localStorage.getItem("cartItems");
      const parsed = JSON.parse(data);
      console.log("parsed",parsed)

//  useEffect(() => {
//     setCartProduct(cartLength);
//   }, [cartLength]); 

  return (
    <>
    
     {location.pathname=='/' &&  parsed!==null &&(

      <div className="cart-container" onClick={()=>navigate('/cart')}>
         
            <FaCartPlus className="cartstyle" />
            {parsed.length > 0 && (
              <div className="cart-badge">{parsed.length}</div>
            )}
         
        </div>
     )}
     <div> 
     
     
     
      {/* {CartProduct.map((pro)=>{
      console.log('procart',pro)
     })} */}

     </div>
    </>
  )
}

export default Cart