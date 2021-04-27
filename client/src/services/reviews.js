import api from './api-helper';

// would this one need to posted to /movies/${id}?
export const postReview = async (reviewData) => {
  const resp = await api.post('/reviews', { review: reviewData });
  return resp.data;
}

// DO I NEED THIS ONE?
// DOES my getMovie call in movies.js do this for me?
// export const postReviewToMovie = async (movieId, reviewId) => {
//   const resp = await api.get(`/movies/${movieId}/reviews/${reviewId}`)
//   return resp.data
// }

export const deleteReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
}