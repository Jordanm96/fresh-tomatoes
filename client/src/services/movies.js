import api from "./api-helper";
// WRAP THESE IN A A TRY CATCH
export const getAllMovies = async () => {
  try {
    const resp = await api.get("/movies");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

// This api call is going to get a specific movie along with all of it's reviews
export const getMovie = async (id) => {
  try {
    const resp = await api.get(`/movies/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const postMovie = async (movieData) => {
  try {
    const resp = await api.post("/movies", { movie: movieData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const putMovie = async (id, movieData) => {
  try {
    const resp = await api.put(`/movies/${id}/`, { movie: movieData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
