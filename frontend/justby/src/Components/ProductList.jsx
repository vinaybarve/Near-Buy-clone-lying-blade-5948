import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getProducts } from "./../Redux/Products/action";
import styles from "../Styles/ProductList.module.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <div className={styles.container}>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} product={el} />;
        })}
    </div>
  );
}
