import React from "react";
import { Link } from 'react-router-dom';

const MoviesAll = (props) => {
  const { movies } = props;

  return (
    <div>
      {/* Insert add movie button and my sort by filter  */}
      <h3>FIND A MOVIE</h3>
      {movies.map((movie) => (
        <div className='movie-card'>
          <Link to={`/movies/${movie.id}`}>
          <img src={movie.image_url}/>
          <p key={movie.id}>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesAll;
