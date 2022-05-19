import React, { useContext, useEffect } from 'react';
import CardProduct from '../componentes/CardProduct';
import Header from '../componentes/Header';
import Storecontext from '../context/StoreContext';
import { getRandomProductList } from '../services/getAPI';

function Main() {
  const { product, list, setList } = useContext(Storecontext);

  const getRandomList = async () => {
    const xx = await getRandomProductList();
    setList(xx);
  };

  useEffect(() => {
    getRandomList();
  }, []);

  return (
    <div>
      <Header />
      {
        product.length ? <CardProduct data={product} /> : <CardProduct data={list} />
      }
    </div>
  );
}

export default Main;
