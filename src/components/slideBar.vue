<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" id="slide1">
            <div class="carousel-item active">
                <router-link to="/pesan">
                    <img src="../../public/galery/bener1.jpg" class="d-block w-100" alt="...">
                </router-link>
            </div>
            <div class="carousel-item" id="slide2">
                <router-link to="/jual">
                    <img src="../../public/galery/bener2.jpg" class="d-block w-100" alt="...">
                </router-link>
            </div>
            <div class="carousel-item" id="slide3">
                <router-link to="/pesan">
                    <img src="../../public/galery/bener3.jpg" class="d-block w-100" alt="...">
                </router-link>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>