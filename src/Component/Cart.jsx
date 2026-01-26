import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useNavigate ,useLocation} from 'react-router-dom';

function Cart() {
  const navigate=useNavigate()
  const location=useLocation()
  const data = localStorage.getItem("cartItems");
      const parsed = JSON.parse(data);
    
  return (
    <>
    
     {location.pathname=='/' &&(

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