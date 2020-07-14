import axios from 'axios'

export function setRequestInterceptor() {
    axios.interceptors.request.use(
        (config) => {
            const sessionId = sessionStorage.getItem('session_id')
            const token = localStorage.getItem('token')
            const refresh_token = localStorage.getItem('refresh_token')
            config.headers['session_id'] = sessionId
            config.headers['Access-Control-Allow-Origin'] = '*'
            config.headers['Content-Type'] = 'application/json'
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
                config.headers['refresh_token'] = refresh_token
            }
            return config
        },
        (error) => {
            Promise.reject(error)
        }
    )
}
