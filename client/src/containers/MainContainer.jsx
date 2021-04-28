import { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";

import { getAllMovies, getMovie } from "../services/movies";

import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";
import MovieCreate from "../screens/MovieCreate/MovieCreate";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState(null);
  // const [reviews, setReviews] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getAllMovies();
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovieInfo(movieData);
    }
    fetchMovie();
  }, [id])

  return (
    <Switch>

      {/* <Route path= '/movies/create'>
          
          </Route>
          <Route path='/movies/:id/edit'>
          
          </Route>
          <Route path= '/movies/:id/review'>
          
        </Route> */}
      <Route path= '/movies/create'>
        <MovieCreate />
      </Route>

      <Route path='/movies/:id'>
        <MovieInfo movieInfo={movieInfo}/>
      </Route>

      <Route path='/movies'>
        <MoviesAll movies={movies} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
