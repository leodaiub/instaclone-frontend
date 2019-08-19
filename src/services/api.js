import axios from 'axios';

const api = axios.create({
    baseURL: 'https://leodaiub-instaclonebackend.netlify.com',
});

export default api;
