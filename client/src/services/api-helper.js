import axios from 'axios';

const baseUrl = 'http://localhost:3000'
// If I want to use netlify, use the one below
// const baseUrl = process.env.NODE_END === 'production' ? 'https://fresh-tomatoes-api.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})
export default api;