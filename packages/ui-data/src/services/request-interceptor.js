import axios from 'axios'

export function setRequestInterceptor(){
    axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            const refresh_token = localStorage.getItem('refresh_token')
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
                config.headers['refresh_token'] = refresh_token
            }
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
}
