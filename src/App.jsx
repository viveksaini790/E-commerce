import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Login from "./Component/Login"
import Cart from "./Component/Cart"
import { useNavigate } from "react-router-dom"
import Checkout from "./Component/Buy/Buy"
const App = () => {

  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/buy" element={<Checkout  />} />
        </Routes>
      </BrowserRouter>

    </>
  )

}
export default App