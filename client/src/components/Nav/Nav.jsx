import React from "react";
import { NavLink } from "react-router-dom";
// Sort and Search will go here
const Nav = () => {
  return (
    <NavLink id="add-movie" to="movies/create">
      Add Show
    </NavLink>
  );
};

export default Nav;
