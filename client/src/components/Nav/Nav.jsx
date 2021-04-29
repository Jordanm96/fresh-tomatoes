import React from "react";
import { NavLink } from "react-router-dom";
// Sort and Search will go here
const Nav = () => {
  // const { movies } = props;

  return (
    <NavLink id="add-movie" to="movies/create">
      ADD MOVIE
    </NavLink>
  );
};

export default Nav;
