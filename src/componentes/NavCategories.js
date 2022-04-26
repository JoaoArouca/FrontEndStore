import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Storecontext from '../context/StoreContext';
import { Link } from 'react-router-dom';



function NavCategories(props) {

  const { results }  = useContext(Storecontext);

  return (
    <div></div>
  );
}

NavCategories.propTypes = {
  
};

export default NavCategories;