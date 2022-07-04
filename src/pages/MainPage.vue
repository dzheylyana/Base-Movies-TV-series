<template>
    <now-playing></now-playing>
    <top-rated :is-movie=true></top-rated>
        <top-rated :is-movie=false></top-rated>

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
