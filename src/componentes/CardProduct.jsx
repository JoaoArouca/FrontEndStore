/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardProduct({ data }) {
  return (
    <section className="container productSection">
      {
        data.length > 0
          ? data.map((product) => {
            const {
              title, thumbnail, price, id, shipping,
            } = product;
            const { free_shipping } = shipping;
            return (
              <div key={id} className="productCard">
                <Link className="linkClass" to={`/categorie/${id}`} key={title}>
                  <h3>{ title}</h3>
                  <img className="imgClass" src={thumbnail} alt={title} />
                  <span>{ `R$ ${price}` }</span>
                </Link>
                { free_shipping && <span>FRETE GRÁTIS</span> }
              </div>

            );
          }) : null
      }
    </section>
  );
}

CardProduct.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default CardProduct;
