export default {
  setSeries (state, tvSeries) {
    state.tvSeries = tvSeries
  },
  seriesDetails (state, payload) {
    state.seriesDetails = payload
  },
  setTvActors (state, payload) {
    state.actorsTvInfo = payload
  }
}
