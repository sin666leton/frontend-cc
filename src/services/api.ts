import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})

api.interceptors.request.use(
    (request) => {
        const jwtToken = localStorage.getItem('user')

        if (jwtToken) request.headers.Authorization = `Bearer ${jwtToken}`

        return request
    }
)

api.interceptors.response.use(
    (response) => response.data
)

export default api