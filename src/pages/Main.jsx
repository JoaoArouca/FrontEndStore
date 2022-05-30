import React, { useContext } /* { useContext, useEffect } */ from 'react';
import BannerCard from '../componentes/BannerCard';
import CardProduct from '../componentes/CardProduct';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import MainProducts from '../componentes/MainProducts';
import Storecontext from '../context/StoreContext';

function Main() {
  const { product, phones, eletronics } = useContext(Storecontext);

  return (
    <div className="main">
      <Header />
      {
        product.length > 0 ? null : <BannerCard />
      }
      {
        product.length > 0 ? null : <CardProduct data={phones} text="Celulares" />
      }
      {
        product.length > 0 ? null : <CardProduct data={eletronics} text="Eletrônicos, Áudio e Vídeo" />
      }
      <MainProducts />
      <Footer />
    </div>
  );
}

export default Main;
