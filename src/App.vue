<template>
  <MyNavBar />
  <router-view />
  <SideBar />
  <footerElement class="" />
</template>

<script>
// @ is an alias to /src
import MyNavBar from '@/components/MyNavBar.vue'
import footerElement from './components/footerElement.vue'
import SideBar from '@/components/sideBar.vue'


export default {
  name: 'HomeView',
  components: {
    MyNavBar,
    footerElement,
    SideBar
  }


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  background-color: #f1f1f1;
}
</style>


