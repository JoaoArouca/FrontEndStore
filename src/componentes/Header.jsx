import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import CardCart from './CardCart';
import CardLocation from './CardLocation';
import CardProfile from './CardProfile';
import NavCategories from './NavCategories';

function Header() {
  const { handleInputChange, search, fetchProducts } = useContext(Storecontext);

  return (
    <header className="container header">
      <NavCategories />
      <section className="sectionHeader container">
        <form>
          <input // formulário de pesquisa
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() => fetchProducts(search)}
          >
            Pesquisar
          </button>
        </form>
        <CardLocation />
        <CardProfile />
        <CardCart />
      </section>

    </header>
  );
}

export default Header;
