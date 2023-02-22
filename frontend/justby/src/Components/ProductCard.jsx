import React from "react";

export default function ProductCard({ product }) {
  console.log(product);
  return (
    <div
      style={{
        border: "1px solid gray",
      }}
    >
      <div>
        <img src={product.image} alt="imagee" width={"20%"} />
        <h4>{product.title}</h4>
        {/* <p>{product.description}</p> */}
        <h5>Category: {product.category}</h5>
        <h5>Price:{product.price}</h5>
      </div>
    </div>
  );
}
