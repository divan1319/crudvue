<template>
  <nav-bar :is-auth="isAuth"></nav-bar>
  <footer-page :is-auth="isAuth"></footer-page>
  <login-form></login-form>
  <register-form></register-form>
</template>
<script>
import FooterPage from './components/FooterPage.vue'
import NavBar from './components/NavBar.vue'
import LoginForm from './modals/LoginForm.vue'
import RegisterForm from './modals/RegisterForm.vue'
//import store from './vuex/store'


    export default{
      components:{
        FooterPage,
        NavBar,
        LoginForm,
        RegisterForm
        
      },

      computed:{
        isAuth(){
           const check = sessionStorage.getItem('user')
          if (check !== null && check !== '' && check !== '[{}]') {
            return true
      }else{
        return false
      }
        }
      }
    }

</script>