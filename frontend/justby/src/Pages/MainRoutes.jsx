import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProduct from "./EditProduct";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
}
