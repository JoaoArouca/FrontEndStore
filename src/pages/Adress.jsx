/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import { getCEP } from '../services/getAPI';

function Adress() {
  const {
    location, setLocation, cep, setCep,
  } = useContext(Storecontext);
  const [showCep, setShowCep] = useState(false);
  const navigate = useNavigate();

  // armazena o valor digitado no input dentro do hook
  const handleInput = ({ target }) => {
    setCep(target.value);
  };

  const cepJson = async (param) => { // função criada para corrigir o delay da api
    await setLocation(param);
    return location;
  };

  const showForm = () => {
    setShowCep(false);
  };

  // chamada de api para pegar localização
  const fetchLoc = async (CEP) => {
    const fixStringCep = CEP.trim(); // função trim para tirar os espaços da String recebida
    const er = /^[0-9]{2}[0-9]{3}[0-9]{3}$/; // regex para validação de cep (somente números)
    const TF = er.test(fixStringCep); // testa retornando true or false
    if (TF) {
      const objLocation = await getCEP(fixStringCep);
      if (objLocation.erro) { // condicional para tratamento de erro da api
        return alert('Cep não encontrado, Tente outra vez!');
      }
      await cepJson(objLocation);
      setShowCep(true);
      return location;
    }
    return alert('Formato de CEP inválido - Insira apenas números');
  };

  return (
    <div>
      {
        !showCep
          ? (
            <form>

              <input
                type="text"
                placeholder="Insira seu CEP somente números"
                onChange={(e) => handleInput(e)}
              />

              <button
                type="button"
                onClick={() => fetchLoc(cep)}
              >
                Pesquisar Endereço
              </button>

            </form>
          )

          : (
            <div>
              <span>{ `Seu endereço é: ${location.logradouro}, ${location.bairro}, ${location.localidade} - ${location.uf}` }</span>

              <button
                type="button"
                onClick={() => navigate('/main')}
              >
                Confirmar Endereço
              </button>

              <button
                type="button"
                onClick={showForm}
              >
                Mudar Endereço
              </button>

            </div>
          )
      }
    </div>
  );
}

export default Adress;
