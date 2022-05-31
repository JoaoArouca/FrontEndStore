import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import CartProduct from '../componentes/CartProduct';
import { getProductIdOnStorage } from '../localStorage/localStorage';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartProducts = getProductIdOnStorage();
    setCart(cartProducts.cart);
  }, []);

  return (
    <div>
      <button type="button">Voltar</button>
      <h1>Shopping Cart</h1>
      <CardGroup>
        {
        cart !== undefined ? cart.map((C) => <CartProduct obj={C} />)
          : <span>Carrinho Vazio</span>

        }
      </CardGroup>

    </div>
  );
}

export default ShoppingCart;
