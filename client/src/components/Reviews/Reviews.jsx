import { Link, useHistory } from "react-router-dom";

const Reviews = (props) => {
  const { movieInfo } = props;
  const { handleDelete } = props;
  const { movies } = props;

  const history = useHistory();
  const title = movieInfo.title.toUpperCase();
  const reviews = movieInfo.reviews;
  const user = movieInfo.user;

  // const deleteReview = () => {
  //   handleDelete(review.id);
  //   window.location.reload()
  // }

  return (
    <div className="reviews-container">
      <h3>REVIEWS FOR {title}</h3>
      <Link to={`/movies/${movieInfo.id}/reviews`}>
        <button>ADD REVIEW</button>
      </Link>
      {reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <p>"{review.content}"</p>
          <p>Rating: {review.rating}/5</p>
          <p>-{user.username}</p>


          <button onClick={() => handleDelete(review.id)}>DELETE</button>
          
        </div>
      ))}
    </div>
  );
};

export default Reviews;
