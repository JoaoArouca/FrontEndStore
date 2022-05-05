import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // método para pegar o Params no react router v6

function ProductPage() {

  const { id } = useParams();

  useEffect(() => {
    console.log('oi');
  }, [])

  return (
    <div>
      hello
    </div>
  );
}

export default ProductPage;
