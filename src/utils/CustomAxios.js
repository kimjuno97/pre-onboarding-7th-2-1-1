import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_CARS,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;
