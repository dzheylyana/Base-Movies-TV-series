<template>
<div class="container">
  <div
    v-for="searchResult in searchRes"
    class="result"
    :key="searchResult.id"
  >
  <router-link :to="{name: 'isMovie' ? 'details' : 'tvdetails', params: { id: searchResult.id, isMovie } }">
   <h2>
    {{
      searchResult.orginal_title
        ? searchResult.orginal_title
        : searchResult.original_name
        ? searchResult.original_name
        : searchResult.name
        ? searchResult.name
        : "no name"
    }}
  </h2>
  <img :src="`https://image.tmdb.org/t/p/w500/${searchResult.backdrop_path}`" />
   </router-link>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      searchRes: []
    }
  },

  props: ['query'],
  computed: {
    ...mapGetters('movies', ['searchResults'])
  },
  methods: {
    async resultsFromSearch () {
      await this.$store.dispatch('movies/fetchSearchResults', {
        query: this.query
      })
      this.searchRes = this.searchResults
      console.log(this.searchResults)
      this.isReady = true
    }
  },
  created () {
    this.resultsFromSearch()
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.result{
   background-color: #0c1930;
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
  flex-basis: 20%;
  }
.result img{
 width: 200px;
  border-radius: 10px;
  height: 150px;
  }
.result h2{
 color: #ffffff;
 font-size: 18px;
 }
a{
  text-decoration: none;
}
</style>
