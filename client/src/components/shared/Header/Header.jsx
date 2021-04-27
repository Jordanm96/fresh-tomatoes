import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentUser, handleLogout} = props;

  return (
    <header>
      <h1>Fresh Tomatoes</h1>
      {currentUser ? (
        <>
          <Link to="/movies">Movies</Link>
          <p>Hi, {currentUser.username}</p>
          <button onClick={handleLogout}>Log Out</button>
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
