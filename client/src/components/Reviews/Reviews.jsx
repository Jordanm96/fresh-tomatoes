import { Link } from "react-router-dom";

const Reviews = (props) => {
  const { movieInfo } = props;
  const title = movieInfo.title.toUpperCase();
  const reviews = movieInfo.reviews;
  const user = movieInfo.user;
  // console.log(movieInfo)
  // console.log(reviews)

  return (
    <div className="reviews-container">
      <h3>REVIEWS FOR {title}</h3>
      <Link to={`/movies/${movieInfo.id}/reviews`}>
        <button>ADD REVIEW</button>
      </Link>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>"{review.content}"</p>
          <p>Rating: {review.rating}/5</p>
          <p>-{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
