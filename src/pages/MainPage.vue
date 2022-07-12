<template>
    <now-playing v-bind:is-movie=true></now-playing>
    <top-rated v-bind:is-movie=true></top-rated>
        <top-rated v-bind:is-movie=false></top-rated>

     <router-view></router-view>
</template>

<script>
import TopRated from '../components/TopRated.vue'
import NowPlaying from '../components/NowPlaying.vue'
export default {
  components: {
    NowPlaying,
    TopRated
  }
}
</script>
