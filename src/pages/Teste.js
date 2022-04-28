import React from 'react';
import { useParams } from 'react-router-dom'; // método para pegar o Params no react router v6

function Teste() {

  const { id } = useParams();

  return (
    <div>
      { id }
    </div>
  );
}

export default Teste;
