<template>
  <nav-bar></nav-bar>
  <footer-page></footer-page>
  <login-form></login-form>
  <register-form></register-form>
</template>
<script>
import FooterPage from './components/FooterPage.vue'
import NavBar from './components/NavBar.vue'
import LoginForm from './modals/LoginForm.vue'
import RegisterForm from './modals/RegisterForm.vue'
    export default{
      components:{
        FooterPage,
        NavBar,
        LoginForm,
        RegisterForm
        
      }
    }

</script>