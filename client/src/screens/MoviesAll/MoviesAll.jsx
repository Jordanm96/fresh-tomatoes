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
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image_url} alt={movie.title} />
          </Link>
            <p>{movie.title}</p>
          {/* Insert my tomato symbol here */}
          {/* Maybe wrap the whole div in a link tag? */}
          {
            movie.rating === 0 ?
              <p>No reviews added</p> :
              <p>{movie.rating}%</p>
            }
        </div>
      ))}
    </div>
  );
};

export default MoviesAll;
