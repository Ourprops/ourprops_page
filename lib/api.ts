import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4500' : "https://api.ourprops.net",
});