<template>
    <the-carousel></the-carousel>
    <top-rated-movies></top-rated-movies>
    <tv-series></tv-series>
    <router-view></router-view>
</template>

<script>
import TopRatedMovies from '../components/TopRatedMovies.vue'
import TheCarousel from '../components/TheCarousel.vue'
import TvSeries from '@/components/TvSeries.vue'
export default {
  components: {
    TheCarousel,
    TopRatedMovies,
    TvSeries
  }
}
</script>
