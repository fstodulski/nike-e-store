import axios from 'axios';

import { PUBLIC_HOST_URL } from '$env/static/public';

export const ServerHttpClientProvider = axios.create({
  baseURL: PUBLIC_HOST_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
