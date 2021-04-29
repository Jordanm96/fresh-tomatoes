import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getMovie } from "../../services/movies";
import { deleteReview } from "../../services/reviews";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();
  const { movies, setMovies } = props;
  
  const handleDelete = async (id) => {
    const movieDetails = await deleteReview(id)
    // debugger
    setMovieInfo(movieDetails)

  }

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
  const { title, director, info, rating, image_url } = movieInfo

  return (
    <div>
      <div key={movieInfo.id}>
        <p>{title}</p>
        <p>Director: {director}</p>
        <p>{info}</p>
        {
            rating === 0 ?
              <p>No ratings yet</p> :
              <p>Audience Score: {rating}%</p>
            }
        <img src={image_url} alt={title} />
        <Link to={`/movies/${movieInfo.id}/edit`}>
          <button>EDIT MOVIE</button>
        </Link>
      </div>
      <div>
        <Reviews movies={movies} movieInfo={movieInfo} handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export default MovieInfo;
