import React, { useContext } from 'react';
import Storecontext from '../context/StoreContext';
import { ReactComponent as LocationIcon } from '../icons/LocationIcon.svg';
import { Link } from 'react-router-dom';


function CardLocation({ loc }) {

  const { location } = useContext(Storecontext);

  const locationClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  return (
    <Link to='/adress' style={ locationClass } >
      <LocationIcon />
      <span>Enviar para</span>
      {
        Object.keys(location).length > 1 ? <span>{ `  ${ location.localidade }-${ location.uf }` }</span> : <span>{ '  (insira um endereço)' }</span>
      }    
    </Link> 
    

  );
}

export default CardLocation;
