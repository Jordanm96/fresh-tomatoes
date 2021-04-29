import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./MoviesAll.css";

const MoviesAll = (props) => {
  const { movies } = props;
  const { currentUser } = props;
  // I might have to define my sorting method in here then pass it to nav

  return (
    <div>
      <Nav movies={movies} currentUser={currentUser}/>
      <h3>FIND A MOVIE</h3>
      <div className="movies-container">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <div key={movie.id} className="movie-card">
              <img src={movie.image_url} alt={movie.title} />
              {/* Insert my tomato symbol here */}
              {/* Maybe wrap the whole div in a link tag? */}
              <div className="words">
                {movie.rating === 0 ? (
                  <p>No reviews added</p>
                ) : (
                  <p>{movie.rating}%</p>
                )}
                <p>{movie.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesAll;
