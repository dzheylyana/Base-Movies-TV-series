
<template>
<transition-group
      class='carousel'
      tag="div">
    <div v-for="topMovie in topMovies " class="topMovies" :key="topMovie.id">
     <img :src="`https://image.tmdb.org/t/p/w500/${topMovie.backdrop_path}`"/>
     <h2>{{topMovie.orginal_title}}</h2>
     </div>
</transition-group>
 <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('requests', ['topMovies'])
  },
  methods: {
    ...mapActions('requests', ['fetchTopMovies']),

    next () {
      const first = this.topMovies.shift()
      this.topMovies = this.topMovies.concat(first)
    },
    previous () {
      const last = this.topMovies.pop()
      this.topMovies = [last].concat(this.topMovies)
    }

  },
  created () {
    this.fetchTopMovies()
  }

}
</script>

<style scoped>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content:center;
  align-items: center;
  overflow: hidden;
  width: 90m;
  min-height: auto;
}
.topMovies {
  flex: 0  20em;
   height: 20em;
   margin: 1em;
  display: flex;
  justify-content:center;
  align-items: center;
   border-radius: 50%;
  transition: transform 0.3s ease-in-out;

}

.result:first-of-type {
  opacity: 0;
}
.result:last-of-type {
  opacity: 0;
}
</style>
