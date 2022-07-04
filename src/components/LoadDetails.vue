<template>
  <div class="info">
    <img
      class="image"
      v-if="isReady"
      :src="`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`"
    />
     <div class="movieDetails">
      <h1>{{ details.title }}</h1>
      <h4 v-for="detail in details.genres" :key="detail.id">{{ detail.name }} | </h4>
       <h5>{{ details.overview }}</h5>
   </div>
  </div>
  <!-- <the-tabs></the-tabs> -->
  <load-actors></load-actors>
  </template>
<script>
import { mapGetters } from 'vuex'
import LoadActors from '../components/LoadActors.vue'

export default {
  components: { LoadActors },
  props: {
    id: {
      type: String
    },
    isMovie: {
      type: String,
      required: true,
      default: 'true'
    }
  },
  data () {
    return {
      details: [],
      isReady: false

    }
  },
  computed: {
    ...mapGetters('movies', ['loadDetails']),
    ...mapGetters('series', ['seriesDetails'])

  },
  methods: {
    async theDetails () {
      const path = this.isMovie
        ? 'movies/loadMovieDetails'
        : 'series/loadSeriesDetails'

      await this.$store.dispatch(path, {
        id: this.id
      })
      this.details = this.isMovie ? this.loadDetails : this.seriesDetails

      this.isReady = true
    }

  },
  created () {
    this.theDetails()
  }
}
</script>

<style scoped>

.image {
  float: left;
  margin-right: 5%;
}
.movieDetails h1{
  margin-top: 5%;
  margin-right: 5%;
 font: normal normal 600 58px/70px SF Pro Display;
letter-spacing: 0.23px;
color: #EEEEEE;
opacity: 1;
}

.movieDetails h4{
 font: normal normal medium 44px/53px SF Pro Display;
letter-spacing: 0.18px;
color: #EEEEEE;
opacity: 1;
font-size: 22px;
display:inline
}

.movieDetails h5{
  font: normal normal 300 25px/30px SF Pro Text;
letter-spacing: 0.1px;
color: #EEEEEE;
opacity: 1;
font-size: 19px;
height: 150px;
}
</style>
