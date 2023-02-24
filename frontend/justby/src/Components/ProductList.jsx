import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getProducts } from "./../Redux/Products/action";
import styles from "../Styles/ProductList.module.css";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  console.log(location);

  useEffect(() => {
    const sort = searchParams.get("sort");

    let paramObj = {
      params: {
        location: searchParams.getAll("location"),
        _sort: sort && "price",
        sort: sort, //Important!
      },
    };
    dispatch(getProducts(paramObj));
  }, [location.search]);

  return (
    <div className={styles.container}>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el._id} product={el} />;
        })}
    </div>
  );
}
