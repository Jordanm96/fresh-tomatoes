import { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";

import { getAllMovies, getMovie } from "../services/movies";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

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
