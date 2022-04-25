import React from 'react';
import StoreProvider from './context/StoreProvider';
import Main from './Main';

function App() {

  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
}

export default App;
