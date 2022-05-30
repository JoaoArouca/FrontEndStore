import React from 'react';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as GitHub } from '../icons/gitHub.svg';

function Footer() {
  return (
    <footer className="container">
      <p>Feito com React, CSS, Api do Mercado Livre e 💚</p>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/joaovictorarouca/" rel="noreferrer">
          <Linkedin />
        </a>
        <a target="_blank" href="https://github.com/JoaoArouca" rel="noreferrer">
          <GitHub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
