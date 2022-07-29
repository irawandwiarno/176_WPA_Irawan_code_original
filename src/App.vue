<template>
  <div class="container">
    <MyNavBar />
    <router-view />
    <footerElement />
  </div>
</template>

<script>
// @ is an alias to /src
import MyNavBar from '@/components/MyNavBar.vue'
import footerElement from './components/footerElement.vue'

export default {
  name: 'HomeView',
  components: {
    MyNavBar,
    footerElement
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f1f1f1;
}
</style>


