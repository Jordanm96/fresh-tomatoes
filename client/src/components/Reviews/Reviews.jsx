import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./Reviews.css";

const Reviews = (props) => {
  const { movieInfo } = props;
  const { handleDelete } = props;
  const { currentUser } = props;

  const reviews = movieInfo.reviews;

  if (!reviews) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="reviews-container">
      <div className="heading">
        <h3 className="subheading">REVIEWS</h3>
      </div>
      {currentUser ? (
        <Link to={`/movies/${movieInfo.id}/reviews`}>
          <button>ADD REVIEW</button>
        </Link>
      ) : null}
      <div className="all-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p>"{review.content}"</p>
            <StarRatings
              rating={review.rating}
              starDimension="25px"
              starSpacing="5px"
              starRatedColor="red"
            />
            <p>- {review.user.username}</p>
            {currentUser?.username === review?.user.username ? (
              <button onClick={() => handleDelete(review.id)}>DELETE</button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
