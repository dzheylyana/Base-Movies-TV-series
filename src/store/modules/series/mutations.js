export default {
  SET_SERIES (state, tvSeries) {
    state.tvSeries = tvSeries
  },
  SET_SERIES_DETAILS (state, payload) {
    state.seriesDetails = payload
  },
  SET_TV_ACTORS (state, payload) {
    state.actorsTvInfo = payload
  },
  SET_TV_IMAGE (state, payload) {
    state.tvImage = payload
  },

  SET_SIMILAR_SERIES (state, payload) {
    state.similarSeries = payload
  }
}
