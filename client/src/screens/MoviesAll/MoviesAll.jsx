import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./MoviesAll.css";

const MoviesAll = (props) => {
  const { movies } = props;
  const { currentUser } = props;
  const { handleSort } = props;
  const { handleSubmit } = props;


  return (
    <div>
      <h3>FIND A MOVIE</h3>
      <Nav movies={movies} currentUser={currentUser} handleSort={handleSort} handleSubmit={handleSubmit}/>
      <div className="movies-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="movie-card">
              <img src={movie.image_url} alt={movie.title} />
              {/* Insert my tomato symbol here */}
              {/* Maybe wrap the whole div in a link tag? */}
              <div className="words">
                {movie.rating === 0 ? (
                  <p>No reviews added</p>
                ) : (
                    <>
                  <img id='tomato'src='https://cdn.iconscout.com/icon/free/png-512/tomato-vegetable-emoj-symbol-food-30690.png' />
                      <p>{movie.rating}%</p>
                      </>
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
