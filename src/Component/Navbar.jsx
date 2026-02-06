import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function Navbar({ proCategory }) {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const [cartItems, setCartItems] = useState([]);
  const data = localStorage.getItem("cartItems");
  const parsed = JSON.parse(data) || [];

  const handlecategory = (cat) => {
    setActive(cat);
    proCategory(cat);
  };

  console.log("caledad l0oca")

  return (
    <div className="navbar">
      {/* Scrollable category buttons */}
      <div className="navbar-scroll">
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => handlecategory("home")}
        >
          Home
        </button>

        <button
          className={active === "beauty" ? "active" : ""}
          onClick={() => handlecategory("beauty")}
        >
          Beauty
        </button>

        <button
          className={active === "fragrances" ? "active" : ""}
          onClick={() => handlecategory("fragrances")}
        >
          Fragrances
        </button>

        <button
          className={active === "furniture" ? "active" : ""}
          onClick={() => handlecategory("furniture")}
        >
          Furniture
        </button>

        <button
          className={active === "groceries" ? "active" : ""}
          onClick={() => handlecategory("groceries")}
        >
          Groceries
        </button>
      </div>

      {/* Cart Icon */}
      {location.pathname === "/" && (
        <div className="cart-container" onClick={() => navigate("/cart")}>
          <FaCartPlus className="cartstyle" />
          {parsed.length > 0 && (
            <span className="cart-badge">{parsed.length}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
