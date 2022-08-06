<template>
    <div class="container-fluid p-5">
        <div class="container bg-light shadow rounded-4 p-4" style="width:90%;">
            <div class="row">
                <div class="col-7">
                    <form>
                        <div class="mb-3">
                            <label for="example" class="form-label">Nama</label>
                            <input type="text" class="form-control" id="example" aria-describedby="nama"
                                autocomplete="off" v-model="nama" />
                        </div>
                        <div class="mb-3">
                            <label for="nama" class="form-label">Nomor</label>
                            <input type="number" class="form-control" id="nama" aria-describedby="nama"
                                placeholder="08..." autocomplete="off" v-model="nomor">
                        </div>
                        <label for="floatingTextarea" class="form-label">Alamat Lengkap</label>
                        <div class="form-floating mb-4">
                            <textarea rows="2" cols="40" class="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea" v-model="alamat"></textarea>
                        </div>
                        <label for="floatingTextarea" class="form-label">Pesan</label>
                        <div class="form-floating mb-4">
                            <textarea rows="6" cols="60" class="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea" v-model="pesan"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                        <div class="text-end">
                            <a class="btn btn-primary" target="_blank"
                                :href="'https://wa.me/08231231412?text=nama%20%3A%20' + nama + '%0AWA%20%3A%20' + nomor + '%0AAlamat%20%3A%20' + alamat + '%0APesan%20%3A%20' + pesan + '%0Aberat%20%3A%20' + berat + '%20kg%0Atotal%20%3A%20Rp.%20+' + total"
                                @click="total = berat * 1200">Ajukan</a>
                        </div>
                    </form>
                </div>
                <div class="col-1"></div>
                <div class="col-4 pt-4">
                    <div class="my-3 pe-3">
                        <label for="exampleInputEmail1" class="form-label">Berat</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="nama"
                            autocomplete="off" placeholder="1200/kg" v-model="berat" />
                    </div>

                    <h4>Harga</h4>
                    <div class="row">
                        <div class="col-1">
                            <p class="mb-5">Rp.</p>
                        </div>
                        <div class="col-6">
                            <p v-if="berat > 0">{{ berat * 1200 }}</p>
                            <p v-else>0</p>
                        </div>
                    </div>
                    <div class="fs-4 mt-5">
                        <div class="social-links">
                            <a href="https://wa.me/+62377879909" target="_blank"><i
                                    class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com/accounts/login/?" target="_blank"><i
                                    class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {

        return {
            berat: Number,
            nama: "",
            pesan: "",
            alamat: "",
            nomor: String,
            total: 0,
        }
    }
}
</script>

<style scoped>
.social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: #198754;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}
</style>