
<template>
      <div v-for="actor in actorsDetails" class="images" :key="actor.id"
      :profile_path="actor.profile_path"> <img
      class="image"
      v-if="isReady"
     :src="`https://image.tmdb.org/t/p/w500/${actor.profile_path}`"
    />
      </div>

 </template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    id: {
      type: String
    },
    isMovie: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data: function () {
    return {
      actorsDetails: [],
      isReady: false
    }
  },
  computed: {
    ...mapGetters('movies', ['actorsInfo']),
    ...mapGetters('series', ['actorsTvInfo'])

  },
  methods: {

    async loadActors () {
      const path = this.isMovie
        ? 'movies/loadActors'
        : 'series/loadTvActors'

      await this.$store.dispatch(path, {
        id: this.id
      })
      this.actorsDetails = this.isMovie ? this.actorsInfo : this.actorsTvInfo
      this.isReady = true
    }

  },
  created () {
    this.loadActors()
  }
}

</script>
