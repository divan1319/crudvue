<template>
  <div
    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    class="stickyUI"
  >
    <nav class="uk-navbar uk-navbar-container uk-margin">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/listar">Ruta de Buses</router-link>
          </li>
          <li><a href="#">Iniciar Sesión</a></li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <a
          class="uk-navbar-toggle"
          href="#modal-full"
          uk-search-icon
          uk-toggle
        ></a>
      </div>
    </nav>
  </div>
  <div id="modal-full" class="uk-modal-full uk-modal" uk-modal>
    <div
      class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport
    >
      <button class="uk-modal-close-full" type="button" uk-close></button>
      <form class="uk-search uk-search-large">
        <input
          class="uk-search-input uk-text-center"
          type="search"
          placeholder="Buscar Ruta ..."
          autofocus
        >
        <button
          class="uk-button uk-button-secondary uk-width-3-4 uk-align-center"
        >
          Buscar
        </button>
      </form>
    </div>
  </div>
  <router-view></router-view>
</template>

<style>

nav a{
  color: rgb(94, 85, 85);
}
nav a.router-link-exact-active {
  color: #ffffff;
}

.stickyUI .uk-navbar-container{
  background-color:#000000 ;
}

</style>
