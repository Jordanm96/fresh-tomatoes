import api from './api-helper';

export const postReviewToMovie = async (movieId, reviewData) => {
  const resp = await api.post(`/movies/${movieId}/reviews`, { review: reviewData });
  return resp.data
}

export const deleteReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
}