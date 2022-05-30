import React, { useEffect, useState } from 'react';
import { getProductIdOnStorage } from '../localStorage/localStorage';

function ShoppingCart() {
  const [cartP, setCart] = useState([]);

  useEffect(() => {
    const cartProducts = getProductIdOnStorage();
    setCart(cartProducts);
  }, []);

  return (
    <div>
      <button type="button">Voltar</button>
      <h1>Shopping Cart</h1>
    </div>
  );
}

export default ShoppingCart;
