import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getMovie } from "../../services/movies";
import { deleteReview } from "../../services/reviews";
import './MovieInfo.css'
const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();
  const { movies } = props;
  const { currentUser } = props;

  const handleDelete = async (id) => {
    const movieDetails = await deleteReview(id);
    setMovieInfo(movieDetails);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovieInfo(movieData);
    };
    fetchMovie();
  }, [id]);

  if (!movieInfo) {
    return <h1>Loading....</h1>;
  }
  const { title, director, info, rating, image_url } = movieInfo;
  
  return (
    <div className='movie-info'>
      <div key={movieInfo.id}>
        <h2>{title}</h2>
        <p>Director: {director}</p>
        <p>{info}</p>
        {rating === 0 ? (
          <p>No ratings yet</p>
        ) : (
            // <img id='popcorn' src='https://freesvg.org/img/PopcornClip.png' />
          <p>Audience Score: {rating}%</p>
        )}
        <img src={image_url} alt={title} />
        <Link to={`/movies/${movieInfo.id}/edit`}>
          <button>EDIT MOVIE</button>
        </Link>
      </div>
      <Reviews
        movies={movies}
        movieInfo={movieInfo}
        handleDelete={handleDelete}
        currentUser={currentUser}
      />
    </div>
  );
};

export default MovieInfo;
