<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <menu-bar msg="HOLA"></menu-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'HomeView',
  components: {
    MenuBar
  }
}
</script>
