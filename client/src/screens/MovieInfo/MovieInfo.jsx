import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovie } from '../../services/movies';

const MovieInfo = (props) => {
  // const { movieInfo } = props;
  const { id } = useParams();
  // console.log(movieInfo)
  const [movieInfo, setMovieInfo] = useState(null)
  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovieInfo(movieData);
    }
    fetchMovie();
  }, [])
  console.log(movieInfo)

  if (!movieInfo) {
  return <h1>Loading....</h1>
  }

  return (
    <div>
      <p>{movieInfo.title}</p>
      <p>Director: {movieInfo.director}</p>
      <p>{movieInfo.info}</p>
      <img src={movieInfo.image_url} />
    </div>
  );
};

export default MovieInfo;