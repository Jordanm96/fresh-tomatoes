import { useState, useEffect } from "react";
import { Switch, Route, useParams, useHistory } from "react-router-dom";

import { getAllMovies, getMovie, postMovie, putMovie } from "../services/movies";

import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";
import MovieCreate from "../screens/MovieCreate/MovieCreate";
import MovieEdit from "../screens/MovieEdit/MovieEdit";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  // const [movieInfo, setMovieInfo] = useState(null);
  // const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await getAllMovies();
      setMovies(allMovies);
    };
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const movieData = await getMovie(id);
  //     setMovieInfo(movieData);
  //   }
  //   fetchMovie();
  // }, [])

  const handleCreate = async (formData) => {
    const movieData = await postMovie(formData);
    setMovies(prevState => [
      ...prevState,
      movieData
    ])
    // I want it to push the user to the movie they just created
    history.push('/movies')
  }

  const handleEdit = async (id, formData) => {
    const movieData = await putMovie(id, formData);
    setMovies(prevState => prevState.map(movie => {
      return movie.id === Number(id) ? movieData : movie
    }))
    history.push('/movies')
  }


  return (
    <Switch>

      {/* 
          <Route path= '/movies/:id/review'>
          this will be my review create route
        </Route> */}
      <Route path= '/movies/create'>
        <MovieCreate handleCreate={handleCreate}/>
      </Route>

      <Route path='/movies/:id/edit'>
        <MovieEdit movies={movies} handleEdit={handleEdit}/>
      </Route>

      <Route path='/movies/:id'>
        {/* <MovieInfo movieInfo={movieInfo} /> */}
        <MovieInfo />
      </Route>

      <Route path='/movies'>
        <MoviesAll movies={movies} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
