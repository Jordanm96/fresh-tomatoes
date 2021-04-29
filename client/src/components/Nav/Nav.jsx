import React from "react";
import { NavLink } from "react-router-dom";
// Sort and Search will go here
const Nav = (props) => {
  // const { movies } = props;
  const { currentUser } = props;
  const { handleSort } = props;
  const { handleSubmit } = props;

  const handleChange = (event) => {
    handleSort(event.target.value)
}
  const authenticatedOptions = (
    <>
      <NavLink id="add-movie" to="movies/create">
        ADD MOVIE
      </NavLink>
      <form className="sort-container" onSubmit={handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                {/* <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option> */}
                {/* <option value="price-descending">&nbsp; Price, high to low &nbsp;</option> */}
            </select>
        </form>
    </>
  );

  const unauthenticatedOptions = (
    <>
      {/* In here is where the sort and search bar will go */}
      <p>WELCOME</p>
      <form className="sort-container" onSubmit={handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                {/* <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option> */}
                {/* <option value="price-descending">&nbsp; Price, high to low &nbsp;</option> */}
            </select>
        </form>
      </>
  )

  return (
    <>
      {currentUser ? authenticatedOptions : unauthenticatedOptions}
    </>
  );
};

export default Nav;
