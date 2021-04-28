import React from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = (props) => {
  const { movies } = props;
  const params = useParams();

  // const moviesInfo = moviesInfo.find((movie) => movie.id === params.id);

  return (
    <div>
      <h3>Movie detail will go here</h3>
    </div>
  );
};

export default MovieInfo;