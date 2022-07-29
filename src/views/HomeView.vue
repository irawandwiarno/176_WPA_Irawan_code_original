<template>
  <slideBar class="mt-2" />
  <About />


</template>

<script>
import slideBar from '@/components/slideBar.vue'
import about from '@/components/about.vue'
import About from '@/components/about.vue'

export default {
  name: 'HomeView',
  components: {
    slideBar,
    about,
    About
  }

}
</script>


<style>
#budidaya {
  width: 30rem;
  height: auto;
}
</style>
