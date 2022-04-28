import React from 'react';
import StoreProvider from './context/StoreProvider';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Teste from './pages/Teste';
import Login from './pages/Login';

function App() {

  return (
    <StoreProvider>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='/main' element={ <Main /> } />
        <Route exact path='/categorie/:id' element={ <Teste /> } />
      </Routes>
    </StoreProvider>
  );
}

export default App;
