<template>
    <form class="uk-grid-small" @submit.prevent="onSubmit" uk-grid>
        <div class="uk-width-1-1">
            <label for="txt-nickname" class="uk-label-form">Nombre de usuario</label>
            <input class="uk-input" id="txt-nickname" type="text" placeholder="example123" v-model="nickname">
        </div>
        <div class="uk-width-1-1">
            <label for="txt-pass" class="uk-label-form">Contraseña</label>
            <input class="uk-input" type="password" placeholder="******" v-model="password">
        </div>
        <div class="uk-width-expand">
            <button class="uk-button uk-button-secondary " type="submit">Iniciar Sesión</button>
        </div>
    </form>
</template>
<script>
//import axios from 'axios'
    export default {
        data(){
            return{
                nickname: "",
                password:""
            }
        },
        methods:{
            onSubmit(){
                let datos = {
                nickname: this.nickname,
                password:this.password
                };
                fetch('http://localhost/API/maps/c_login.php',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(datos)
                }).then( res =>{
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
                
                

            }
        }
    }
</script>
