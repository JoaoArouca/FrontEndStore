import React, { useEffect, useState } from 'react';
import Storecontext from './StoreContext';
import { getCategories, getProducts } from '../services/getAPI';

function StoreProvider({ children }) {
  // Hooks
  const [results, setResults] = useState([]); // resultados da api de categorias
  const [email, setEmail] = useState(''); // email de login
  const [password, setPassword] = useState(''); // senha do usuaŕio, para validação
  const [search, setSearch] = useState(''); // string da barra de pesquisa
  const [product, setProduct] = useState([]); // resultado da api de produtos por id
  const [location, setLocation] = useState([]); // resultado da api de CEp -  endereços
  const [cep, setCep] = useState(''); // cep inserido pelo usuário
  const [user, setUser] = useState(''); // nome de usuário

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

// requisição da api de produtos 
  const fetchProducts = async (search) => {
    const productsList = await getProducts(search);
    setProduct(productsList.results);
  };

  
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
    user,
    setUser,
    fetchProducts,
  };



  return (
    <Storecontext.Provider value={ global }>
      { children }
    </Storecontext.Provider>
  );
}

export default StoreProvider;
