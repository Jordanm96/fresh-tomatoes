import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = (props) => {
  const { currentUser } = props;
  const { handleSort } = props;
  const { handleSubmit } = props;

  const handleChange = (event) => {
    handleSort(event.target.value);
  };
  const authenticatedOptions = (
    <>
      <NavLink id="add-movie" to="movies/create">
        ADD MOVIE
      </NavLink>
      <form className="sort-container" onSubmit={handleSubmit}>
        <label htmlFor="sort">SORT BY:</label>
        <select className="sort" onChange={handleChange}>
          <option defaultValue>-- Select --</option>
          <option value="rating-descending">&nbsp; Highest Rated &nbsp;</option>
          <option value="rating-ascending">&nbsp; Lowest Rated &nbsp;</option>
          <option className="option" value="name-ascending">
            &nbsp; Alphabetically, A-Z &nbsp;
          </option>
          <option value="name-descending">
            &nbsp; Alphabetically, Z-A &nbsp;
          </option>
        </select>
      </form>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <form className="sort-container" onSubmit={handleSubmit}>
        <label htmlFor="sort">SORT BY:</label>
        <select className="sort" onChange={handleChange}>
          <option defaultValue>-- Select --</option>
          <option value="rating-descending">&nbsp; Highest Rated &nbsp;</option>
          <option value="rating-ascending">&nbsp; Lowest Rated &nbsp;</option>
          <option className="option" value="name-ascending">
            &nbsp; Alphabetically, A-Z &nbsp;
          </option>
          <option value="name-descending">
            &nbsp; Alphabetically, Z-A &nbsp;
          </option>
        </select>
      </form>
    </>
  );

  return (
    <nav>{currentUser ? authenticatedOptions : unauthenticatedOptions}</nav>
  );
};

export default Nav;
