const axios = require('axios');
const env = require('./env');

const api = axios.create({
    baseURL: env.API_URL,
});

module.exports = api;