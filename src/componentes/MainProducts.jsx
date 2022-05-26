/* eslint-disable camelcase */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import { getRandomProductList } from '../services/getAPI';
import CardProduct from './CardProduct';

function MainProducts() {
  // hooks
  const { product, list, setList } = useContext(Storecontext);
  const getRandomList = async () => {
    const getRandom = await getRandomProductList();
    setList(getRandom);
  };

  // Product contém o resultado da api pesquisada, list contém os produtos aleatórios

  // didMount
  useEffect(() => {
    getRandomList();
  }, []);

  return (
    <div>
      {
        product.length > 0
          ? (
            <div className="container mainProduct">
              {
                (
                  product.map((Prod) => {
                    const {
                      title, thumbnail, price, id, shipping,
                    } = Prod;
                    const { free_shipping } = shipping;
                    return (
                      <div key={id} className="productCard">
                        <Link className="linkClass" to={`/product/${id}`} key={title}>
                          <h3>{ title}</h3>
                          <img className="imgClass" src={thumbnail} alt={title} />
                          <span>{ `R$ ${price}` }</span>
                        </Link>
                        { free_shipping && <span>FRETE GRÁTIS</span> }
                      </div>

                    );
                  })

                )
              }
            </div>
          )
          : <CardProduct data={list} />
      }
    </div>
  );
}

export default MainProducts;
