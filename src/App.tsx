import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/main-layout/MainLayout';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './pages/cart/Cart';
import HomePage from './pages/home-page/HomePage';
import Products from './pages/products/Products';
import UserProfile from './pages/user-profile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/taurus" element={<SingleProduct />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
