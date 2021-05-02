import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Reviews = (props) => {
  const { movieInfo } = props;
  const { handleDelete } = props;
  const { currentUser } = props;

  const title = movieInfo.title.toUpperCase();
  const reviews = movieInfo.reviews;

  // if (!currentUser) {
  //   return <h1>Loading...</h1>
  // }

  if (!reviews) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="reviews-container">
      <h3>REVIEWS FOR {title}</h3>
      {currentUser ? (
        <Link to={`/movies/${movieInfo.id}/reviews`}>
          <button>ADD REVIEW</button>
        </Link>
      ) : null}

      {reviews.map((review) => (
        <div key={review.id} className="review-card">
<<<<<<< HEAD
          <p>"{review?.content}"</p>
          <p>Rating: {review?.rating}/5</p>
          {/* I am getitng undefined after I delete a review because it is trying to find the review I just deleted I think */}
          <p>- {review?.user.username}</p>
          {console.log(review.user.username)}
          
          {currentUser.username === review?.user.username ? (
=======
          <p>"{review.content}"</p>
          <StarRatings
            rating={review.rating}
            starDimension="40px"
            starSpacing="15px"
          />
          <p>- {review.user.username}</p>
          {currentUser?.username === review?.user.username ? (
>>>>>>> 5fa6cd4660ee3a37f589baaea1feda813decd539
            <button onClick={() => handleDelete(review.id)}>DELETE</button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
