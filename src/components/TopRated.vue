<template>
  <div class="top-movie-controls">
    <div class="textControls">
      <h5>See the {{ title }}</h5>
    </div>
    <i class="fa fa-angle-left" @click="previous"></i>
    <i class="fa fa-angle-right" @click="next"></i>
  </div>
      <transition-group class="carousel" tag="div">
    <div v-for="detail in topRated" class="images" :key="detail.id">
        <router-link :to="{ name: routerLinkName, params: { id: detail.id } }">
          <img :src="`https://image.tmdb.org/t/p/w500/${detail.backdrop_path ?? detail.poster_path }`"
        /></router-link>
        <h2>{{ detail.orginal_title }}</h2>

    </div>
</transition-group>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    isMovie: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data () {
    return {
      topRated: [],
      isReady: false,
      type: []
    }
  },
  computed: {
    routerLinkName () {
      return this.isMovie ? 'details' : 'tvdetails'
    },
    ...mapGetters('movies', ['topMovies']),
    ...mapGetters('series', ['tvSeries']),
    title () {
      return this.isMovie ? 'Top Movies' : 'Top tv series'
    }
  },
  methods: {

    async loadTopRated () {
      const path = this.isMovie
        ? 'movies/fetchTopMovies'
        : 'series/fetchTvSeries'

      await this.$store.dispatch(path, {
        id: this.id
      })

      this.topRated = this.isMovie ? this.topMovies : this.tvSeries

      this.isReady = true
    },

    next () {
      this.type = this.isMovie ? this.topMovies : this.tvSeries

      const Mfirst = this.type.shift()
      this.type = this.type.concat(Mfirst)
    },
    previous () {
      const Mlast = this.type.pop()
      this.type = [Mlast].concat(this.topMovies)
    }
  },
  created () {
    this.loadTopRated()
  }
}
</script>

<style scoped>
.textControls {
  text-align: left;
  margin-bottom: -1.5rem;
  font-size: 32px;
  margin-left: 140px;
}

.top-movie-controls {
  text-align: right;
  margin-top: 85px;
}
i.fa.fa-angle-right::before {
  font-size: 23px;
  margin-right: 168px;
}

i.fa.fa-angle-left::before {
  font-size: 23px;
  margin-right: 45px;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}
.images {
  flex: 0 20em;
  height: 20em;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.images img {
  width: 300px;
  height: 300px;
  border-radius: 6%;
}

.result:first-of-type {
  opacity: 0;
}
.result:last-of-type {
  opacity: 0;
}
</style>
