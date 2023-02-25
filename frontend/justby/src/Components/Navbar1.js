import React from "react";
import "../Styles/navbar.css";
import "../Styles/header.css";
const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <header>
        <div className="main-header">
          <div className="header">
            <p>ENTERTAINMENT</p>
            <h1>Tata Play</h1>
            <p>online deal</p>
          </div>
          <div className="image-store">
            <div>
              <img
                src="https://img4.nbstatic.in/tr:w-500/61f3ec4b1e2731000bdc591c.jpg"
                alt="tata-play"
              />
            </div>
            <div>
              <img
                src="https://img4.nbstatic.in/tr:w-500/61f3ec271e2731000bdc591b.jpg"
                alt="tata-play"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i
              style={{ fontSize: "16px", width: "30%", height: "40%" }}
              className="fas fa-cart-plus"
            ></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
