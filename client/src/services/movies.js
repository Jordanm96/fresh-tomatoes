import api from './api-helper';
// WRAP THESE IN A A TRY CATCH
export const getAllMovies = async () => {
  const resp = await api.get('/movies');
  return resp.data;
}

export const getMovie = async (id) => {
  const resp = await api.get(`/movies/${id}/reviews/${id}`);
  return resp.data;
}

export const postMovie = async (movieData) => {
  const resp = await api.post('/movies', { movie: movieData });
  return resp.data;
}

export const putMovie = async (id, movieData) => {
  const resp = await api.put(`/movies/${id}/`, { movie: movieData } );
  return resp.data;
}

// export const deleteMovie = async (id) => {
//   const resp = await api.delete(`/movies/${id}`);
//   return resp;
// }