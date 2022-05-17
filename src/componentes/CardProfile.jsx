import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../icons/ProfileIcon.svg';

function CardProfile() {
  return (
    <Link to="/profile-page">
      <ProfileIcon />
    </Link>
  );
}

export default CardProfile;
