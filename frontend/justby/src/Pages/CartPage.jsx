import React, { useEffect, useState } from 'react'
import Cart from '../Components/Cart';
import Just from '../Components/Just';
import Navbar1 from '../Components/Navbar1';

const CartPage = () => {
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

  useEffect(() => {
    console.log("cart change");
  }, [cart]);

  return (
          <React.Fragment>
      <Navbar1 setShow={setShow} size={cart.length} />
      {show ? (
        <Just handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  )
}

export default CartPage