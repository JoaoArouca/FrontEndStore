import React, { useEffect, useState } from 'react';
import CardProduct from '../componentes/CardProduct';
import Header from '../componentes/Header';
import { getRandomProductList } from '../services/getAPI';


function Main() {

  const [list, setList] = useState([]);

  const getRandomList = async () => {
    const xx = await getRandomProductList();
    setList(xx);
  };

  useEffect(() => {
    getRandomList();
  }, [])

  return (
    <div>
      <Header />
      <CardProduct data={ list } />
    </div>
  );
}

export default Main;
