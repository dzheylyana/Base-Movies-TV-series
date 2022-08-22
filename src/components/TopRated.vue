<template>
  <div class="top-movie-controls">
    <div class="textControls">
      <h5>See the {{ title }}</h5>
    </div>
    <i class="fa fa-angle-left" @click="previous"></i>
    <i class="fa fa-angle-right" @click="next"></i>
  </div>
  <transition-group class="carousel" tag="div" name="carousel">
    <div v-for="detail in topRated" class="images" :key="detail.id">
      <router-link
        :to="{ name: routerLinkName, params: { id: detail.id, isMovie } }"
      >
        <img :src="imgUrl + detail.backdrop_path ?? detail.poster_path"
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
      type: [],
      startPage: 1,
      currentPage: 1,
      imgUrl: 'https://image.tmdb.org/t/p/w500/'
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
  watch: {
    currentPage (newPage) {
      this.loadTopRated(newPage)
    }
  },
  methods: {
    async loadTopRated (value = this.currentPage) {
      const path = this.isMovie
        ? 'movies/fetchTopMovies'
        : 'series/fetchTvSeries'

      await this.$store.dispatch(path, {
        currentPage: value
      })

      this.topRated = this.isMovie ? this.topMovies : this.tvSeries

      this.isReady = true
    },

    next () { // the decision is to stop in page 10, because it's beta version
      if (this.currentPage <= 10) {
        this.currentPage++
      }
    },
    previous () {
      if (this.currentPage <= this.startPage) {
        return
      }
      this.currentPage--
    }
  },

  mounted () {
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
}

.images img {
  width: 300px;
  height: 300px;
  border-radius: 6%;
}
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.carousel-enter,
.carousel-leave-to {
  opacity: 0;
}
</style>
