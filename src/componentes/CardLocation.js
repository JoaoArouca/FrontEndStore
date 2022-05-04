import React, { useContext, useEffect } from 'react';
import Storecontext from '../context/StoreContext';
import { ReactComponent as LocationIcon } from '../icons/LocationIcon.svg';
import { Link } from 'react-router-dom';


function CardLocation() {
  const { location } = useContext(Storecontext);
  
  const showLoc = () => {
    if (location.length > 0) {
      return <span>{ `${ location.localidade }-${ location.uf }` }</span>;
    } else {
      return <span>...</span>;
    }
  };

  return (
    <Link to='/adress'>
      <LocationIcon />
      <span>Enviar para</span>
      {/* {
        location.length > 0 ? <span>{ `${ location.localidade }-${ location.uf }` }</span> : '...'
      } */}
      {
        showLoc()
      }
          
    </Link> 
    

  );
}

export default CardLocation;