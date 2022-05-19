import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Storecontext from './StoreContext';
import { getCategories, getProducts } from '../services/getAPI';

function StoreProvider({ children }) {
  // Hooks
  const [results, setResults] = useState([]); // resultados da api de categorias
  const [email, setEmail] = useState(''); // email de login
  const [password, setPassword] = useState(''); // senha do usuaŕio, para validação
  const [search, setSearch] = useState(''); // string da barra de pesquisa
  const [product, setProduct] = useState([]); // resultado da api de produtos
  const [location, setLocation] = useState([]); // resultado da api de CEp -  endereços
  const [cep, setCep] = useState(''); // cep inserido pelo usuário
  const [user, setUser] = useState(''); // nome de usuário
  const [list, setList] = useState([]); // produtos listados na main
  const [quantity, setQuantity] = useState(1); // quantidade de produtos selecionados

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  // requisição da api de categorias
  useEffect(() => {
    const getResults = async () => {
      const resultado = await getCategories();
      setResults(resultado);
    };

    getResults();
  }, []);

  // requisição da api de produtos na barra de busca
  const fetchProducts = async (searchInput) => {
    const productsList = await getProducts(searchInput);
    if (productsList.results.length) {
      setProduct(productsList.results);
    } else {
      alert('Nenhum Produto Encontrado');
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
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
    list,
    setList,
    quantity,
    setQuantity,
  };

  return (
    <Storecontext.Provider value={global}>
      { children }
    </Storecontext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default StoreProvider;
