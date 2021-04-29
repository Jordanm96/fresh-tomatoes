import { Link } from "react-router-dom";

const Reviews = (props) => {
  const { movieInfo } = props;
  const { handleDelete } = props;
  const { currentUser } = props;

  const title = movieInfo.title.toUpperCase();
  const reviews = movieInfo.reviews;

  if (!currentUser) {
    return <h1>Loading...</h1> 
  }

  return (
    <div className="reviews-container">
      <h3>REVIEWS FOR {title}</h3>
      <Link to={`/movies/${movieInfo.id}/reviews`}>
        <button>ADD REVIEW</button>
      </Link>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <p>"{review.content}"</p>
          <p>Rating: {review.rating}/5</p>
          <p>- {review.user.username}</p>

          {currentUser.username === review?.user.username ? (
            <button onClick={() => handleDelete(review.id)}>DELETE</button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
