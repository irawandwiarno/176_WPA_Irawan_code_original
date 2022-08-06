<template>
  <div class="container">
    <div class="row my-4">
      <cardPesan v-for="(data, $index) in item.data" :key="$index" :fotoName="data.foto" :name="data.nama"
        :deskripsi="data.deskripsi" :berat="data.satuan" :harga="data.harga" :jumlah="data.jumlah"
        @sendTotal="totalHarga">
      </cardPesan>
    </div>
  </div>
  <div class="container-fluid bg-success p-4" style="height:5rem; ">
    <div class="row">
      <div class="col-8"></div>
      <div class="col-2 text-end">
        <a href="www.dana.id" class="hover-White btn btn-outline-light fw-bold">Check Out</a>
      </div>
      <div class="col-2">
        <div class="bg-light rounded py-1 px-3" style="width: 12rem; height: 2rem;">
          <div class="row">
            <div class="col-2 text-start">Rp.</div>
            <div class="col-10 text-end">{{ CekOut }}</div>
          </div>
        </div>
      </div>
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
      item: [],
      CekOut: 0,
    }
  },
  methods: {
    totalHarga(harga) {
      this.CekOut += harga;
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