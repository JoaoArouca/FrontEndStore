import React, { useContext, useEffect, useState } from 'react';
import Storecontext from '../context/StoreContext';
import { getStorage } from '../localStorage/localStorage';

function Profile() {
// hooks
  const [email, setEmail] = useState('');

  // Context
  const { user, setUser } = useContext(Storecontext);

  /* const usuário = {
    name,
    lastName,
    email,
    age,
    endereços,
  }; */

  const getInfos = async () => { // função que retorna o objeto com as infos do usuário
    const userEmail = await getStorage('email');

    setEmail(userEmail);
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <section>
      <form>
        Dados da conta:

        <label htmlFor="user">
          Usuário:
          <input
            name="user"
            type="text"
            onChange={(e) => { setUser(e.target.value); }}
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input name="email" type="email" />
        </label>

      </form>
    </section>

  );
}

export default Profile;
