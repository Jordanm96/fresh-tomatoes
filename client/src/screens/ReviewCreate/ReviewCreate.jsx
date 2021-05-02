import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../services/movies";
import StarRatings from "react-star-ratings";
import "./ReviewCreate.css";
const ReviewCreate = (props) => {
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });
  const [movieInfo, setMovieInfo] = useState(null);
  const { content, rating } = formData;
  const { handleCreateReview } = props;
  const { id } = useParams();
  // Doing this useeffect so I can get the title and image
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRating = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: e,
    }));
  };

  return (
    <>
      <div className="heading">
        <h3>RATE & REVIEW</h3>
      </div>
      <div className="cr-grid">
        <div className="left-info">
          <h2>{movieInfo.title}</h2>
          <img src={movieInfo.image_url} alt={movieInfo.title} />
        </div>
        <form
          className="right-info"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateReview(id, formData);
          }}
        >
          <textarea
            rows="5"
            type="text"
            name="content"
            placeholder="What did you think of the movie?"
            value={content}
            onChange={handleChange}
          />

          <label className="rating">
            Rating:
            <StarRatings
              rating={rating}
              starRatedColor="red"
              changeRating={handleRating}
              numberOfStars={5}
              name="rating"
              starDimension="25px"
              starSpacing="5px"
            />
          </label>

          <button>ADD</button>
        </form>
      </div>
    </>
  );
};

export default ReviewCreate;
