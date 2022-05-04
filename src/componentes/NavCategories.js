import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import { Link } from 'react-router-dom';



function NavCategories(props) {

  const { results }  = useContext(Storecontext);


  const navClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  return (
    <div>
      {
        <nav>
          {
            results.map((categorie) => 
            <Link style={ navClass } key={ categorie.name } to={ `/categorie/${ categorie.id }` } >{ categorie.name }</Link>
            )
          } 
        </nav>
        
      }
    </div>
  );
}

export default NavCategories;
