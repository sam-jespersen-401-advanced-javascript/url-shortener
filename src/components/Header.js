import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/urls'>URL History</Link>
        <br /><Link to='/create'>New URL</Link>
      </nav>
    </header>
  );
};

export default Header
;
