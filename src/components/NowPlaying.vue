<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div
        v-for="result in results"
        class="result"
        :key="result.id"
        :title="result.title"
        :releaseData="result.releaseData"
        :backdrop_path="result.backdrop_path"
      >
       <router-link :to = " { name: 'details', params: { id: result.id, isMovie:true }}"><img  :src="`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`" /></router-link>
        <div class="theTitle">{{ result.title }}</div>
        <div class="originalLanguage">{{ result.original_language }}</div>
        <div class="releaseDate">{{ result.release_date }}</div>
      </div>
    </transition-group>

    <div class="carouselSliders">
      <i class="fa fa-angle-left" @click="previous"></i>
      <i class="fa fa-angle-right" @click="next"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('movies', ['results'])
  },
  methods: {
    ...mapActions('movies', ['fetchData']),
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
.releaseDate {
  position: absolute;
  width: 100%;
  text-align: left;
  top: 70%;
  margin-left: 30%;
  font-size: 26px;
  color: antiquewhite;
  text-align: left;
font: normal normal normal 26px/31px SF Pro Text;
letter-spacing: 0.1px;
 opacity: 0.7;
}
.originalLanguage {
  position: absolute;
  width: 100%;
  text-align: left;
  top: 60%;
  margin-left: 30%;
  font-size: 44px;
  color: antiquewhite;
 font: normal normal 600 44px/53px SF Pro Display;
letter-spacing: 0.18px;
 }
.theTitle {
  position: absolute;
  width: 100%;
  text-align: left;
  top: 51%;
  margin-left: 30%;
  font-size: 66px;
  color: antiquewhite;
 font: normal normal bold 66px/53px SF Pro Display;
letter-spacing: 0.27px;
 }
i.fa.fa-angle-right::before {
  font-size: 23px;
}

i.fa.fa-angle-left::before {
  font-size: 23px;
  margin-right: 45px;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  height: 501px;
  width: 100%;
  background: transparent linear-gradient(180deg, #0729561e 0%, #020916 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
.result {
  flex: 0 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
  max-width: 100%;
}

.result img {
  top: 120px;
  left: 169px;
  width: 1400px;
  height: 500px;
  border-radius: 6%;
}

.result:first-of-type {
  width: 12px;
  opacity: 0;
}
.result:last-of-type {
  opacity: 0;
}
</style>
