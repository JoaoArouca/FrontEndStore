/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardDetails({ data }) {
  // Hooks
  const [quantity, setQuantity] = useState(0); // quantidade de produtos selecionados
  const [showInput, setInputShowed] = useState(false);
  console.log(data);

  const {
    thumbnail, thumbnail_id, title, available_quantity, attributes,
    price,
  } = data;

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

  const alertQuantity = () => {
    if (quantity > available_quantity) {
      alert('Quantidade não disponível em estoque');
    }
  };

  useEffect(() => {
    alertQuantity();
  }, [quantity]);

  return (
    <div>
      <Link to="/main">Voltar</Link>
      <div>
        <h1>{ title }</h1>
        <img src={thumbnail} alt={thumbnail_id} />
        <span>
          R$
          {`${price}`}
        </span>
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
