import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useNavigate ,useLocation} from 'react-router-dom';

function Cart() {
  const navigate=useNavigate()
  const location=useLocation()
  const data = localStorage.getItem("cartItems");
      const parsed = JSON.parse(data);
      console.log("parsed",parsed)
    
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
    </>
  )
}

export default Cart