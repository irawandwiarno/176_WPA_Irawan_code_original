<template>
  <div class="container">
    <div class="row my-4">
      <cardPesan v-for="(data, $index) in item" :key="$index" :fotoName="data.foto" :name="data.nama"
        :deskripsi="data.deskripsi">

      </cardPesan>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cardPesan from '@/components/cardPesan.vue'

export default {
  components: {
    cardPesan
  },

  data() {
    return {
      item: []
    }
  },
  mounted() {
    fetch("/data.json")
      .then(res => res.json())
      .then(res => {
        this.item = res
      })
  }

}
</script>