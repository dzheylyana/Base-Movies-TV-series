import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state () {
    return {
      results: [],
      topMovies: [],
      searchResults: [],
      movieDetails: [],
      isReady: false,
      actorsInfo: [],
      movieImage: [],
      similarMovies: []

    }
  },
  mutations,
  actions,
  getters
}
