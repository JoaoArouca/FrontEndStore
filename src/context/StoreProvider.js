import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Storecontext from './StoreContext';
import { getCategories } from '../services/getAPI';

function StoreProvider({ children }) {
  // Hooks
  const [results, setResults] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const getResults = async () => {
      const resultado = await getCategories();
      setResults(resultado);
    }

    getResults();
  }, [])
  
  
  
  const global = {
    results,
    setResults,
    email,
    setEmail,
    password,
    setPassword,
  };



  return (
    <Storecontext.Provider value={ global }>
      { children }
    </Storecontext.Provider>
  );
}

StoreProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default StoreProvider;
