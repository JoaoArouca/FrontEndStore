import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import { getProducts } from '../services/getAPI';
import CardLocation from './CardLocation';
import NavCategories from './NavCategories';

function Header() {
  const { handleInputChange, search, setProduct, product } = useContext(Storecontext);


// Api que retorna os produtos de determinada categoria 
  const fetch = async (search) => {
    const productsList = await getProducts(search);
    setProduct(productsList.results);
    return product;
  };

  return (
    <div>
      <NavCategories />
      <form>
        <input // formulário de pesquisa
          type='text'
          placeholder='Buscar produtos, marcas e muito mais...'
          onChange={ handleInputChange }
        />
        <button
          type='button'
          onClick={ () => fetch(search) }
        >
          Pesquisar
        </button>
      </form>
      <CardLocation />
    </div>
  );
}

export default Header;