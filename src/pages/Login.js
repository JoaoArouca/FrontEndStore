import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Storecontext from '../context/StoreContext';
import { setStorage } from '../localStorage/localStorage';

function Login() {
//hooks
  const [disableButton, setButton] = useState(true);
  const [pass, setPass] = useState(false);
  const { email, setEmail, password, setPassword } = useContext(Storecontext);
  const navigate = useNavigate(); // método de nagecação que substitiu o useHistory.push()

// valida o email
  const validEmail = ({ target }) =>  setEmail(target.value);
  const re = /\S+@\S+\.\S+/;
  const testEmail = re.test(email);

// valida a senha 
  const validPass = ({ target }) => {
    setPassword(target.value);
    if (password && password.length > 4) {
      setPass(true);
    } else {
      setPass(false);
    }
  };

// função do click
  const handleCLick = () => {
    setStorage('email', email); // função para armazenar infos no localStorage
    navigate('/main');
  }

// Ativa o botão de submit
  useEffect(() => {
    if (testEmail && pass) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [testEmail, pass])

  return (
    <form>
      <input
        type="email"
        onChange={ (e) => validEmail(e) }
      />
      <input
        type="password"
        onChange={ (e) => validPass(e) }
      />
      <button
        type="submit"
        disabled={ disableButton }
        onClick={ handleCLick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
