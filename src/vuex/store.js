import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({

    state() {
        return {
            AuthUser: null,

        }
    },

    mutations: {
        auth(state, user) {
            state.AuthUser = user;

        }
    },

    actions: {
        setAuthUser() {
            let data = JSON.parse(sessionStorage.getItem('user'))
            if (data == null) {
                // eslint-disable-next-line 

            } else {
                axios.get('http://localhost/API/maps/credentialsUser.php?id=' + data[0].tokenid).then(res => {
                    if (res.data.validation) {
                        this.commit('auth', res.data.token);
                    } else {
                        this.commit('auth', null);
                    }
                }).catch(error => {
                    console.log(error)
                })
            }


        }
    }

});

export default store;