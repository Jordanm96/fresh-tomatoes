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
      <Link>
        <button>ADD REVIEW</button>
      </Link>
      {reviews.map((review) => (
        <div>
          <p>"{review.content}"</p>
          <p>Rating: {review.rating}/5</p>
          <p>-{user.username}</p>
          {/* Here I want to have the name of the user who created the id
            Do I have to add the user name to the my reviews table? */}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
