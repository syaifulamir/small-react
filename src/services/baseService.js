import axios from 'axios';

export const service = axios.create({
    baseURL: 'http://www.omdbapi.com',
    timeout: 300000,
    headers: {
        'Accept': 'application/json'
    }
});

