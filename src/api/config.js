import axios from 'axios';

// Create axios client, pre-configured with baseURL
const instance = axios.create({
    baseURL: 'http://192.168.0.102/react_laravel_blog_api/public/api'
});


export default instance;