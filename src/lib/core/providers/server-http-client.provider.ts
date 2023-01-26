import axios from 'axios';

export const ServerHttpClientProvider = axios.create({
  baseURL: process.env.PUBLIC_HOST_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
