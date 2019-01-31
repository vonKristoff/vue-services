import TokenService from './token-service'
import ApiService from './api-service'
export default {
    login(email, password) {
        let endpoint = 'login'
        let requestData = {
            data: {
                username: email,
                password: password
            },
            auth: {
                username: process.env.VUE_APP_CLIENT_ID,
                password: process.env.VUE_APP_CLIENT_SECRET
            }
        }
        return asPromised('post', endpoint, requestData)
    },
    logout() {
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader()
    }
}
function asPromised(type, endpoint, data) {
    return new Promise((resolve, reject) {            
        const response = ApiService.[type](endpoint, requestData)
        .then(resolve)
        .catch(error => reject({ status: error.response.status, message: error.response.data.detail }))
    })
}