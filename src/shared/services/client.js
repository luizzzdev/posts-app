import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://luizzzdev-posts-api.herokuapp.com/",
});
