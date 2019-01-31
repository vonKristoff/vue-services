import loginForm from './components/login-form/vm'
export default {
	el: "#root",
	components: { loginForm },
    created() {
        ApiService.init(process.env.VUE_APP_ROOT_API)

        // If token exists set header
        if(TokenService.getToken()) ApiService.setHeader()
    }
}