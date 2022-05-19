/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StoreProvider from './context/StoreProvider';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Adress from './pages/Adress';
import Profile from './pages/Profile';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/categorie/:id" element={<ProductPage />} />
        <Route exact path="/adress" element={<Adress />} />
        <Route exact path="/profile-page" element={<Profile />} />
        <Route exact path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
