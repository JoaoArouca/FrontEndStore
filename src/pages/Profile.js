import React, { useEffect } from 'react';
import { getStorage } from '../localStorage/localStorage';

function Profile() {

  useEffect(() => {
    getStorage('user');
  }, [])

  return (
    <div>
      hello world
    </div>
  );
}

export default Profile;