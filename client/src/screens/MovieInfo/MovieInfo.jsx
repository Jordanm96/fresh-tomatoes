import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getMovie } from "../../services/movies";

const MovieInfo = (props) => {
  // const { movieInfo } = props;
  const { id } = useParams();
  // console.log(movieInfo)
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovieInfo(movieData);
    };
    fetchMovie();
  }, [id]);
  console.log(movieInfo);

  if (!movieInfo) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <div key={movieInfo.id}>
        <p>{movieInfo.title}</p>
        <p>Director: {movieInfo.director}</p>
        <p>{movieInfo.info}</p>
        <img src={movieInfo.image_url} alt={movieInfo.title} />
        <Link to={`/movies/${movieInfo.id}/edit`}>
          <button>EDIT MOVIE</button>
        </Link>
      </div>
      <div>
        <Reviews movieInfo={movieInfo}/>
      </div>
    </div>
  );
};

export default MovieInfo;
