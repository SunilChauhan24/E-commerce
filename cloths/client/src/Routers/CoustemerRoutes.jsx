import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../component/header/Cart/Cart";
import Header from "../component/header/Header";
import Footer from "../component/header/footer";
import Product from "../component/header/Product";
import HomePage from "./../component/header/HomePage/HomePage";
import Productdetails from "../component/header/ProductDetails/Productdetails";
import Checkout from "../component/header/Checkout/Checkout";
import Order from "../component/header/Order/Order";
import OrderDetails from "../component/header/Order/OrderDetails";
import Navbar from "../component/header/HomePage/Navbar.jsx";
import PaymentSuccess from "../component/header/PaymentSuccess/paymentSuccess.js";
import ContectUs from "../component/header/ContectUs.js";

const CoustemerRoutes = () => {
  return (
    <div>
      <div>
        {/* <Header /> */}
        <Navbar />

      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productid" element={<Productdetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/Contactus" element={<ContectUs />}></Route>

        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CoustemerRoutes;
