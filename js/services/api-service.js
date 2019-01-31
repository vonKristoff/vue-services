import axios from 'axios/dist/axios'
import TokenService from './token-service'

const ApiService = {
    // init at App root
    init(baseURL) {
        axios.defaults.baseURL = baseURL
    }
    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    }
}
export default ApiService
