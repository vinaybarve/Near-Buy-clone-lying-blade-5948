import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProduct from "./EditProduct";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";
import Admin from "./Admin";
import Dashboard from "../Pages/Dashboard";
import AdminLogin from "./AdminLogin";
import { Gift } from "../Components/Gift";
import CartPage from "./CartPage";
import SingleGift from "./SingleGift";
import Checkout from "./Checkout";
// import PrivateRoute from "../Components/PrivateRoute";

// import { Route, Routes } from "react-router-dom";
// import EditProduct from "./EditProduct";
// import Login from "./Login";
// import Products from "./Products";
// import Signup from "./Signup";
// import SingleProduct from "./SingleProduct";
// import Admin from "./Admin";

// import Form from "./Payment Page/Form";

export default function MainRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Products />} /> */}
      {/* <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/singlegift" element={<SingleGift />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      {/* <Route path="/payment" element={<Form />} /> */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
      <Route path="/Cartpage" element={<CartPage />} />
    </Routes>
  );
}
