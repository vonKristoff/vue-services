import template from '../../templates/login-form.html'
import UserService from '../../services/user-service'
import classes from './computed-classes'
export default {
    name: "login-form",
    template,
    props: [],
    data() {
        return {
            username: "",
            password: "",
            ui: {
                pressed: false,
                valid: false,
                async: false
            }
        }
    },
    computed: {
        ...classes
    },
    methods: {
        mapMutations('error', ['handleErrors'])
        submit() {
            // API service to perform actions
            // reposnse to set Vuex stores && UI settings in this component view
            UserService.login(this.username, this.password)
            .then(() => { this.ui.valid = true })
            .catch(error => { 
                this.commit('handleErrors', error) // will trigger error messages from Vuex store, on any other observers
                this.ui.valid = false
            })
        }
    }
}
