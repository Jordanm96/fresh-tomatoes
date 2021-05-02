import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllMovies,
  postMovie,
  putMovie,
} from "../services/movies";

import MoviesAll from "../screens/MoviesAll/MoviesAll";
import MovieInfo from "../screens/MovieInfo/MovieInfo";
import MovieCreate from "../screens/MovieCreate/MovieCreate";
import MovieEdit from "../screens/MovieEdit/MovieEdit";
import { postReviewToMovie } from "../services/reviews";
import ReviewCreate from "../screens/ReviewCreate/ReviewCreate";
import { AZ, ZA } from "../utils/sort";

const MainContainer = (props) => {
  const [movies, setMovies] = useState([]);
  const [queriedMovies, setQueriedMovies] = useState([])
  const [sortType, setSortType] = useState([])


  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await getAllMovies();
      setMovies(allMovies);
      setQueriedMovies(allMovies);
    };
    fetchMovies();
  }, []);

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedMovies(AZ(queriedMovies))
        break
      case "name-descending":
        setQueriedMovies(ZA(queriedMovies))
        break
      // case "price-ascending":
      //   setQueriedProducts(lowestFirst(queriedProducts))
      //   break
      // case "price-descending":
      //   setQueriedProducts(highestFirst(queriedProducts))
      //   break
      default:
        break
    }
  }
  const handleSubmit = event => event.preventDefault()


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

      <Route path="/">
        <MoviesAll movies={movies} currentUser={currentUser} handleSort={handleSort} handleSubmit={handleSubmit} sortType={sortType}/>
      </Route>
    </Switch>
  );
};

export default MainContainer;
