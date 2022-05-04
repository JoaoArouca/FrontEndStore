import React, { useContext, useState } from 'react';
import Storecontext from '../context/StoreContext';
import { Link } from 'react-router-dom';



function NavCategories(props) {

  const { results }  = useContext(Storecontext);
  const [xxx, setxxx] = useState(true);


  const navClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  const handleClick = () => {
    if (xxx === true) {
      setxxx(false);
    } else {
      setxxx(true);
    };
  }

  return (
    <div>
      {
        xxx ?
        <span onClick={ handleClick }>x</span> :
          <nav>
            <span onClick={ handleClick }>x</span>
            {
              results.map((categorie) =>
              <div>
                <Link style={ navClass } key={ categorie.name } to={ `/categorie/${ categorie.id }` } >{ categorie.name }</Link>
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
