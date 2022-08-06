<template>
    <div class="card mx-4" style="width: 16rem;">
        <img :src="'/galery/' + fotoName" class="card-img-top" :alt="fotoName">
        <div class="card-body">
            <h5 class="card-title" style="height:2rem;">{{ name }}</h5>
            <p class="deskripsi-font card-text" style="height:7rem;">{{ deskripsi }}</p>
            <h6 class="card-subtitle mb-2 text-muted text-decoration-line-through diskon-harga">Rp. {{ harga / 0.50 }} /
                {{
                        berat
                }}
            </h6>
            <h6 class="card-subtitle mb-2 fw-bold">Rp. {{ harga - 1 }} / {{ berat }}</h6>

            <div class="border border-dark rounded-1 my-2 text-center" style="width: 35px; height: 23px;">{{ jumlah }}
            </div>
            <button class="btn btn-success me-3" @click="buyMethod(); jumlah++"> Buy </button>
            <button class="btn btn-danger " v-if="jumlah > 0" @click="sellMethod(); jumlah--; sellMethod"> Cancel
            </button>
        </div>
    </div>
</template >
            
            
<script>
export default {

    props: {
        fotoName: {
            type: String,
        },
        name: {
            type: String,
        },
        deskripsi: {
            type: String,
        },
        harga: {
            type: Number,
        },
        berat: {
            type: String,
        },
        jumlah: {
            type: Number,
        }
    },
    data() {
        return {
            total: 0
        }
    },
    methods: {
        handleCard() {
            // console.log("add to card");
            this.$emit("sendTotal", this.total);
        },

        buyMethod() {
            this.total = this.harga - 1;
            // console.log("buy item");
            this.handleCard();
        },

        sellMethod() {
            this.total = 0 - this.harga + 1;
            // console.log(this.total);
            this.handleCard();
        }
    }

};
</script>
            
            
 <style scoped>
 .deskripsi-font {
     font-size: 14px;
 }
 
 .diskon-harga {
     font-size: 14px;
 }
 </style>           