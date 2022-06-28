<template>
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="result in results"
        class='result'
        :key="result.id"
        :title="result.title"
        :releaseData="result.releaseData"
        :backdrop_path="result.backdrop_path">
     <img :src="`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`"/>
       </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('requests', ['results'])
  },
  methods: {
    ...mapActions('requests', ['fetchData']),
    next () {
      const first = this.results.shift()
      this.results = this.results.concat(first)
    },
    previous () {
      const last = this.results.pop()
      this.results = [last].concat(this.results)
    }
  },
  created () {
    this.fetchData()
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
  width: 90em;
  min-height: auto;
}
.result {
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
