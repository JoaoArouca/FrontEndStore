import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'react-bootstrap';
import {
  CardBody, CardHeader, CardSubtitle, CardTitle,
} from 'reactstrap';
import { getProductDetails } from '../services/getAPI';

function CartProduct({ obj }) {
  const [data, setData] = useState([]);

  const { produto, quantidade } = obj;
  const { title, price, thumbnail } = data;
  useEffect(async () => {
    const api = await getProductDetails(produto);
    setData(api);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardImg src={thumbnail} />
        <CardTitle>{ title }</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle>{ `R$ ${price}` }</CardSubtitle>
        <CardSubtitle>{ `Quantidade: ${quantidade}` }</CardSubtitle>
      </CardBody>
    </Card>
  );
}

CartProduct.propTypes = {
  obj: PropTypes.objectOf(Array).isRequired,
};

export default CartProduct;
