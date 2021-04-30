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
    <>
          <div className='heading'>

      <h3>FIND A MOVIE</h3>
      </div>
      <Nav movies={movies} currentUser={currentUser} handleSort={handleSort} handleSubmit={handleSubmit}/>
      <div className="movies-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="movie-card">
              <div className='image-container'>
              <img src={movie.image_url} alt={movie.title} />
              </div>

              {/* Insert my tomato symbol here */}
              {/* Maybe wrap the whole div in a link tag? */}
              <div className="movie-info">
                {movie.rating === 0 ? (
                  <p>No reviews added</p>
                ) : (
                    <>
                  <img id='tomato'src='https://cdn.iconscout.com/icon/free/png-512/tomato-vegetable-emoj-symbol-food-30690.png' alt='tomato'/>
                      <p>{movie.rating}%</p>
                      </>
                )}
                <p>{movie.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoviesAll;
