import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <h1>Product</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
