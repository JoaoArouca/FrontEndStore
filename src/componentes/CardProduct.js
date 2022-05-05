import React from 'react';
import { Link } from 'react-router-dom';

function CardProduct({ data }) {

  const LinkClass = {
    textDecoration: 'none', // retira o sublinhado das tag Link HTML
  };

  const imgClass = {
    width: '80px',
  }

  console.log(data);
  return (
    <section className='container productSection'>
      {
        data.length > 0 ?
          data.map((product) => {
            const { title, thumbnail, price } = product;
            return (
              <div className='productCard'>
                <Link style={ LinkClass } to='/' key={ title} >
                <h3>{ title}</h3>
                <img  style={ imgClass } src={ thumbnail } alt={ title } />
                <span>{ `R$ ${ price }` }</span>
              </Link>
              </div>
              
            );
          }) : null
      }
    </section>
  );
}

export default CardProduct;
