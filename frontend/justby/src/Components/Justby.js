import React, { useState } from "react";
import list from "../data";
import Cards from "./Card";
import "../Styles/justby.css";

const Justby = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  )
}

<<<<<<< HEAD
export default Justby
=======
export default Justby;
>>>>>>> 37bd41205b54b1af5e4f170b78d50da778a17e21
