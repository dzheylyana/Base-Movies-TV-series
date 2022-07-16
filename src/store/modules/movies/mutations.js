export default {
  SET_MOVIES (state, results) {
    state.results = results
  },
  SET_TOP_MOVIES (state, topMovies) {
    state.topMovies = topMovies
  },

  SET_SEARCH (state, payload) {
    state.searchResults = payload
  },
  SET_DETAILS (state, payload) {
    state.movieDetails = payload
  },

  SET_ACTORS (state, payload) {
    state.actorsInfo = payload
  },
  SET_IMAGES (state, payload) {
    state.movieImage = payload
  },
  SET_SIMILAR_MOVIES (state, payload) {
    state.similarMovies = payload
  }

}
