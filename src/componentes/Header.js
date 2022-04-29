import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import { getProducts } from '../services/getAPI';
import NavCategories from './NavCategories';

function Header() {
  const { handleInputChange, search, setProduct, product } = useContext(Storecontext);

  const fetch = async (search) => {
    const productsList = await getProducts(search);
    setProduct(productsList.results);
    return product;
  };

  console.log(product);
  return (
    <div>
      <NavCategories />
      <form>
        <input
          type='text'
          placeholder='Buscar produtos, marcas e muito mais...'
          onChange={ handleInputChange }
        />
        <button
          type='button'
          onClick={ () =>fetch(search) }
        >
          Pesquisar
        </button>
      </form>
      {
        product.map((p, index) => <div key={ index } >{ p.title }</div>)
      }
    </div>
  );
}

export default Header;