/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case

// https://sag1v.github.io/react-elastic-carousel/ Carrosel usado na renderização
import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardProduct({ data, text }) {
  const SIX = 6; // constante número 4

  return (
    <section className="container productSection">
      {
        data.length > 0
          ? (
            <div className="carousel">
              <h3>{ text }</h3>
              <Carousel itemsToShow={SIX}>
                {
              data.map((Prod) => {
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
            }
              </Carousel>
            </div>
          )
          : <span>Loading...</span>
      }

    </section>
  );
}

CardProduct.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  text: PropTypes.string.isRequired,
};

export default CardProduct;
