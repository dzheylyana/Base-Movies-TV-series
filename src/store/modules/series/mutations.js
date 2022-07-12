export default {
  setSeries (state, tvSeries) {
    state.tvSeries = tvSeries
  },
  seriesDetails (state, payload) {
    state.seriesDetails = payload
  },
  setTvActors (state, payload) {
    state.actorsTvInfo = payload
  },
  setImages (state, payload) {
    state.loadTvImage = payload
  },

  setSimilarSeries (state, payload) {
    state.similarSeries = payload
  }
}
