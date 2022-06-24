import { createStore } from "vuex";
import axios  from "axios";

const store = createStore({

    state(){
        return {
            AuthUser: null,

        }
    },

    mutations:{
        auth(state,user){
            state.AuthUser = user;

        }
    },

    actions:{
        setAuthUser(){
            let data = JSON.parse(sessionStorage.getItem('user'))

            axios.get('http://localhost/API/maps/credentialsUser.php?id='+data[0].tokenid)
        }
    }

});

export default store;