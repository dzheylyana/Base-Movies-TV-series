export default {
  async fetchTvSeries (context, payload) {
    const seriesRes = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=ee88adc573d83253683533632b391538&page=${payload.currentPage}`
    )
    if (!seriesRes.ok) throw Error
    const dataWithSeries = await seriesRes.json()
    context.commit('SET_SERIES', dataWithSeries.results)
  },
  async loadSeriesDetails (context, payload) {
    const seriesResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}?api_key=ee88adc573d83253683533632b391538`
    )
    if (!seriesResponse.ok) throw Error
    const dataSeriesResponse = await seriesResponse.json()
    context.commit('SET_SERIES_DETAILS', dataSeriesResponse)
  },
  async loadTvActors (context, payload) {
    const actorstvRes = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}/credits?api_key=ee88adc573d83253683533632b391538`
    )
    if (!actorstvRes.ok) throw Error
    const dataWithTvActors = await actorstvRes.json()
    context.commit('SET_TV_ACTORS', dataWithTvActors.cast)
  },
  async loadSeriesImages (context, payload) {
    const imagesRes = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}/images?api_key=ee88adc573d83253683533632b391538`
    )
    if (!imagesRes.ok) throw Error
    const dataWithImages = await imagesRes.json()
    context.commit('SET_TV_IMAGE', dataWithImages.backdrops
    )
  },
  async loadSimilarSeries (context, payload) {
    const similarSerieRes = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}/similar?api_key=ee88adc573d83253683533632b391538`
    )
    if (!similarSerieRes.ok) throw Error
    const similarSeries = await similarSerieRes.json()
    context.commit('SET_SIMILAR_SERIES', similarSeries.results
    )
  },
  fetchSerialDetails: ({ dispatch }, payload) => {
    const list = [
      dispatch('loadSeriesDetails', payload),
      dispatch('loadTvActors', payload),
      dispatch('loadSeriesImages', payload),
      dispatch('loadSimilarSeries', payload)

    ]
    return Promise.allSettled(list)
  }

}
