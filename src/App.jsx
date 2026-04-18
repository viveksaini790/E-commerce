import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Login from "./Component/Login"
import Cart from "./Component/Cart"
import UserProfile from "./Component/UserProfile"
import Logic from "./Component/Logic"
import Header from "./Component/Header"
import Footer from "./Component/Footer"

import Ordercart from "./Component/Ordercart"

import Checkout from "./Component/Buy/Buy"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Services from "./Component/Services"
import Faq from "./Component/Faq"

const App = () => {

  
  
  return (
    <>
    {/* <Logic/> */}
      <BrowserRouter>
      <Header/>
        {/* <div style={{height:"500px"}}> */}
          <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/userProfile" element={<UserProfile/>}/>
          <Route path="/buy/:id" element={<Checkout />} />
          <Route path="/orderview" element={<Ordercart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/faq" element={<Faq/>} />
        </Routes>
        {/* </div> */}
        <Footer/>
      </BrowserRouter>

    </>
  )

}
export default App