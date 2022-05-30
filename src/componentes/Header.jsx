import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import CardCart from './CardCart';
import CardLocation from './CardLocation';
import CardProfile from './CardProfile';
import NavCategories from './NavCategories';
import { ReactComponent as Logo } from '../icons/logoMeli.svg';

function Header() {
  const { handleInputChange, search, fetchProducts } = useContext(Storecontext);

  return (
    <header className="container header">

      <section className="sectionHeader container">
        <form>
          <Logo onClick={() => window.location.reload(false)} />
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
        <NavCategories />
        <CardLocation />
        <CardProfile />
        <CardCart />
      </section>

    </header>
  );
}

export default Header;
