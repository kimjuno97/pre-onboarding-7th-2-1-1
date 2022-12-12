import axios from 'axios';

const client = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
