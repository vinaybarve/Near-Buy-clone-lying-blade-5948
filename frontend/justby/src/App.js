
import React, { useState, useEffect } from "react";
import Justby from "./Components/Justby";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

import "./App.css"
import MainRoutes from "./Pages/MainRoutes"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


  return (

    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Justby handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;

    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App

