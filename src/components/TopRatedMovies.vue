
<template>
 <div class='carousel-controls'>
  <div class="textControls"><h5>See the TOP Films</h5></div>
      <i class="fa fa-angle-left "  @click="previous"></i>
           <i class="fa fa-angle-right" @click="next"></i>
     </div>
<transition-group
      class='carousel'
      tag="div">
    <div v-for="topMovie in topMovies " class="topMovies" :key="topMovie.id">
     <img :src="`https://image.tmdb.org/t/p/w500/${topMovie.backdrop_path}`"/>
     <h2>{{topMovie.orginal_title}}</h2>
     </div>
</transition-group>

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
/* .carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.textControls{
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
.topMovies {
  flex: 0  20em;
   height: 20em;
   margin: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
   border-radius: 50%;
  transition: transform 0.3s ease-in-out;

}

.topMovies img{
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
