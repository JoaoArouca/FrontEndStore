import React from 'react';
import StoreProvider from './context/StoreProvider';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Adress from './pages/Adress';
import Profile from './pages/Profile';
import './App.css';

function App() {

  return (
    <StoreProvider>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='/main' element={ <Main /> } />
        <Route exact path='/categorie/:id' element={ <ProductPage /> } />
        <Route exact path='/adress' element={ <Adress /> } />
        <Route exact path='/profile-page' element={ <Profile /> } />
      </Routes>
    </StoreProvider>
  );
}

export default App;
