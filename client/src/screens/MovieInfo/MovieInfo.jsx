import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getMovie } from "../../services/movies";
import { deleteReview } from "../../services/reviews";
import "./MovieInfo.css";

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
    <div className="movie-info-container">
      <div className="movie-grid">

          <img className="left-container" src={image_url} alt={title} />
          <div className="right-container">
            <h2>{title}</h2>
            <h2>Director: {director}</h2>
            {rating === 0 ? (
              <h2>No ratings yet</h2>
          ) : (
              <>
              <h2>Audience Score: {rating}%</h2>
              <img id='popcorn' src='https://freesvg.org/img/PopcornClip.png' alt='popcorn' />
            </>
            )}
            <Link to={`/movies/${movieInfo.id}/edit`}>
              <button>EDIT MOVIE</button>
            </Link>
          </div>

        <div className="two-third">
          <div className="heading">
            <h3 className="subheading">MOVIE INFO</h3>
          </div>
          <p className='info'>{info}</p>
        </div>

        <Reviews
          movies={movies}
          movieInfo={movieInfo}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
