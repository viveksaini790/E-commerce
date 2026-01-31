import React, { useState } from 'react';
import './Navbar.css';
import Cart from './Cart';

// function Navbar({ proCategory, cartLength }) {
function Navbar({ proCategory, filtercartproduct }) {
  const [active, setActive] = useState("home");

  const handlecategory = (cat) => {
    setActive(cat);
    proCategory(cat);
  };

  return (
    <>
      <div className="navbar">
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

        {/* Cart Icon with Badge */}
        {/* <Cart  cartLength={cartLength}/> */}
                <Cart filtercartproduct={filtercartproduct} />


      </div>
    </>
  );
}

export default Navbar;
