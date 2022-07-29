<template>
    <div class="card mx-4" style="width: 16rem;">
        <img :src="'/galery/' + fotoName" class="card-img-top" :alt="fotoName">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ deskripsi }}</p>

            <div class="border border-dark rounded-1 my-2" style="width: 35px; height: 35px;"></div>
            <button class="btn btn-success me-3"> Buy </button>
            <button class="btn btn-danger "> Cancel </button>
        </div>
    </div>
</template>


<script>
export default {

    props: ['fotoName', 'name', 'deskripsi']
};
</script>


