import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://cms-portfolio.test/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;