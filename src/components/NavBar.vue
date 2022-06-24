<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" class="stickyUI">
    <nav class="uk-navbar uk-navbar-container uk-margin">
      <div class="nav-overlay uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li v-if="userAuth">
            <a href="">logeado</a>
          </li>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/buses">Ruta de Buses</router-link>
          </li>
          <li v-if="!userAuth"><a href="#formulario_login" uk-toggle>Iniciar Sesión</a></li>
        </ul>
      </div>
      <div class="nav-overlay uk-navbar-right">
        <a class="uk-navbar-toggle" uk-search-icon uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"></a>
      </div>

      <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>

        <div class="uk-navbar-item uk-width-expand">
          <form class="uk-search uk-search-navbar uk-width-1-1">
            <input class="uk-search-input" type="search" placeholder="Buscar Ruta..." autofocus>
          </form>
        </div>

        <a class="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"></a>

      </div>
    </nav>
  </div>


  <router-view></router-view>
</template>
<script>

export default {

  data() {
    return {
      userAuth: false
    }
  },
  methods: {
    logincheck() {
      const check = sessionStorage.getItem('user')
      if (check !== null && check !== '') {
        this.userAuth = true
      } else {
        this.userAuth = false
      }
      return this.userAuth
    }
  },
   created:function(){
      this.logincheck();
    }

}
</script>