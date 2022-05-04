import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import { getCEP } from '../services/getAPI';

function Adress() {

  const { location, setLocation, cep, setCep } = useContext(Storecontext);
  const navigate = useNavigate();

  // armazena o valor digitado no input dentro do hook
  const handleInput = ({ target }) => { 
    setCep(target.value);
  };


  // chamada de api para pegar localização
  const fetchLoc = async (CEP) => {
    const fixStringCep = CEP.trim(); // função trim para tirar os espaços da String recebida 
    const  er = /^[0-9]{2}[0-9]{3}[0-9]{3}$/; // regex para validação de cep (somente números)
    const TF = er.test(fixStringCep); // testa retornando true or false
    if (TF) {
      const objLocation = await getCEP(fixStringCep);
      setLocation(objLocation);
      navigate('/main');
      return location;
    } else {
      return alert('Formato de CEP inválido - Insira apenas números');
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Insira seu CEP somente números"
        onChange={ (e) => handleInput(e) }
      />
      <button
        type='button'
        onClick={ () => fetchLoc(cep) }
      >
        Pesquisar Endereço
      </button>
    </form>
  );
}

export default Adress;