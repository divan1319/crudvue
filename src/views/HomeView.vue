<template>
<div class="img-back">
<img src="../assets/images/t2.jpg" alt="">
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
  .img-back{
    width: 100%;
  }

  .img-back img{
    width: 100%;
    height: 87.7vh;
    margin-top: -19.6px;
  }
</style>
