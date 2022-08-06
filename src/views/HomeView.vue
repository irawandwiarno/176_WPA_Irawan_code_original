<template>
  <div class="top-item">
    <div class=" d-flax bg-transparan">
      <div class="container box justify-content-center">
        <div class="box d-flex  text-light justify-content-center align-items-center">
          <div class="d-flax ">
            <p class="display-2 Montserrat-font ">Melestarikan Alam</p>
            <p class="poppin h5 mb-3">Dengan Hal yang Kecil, kita lestarikan bumi dari sampah!!</p>
            <a href="#more" class="btn btn-primary">Get More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-light shadow-sm mb-5 py-4 px-4 rounded">
    <About />
    <ServiceElement />
    <OurWorks />
    <testimoni class="mb-5" />
  </div>

</template>

<script>
import slideBar from '@/components/slideBar.vue'
import About from '@/components/about.vue'
import ServiceElement from '@/components/serviceElement.vue'
import OurWorks from '@/components/OurWorks.vue'
import testimoni from '@/components/testimoni.vue'

export default {
  name: 'HomeView',
  components: {
    slideBar,
    About,
    ServiceElement,
    OurWorks,
    testimoni
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap');


#budidaya {
  width: 30rem;
  height: auto;
}

.top-item {
  background-image: url(../../public/galery/budidaya_maggot.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 95vh;

}

.bg-transparan {
  background: rgb(0, 0, 0, .6);
  width: 100%;
  height: 95vh;
}

.Montserrat-font {
  font-family: 'Montserrat', sans-serif;
}

.poppin {
  font-family: 'Poppins', sans-serif;
}

.box {
  max-width: 800px;
  min-height: 600px;
}

.d-flax a:hover {
  background-color: #0a3768;
}
</style>
