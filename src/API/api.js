/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
const axios = require('axios');

const apiInstance = axios.create({
  baseURL: 'https://portfoliojr-back.herokuapp.com',
  timeout: 10000,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});

export const postMessage = async (name, email, comment) => apiInstance.post('/', { data: { name, email, comment } });
