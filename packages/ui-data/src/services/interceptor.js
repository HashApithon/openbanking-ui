import axios from 'axios'

axios.interceptors.request.use(
    config => {
        const token = localStorageService.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });