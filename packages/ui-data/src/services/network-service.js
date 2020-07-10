import axios from 'axios'

export default {
    setupInterceptors: (history, store) => {
        // Add a response interceptor
        axios.interceptors.response.use(
            function (response) {
                return response
            },
            function (error) {
                //catches if the session ended!
                if (error.response.status === 401) {
                    console.log('EXPIRED TOKEN!')
                    localStorage.clear()
                    store.dispatch(logout())
                    history.push('/')
                }
                return Promise.reject(error)
            }
        )
    },
}
