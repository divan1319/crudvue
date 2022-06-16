<template>
<div class="img-back">
<img src="../assets/images/bgsv.jpg" alt="">
</div>
  <main-content></main-content>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'HomeView',
  components: {
    MainContent
  }
}
</script>
<style>

</style>
