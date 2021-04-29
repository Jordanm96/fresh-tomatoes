import { Link, useHistory } from "react-router-dom";

const Reviews = (props) => {
  const { movieInfo } = props;
  const { handleDelete } = props;
  // const { movies } = props;
  const { currentUser } = props;

  const title = movieInfo.title.toUpperCase();
  const reviews = movieInfo.reviews;
  const user = movieInfo.user;

  // console.log(reviews.user)

  // console.log(currentUser.username)
  // console.log(user.username)
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
          {console.log(review.user.username)}

          {currentUser.username === review.user.username ? (
            <button onClick={() => handleDelete(review.id)}>DELETE</button>
          ) : null}
          {/* <button onClick={() => handleDelete(review.id)}>DELETE</button> */}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
