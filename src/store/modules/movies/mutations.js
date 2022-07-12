export default {
  setMovies (state, results) {
    state.results = results
  },
  setTopMovies (state, topMovies) {
    state.topMovies = topMovies
  },

  setSearch (state, searchResults) {
    state.searchResults = searchResults
  },
  loadDetails (state, payload) {
    state.loadDetails = payload
  },

  setActors (state, payload) {
    state.actorsInfo = payload
  },
  setImages (state, payload) {
    state.loadImage = payload
  },
  setSimilarMovies (state, payload) {
    state.similarMovies = payload
  }

}
