import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <div>
      <header>
        <h1>Fresh Tomatoes</h1>
        <Link to='/movies'>Movies</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>
      </header>
    // </div>
  );
};

export default Header;