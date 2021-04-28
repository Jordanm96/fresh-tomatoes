import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovie } from "../../services/movies";

const ReviewCreate = (props) => {
  const [formData, setFormData] = useState({
    content: '',
    rating: ''
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
      [name]: value
    }));
  };

  return (
    <div>
      <h3>RATE & REVIEW</h3>
      {/* Here I need to render the movie title and image */}
      <p>{movieInfo.title}</p>
      <img src={movieInfo.image_url} alt={movieInfo.title} />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateReview(id, formData);
      }}>
        <label>Review:
          <textarea
            type='text'
            name='content'
            placeholder='What did you think of the movie?'
            value={content}
            onChange={handleChange}
          />
        </label>
        <label>Rating:
          <select name='rating' value={rating} onChange={handleChange}>
            <option selected='selected'>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </label>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ReviewCreate;