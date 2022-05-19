/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Storecontext from '../context/StoreContext';

function CardDetails({ data }) {
  // Hooks
  const { quantity, setQuantity } = useContext(Storecontext);
  const [showInput, setInputShowed] = useState(false);
  const { id } = useParams;
  const navigate = useNavigate();

  const {
    title, available_quantity, attributes,
    price, pictures,
  } = data; // desestrutura data

  // funções onChange
  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  const handleSelect = ({ target }) => {
    if (target.value === 'showInput') {
      setInputShowed(true);
    } else {
      setInputShowed(false);
      setQuantity(Number(target.value));
    }
  };

  // regra de negócio - não é possível comprar mais do que o estoque
  const alertQuantity = () => {
    if (quantity > available_quantity) {
      alert('Quantidade não disponível em estoque');
    }
  };

  useEffect(() => {
    alertQuantity();
  }, [quantity]);

  // funções de compra
  const shopNow = () => {
    console.log(id);
    navigate('/shopping-cart');
  };

  const addToCart = () => {
    console.log(id);
  };

  return (
    <div>
      <Link to="/main">Voltar</Link>
      <div>
        <h1>{ title }</h1>
        {
          pictures !== undefined
            && (
              <Slider>
                {pictures.map((slide, index) => (
                  <div key={index}>
                    <img src={slide.secure_url} alt={slide.id} />
                  </div>
                ))}
              </Slider>
            )
        }
        <span>
          R$
          {`${price}`}
        </span>
      </div>

      <div>
        <button onClick={shopNow} type="button">Comprar Agora</button>
        <button onClick={addToCart} type="button">Adicionar ao Carrinho</button>
      </div>

      <div>
        <span> Quantidade:</span>
        <select onChange={(e) => handleSelect(e)}>
          <option value="1">1 unidade</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
          <option value="5">5 unidades</option>
          <option value="showInput">+5 unidades</option>
        </select>
        {
          showInput && <input min="6" max="99" type="number" placeholder="número de unidades" onChange={(e) => handleChange(e)} />
        }
        <span>{ `(${available_quantity} unidades disponíveis)` }</span>
      </div>

      <div>
        <h2>Especificações Técnicas</h2>
        {
        attributes !== undefined ? attributes.map((att) => {
          const { name, value_name } = att;
          return (
            <div>
              <span>{ name }</span>
              <span><b>{ value_name }</b></span>
            </div>
          );
        }) : null
      }
      </div>

    </div>
  );
}

CardDetails.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
};

export default CardDetails;
