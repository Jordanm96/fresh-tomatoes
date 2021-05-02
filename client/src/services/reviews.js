import api from "./api-helper";

export const postReviewToMovie = async (movieId, reviewData) => {
  try {
    const resp = await api.post(`/movies/${movieId}/reviews`, {
      review: reviewData,
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const resp = await api.delete(`/reviews/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
