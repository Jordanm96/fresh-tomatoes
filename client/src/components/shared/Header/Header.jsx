import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {
  const { currentUser, handleLogout} = props;

  return (
    <header>
      <Link to="/movies">
      <h1>Fresh Tomatoes</h1>
      </Link>
      {currentUser ? (
        <div className='links'>
          <Link to="/movies">Movies</Link>
          <p>Hi, {currentUser.username}</p>
          <Link to='/movies'>
          <button onClick={handleLogout}>LOG OUT</button>
          </Link>
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
