<template>
  <div class="container bg-light shadow-sm py-3">
    <slideBar />
  </div>
  <div class="container bg-light shadow-sm my-3 rounded">
    <About />
  </div>

  <SideBar />
</template>

<script>
import slideBar from '@/components/slideBar.vue'
import About from '@/components/about.vue'
import SideBar from '@/components/sideBar.vue'

export default {
  name: 'HomeView',
  components: {
    slideBar,
    About,
    SideBar
  }

}
</script>


<style>
#budidaya {
  width: 30rem;
  height: auto;
}
</style>
