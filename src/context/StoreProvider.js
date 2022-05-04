import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Storecontext from './StoreContext';
import { getCategories } from '../services/getAPI';

function StoreProvider({ children }) {
  // Hooks
  const [results, setResults] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);
  const [location, setLocation] = useState([]);
  const [cep, setCep] = useState('');

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };


// requisição da api de categorias
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
    handleInputChange,
    search,
    product,
    setProduct,
    location,
    setLocation,
    cep,
    setCep,
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
