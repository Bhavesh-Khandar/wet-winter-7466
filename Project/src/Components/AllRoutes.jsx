import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/LoginPage';
import ProductPage from '../Pages/ProductPage';
import Register from '../Pages/Register';
import ProductDetails from './ProductDetails';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart/:id" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
};
export default AllRoutes;
