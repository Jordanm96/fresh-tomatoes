import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./MoviesAll.css";

const MoviesAll = (props) => {
  const { movies } = props;
  const { currentUser } = props;
  const { handleSort } = props;
  const { handleSubmit } = props;

  return (
    <>
      <div className="heading">
        <h3>FIND A MOVIE</h3>
      </div>
      <Nav
        movies={movies}
        currentUser={currentUser}
        handleSort={handleSort}
        handleSubmit={handleSubmit}
      />
      <div className="movies-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="movie-card">
              <div className='darken'>

              <div className="image-container">
                <img src={movie.image_url} alt={movie.title} />
              </div>
              </div>
              <div className="movie-info">
                {movie.rating === 0 ? (
                  <p>(No reviews added)</p>
                ) : (
                  <>
                    <p>
                      {" "}
                      <img
                        id="tomato"
                        src="https://cdn.iconscout.com/icon/free/png-512/tomato-vegetable-emoj-symbol-food-30690.png"
                        alt="tomato"
                      />{" "}
                      {movie.rating}%
                    </p>
                  </>
                )}
                <p>{movie.title.length >= 16 ? `${movie.title.substring(0,17)}...` : movie.title} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoviesAll;
