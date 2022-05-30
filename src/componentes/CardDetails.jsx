/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
// camelCase disabled because the api returns an object named in underline_case
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button, Card, Carousel, Tab, Tabs,
} from 'react-bootstrap';
import Storecontext from '../context/StoreContext';
import { setProductIdOnStorage } from '../localStorage/localStorage';

function CardDetails({ data }) {
  // Hooks
  const { quantity, setQuantity } = useContext(Storecontext);
  const [showInput, setInputShowed] = useState(false);
  const navigate = useNavigate();

  const OffCSS = {
    color: 'green',
  };

  const {
    title, available_quantity, attributes,
    price, pictures, original_price,
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
    const ID = window.location.pathname.split('/')[2];
    setProductIdOnStorage(ID);
    navigate('/shopping-cart');
  };

  const addToCart = () => {
    const ID = window.location.pathname.split('/')[2];
    setProductIdOnStorage(ID);
    alert('produto adicionado ao carrinho!');
  };

  return (

    <Card border="secondary">
      <Link to="/main">Voltar</Link>
      <Card.Header>
        <Card.Title>{ title }</Card.Title>
        {
          pictures !== undefined
            && (
              <Carousel variant="dark" interval={null}>
                {pictures.map((slide, index) => (
                  <Carousel.Item key={index}>
                    <img src={slide.secure_url} alt={slide.id} />
                  </Carousel.Item>
                ))}
              </Carousel>
            )
        }
      </Card.Header>
      <Card.Body>
        {
            original_price && <span><s>{ `R$ ${original_price}` }</s></span>
          }
        <Card.Subtitle as="h3">{ `R$ ${price}` }</Card.Subtitle>
        {
            original_price && (
            <span style={OffCSS}>
              { `${Math.floor(((original_price - price) * 100) / original_price)}% Off` }
            </span>
            )
          }
        <div>
          <Button variant="primary" onClick={shopNow} type="button">Comprar Agora</Button>
          <Button variant="secondary" onClick={addToCart} type="button">Adicionar ao Carrinho</Button>
        </div>
        <div>
          <span>Quantidade: </span>
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
      </Card.Body>
      <Card.Footer>
        <Tabs defaultActiveKey="">
          <Tab eventKey="description" title="Especificações Técnicas">
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
          </Tab>
        </Tabs>
      </Card.Footer>
    </Card>
  );
}

CardDetails.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
};

export default CardDetails;
