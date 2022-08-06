<template>
    <div class="card my-3 mx-4 bg-custom" style="width:95%;">
        <div class="card-body">
            <div class="row">
                <div class="col-1">
                    <img src="/galery/default.jfif" class="" alt="" style="width:5rem; height:5rem;">
                </div>
                <div class="col ms-5 pt-3">
                    <h5 class="card-title">{{ nama }}</h5>
                    <p class="fw-light detile">{{ komen }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['nama', 'komen']
};
</script>