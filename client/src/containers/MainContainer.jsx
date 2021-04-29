import { useState, useEffect } from "react";
import { Switch, Route, useParams, useHistory } from "react-router-dom";

import {
  getAllMovies,
  postMovie,
  putMovie,
} from "../services/movies";

import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";
import MovieCreate from "../screens/MovieCreate/MovieCreate";
import MovieEdit from "../screens/MovieEdit/MovieEdit";
import { deleteReview, postReviewToMovie } from "../services/reviews";
import ReviewCreate from "../screens/ReviewCreate/ReviewCreate";

const MainContainer = (props) => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = props;
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

  const handleCreateReview = async (id, formData) => {
    await postReviewToMovie(id, formData)
    history.push(`/movies/${id}`);
  }
  
  return (
    <Switch>
      <Route path="/movies/create">
        <MovieCreate handleCreateMovie={handleCreateMovie} />
      </Route>
      
      <Route path="/movies/:id/reviews">
        <ReviewCreate currentUser={currentUser} handleCreateReview={handleCreateReview}/>
      </Route>

      <Route path="/movies/:id/edit">
        <MovieEdit movies={movies} handleEdit={handleEdit} />
      </Route>

      <Route path="/movies/:id">
        <MovieInfo currentUser={currentUser} movies={movies} setMovies={setMovies}/>
      </Route>

      <Route path="/movies">
        <MoviesAll movies={movies} currentUser={currentUser} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
