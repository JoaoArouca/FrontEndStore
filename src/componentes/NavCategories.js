import React, { useContext, useState } from 'react';
import Storecontext from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { ReactComponent as Menu3 } from '../icons/Menu3.svg';
import { ReactComponent as Menu4 } from '../icons/Menu4.svg';


function NavCategories(props) {

  const { results }  = useContext(Storecontext);
  const [showNav, setNav] = useState(true);


  const LinkClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  const navClass = {
    width: '250px',
  }

  const handleClick = () => {
    if (showNav === true) {
      setNav(false);
    } else {
      setNav(true);
    };
  }

  return (
    <div>
      {
        showNav ? // quando o mouse passa sobre a Tag nav é renderizado as categorias
          <nav style={ navClass } onMouseEnter={ handleClick }> 
            <span>Categorias</span>
            <Menu3 />
          </nav>
           :
          <nav style={ navClass } onMouseLeave={ handleClick }>
            <span>Categorias</span>
            <Menu4 />
            {
              results.map((categorie) =>
              <div>
                <Link style={ LinkClass } key={ categorie.name } to={ `/categorie/${ categorie.id }` } >{ categorie.name }</Link>
                <hr></hr>
              </div>
              )
            } 
          </nav>
          
      }
    </div>
  );
}

export default NavCategories;
