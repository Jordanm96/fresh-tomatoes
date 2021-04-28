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
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
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
    // I want it to push the user to the movie they just created
    history.push('/movies');
  };

  const handleEdit = async (id, formData) => {
    const movieData = await putMovie(id, formData);
    setMovies((prevState) =>
      prevState.map((movie) => {
        return movie.id === Number(id) ? movieData : movie;
      })
    );
        // I want it to push the user to the movie they just edited
    history.push('/movies');
  };

  const handleCreateReview = async (movie_id, formData) => {
    const reviewData = await postReviewToMovie(movie_id, formData)
    setReviews((prevState) => [...prevState, reviewData]);
    history.push('/movies');
  }

  return (
    <Switch>
      <Route path="/movies/:id/reviews">
        <ReviewCreate handleCreateReview={handleCreateReview}/>
      </Route>

      <Route path="/movies/create">
        <MovieCreate handleCreateMovie={handleCreateMovie} />
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
