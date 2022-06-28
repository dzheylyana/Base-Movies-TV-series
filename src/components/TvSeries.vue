
<template>
<div class='carousel-controls'>
  <div class="textTvSeries"><h5>See the Tv Series</h5></div>
      <i class="fa fa-angle-left "  @click="previous"></i>
           <i class="fa fa-angle-right" @click="next"></i>
     </div>
  <transition-group
      class='carousel'
      tag="div">
    <div v-for="tvSerie in tvSeries " class="tvSeries" :key="tvSerie.id">
     <img :src="`https://image.tmdb.org/t/p/w500/${tvSerie.backdrop_path?tvSerie.backdrop_path:tvSerie.poster_path}`"/>
     </div>
     </transition-group>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('requests', ['tvSeries'])
  },
  methods: {
    ...mapActions('requests', ['fetchTvSeries']),
    next () {
      const first = this.tvSeries.shift()
      this.tvSeries = this.tvSeries.concat(first)
    },
    previous () {
      const last = this.tvSeries.pop()
      this.tvSeries = [last].concat(this.tvSeries)
    }
  },
  next () {
    const first = this.tvSeries.shift()
    this.tvSeries = this.tvSeries.concat(first)
  },
  previous () {
    const last = this.tvSeries.pop()
    this.tvSeries = [last].concat(this.tvSeries)
  },
  created () {
    this.fetchTvSeries()
  }

}
</script>

<style scoped>

.textTvSeries{
  text-align: left;
      margin-bottom: -1.5rem;
        font-size: 32px;
        margin-left: 140px;
  }

.carousel-controls{
  text-align: right;
        margin-top: 85px;

}
i.fa.fa-angle-right::before{
font-size:23px;
margin-right: 168px;
  }

 i.fa.fa-angle-left::before{
font-size: 23px;
margin-right: 45px;

 }
.carousel {
  display: flex;
  justify-content:center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}
.tvSeries {
  flex: 0  20em;
   height: 20em;
   margin: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
   border-radius: 50%;
  transition: transform 0.3s ease-in-out;

}

.tvSeries img{
  width: 250px;
height: 376px;
}

.result:first-of-type {
  opacity: 0;
}
.result:last-of-type {
  opacity: 0;
}
</style>
