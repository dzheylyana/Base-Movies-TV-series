
<template>
    <div v-for="tvSerie in tvSeries " class="tvSeries" :key="tvSerie.id">
     <img :src="`https://image.tmdb.org/t/p/w500/${tvSerie.backdrop_path?tvSerie.backdrop_path:tvSerie.poster_path}`"/>
     <h2>{{tvSerie.original_name}}</h2>
     </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('requests', ['tvSeries'])
  },
  methods: {
    ...mapActions('requests', ['fetchTvSeries'])

  },
  created () {
    this.fetchTvSeries()
  }

}
</script>
