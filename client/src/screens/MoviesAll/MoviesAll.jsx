import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const MoviesAll = (props) => {
  const { movies } = props;
  // I might have to define my sorting method in here then pass it to nav
  return (
    <div>
      <Nav />
      <h3>FIND A MOVIE</h3>
      {movies.map((movie) => (
        <div className="movie-card">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image_url} alt={movie.title} />
            <p key={movie.id}>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesAll;
