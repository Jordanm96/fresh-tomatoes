import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {
  const { currentUser, handleLogout} = props;

  return (
    <header>
      <Link to="/movies">
        <div className='title'>
        <h1>Fresh</h1>
        <h1>Tomatoes</h1>
        </div>
      </Link>
      {currentUser ? (
        <div className='links'>
          <p className='hi'>Hi, {currentUser.username}</p>
          <Link to="/movies">Movies</Link>
          <Link to='/movies' onClick={handleLogout}>Log Out</Link>
        </div>
      ) : (
        <div className='links'>
          <Link to="/movies">Movies</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      )}

    </header>
  );
};

export default Header;
