import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";

import { getAllMovies } from "../services/movies";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getAllMovies();
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  return (
    <Switch>
      <Route path='/movies/:id'>
        <MovieInfo />
      </Route>
      {/* <Route path= '/movies/create'>
          
          </Route>
          <Route path='/movies/:id/edit'>
          
          </Route>
          <Route path= '/movies/:id/review'>
          
        </Route> */}
      <Route path='/movies'>
        <MoviesAll movies={movies} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
