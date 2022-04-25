import React, { useState } from 'react';
import propTypes from 'prop-types';
import Storecontext from './StoreContext';

StoreProvider.propTypes = {
  
};

function StoreProvider({ children }) {

  const global = {};

  return (
    <Storecontext.Provider value={ global }>
      { children }
    </Storecontext.Provider>
  );
}

export default StoreProvider;
