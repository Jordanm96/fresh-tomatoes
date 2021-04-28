import { useState, useEffect } from "react";
import { Switch, Route, useParams, useHistory } from "react-router-dom";

import {
  getAllMovies,
  getMovie,
  postMovie,
  putMovie,
} from "../services/movies";

import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";
import MovieCreate from "../screens/MovieCreate/MovieCreate";
import MovieEdit from "../screens/MovieEdit/MovieEdit";
import { postReviewToMovie } from "../services/reviews";
import ReviewCreate from "../screens/ReviewCreate/ReviewCreate";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await getAllMovies();
      setMovies(allMovies);
    };
    fetchMovies();
  }, []);

  const handleCreateMovie = async (formData) => {
    const movieData = await postMovie(formData);
    setMovies((prevState) => [...prevState, movieData]);
    history.push(`/movies/${movieData.id}`);
  };

  const handleEdit = async (id, formData) => {
    const movieData = await putMovie(id, formData);
    setMovies((prevState) =>
      prevState.map((movie) => {
        return movie.id === Number(id) ? movieData : movie;
      })
    );
    history.push(`/movies/${id}`);
  };

  const handleCreateReview = async (movie_id, formData) => {
    await postReviewToMovie(movie_id, formData)
    history.push(`/movies/${movie_id}`);
  }

  return (
    <Switch>
      <Route path="/movies/create">
        <MovieCreate handleCreateMovie={handleCreateMovie} />
      </Route>
      
      <Route path="/movies/:id/reviews">
        <ReviewCreate handleCreateReview={handleCreateReview}/>
      </Route>

      <Route path="/movies/:id/edit">
        <MovieEdit movies={movies} handleEdit={handleEdit} />
      </Route>

      <Route path="/movies/:id">
        <MovieInfo />
      </Route>

      <Route path="/movies">
        <MoviesAll movies={movies} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
