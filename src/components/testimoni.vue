<template>
    <div class="container-fluid shadow py-3">
        <h4 class="text-center">Testimoni</h4>
        <div v-for="(data, $index) in data" :key="$index">
            <TestiCard :nama="data.nama" :komen="data.komen" />
        </div>
    </div>
</template>

<script>
import TestiCard from './TestiCard.vue'

export default {
    components: {
        TestiCard
    },
    data() {
        return {
            data: []
        };
    },
    mounted() {
        fetch("/testi.json")
            .then(res => res.json())
            .then(res => {
                this.data = res;
            });
    },
    components: { TestiCard }
}
</script>

<style>
.bg-custom {
    background-color: rgb(236, 236, 236);
}
</style>