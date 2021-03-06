import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import { ReactComponent as Menu3 } from '../icons/Menu3.svg';
import { ReactComponent as Menu4 } from '../icons/Menu4.svg';

function NavCategories() {
  const { results } = useContext(Storecontext);
  const [showNav, setNav] = useState(true);

  const LinkClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  const handleClick = () => {
    if (showNav === true) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <div>
      {
        showNav // quando o mouse passa sobre a Tag nav é renderizado as categorias
          ? (
            <nav className="navCard" onMouseEnter={handleClick}>
              <span>Categorias</span>
              <Menu3 />
            </nav>
          )
          : (
            <nav className="navCard" onMouseLeave={handleClick}>
              <span>Categorias</span>
              <Menu4 />
              {
              results.map((categorie) => (
                <div>
                  <Link style={LinkClass} key={categorie.name} to={`/categorie/${categorie.id}`}>{ categorie.name }</Link>
                  <hr />
                </div>
              ))
            }
            </nav>
          )

      }
    </div>
  );
}

export default NavCategories;
