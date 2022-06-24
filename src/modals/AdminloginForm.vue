<template>
    <form class="uk-grid-small" @submit.prevent="onSubmit" uk-grid>
        <div class="uk-width-1-1">
            <label for="txt-nickname" class="uk-label-form">Nombre de usuario</label>
            <input class="uk-input" id="txt-nickname" type="text" placeholder="example123" v-model="logDetail.nickname">
        </div>
        <div class="uk-width-1-1">
            <label for="txt-pass" class="uk-label-form">Contraseña</label>
            <input class="uk-input" type="password" placeholder="******" v-model="logDetail.password">
        </div>
        <div class="uk-width-expand">
            <button class="uk-button uk-button-secondary " type="submit">Iniciar Sesión</button>
        </div>
    </form>
<div class="uk-alert-success" v-if="successMessage" uk-alert>
    <a class="uk-alert-close" uk-close="duration:500"></a>
    <p> {{  successMessage }} </p>
</div>
<div class="uk-alert-danger" v-if="errorMessage" uk-alert="duration: 500">
    <a class="uk-alert-close" uk-close></a>
    <p> {{  errorMessage }} </p>
</div>
<div v-if="userAuth">
hola logueado
</div>
</template>
<script>
import axios from 'axios'
//import { response } from 'express'
    export default {
        data(){
            return{

                logDetail:{nickname: "", password:""},
                errorMessage:"",
                successMessage:"",
                userAuth: false
            }
        },
        methods:{
        toFormData(obj){
                var form_data = new FormData();

                for(var key in obj){
                    form_data.append(key,obj[key])
                }
                return form_data;
            },

            getDataLogin(){
                var logForm = this.toFormData(this.logDetail)
                axios.post('http://localhost/API/maps/c_login.php', logForm).then(response => {
                    if(response.data.error){
                        this.errorMessage = response.data.message
                    }else{
                        this.successMessage= response.data.message
                        this.logDetail = {nickname:"",password:""}

                        let data =[{tokenid:response.data.token, id: response.data.id, name: response.data.username }]
                        sessionStorage.setItem('user', JSON.stringify(data))
                        
                        
                        console.log(response)
                    }
                }).catch(error => {

                    console.log(error)

                })
            },

           async onSubmit(){
            await this.getDataLogin()
            },


        },
       



    }
</script>
