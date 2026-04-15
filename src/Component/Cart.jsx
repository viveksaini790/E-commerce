import React, { useState,useEffect } from 'react'
// import { FaCartPlus } from "react-icons/fa";
import { useNavigate ,useLocation} from 'react-router-dom';
import './cart.css'
import { IoMdArrowRoundBack } from "react-icons/io";

// import {useSelector} from 'react-redux'

// import Navbar from './Navbar';
// function Cart({cartLength}) {
import myapi from '../api/myapi';
import { useSelector ,useDispatch} from 'react-redux';
import { incCartdata } from '../Redux/actions/action';

function Cart() {


      const [userData, setuserData] = useState(myapi?.Products);
    //  const [userData, setuserData] = useState(prodata);
      const [filtercategory, setfiltercategory] = useState([]);
      
       const getreducerdata=useSelector((state)=>state?.cart?.cart)
       console.log("getreducerdata ",getreducerdata)
      const dispatch=useDispatch()

// const [purchaseInc , setpurchaseInc] = useState(0)
// const [purchaseDec , setpurchaseDec] = useState(0)

  const navigate=useNavigate()
  const location=useLocation()
  const data = localStorage.getItem("cartItems");
      const parsed = JSON.parse(data) || [];
// console.log('cart dadaaaa',parsed)
        
 useEffect(() => {
const data = localStorage.getItem("cartItems");
      const parsed = JSON.parse(data) || [];
    //  console.log("parseddas",parsed,userData)

  const filterdataItem=userData.filter(item=>parsed.includes(item.id))
 // console.log("filterdataItem",filterdataItem)
     setfiltercategory(filterdataItem)
  
  }, [userData]); 

const handleRemove=(id)=>{
    setfiltercategory((pre) => {
      const cartarray =  pre.filter( (item)=>item.id!== id )
      const dataID=cartarray.map((item)=>item.id)
     // console.log("cartarray",dataID)
      localStorage.setItem("cartItems", JSON.stringify(dataID));
       return cartarray;
    })
    
  console.log('cart id clicked')
 
  }


const inc = (id) => {
  dispatch(incCartdata({
    id: id,
    type: "INC"
  }))
}

const dec = (id) => {
  dispatch(incCartdata({
    id: id,
    type: "DEC"
  }))
}
const handleBackCrt=()=>{
  navigate(-1)
}
// console.log('filtercatergoryaaa',filtercategory)
// if(parsed.length==0){
//   setTimeout(() => {
//     navigate("/")
//   },2000);
// }
  return (
    <>
    <button className='cartBackbtn' onClick={handleBackCrt}>
      <IoMdArrowRoundBack style={{height:"30px",width:"30px"}} />
      </button>
     
{parsed.length === 0 && (
   <div className='mainEmpty'>
  <div className='cartempt'>Cart is empty</div>
  </div>
  )}
 
 <div className='gemini-cart-wrapper'>
  
  <div className='gemini-cart-list'>
    {filtercategory.map((item) => (
      <div key={item.id} className="gemini-cart-item">
        {/* Product Image */}
        <div className="gemini-item-img-container">
          <img src={item.thumbnail} alt={item.title} />
        </div>

        {/* Product Details */}
        <div className="gemini-item-details">
          <span className="gemini-item-id">ID: {item.id}</span>
          <h4 className="gemini-item-price">₹{item.price}</h4>
          <h3 className="gemini-item-title">{item.title}</h3>
          <p className="gemini-item-desc">{item.description}</p>
          
          <div className="gemini-quantity-row">
             <button onClick={() => dec(item.id)} className="gemini-qty-btn">−</button>
             <span className="gemini-qty-val">
              {getreducerdata?.find(i => i.id === item.id)?.quantity || 1}
             </span>
             <button onClick={() => inc(item.id)} className="gemini-qty-btn">+</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="gemini-item-actions">
          <button className="gemini-buy-btn" onClick={()=>navigate(`/buy/${item.id}`)}>Buy</button>
          <button className="gemini-remove-btn" onClick={() => handleRemove(item.id)}>
            <i className="fa-solid fa-trash"></i> {/* Optional: use an 'X' or Trash icon */}
            ×
          </button>
        </div>
      </div>
    ))}
  </div>
  {parsed.length>0  &&(
     <div className="gemini-cart-footer">
    <button className="gemini-buy-all-btn">Buy All</button>
  </div>
  )}
  
</div>
    </>
  )
}
  
export default Cart

 