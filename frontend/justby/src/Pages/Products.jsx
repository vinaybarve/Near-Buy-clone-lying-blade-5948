import React from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
import styles from "../Styles/Products.module.css";

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className={styles["product-filter-container"]}>
        <div className={styles["filter-component"]}>
          <Sidebar />
        </div>
        <div className={styles["product-list"]}>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
