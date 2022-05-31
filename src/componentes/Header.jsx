import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import CardCart from './CardCart';
import CardLocation from './CardLocation';
import CardProfile from './CardProfile';
import NavCategories from './NavCategories';
import { ReactComponent as Logo } from '../icons/logoMeli.svg';

function Header() {
  const { handleInputChange, search, fetchProducts } = useContext(Storecontext);
  const navigate = useNavigate();

  return (
    <header className="container header">

      <section className="sectionHeader container">
        <form>
          <Link to="/main">
            <Logo />
          </Link>
          <input // formulário de pesquisa
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() => {
              navigate('/main');
              fetchProducts(search);
            }}
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
