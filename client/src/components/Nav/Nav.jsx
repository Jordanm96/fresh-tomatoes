import React from "react";
import { NavLink } from "react-router-dom";
// Sort and Search will go here
const Nav = (props) => {
  // const { movies } = props;
  const { currentUser } = props;
  const authenticatedOptions = (
    <>
      <NavLink id="add-movie" to="movies/create">
        ADD MOVIE
      </NavLink>
    </>
  );

  const unauthenticatedOptions = (
    <>
      {/* In here is where the sort and search bar will go */}
      <p>WELCOME</p>
      </>
  )

  return (
    <>
      {currentUser ? authenticatedOptions : unauthenticatedOptions}
    </>
  );
};

export default Nav;
