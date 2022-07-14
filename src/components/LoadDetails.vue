<template>
  <div class="info">
    <img
      class="image"
      v-if="isReady"
      :src="`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`"
    />
    <div class="movieDetails">
      <h1>{{ details.title }}</h1>
      <h4 v-for="detail in details.genres" :key="detail.id">
        {{ detail.name }} |
      </h4>
      <h5>{{ details.overview }}</h5>
    </div>
  </div>
  <div class="container">
    <br />

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('cast')"
          :class="{ active: isActive('cast') }"
          href="#cast"
          >Cast</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('pictures')"
          :class="{ active: isActive('pictures') }"
          href="#pictures"
          >Pictures</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('similar')"
          :class="{ active: isActive('similar') }"
          href="#similar"
          >Similar</a
        >
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('cast') }"
        id="cast"
      >
        <div v-if="actorsDetails && actorsDetails.length>0" class="cast">
          <div
            v-for="actor in actorsDetails.slice(0, 5)"
            class="images"
            :key="actor.id"
          >
            <img
              :src="actor.profile_path ? imgUrl + actor.profile_path : noimage"
            />
             <div class="actor-details">
              {{ actor.name }} {{ actor.character }}
            </div>
          </div>
        </div>
        <div class="noCast" v-else>There's no cast for this production </div>
      </div>

    <div
      class="tab-pane fade"
      :class="{ 'active show': isActive('pictures') }"
      id="pictures"
    >
      <div class="pics">
        <div
          v-for="image in loadImages.slice(0, 5)"
          class="images"
          :key="image.id"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${image.file_path}`" />
        </div>
      </div>
    </div>

    <div
      class="tab-pane fade"
      :class="{ 'active show': isActive('similar') }"
      id="similar"
    >
      <div class="similar">
        <div
          v-for="similar in similarMoviesOrSeries.slice(0, 5)"
          class="images"
          :key="similar.id"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${similar.poster_path}`"
          />

        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      details: [],
      isReady: false,
      actorsDetails: [],
      loadImages: [],
      similarMoviesOrSeries: [],
      activeItem: 'cast',
      imgUrl: 'https://image.tmdb.org/t/p/w500/',
      noimage: '../assets/noimage.png'
    }
  },
  computed: {
    ...mapGetters('movies', [
      'loadDetails',
      'actorsInfo',
      'loadImage',
      'similarMovies'
    ]),
    ...mapGetters('series', [
      'seriesDetails',
      'actorsTvInfo',
      'loadTvImage',
      'similarSeries'
    ])

  },
  methods: {
    async theDetails () {
      const isMovie = this.$route.meta.isMovie
      const path = isMovie
        ? 'movies/fetchMovieDetails'
        : 'series/fetchSerialDetails'
      await this.$store.dispatch(path, {
        id: this.id
      })
      this.details = isMovie ? this.loadDetails : this.seriesDetails
      this.actorsDetails = isMovie ? this.actorsInfo : this.actorsTvInfo
      this.loadImages = isMovie ? this.loadImage : this.loadTvImage
      this.similarMoviesOrSeries = isMovie
        ? this.similarMovies
        : this.similarSeries
      this.isReady = true
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }

  },
  created () {
    this.theDetails()
  }
}
</script>

<style scoped>

.info{
   display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}

.image {
  float: left;
  margin-right: 5%;
  margin-left: 2%;
}
.movieDetails h1 {
  margin-top: 5%;
  margin-right: 5%;
  font: normal normal 600 58px/70px SF Pro Display;
  letter-spacing: 0.33px;
  color: #eeeeee;
  opacity: 1;
  height: auto;
}

.movieDetails h4 {
  font: normal normal medium 44px/53px SF Pro Display;
  letter-spacing: 0.18px;
  color: #eeeeee;
  opacity: 1;
  font-size: 22px;
  height: auto;
  flex-direction: column;
}

.movieDetails h5 {
  font: normal normal 300 25px/30px SF Pro Text;
  letter-spacing: 0.1px;
  color: #eeeeee;
  opacity: 1;
  font-size: 19px;
  height: auto;
}
.cast {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}
.images {
  margin: 30px;
  width: auto;
  background: #151f2e 0% 0% no-repeat padding-box;
}

.images img {
  width: 170px;
  height: 170px;
  border-radius: 6%;
}

.actor-details {
  padding: 15px 20px;
}
.container {
  padding: 6px 6px;
}
.similar {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}
.pics {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: auto;
}
.noCast{
   display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
   width: 100%;
  height: 130px;
  font-size: 25px;
  }

</style>
