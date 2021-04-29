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
        <>
          <Link to="/movies">Movies</Link>
          <p>Hi, {currentUser.username}</p>
          <button onClick={handleLogout}>LOG OUT</button>
        </>
      ) : (
        <>
          <Link to="/movies">Movies</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}

    </header>
  );
};

export default Header;
